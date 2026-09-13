import type { HistoricalEvent, Question } from "../types";
import imageCatalog from "./image-catalog.json";
type Seed = {
  id: string;
  title: string;
  year: number;
  end?: number;
  date?: string;
  countries: string[];
  categories: string[];
  location: string;
  teaser: string;
  causes: string;
  happened: string;
  consequences: string;
  figures: string[];
  question: string;
  options: string[];
  statement: string;
  truth: boolean;
  source: string;
  publisher?: string;
  tags?: string[];
};
const seeds: Seed[] = [
  {
    id: "apollo-11",
    title: "Apollo 11: The Moon Landing",
    year: 1969,
    date: "1969-07-20",
    countries: ["US"],
    categories: ["Exploration", "Science", "Technology"],
    location: "Sea of Tranquility, the Moon",
    teaser: "Humanity steps beyond its home planet.",
    causes:
      "Cold War competition pushed the United States and Soviet Union to demonstrate their scientific and technological capabilities in space. An American commitment to a crewed lunar landing demanded years of engineering and testing.",
    happened:
      "Apollo 11 carried Neil Armstrong, Buzz Aldrin and Michael Collins to the Moon. Armstrong and Aldrin descended in Eagle while Collins remained in lunar orbit. The landing crew explored the surface and collected samples before returning safely to Earth.",
    consequences:
      "The mission expanded lunar science and became an enduring symbol of collective technical achievement. It also revealed the extraordinary resources required to send people to another world.",
    figures: ["Neil Armstrong", "Buzz Aldrin", "Michael Collins"],
    question:
      "Which astronaut remained in lunar orbit while the other two landed?",
    options: ["Michael Collins", "Yuri Gagarin", "Alan Shepard", "John Glenn"],
    statement: "All three Apollo 11 astronauts walked on the Moon.",
    truth: false,
    source: "https://www.nasa.gov/mission/apollo-11/",
    publisher: "NASA",
    tags: ["Cold War"],
  },
  {
    id: "constantinople",
    title: "The Fall of Constantinople",
    year: 1453,
    date: "1453-05-29",
    countries: ["TR", "GR"],
    categories: ["War", "Politics"],
    location: "Constantinople, present-day Istanbul",
    teaser: "An imperial capital falls. A new chapter begins.",
    causes:
      "The Byzantine Empire had contracted to a small remnant of its former territory. Ottoman power surrounded its capital, whose walls had long protected a strategic meeting point between Europe and Asia.",
    happened:
      "Sultan Mehmed II brought an Ottoman army and powerful artillery against Constantinople. After a siege, his forces entered the city. The Byzantine emperor Constantine XI died during the fighting, and the surviving imperial government collapsed.",
    consequences:
      "The conquest ended the Byzantine Empire and established the city as the center of Ottoman power. Its political and religious landscape changed, while its position as a major crossroads endured.",
    figures: ["Mehmed II", "Constantine XI"],
    question: "Which Ottoman sultan captured Constantinople?",
    options: ["Mehmed II", "Suleiman I", "Osman I", "Selim III"],
    statement: "The conquest ended the Byzantine Empire.",
    truth: true,
    source: "https://www.britannica.com/event/Fall-of-Constantinople-1453",
  },
  {
    id: "meiji-restoration",
    title: "The Meiji Restoration",
    year: 1868,
    countries: ["JP"],
    categories: ["Politics", "Social Change"],
    location: "Japan",
    teaser: "An island nation remakes its place in the world.",
    causes:
      "Foreign pressure exposed the weaknesses of the Tokugawa political order. Reformers and powerful domains sought a new system capable of strengthening Japan in a world increasingly shaped by imperial competition.",
    happened:
      "A coalition overturned the shogunate and restored authority in the name of Emperor Meiji. The new leadership centralized government and pursued wide-ranging changes to military organization, education and industry. These transformations unfolded over decades rather than in a single decree.",
    consequences:
      "Japan developed into a modern industrial and imperial power. The reforms opened new opportunities while disrupting inherited social status and generating resistance among groups whose privileges were removed.",
    figures: ["Emperor Meiji", "Saigō Takamori"],
    question: "Which government lost power during the restoration?",
    options: [
      "The Tokugawa shogunate",
      "The Kamakura shogunate",
      "The Qing government",
      "The Ming government",
    ],
    statement: "The restoration strengthened the Tokugawa shogunate.",
    truth: false,
    source: "https://www.britannica.com/event/Meiji-Restoration",
  },
  {
    id: "dien-bien-phu",
    title: "The Battle of Điện Biên Phủ",
    year: 1954,
    date: "1954-05-07",
    countries: ["VN", "FR"],
    categories: ["War", "Revolution"],
    location: "Điện Biên Phủ, Vietnam",
    teaser: "A valley battle reshapes the end of an empire.",
    causes:
      "France sought to maintain its position in Indochina against a Vietnamese independence movement led by the Việt Minh. French commanders established a fortified base in a remote valley, expecting to draw their opponents into a decisive confrontation.",
    happened:
      "Việt Minh forces under Võ Nguyên Giáp moved artillery into surrounding positions and subjected the garrison to a sustained siege. French supply routes came under pressure, and the defenders eventually surrendered after weeks of fighting.",
    consequences:
      "The defeat accelerated the end of French colonial rule in Indochina. Negotiations at Geneva produced a temporary division of Vietnam, leaving major political disputes unresolved and setting the stage for further conflict.",
    figures: ["Võ Nguyên Giáp", "Henri Navarre"],
    question: "Who commanded Việt Minh forces at Điện Biên Phủ?",
    options: ["Võ Nguyên Giáp", "Ngô Đình Diệm", "Bảo Đại", "Phan Bội Châu"],
    statement: "The battle took place during the First Indochina War.",
    truth: true,
    source:
      "https://www.cheminsdememoire.gouv.fr/fr/la-bataille-de-dien-bien-phu",
    publisher: "French Ministry of the Armed Forces",
  },
  {
    id: "august-revolution",
    title: "The August Revolution",
    year: 1945,
    countries: ["VN"],
    categories: ["Revolution", "Politics"],
    location: "Vietnam",
    teaser: "A struggle for independence reaches a turning point.",
    causes:
      "Japanese occupation and the disruption of French colonial authority created a volatile situation in Vietnam. The approaching end of the Second World War gave independence movements an opportunity to challenge the existing order.",
    happened:
      "The Việt Minh organized uprisings and took control in Hanoi and other cities as Japanese power collapsed. Emperor Bảo Đại abdicated. Hồ Chí Minh subsequently proclaimed the independence of the Democratic Republic of Vietnam in Hanoi.",
    consequences:
      "The revolution established a new revolutionary government, but did not settle the question of sovereignty. French efforts to return and competing political claims contributed to the war that followed.",
    figures: ["Hồ Chí Minh", "Bảo Đại"],
    question: "Which organization led the August Revolution?",
    options: [
      "The Việt Minh",
      "The East India Company",
      "The Kuomintang",
      "The League of Nations",
    ],
    statement: "Bảo Đại abdicated during the revolutionary transition.",
    truth: true,
    source:
      "https://www.britannica.com/place/Vietnam/World-War-II-and-independence",
  },
  {
    id: "end-vietnam-war",
    title: "The End of the Vietnam War",
    year: 1975,
    date: "1975-04-30",
    countries: ["VN", "US"],
    categories: ["War", "Politics"],
    location: "Saigon, Vietnam",
    teaser: "A long war reaches its final day in Saigon.",
    causes:
      "Years of conflict had divided Vietnam and drawn in extensive foreign intervention. After the withdrawal of American combat forces, fighting between North and South Vietnam continued despite the Paris peace agreement.",
    happened:
      "North Vietnamese forces advanced rapidly through the South and entered Saigon. The South Vietnamese government surrendered, while evacuations removed many Americans and Vietnamese from the city. The event is also known as the Fall of Saigon or the Liberation of Saigon.",
    consequences:
      "The war ended and formal national reunification followed. Reconstruction, displacement and the movement of refugees shaped the lives of millions, both within Vietnam and across a wider diaspora.",
    figures: ["Dương Văn Minh", "Văn Tiến Dũng"],
    question: "Which city was the South Vietnamese capital?",
    options: ["Saigon", "Hanoi", "Huế", "Da Nang"],
    statement:
      "The South Vietnamese government surrendered when northern forces entered Saigon.",
    truth: true,
    source: "https://www.britannica.com/event/Vietnam-War",
  },
  {
    id: "qin-unification",
    title: "Qin Unifies China",
    year: -221,
    countries: ["CN"],
    categories: ["Politics", "War"],
    location: "China",
    teaser: "Rival kingdoms give way to an imperial state.",
    causes:
      "The Warring States competed for territory and survival over generations. Qin developed a strong army and centralized institutions, enabling its rulers to defeat neighboring states and expand their authority.",
    happened:
      "The Qin king completed the conquest of the major rival kingdoms and adopted the title of first emperor. His government pursued common standards for weights, measures and writing, and reorganized administration under imperial control.",
    consequences:
      "Although the dynasty was short-lived, it created a powerful precedent for a unified imperial state. Its coercive policies and heavy demands also provoked resistance, and the succeeding Han dynasty adapted many of its institutions.",
    figures: ["Qin Shi Huang", "Li Si"],
    question: "What title is associated with Qin Shi Huang?",
    options: ["First Emperor", "Great Khan", "Shogun", "Pharaoh"],
    statement: "Qin unification brought an end to the Warring States period.",
    truth: true,
    source: "https://www.britannica.com/topic/Qin-dynasty",
  },
  {
    id: "magna-carta",
    title: "Magna Carta",
    year: 1215,
    date: "1215-06-15",
    countries: ["GB"],
    categories: ["Politics", "Social Change"],
    location: "Runnymede, England",
    teaser: "A king is confronted with the limits of power.",
    causes:
      "Military failures, taxation and conflict with powerful barons weakened King John of England. Rebellious nobles pressed the king to recognize constraints on royal conduct and protect established rights.",
    happened:
      "John agreed to a charter at Runnymede. Many provisions addressed specific feudal grievances, rather than universal rights. The initial settlement soon failed, but later rulers reissued revised versions of the charter.",
    consequences:
      "Magna Carta acquired a much broader symbolic meaning over subsequent centuries. Its association with lawful judgment and limitations on arbitrary rule influenced constitutional arguments far beyond medieval England, even though its original protections were far narrower than modern democratic rights.",
    figures: ["King John"],
    question: "Which English king agreed to the original Magna Carta?",
    options: ["John", "Henry VIII", "William I", "Charles II"],
    statement: "The original charter immediately gave every adult the vote.",
    truth: false,
    source: "https://www.britannica.com/topic/Magna-Carta",
  },
  {
    id: "black-death",
    title: "The Black Death",
    year: 1347,
    end: 1351,
    countries: ["IT", "FR", "GB"],
    categories: ["Disaster", "Social Change"],
    location: "Europe and the Mediterranean",
    teaser: "A pandemic transforms the fabric of society.",
    causes:
      "Trade and travel connected distant regions through maritime and overland routes. Plague spread along these networks into the Mediterranean and across Europe, reaching communities with little understanding of its biological cause.",
    happened:
      "The pandemic killed a vast number of people and disrupted households, towns, commerce and religious life. Its course varied by region, and later outbreaks continued for centuries. Persecution of minority communities accompanied the crisis in some places.",
    consequences:
      "Severe population loss changed labor relations and economic life. Surviving workers sometimes gained bargaining power, although authorities attempted to preserve existing hierarchies. The disaster left a lasting imprint on art, religion and collective memory.",
    figures: [],
    question: "Which disease is associated with the Black Death?",
    options: ["Plague", "Smallpox", "Influenza", "Cholera"],
    statement: "The Black Death had major effects on European labor markets.",
    truth: true,
    source: "https://www.britannica.com/event/Black-Death",
  },
  {
    id: "reformation",
    title: "The Protestant Reformation",
    year: 1517,
    countries: ["DE", "GB", "FR"],
    categories: ["Religion", "Social Change"],
    location: "Europe",
    teaser: "Debates about faith divide a continent.",
    causes:
      "Criticism of church practices and disputes over religious authority had deep roots. The circulation of printed texts allowed arguments about reform to reach an expanding audience across political boundaries.",
    happened:
      "Martin Luther challenged the sale of indulgences and developed arguments that brought him into conflict with the Catholic Church. Other reformers advanced their own teachings. Political rulers and urban communities became deeply involved in the resulting divisions.",
    consequences:
      "New Protestant churches emerged, and Catholic institutions undertook major reforms of their own. Religious conflict reshaped European politics, education and culture, while communities experienced both new forms of worship and prolonged episodes of violence.",
    figures: ["Martin Luther", "John Calvin"],
    question: "Which reformer is associated with the Ninety-five Theses?",
    options: [
      "Martin Luther",
      "Ignatius of Loyola",
      "Thomas Aquinas",
      "Francis of Assisi",
    ],
    statement: "Printing helped religious reform arguments circulate.",
    truth: true,
    source: "https://www.britannica.com/event/Reformation",
  },
  {
    id: "atlantic-voyage",
    title: "Columbus Crosses the Atlantic",
    year: 1492,
    date: "1492-10-12",
    countries: ["ES", "CU"],
    categories: ["Exploration"],
    location: "The Atlantic and Caribbean",
    teaser: "An ocean crossing links worlds—with profound costs.",
    causes:
      "European rulers and merchants sought profitable routes to Asian markets. Columbus proposed reaching Asia by sailing west and obtained support from the Spanish monarchy, underestimating the distance involved.",
    happened:
      "His expedition crossed the Atlantic and reached Caribbean islands already inhabited by Indigenous peoples. Columbus interpreted the lands through his expectation of reaching Asia. Further voyages and colonial expeditions followed the first crossing.",
    consequences:
      "Sustained contact connected the Americas, Europe and Africa in new ways. Exchanges of plants, animals and diseases transformed societies, while conquest, forced labor and epidemics caused catastrophic losses among Indigenous populations. The voyage was not the first human arrival in the Americas.",
    figures: ["Christopher Columbus", "Isabella I"],
    question: "Which monarchy sponsored Columbus’s first Atlantic voyage?",
    options: ["Spain", "Portugal", "England", "France"],
    statement: "The Caribbean islands were uninhabited when Columbus arrived.",
    truth: false,
    source: "https://www.britannica.com/biography/Christopher-Columbus",
  },
  {
    id: "american-independence",
    title: "The Declaration of Independence",
    year: 1776,
    date: "1776-07-04",
    countries: ["US", "GB"],
    categories: ["Politics", "Revolution"],
    location: "Philadelphia, North America",
    teaser: "Thirteen colonies declare a new political future.",
    causes:
      "Disputes over taxation, representation and imperial authority had escalated into armed conflict between Britain and its North American colonies. Colonial leaders increasingly argued that reconciliation was no longer possible.",
    happened:
      "The Continental Congress adopted a declaration explaining the decision of thirteen colonies to separate from Britain. Its language asserted natural rights and justified resistance to a government accused of violating them.",
    consequences:
      "Independence still had to be secured through war. The declaration became an influential political text, but its universal language stood in tension with slavery and the exclusion of women and Indigenous peoples from the rights claimed by many of its authors.",
    figures: ["Thomas Jefferson", "John Adams"],
    question: "How many colonies declared independence?",
    options: ["Thirteen", "Seven", "Twenty", "Fifty"],
    statement: "The declaration itself immediately ended the war with Britain.",
    truth: false,
    source: "https://www.archives.gov/founding-docs/declaration",
    publisher: "US National Archives",
  },
  {
    id: "french-revolution",
    title: "The French Revolution",
    year: 1789,
    end: 1799,
    countries: ["FR"],
    categories: ["Revolution", "Politics"],
    location: "France",
    teaser: "A monarchy falls beneath the weight of a new idea.",
    causes:
      "State debt, unequal privileges, food insecurity and political conflict undermined the French monarchy. The calling of the Estates-General opened a struggle over who could legitimately speak for the nation.",
    happened:
      "Revolutionaries challenged royal authority, abolished feudal privileges and proclaimed rights. The monarchy was eventually overthrown, and France became a republic. War, factional conflict and political repression accompanied repeated changes in government.",
    consequences:
      "The revolution transformed French institutions and influenced movements across the world. Its promises of liberty and equality coexisted with violence and exclusion. Napoleon’s rise brought a new concentration of power while preserving some revolutionary reforms.",
    figures: ["Louis XVI", "Maximilien Robespierre"],
    question:
      "Which Paris fortress was stormed in the revolution’s opening year?",
    options: [
      "The Bastille",
      "The Tower of London",
      "The Kremlin",
      "The Alhambra",
    ],
    statement: "France became a republic during the revolution.",
    truth: true,
    source: "https://www.britannica.com/event/French-Revolution",
  },
  {
    id: "haitian-independence",
    title: "Haitian Independence",
    year: 1804,
    date: "1804-01-01",
    countries: ["HT", "FR"],
    categories: ["Revolution", "Social Change"],
    location: "Haiti, Caribbean",
    teaser: "An uprising against slavery creates an independent state.",
    causes:
      "The French colony of Saint-Domingue depended on brutal plantation slavery. Revolutionary debates in France intersected with local conflicts over freedom, race and citizenship, while enslaved people fought for their own liberation.",
    happened:
      "A prolonged revolution defeated attempts to restore colonial control and slavery. Leaders including Toussaint Louverture and Jean-Jacques Dessalines shaped different phases of the struggle. Dessalines declared the independence of Haiti after French forces were defeated.",
    consequences:
      "Haiti became the first independent state founded through a successful revolt of enslaved people. Its achievement challenged the Atlantic slave system, but diplomatic isolation and later financial demands from France burdened the new country.",
    figures: ["Toussaint Louverture", "Jean-Jacques Dessalines"],
    question: "Haiti achieved independence from which colonial power?",
    options: ["France", "Spain", "Britain", "Portugal"],
    statement: "The revolution challenged plantation slavery.",
    truth: true,
    source: "https://www.britannica.com/event/Haitian-Revolution",
  },
  {
    id: "brazil-independence",
    title: "Brazil Declares Independence",
    year: 1822,
    date: "1822-09-07",
    countries: ["BR", "PT"],
    categories: ["Politics"],
    location: "Brazil",
    teaser: "A colony breaks away—and becomes an empire.",
    causes:
      "The Portuguese royal court’s relocation to Brazil during the Napoleonic wars had altered the balance within the empire. Efforts to restore Brazil’s subordinate status generated opposition among influential groups there.",
    happened:
      "Prince Pedro broke with Portugal and declared Brazil independent. He became emperor of the new state. The transition involved regional resistance and armed conflict, rather than a universally accepted decision on a single day.",
    consequences:
      "Brazil maintained a monarchy and much of its existing social hierarchy after independence. Slavery remained central to its economy for decades. The new empire preserved a large territory while facing continuing disputes over political power and regional autonomy.",
    figures: ["Pedro I"],
    question: "Who became Brazil’s first emperor?",
    options: ["Pedro I", "Simón Bolívar", "José de San Martín", "Napoleon III"],
    statement: "Brazil immediately became a republic at independence.",
    truth: false,
    source: "https://www.britannica.com/place/Brazil/Independence",
  },
  {
    id: "suez-canal",
    title: "The Opening of the Suez Canal",
    year: 1869,
    date: "1869-11-17",
    countries: ["EG", "FR", "GB"],
    categories: ["Technology", "Economy"],
    location: "Suez, Egypt",
    teaser: "A waterway redraws the routes of global trade.",
    causes:
      "Merchants and states sought a shorter maritime connection between Europe and Asia. A canal across the Isthmus of Suez promised to reduce the need for voyages around the southern tip of Africa.",
    happened:
      "A major engineering project connected the Mediterranean Sea with the Red Sea. Construction relied on extensive labor and international finance. The canal opened to shipping and became increasingly important to commercial and imperial networks.",
    consequences:
      "The route transformed patterns of travel and trade, while control over the canal became a major geopolitical issue. Egypt’s financial difficulties and foreign interests in the waterway contributed to growing European influence in the country.",
    figures: ["Ferdinand de Lesseps"],
    question: "Which two seas does the canal connect?",
    options: [
      "Mediterranean and Red Sea",
      "Black Sea and Baltic Sea",
      "Red Sea and Arabian Sea",
      "Mediterranean and Caspian Sea",
    ],
    statement:
      "The canal shortened the maritime journey between Europe and Asia.",
    truth: true,
    source: "https://www.britannica.com/topic/Suez-Canal",
  },
  {
    id: "nz-suffrage",
    title: "Women Win the Vote in New Zealand",
    year: 1893,
    date: "1893-09-19",
    countries: ["NZ"],
    categories: ["Social Change", "Politics"],
    location: "New Zealand",
    teaser: "A campaign of petitions changes parliamentary democracy.",
    causes:
      "Women’s organizations and suffrage campaigners challenged the exclusion of women from national elections. They gathered signatures, organized meetings and pressed politicians to recognize women as participants in public life.",
    happened:
      "New Zealand passed legislation granting women the right to vote in parliamentary elections. Kate Sheppard became a leading figure in the campaign. Women voted in the general election that followed, making New Zealand a landmark in the history of national suffrage.",
    consequences:
      "The achievement encouraged campaigners abroad. The right to stand for Parliament came later, and the vote did not remove every form of inequality. Political participation nevertheless expanded in a significant and enduring way.",
    figures: ["Kate Sheppard"],
    question:
      "Which campaigner is closely associated with New Zealand women’s suffrage?",
    options: [
      "Kate Sheppard",
      "Emmeline Pankhurst",
      "Susan B. Anthony",
      "Olympe de Gouges",
    ],
    statement:
      "Voting rights and the right to stand for Parliament were granted to women at the same time.",
    truth: false,
    source: "https://nzhistory.govt.nz/politics/womens-suffrage",
    publisher: "Manatū Taonga — NZ History",
  },
  {
    id: "world-war-one",
    title: "The First World War Begins",
    year: 1914,
    end: 1918,
    countries: ["GB", "FR", "DE", "RU"],
    categories: ["War", "Diplomacy"],
    location: "Europe and beyond",
    teaser: "A regional crisis becomes a global conflict.",
    causes:
      "Rival alliances, imperial competition and military planning made Europe vulnerable to a widening crisis. The assassination of Archduke Franz Ferdinand in Sarajevo triggered decisions that escalated confrontation rather than containing it.",
    happened:
      "Major European powers entered war, drawing on colonial resources and eventually involving countries across the world. Industrial weapons and mass mobilization produced immense destruction. Trench warfare dominated much of the Western Front, but the conflict took many forms elsewhere.",
    consequences:
      "The war toppled empires and redrew borders. Its human and economic costs reshaped politics, while the peace settlements left grievances that contributed to later instability. It did not resolve the rivalries that had helped bring it about.",
    figures: ["Franz Ferdinand", "Woodrow Wilson"],
    question: "Which assassination triggered the July Crisis?",
    options: [
      "Archduke Franz Ferdinand",
      "Abraham Lincoln",
      "Tsar Alexander II",
      "Jean-Paul Marat",
    ],
    statement: "The war was fought only in Europe.",
    truth: false,
    source: "https://www.iwm.org.uk/history/how-the-world-went-to-war-in-1914",
    publisher: "Imperial War Museums",
  },
  {
    id: "russian-revolution",
    title: "The Russian Revolutions",
    year: 1917,
    countries: ["RU"],
    categories: ["Revolution", "Politics"],
    location: "Russia",
    teaser: "An empire collapses; rival futures compete to replace it.",
    causes:
      "Military defeats, shortages and deep social tensions undermined confidence in the Russian monarchy. Workers, soldiers and political movements demanded change as the strain of the First World War intensified.",
    happened:
      "The February Revolution led to the abdication of Nicholas II. A provisional government shared an unstable political landscape with workers’ and soldiers’ councils. Later, the Bolsheviks seized power in the October Revolution, promising peace, land and bread.",
    consequences:
      "The revolutions were followed by civil war and the consolidation of Bolshevik rule. The Soviet state that emerged profoundly influenced twentieth-century politics, while the upheaval inflicted severe hardship and curtailed competing political visions.",
    figures: ["Vladimir Lenin", "Nicholas II"],
    question: "Which group seized power in the October Revolution?",
    options: [
      "The Bolsheviks",
      "The Jacobins",
      "The Chartists",
      "The Young Turks",
    ],
    statement: "Nicholas II abdicated during the revolutionary upheaval.",
    truth: true,
    source: "https://www.britannica.com/event/Russian-Revolution",
  },
  {
    id: "versailles",
    title: "The Treaty of Versailles",
    year: 1919,
    date: "1919-06-28",
    countries: ["FR", "DE", "GB", "US"],
    categories: ["Diplomacy", "Politics"],
    location: "Versailles, France",
    teaser: "A peace settlement carries the tensions of a shattered world.",
    causes:
      "The First World War left the victors seeking security, compensation and a new international order. Their priorities differed, and Germany was largely excluded from shaping the treaty imposed upon it.",
    happened:
      "The settlement placed territorial, military and financial obligations on Germany. It also included the covenant of the League of Nations. Political leaders presented the agreement as a foundation for peace, while critics questioned both its severity and its enforceability.",
    consequences:
      "The treaty generated lasting resentment in Germany and difficult disputes among other states. It was one factor in the unstable postwar order, but later conflict arose from multiple political and economic causes rather than from the treaty alone.",
    figures: ["Woodrow Wilson", "Georges Clemenceau", "David Lloyd George"],
    question:
      "Which international organization was associated with the peace settlement?",
    options: ["League of Nations", "United Nations", "NATO", "European Union"],
    statement:
      "Germany helped negotiate the treaty on equal terms with the principal victors.",
    truth: false,
    source: "https://www.britannica.com/event/Treaty-of-Versailles-1919",
  },
  {
    id: "penicillin",
    title: "The Discovery of Penicillin",
    year: 1928,
    countries: ["GB"],
    categories: ["Science", "Technology"],
    location: "London, United Kingdom",
    teaser: "An unexpected mold points toward a medical revolution.",
    causes:
      "Bacterial infections posed severe dangers before effective antibiotics were widely available. Researchers investigated microbes and substances that might prevent their growth without causing unacceptable harm to patients.",
    happened:
      "Alexander Fleming noticed that a mold contaminating a culture inhibited nearby bacteria. He identified the antibacterial substance associated with the mold. Later work by Howard Florey, Ernst Chain and others made penicillin into a practical treatment that could be produced at scale.",
    consequences:
      "Penicillin helped transform the treatment of bacterial infections. Its history demonstrates the distinction between an initial observation and a usable medicine, which required sustained collaborative research, clinical testing and industrial production.",
    figures: ["Alexander Fleming", "Howard Florey", "Ernst Chain"],
    question:
      "Who first observed the antibacterial effect associated with penicillin?",
    options: [
      "Alexander Fleming",
      "Louis Pasteur",
      "Charles Darwin",
      "Gregor Mendel",
    ],
    statement:
      "Fleming’s initial observation immediately made mass-produced penicillin available.",
    truth: false,
    source: "https://www.nobelprize.org/prizes/medicine/1945/summary/",
    publisher: "Nobel Prize",
  },
  {
    id: "d-day",
    title: "D-Day: The Normandy Landings",
    year: 1944,
    date: "1944-06-06",
    countries: ["FR", "GB", "US", "DE"],
    categories: ["War"],
    location: "Normandy, France",
    teaser: "An immense amphibious operation opens a western front.",
    causes:
      "Nazi Germany occupied much of western Europe. Allied leaders planned a cross-Channel invasion to establish a foothold in France and bring sustained pressure on German forces from the west.",
    happened:
      "Allied troops landed on Normandy beaches while airborne forces operated inland. The assault depended on naval support, air power, logistics and deception. Conditions varied sharply between landing areas, and the establishment of a secure bridgehead required further fighting.",
    consequences:
      "The landings began the campaign to liberate France and advance toward Germany. They were a major turning point in the western theater, though the war continued and the Soviet Union’s eastern campaign remained essential to Germany’s eventual defeat.",
    figures: ["Dwight D. Eisenhower"],
    question: "In which French region did the D-Day landings take place?",
    options: ["Normandy", "Brittany", "Provence", "Alsace"],
    statement: "D-Day immediately ended the Second World War in Europe.",
    truth: false,
    source:
      "https://www.iwm.org.uk/history/the-10-things-you-need-to-know-about-d-day",
    publisher: "Imperial War Museums",
  },
  {
    id: "hiroshima",
    title: "The Atomic Bombing of Hiroshima",
    year: 1945,
    date: "1945-08-06",
    countries: ["JP", "US"],
    categories: ["War", "Disaster"],
    location: "Hiroshima, Japan",
    teaser: "A city experiences the destructive force of a new weapon.",
    causes:
      "The Pacific War had brought immense destruction, and American officials sought to force Japan’s surrender. The Manhattan Project produced atomic weapons, introducing a new and devastating military capability.",
    happened:
      "An American aircraft dropped an atomic bomb on Hiroshima. The blast, fire and radiation killed large numbers of people and devastated the city. Survivors faced injuries, illness, loss and discrimination long after the attack.",
    consequences:
      "Hiroshima became a central symbol of nuclear devastation and movements for disarmament. Japan surrendered after the bombings of Hiroshima and Nagasaki and Soviet entry into the war; historians continue to debate the relative influence of these developments.",
    figures: ["Harry S. Truman"],
    question: "Which aircraft dropped the bomb on Hiroshima?",
    options: [
      "Enola Gay",
      "Spirit of St. Louis",
      "Memphis Belle",
      "Wright Flyer",
    ],
    statement: "Radiation caused harm beyond the immediate blast.",
    truth: true,
    source: "https://hpmmuseum.jp/?lang=eng",
    publisher: "Hiroshima Peace Memorial Museum",
  },
  {
    id: "indian-independence",
    title: "Indian Independence and Partition",
    year: 1947,
    date: "1947-08-15",
    countries: ["IN", "PK", "GB"],
    categories: ["Politics", "Social Change"],
    location: "South Asia",
    teaser: "Freedom and partition arrive together.",
    causes:
      "A long struggle against British rule involved many organizations, communities and strategies. The Second World War weakened Britain, while disagreement over political representation and the future constitutional order intensified.",
    happened:
      "British India was partitioned into independent India and Pakistan. New borders divided Punjab and Bengal, and vast numbers of people moved across them. Independence celebrations took place alongside communal violence, fear and displacement.",
    consequences:
      "The end of colonial rule created new states but left unresolved territorial disputes and traumatic memories. The human consequences of Partition shaped families for generations, while the new countries faced the challenges of building institutions and defining citizenship.",
    figures: ["Jawaharlal Nehru", "Muhammad Ali Jinnah", "Mahatma Gandhi"],
    question:
      "Which two independent states emerged from the partition of British India?",
    options: [
      "India and Pakistan",
      "India and Nepal",
      "Pakistan and Afghanistan",
      "India and Sri Lanka",
    ],
    statement: "Partition involved large-scale displacement.",
    truth: true,
    source: "https://www.nam.ac.uk/explore/independence-and-partition-1947",
    publisher: "National Army Museum",
  },
  {
    id: "korean-war",
    title: "The Korean War Begins",
    year: 1950,
    end: 1953,
    date: "1950-06-25",
    countries: ["KR", "KP", "US", "CN"],
    categories: ["War", "Diplomacy"],
    location: "Korean Peninsula",
    teaser: "A divided peninsula becomes a Cold War battleground.",
    causes:
      "The end of Japanese rule left Korea divided into rival states backed by different powers. Competing claims to legitimacy and escalating tensions made the division increasingly dangerous.",
    happened:
      "North Korean forces invaded the South. A United Nations force led by the United States intervened, and China later entered the war. Fighting moved across the peninsula before stabilizing near the original division.",
    consequences:
      "An armistice halted major fighting without a comprehensive peace treaty. The war caused enormous civilian suffering and destruction. The fortified division of Korea endured, becoming one of the longest-lasting and most heavily militarized legacies of the Cold War.",
    figures: ["Kim Il Sung", "Syngman Rhee"],
    question: "Which agreement halted major fighting?",
    options: [
      "An armistice",
      "A reunification treaty",
      "The Treaty of Versailles",
      "The Schengen Agreement",
    ],
    statement: "The armistice permanently reunified Korea.",
    truth: false,
    source: "https://www.iwm.org.uk/history/a-short-history-of-the-korean-war",
    publisher: "Imperial War Museums",
    tags: ["Cold War"],
  },
  {
    id: "suez-crisis",
    title: "The Suez Crisis",
    year: 1956,
    countries: ["EG", "GB", "FR", "IL"],
    categories: ["Diplomacy", "War"],
    location: "Egypt and the Suez Canal",
    teaser: "A canal crisis exposes a shifting balance of power.",
    causes:
      "Egyptian president Gamal Abdel Nasser nationalized the Suez Canal Company amid disputes over development funding and sovereignty. Britain and France saw their interests threatened, while Israel had its own security concerns.",
    happened:
      "Israel invaded Egypt, followed by British and French military intervention. International opposition, including pressure from the United States and Soviet Union, forced the invading powers to withdraw. United Nations peacekeeping forces were deployed in the aftermath.",
    consequences:
      "The crisis damaged British and French prestige and strengthened Nasser’s standing in much of the Arab world. It highlighted the declining ability of European imperial powers to act independently of the superpowers.",
    figures: ["Gamal Abdel Nasser", "Anthony Eden"],
    question: "Which Egyptian leader nationalized the Suez Canal Company?",
    options: [
      "Gamal Abdel Nasser",
      "Anwar Sadat",
      "Hosni Mubarak",
      "King Farouk",
    ],
    statement: "Britain and France withdrew under international pressure.",
    truth: true,
    source: "https://history.state.gov/milestones/1953-1960/suez",
    publisher: "US Office of the Historian",
    tags: ["Cold War"],
  },
  {
    id: "ghana-independence",
    title: "Ghana Becomes Independent",
    year: 1957,
    date: "1957-03-06",
    countries: ["GH", "GB"],
    categories: ["Politics", "Social Change"],
    location: "Ghana, West Africa",
    teaser: "A new state inspires a continent’s independence movements.",
    causes:
      "Nationalist organizations challenged British colonial rule in the Gold Coast. Political mobilization, strikes and demands for self-government grew after the Second World War, placing increasing pressure on colonial authorities.",
    happened:
      "The Gold Coast became independent as Ghana under the leadership of Kwame Nkrumah. Independence celebrations expressed hopes for self-determination and a wider African political awakening. The new government sought development and a stronger role in international affairs.",
    consequences:
      "Ghana became a prominent supporter of Pan-Africanism and other independence struggles. Its early promise coexisted with economic and political difficulties, while its independence marked an important stage in the continent’s broader process of decolonization.",
    figures: ["Kwame Nkrumah"],
    question: "Who led Ghana at independence?",
    options: [
      "Kwame Nkrumah",
      "Nelson Mandela",
      "Julius Nyerere",
      "Jomo Kenyatta",
    ],
    statement: "Ghana emerged from the British colony known as the Gold Coast.",
    truth: true,
    source: "https://www.britannica.com/place/Ghana/Independence",
  },
  {
    id: "cuban-missile-crisis",
    title: "The Cuban Missile Crisis",
    year: 1962,
    date: "1962-10-16",
    countries: ["CU", "US", "RU"],
    categories: ["Diplomacy", "War"],
    location: "Cuba and the Atlantic",
    teaser: "Thirteen days at the edge of nuclear war.",
    causes:
      "The Cold War involved deep mistrust and competing security concerns. Soviet deployment of nuclear missiles in Cuba followed deteriorating relations between Cuba and the United States, including the failed Bay of Pigs invasion.",
    happened:
      "American reconnaissance revealed the missile sites. President John F. Kennedy imposed a naval quarantine while both sides negotiated under the threat of escalation. Public messages and private diplomacy worked alongside military preparations.",
    consequences:
      "The Soviet Union removed its missiles from Cuba, and the United States pledged not to invade the island. A private understanding also addressed American missiles in Turkey. The crisis encouraged efforts to improve communication and reduce the danger of accidental nuclear conflict.",
    figures: ["John F. Kennedy", "Nikita Khrushchev", "Fidel Castro"],
    question: "Who was US president during the crisis?",
    options: [
      "John F. Kennedy",
      "Richard Nixon",
      "Dwight Eisenhower",
      "Lyndon Johnson",
    ],
    statement:
      "The United States launched a full-scale invasion of Cuba during the crisis.",
    truth: false,
    source:
      "https://history.state.gov/milestones/1961-1968/cuban-missile-crisis",
    publisher: "US Office of the Historian",
    tags: ["Cold War"],
  },
  {
    id: "chernobyl",
    title: "The Chernobyl Disaster",
    year: 1986,
    date: "1986-04-26",
    countries: ["UA", "RU"],
    categories: ["Disaster", "Technology"],
    location: "Chernobyl, then Soviet Ukraine",
    teaser: "A reactor accident carries consequences across borders.",
    causes:
      "A reactor safety test took place under dangerous operating conditions. Reactor design weaknesses and failures in safety procedures combined to create a catastrophic situation at the Chernobyl nuclear power plant.",
    happened:
      "An explosion and fire destroyed a reactor and released radioactive material into the environment. Workers and emergency responders confronted extreme hazards. Nearby residents were evacuated, while information about the scale of the accident emerged slowly.",
    consequences:
      "The disaster produced long-term displacement, environmental contamination and major health concerns. It intensified scrutiny of nuclear safety and exposed weaknesses in Soviet secrecy and crisis management. An exclusion zone remains associated with the damaged site.",
    figures: [],
    question: "In which present-day country is the Chernobyl plant located?",
    options: ["Ukraine", "Poland", "Germany", "Romania"],
    statement: "The accident released radioactive material beyond the plant.",
    truth: true,
    source: "https://www.iaea.org/newscenter/focus/chernobyl",
    publisher: "International Atomic Energy Agency",
    tags: ["Cold War"],
  },
  {
    id: "berlin-wall",
    title: "The Fall of the Berlin Wall",
    year: 1989,
    date: "1989-11-09",
    countries: ["DE"],
    categories: ["Politics", "Social Change"],
    location: "Berlin, Germany",
    teaser: "A divided city opens its borders.",
    causes:
      "Protests and reform movements challenged communist governments across eastern Europe. East Germans pressed for freedom to travel and political change, while the regional balance supporting the existing order weakened.",
    happened:
      "A confused announcement about travel rules brought crowds to border crossings in Berlin. Guards opened the checkpoints, and people crossed, celebrated and began dismantling parts of the wall that had divided the city.",
    consequences:
      "The opening became a powerful symbol of the Cold War’s end in Europe. German reunification followed through negotiations and institutional changes. For many people it brought new freedoms, while economic and social adjustment proved complex and uneven.",
    figures: ["Günter Schabowski"],
    question: "Which city did the wall divide?",
    options: ["Berlin", "Vienna", "Prague", "Warsaw"],
    statement: "The border opening was followed by German reunification.",
    truth: true,
    source: "https://www.britannica.com/topic/Berlin-Wall",
    tags: ["Cold War"],
  },
  {
    id: "mandela-president",
    title: "Nelson Mandela Becomes President",
    year: 1994,
    date: "1994-05-10",
    countries: ["ZA"],
    categories: ["Politics", "Social Change"],
    location: "South Africa",
    teaser: "A democratic election closes an era of apartheid rule.",
    causes:
      "Decades of resistance challenged apartheid, a system of institutionalized racial oppression. Domestic protest, international pressure and negotiations eventually opened a path toward a democratic political settlement.",
    happened:
      "South Africa held its first national election based on universal adult suffrage. The African National Congress won, and Nelson Mandela became president. His inauguration represented a profound change in who could participate in and lead the state.",
    consequences:
      "The transition dismantled apartheid’s political framework and established a constitutional democracy. Reconciliation initiatives addressed past abuses, but deep economic inequality and the lasting effects of racial exclusion remained major challenges for the new society.",
    figures: ["Nelson Mandela", "F. W. de Klerk"],
    question:
      "Which system of racial rule did the democratic transition replace?",
    options: ["Apartheid", "Feudalism", "Mercantilism", "Absolutism"],
    statement:
      "The election removed every form of economic inequality immediately.",
    truth: false,
    source: "https://www.nelsonmandela.org/biography",
    publisher: "Nelson Mandela Foundation",
  },
  {
    id: "great-wave",
    title: "Hokusai’s Great Wave",
    year: 1831,
    countries: ["JP"],
    categories: ["Culture"],
    location: "Edo-period Japan",
    teaser: "A woodblock print travels far beyond its shores.",
    causes:
      "Edo-period Japan supported a lively market for prints depicting landscapes, urban life and popular subjects. Advances in printmaking and the circulation of pigments allowed artists to experiment with striking color and composition.",
    happened:
      "Katsushika Hokusai created Under the Wave off Kanagawa as part of Thirty-six Views of Mount Fuji. The image places boats beneath a towering wave, with Mount Fuji visible in the distance. Its original publication is commonly dated approximately to the early eighteen-thirties.",
    consequences:
      "The print became one of the most widely recognized works of Japanese art. Its circulation abroad contributed to international interest in Japanese design and influenced artists who found new possibilities in its composition and visual rhythms.",
    figures: ["Katsushika Hokusai"],
    question: "Which mountain appears in the distance?",
    options: ["Mount Fuji", "Mount Everest", "Mount Kilimanjaro", "Mount Etna"],
    statement: "The Great Wave is a woodblock print.",
    truth: true,
    source: "https://www.metmuseum.org/art/collection/search/45434",
    publisher: "The Metropolitan Museum of Art",
  },
  {
    id: "rosetta-stone",
    title: "The Rosetta Stone Is Found",
    year: 1799,
    countries: ["EG", "FR", "GB"],
    categories: ["Culture", "Science"],
    location: "Rashid, Egypt",
    teaser: "Three scripts help unlock an ancient language.",
    causes:
      "European military expansion into Egypt brought soldiers and scholars into contact with ancient remains. Egyptian hieroglyphs were not yet understood by modern researchers, despite centuries of interest in ancient monuments.",
    happened:
      "French soldiers found a stone bearing a decree written in hieroglyphic, demotic and Greek scripts. Scholars used the parallel texts to investigate the writing system. Thomas Young and Jean-François Champollion made important contributions to decipherment in the following decades.",
    consequences:
      "The work opened new access to ancient Egyptian texts and transformed Egyptology. The stone’s removal to Britain also places it within ongoing debates about colonial collecting, ownership and the location of cultural heritage.",
    figures: ["Jean-François Champollion", "Thomas Young"],
    question: "Which language on the stone could scholars already read?",
    options: ["Greek", "Sanskrit", "Classical Chinese", "Old Norse"],
    statement: "The stone contains inscriptions in three scripts.",
    truth: true,
    source:
      "https://www.britishmuseum.org/collection/egypt/explore-rosetta-stone",
    publisher: "British Museum",
  },
  {
    id: "roman-republic",
    title: "The Assassination of Julius Caesar",
    year: -44,
    date: "-0044-03-15",
    countries: ["IT"],
    categories: ["Politics", "War"],
    location: "Rome",
    teaser: "A conspiracy to save a republic deepens its crisis.",
    causes:
      "Civil wars had weakened Rome’s republican institutions and concentrated power in military leaders. Julius Caesar’s extraordinary authority alarmed senators who feared that republican government would give way to permanent personal rule.",
    happened:
      "A group of conspirators attacked and killed Caesar during a meeting of the Senate on the Ides of March. They expected the act to restore political freedom, but had no stable settlement ready to replace his leadership.",
    consequences:
      "The assassination unleashed further conflict instead of reviving the old republic. Caesar’s heirs and rivals fought for control, and Octavian eventually established the political order associated with the Roman Empire.",
    figures: ["Julius Caesar", "Brutus", "Cassius"],
    question: "What name is given to the date of Caesar’s assassination?",
    options: [
      "The Ides of March",
      "The Glorious Twelfth",
      "Bastille Day",
      "The Kalends of January",
    ],
    statement:
      "The assassination immediately restored a stable Roman republic.",
    truth: false,
    source: "https://www.britannica.com/biography/Julius-Caesar-Roman-ruler",
  },
  {
    id: "mongol-empire",
    title: "The Rise of Genghis Khan",
    year: 1206,
    countries: ["MN", "CN"],
    categories: ["Politics", "War"],
    location: "Mongolian steppe",
    teaser: "Steppe alliances become the foundation of an empire.",
    causes:
      "Competition among steppe groups created shifting alliances and persistent warfare. Temüjin built a following through military success, political relationships and the reorganization of loyalties beyond older tribal divisions.",
    happened:
      "An assembly recognized Temüjin as Genghis Khan. His leadership established the basis of the Mongol Empire, whose armies later expanded across much of Eurasia. Organization, mobility and adaptation helped sustain this extraordinary growth.",
    consequences:
      "Mongol conquests caused immense destruction while also connecting distant regions through imperial networks. The empire’s successor states influenced trade, diplomacy and political life across Asia and eastern Europe long after the founding generation.",
    figures: ["Genghis Khan"],
    question: "What was Genghis Khan’s earlier name?",
    options: ["Temüjin", "Kublai", "Ögedei", "Batu"],
    statement: "The empire’s expansion connected distant parts of Eurasia.",
    truth: true,
    source: "https://www.britannica.com/biography/Genghis-Khan",
  },
  {
    id: "australian-federation",
    title: "Australia Federates",
    year: 1901,
    date: "1901-01-01",
    countries: ["AU", "GB"],
    categories: ["Politics"],
    location: "Australia",
    teaser: "Six colonies form a commonwealth.",
    causes:
      "Separate British colonies on the Australian continent debated shared concerns including trade, defense and immigration. Political leaders promoted federation while negotiating how powers should be divided between local governments and a national authority.",
    happened:
      "Six colonies united as the Commonwealth of Australia under a federal constitution. The new political system combined a national parliament with continuing state governments and retained constitutional links to the British Crown.",
    consequences:
      "Federation created a framework for national government, but did not mean equal participation for everyone. Aboriginal and Torres Strait Islander peoples faced exclusion and discriminatory policies. The meaning and limits of Australian citizenship continued to change through later struggles for rights.",
    figures: ["Edmund Barton", "Henry Parkes"],
    question: "How many colonies formed the original federation?",
    options: ["Six", "Four", "Eight", "Ten"],
    statement:
      "Federation immediately ended Australia’s constitutional links with Britain.",
    truth: false,
    source: "https://www.nma.gov.au/defining-moments/resources/federation",
    publisher: "National Museum of Australia",
  },
];
const images: Record<
  string,
  { url: string; alt: string; credit: string; source: string }
