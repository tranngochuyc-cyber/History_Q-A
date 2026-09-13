import { mkdir, writeFile, readFile } from "node:fs/promises";
import sharp from "sharp";
const records = {
  "apollo-11": "Apollo_11",
  constantinople: "Fall_of_Constantinople",
  "meiji-restoration": "Meiji_Restoration",
  "dien-bien-phu": "Battle_of_Dien_Bien_Phu",
  "august-revolution": "August_Revolution",
  "end-vietnam-war": "Fall_of_Saigon",
  "qin-unification": "Qin_Shi_Huang",
  "magna-carta": "Magna_Carta",
  "black-death": "Black_Death",
  reformation: "Reformation",
  "atlantic-voyage": "Voyages_of_Christopher_Columbus",
  "american-independence": "United_States_Declaration_of_Independence",
  "french-revolution": "French_Revolution",
  "haitian-independence": "Haitian_Revolution",
  "brazil-independence": "Independence_of_Brazil",
  "suez-canal": "Suez_Canal",
  "nz-suffrage": "Kate_Sheppard",
  "world-war-one": "World_War_I",
  "russian-revolution": "Russian_Revolution",
  versailles: "Treaty_of_Versailles",
  penicillin: "Alexander_Fleming",
  "d-day": "Normandy_landings",
  hiroshima: "Atomic_bombings_of_Hiroshima_and_Nagasaki",
  "indian-independence": "Indian_independence_movement",
  "korean-war": "Korean_War",
  "suez-crisis": "Suez_Crisis",
  "ghana-independence": "Kwame_Nkrumah",
  "cuban-missile-crisis": "Cuban_Missile_Crisis",
  chernobyl: "Chernobyl_disaster",
  "berlin-wall": "Fall_of_the_Berlin_Wall",
  "mandela-president": "Nelson_Mandela",
  "great-wave": "The_Great_Wave_off_Kanagawa",
  "rosetta-stone": "Rosetta_Stone",
  "roman-republic": "Assassination_of_Julius_Caesar",
  "mongol-empire": "Genghis_Khan",
  "australian-federation": "Federation_of_Australia",
};
const headers = {
  "User-Agent": "ChronoQuest/1.0 (historical educational image catalog)",
};
const imageOverrides = {
  constantinople: "Benjamin-Constant-The Entry of Mahomet II into Constantinople-1876.jpg",
  "suez-canal": "Berard-Suez.jpg",
};
const clean = (s) =>
  (s ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
await mkdir("public/images", { recursive: true });
let output = {};
try {
  output = JSON.parse(await readFile("lib/data/image-catalog.json", "utf8"));
} catch {}
async function limitedFetch(url) {
  for (let attempt = 0; attempt < 3; attempt++) {
    await new Promise((resolve) => setTimeout(resolve, 2200));
    const response = await fetch(url, { headers });
    if (response.status !== 429) return response;
    const seconds = Math.max(
      10,
      Number(response.headers.get("retry-after")) || 10,
    );
    console.log("Respecting image service retry delay.");
    await new Promise((resolve) => setTimeout(resolve, seconds * 1000));
  }
  throw new Error("Image service rate limit; retry later");
}
for (const [id, page] of Object.entries(records)) {
  if (output[id] && (!imageOverrides[id] || decodeURIComponent(output[id].source).endsWith(imageOverrides[id]))) continue;
  try {
    const response = await limitedFetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${id === "reformation" ? "Martin_Luther" : page}`,
    );
    if (!response.ok) throw new Error(`summary ${response.status}`);
    const summary = await response.json();
    const original = summary.originalimage?.source?.split("?")[0];
    if (!original) throw new Error("No image");
    if (!original.includes("/wikipedia/commons/"))
      throw new Error("Non-Commons image: review required");
    const filename = imageOverrides[id] ?? decodeURIComponent(
      original.split("/").at(original.includes("/thumb/") ? -2 : -1),
    );
    const api =
      "https://commons.wikimedia.org/w/api.php?" +
      new URLSearchParams({
        action: "query",
        format: "json",
        redirects: "1",
        titles: `File:${filename}`,
        prop: "imageinfo",
        iiprop: "extmetadata|url",
        iiurlwidth: "1000",
      });
    const metaResponse = await limitedFetch(api);
    const meta = await metaResponse.json();
    const info = Object.values(meta.query?.pages ?? {})[0]?.imageinfo?.[0];
    if (!info) throw new Error(`No license metadata: ${filename}`);
    const license = clean(info.extmetadata?.LicenseShortName?.value),
      artist = clean(info.extmetadata?.Artist?.value),
      description = clean(info.extmetadata?.ImageDescription?.value);
    if (!/CC|public domain|PD|GFDL|OGL/i.test(license))
      throw new Error(`Review license: ${license}`);
    const imageResponse = await limitedFetch(info.thumburl ?? original);
    if (!imageResponse.ok) throw new Error(`image ${imageResponse.status}`);
    const buffer = Buffer.from(await imageResponse.arrayBuffer());
    await sharp(buffer)
      .resize({
        width: 1200,
        height: 900,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 82 })
      .toFile(`public/images/${id}.webp`);
    output[id] = {
      url: `/images/${id}.webp`,
      alt: (description || summary.description || summary.title).slice(0, 250),
      credit: `${artist.slice(0, 150)} · ${license}`,
      source:
        info.descriptionurl ??
        `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`,
      original: info.url ?? original,
      license,
    };
    await writeFile(
      "lib/data/image-catalog.json",
      JSON.stringify(output, null, 2) + "\n",
    );
    console.log(`${id}: saved (${license})`);
  } catch (e) {
    console.log(`${id}: FAILED ${e.message}`);
  }
}
await writeFile(
  "lib/data/image-catalog.json",
  JSON.stringify(output, null, 2) + "\n",
);
console.log(
  `Saved ${Object.keys(output).length}/${Object.keys(records).length} images.`,
);