> = imageCatalog;
export const events: HistoricalEvent[] = seeds.map((s, i) => ({
  id: s.id,
  slug: s.id,
  title: s.title,
  shortTitle: s.title,
  startYear: s.year,
  endYear: s.end ?? s.year,
  startDate: s.date,
  summary: [s.causes, s.happened, s.consequences].join(" "),
  shortSummary: s.teaser,
  importance: 4,
  scale:
    s.countries.length >= 3
      ? "Global"
      : s.countries.length === 2
        ? "Regional"
        : "National",
  difficulty: (["Easy", "Medium", "Hard"] as const)[i % 3],
  locationText: s.location,
  image: images[s.id]?.url,
  imageAlt: images[s.id]?.alt ?? s.title,
  imageAttribution: images[s.id]
    ? {
        title: images[s.id].credit,
        publisher: "Wikimedia Commons",
        url: images[s.id].source,
      }
    : undefined,
  era:
    s.year < 500
      ? "Ancient"
      : s.year < 1500
        ? "Medieval"
        : s.year < 1800
          ? "Early Modern"
          : s.year < 1945
            ? "Modern"
            : "Contemporary",
  countries: s.countries,
  categories: s.categories,
  keyFigures: s.figures,
  causes: s.causes,
  whatHappened: s.happened,
  consequences: s.consequences,
  sources: [
    {
      title: s.title,
      publisher: s.publisher ?? "Encyclopaedia Britannica",
      url: s.source,
    },
  ],
  relatedEvents: [],
  tags: s.tags ?? [],
}));
for (const event of events) {
  event.relatedEvents = events
    .filter(
      (other) =>
        other.id !== event.id &&
        (other.countries.some((c) => event.countries.includes(c)) ||
          other.categories[0] === event.categories[0]),
    )
    .sort(
      (a, b) =>
        Math.abs(a.startYear - event.startYear) -
        Math.abs(b.startYear - event.startYear),
    )
    .slice(0, 3)
    .map((e) => e.id);
  if (
    [
      "apollo-11",
      "penicillin",
      "great-wave",
      "berlin-wall",
      "hiroshima",
      "chernobyl",
      "french-revolution",
      "american-independence",
    ].includes(event.id)
  )
    event.scale = "Global";
}
export const questions: Question[] = seeds.flatMap((s) => {
  const event = events.find((e) => e.id === s.id)!;
  const base = { eventId: s.id, difficulty: event.difficulty };
  const questionList: Question[] = [
    {
      ...base,
      id: `${s.id}-mc`,
      type: "multiple-choice",
      prompt: s.question,
      options: s.options.map((text, i) => ({ id: String(i), text })),
      answer: "0",
      explanation: `${s.options[0]}. ${s.happened}`,
    },
    {
      ...base,
      id: `${s.id}-tf`,
      type: "true-false",
      prompt: s.statement,
      answer: s.truth,
      explanation: `${s.truth ? "True." : "False."} ${s.happened} ${s.consequences}`,
    },
  ];
  if (s.id !== "great-wave")
    questionList.push({
      ...base,
      id: `${s.id}-year`,
      type: "year",
      prompt: `In which year ${s.end ? "did this event begin" : "did this event take place"}?`,
      answer: s.year,
      explanation: `${s.title} ${s.end ? "began" : "took place"} in ${formatYear(s.year)}. ${s.consequences}`,
    });
  return questionList;
});
export function formatYear(year: number) {
  return year < 0 ? `${Math.abs(year)} BCE` : String(year);
}
export function formatEventYear(event: HistoricalEvent) {
  return `${event.id === "great-wave" ? "c. " : ""}${formatYear(event.startYear)}`;
}
export const eventById = (id: string) => events.find((e) => e.id === id)!;
