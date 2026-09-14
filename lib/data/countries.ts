import type { Country } from "../types";
const countryLabels = new Intl.DisplayNames(["vi"], { type: "region" });
const rows = [
  ["TH","Thailand","Asia","Southeast Asia"],["ID","Indonesia","Asia","Southeast Asia"],
  ["MY","Malaysia","Asia","Southeast Asia"],["SG","Singapore","Asia","Southeast Asia"],
  ["PH","Philippines","Asia","Southeast Asia"],["KH","Cambodia","Asia","Southeast Asia"],
  ["IR","Iran","Asia","Middle East"],["AR","Argentina","Americas","South America"],
  ["ET","Ethiopia","Africa","Africa"],["ML","Mali","Africa","Africa"],["CH","Switzerland","Europe","Europe"],
  ["VN", "Vietnam", "Asia", "Southeast Asia"],
  ["JP", "Japan", "Asia", "East Asia"],
  ["CN", "China", "Asia", "East Asia"],
  ["IN", "India", "Asia", "South Asia"],
  ["PK", "Pakistan", "Asia", "South Asia"],
  ["TR", "Türkiye", "Asia", "Middle East"],
  ["IQ", "Iraq", "Asia", "Middle East"],
  ["EG", "Egypt", "Africa", "Africa"],
  ["ZA", "South Africa", "Africa", "Africa"],
  ["GH", "Ghana", "Africa", "Africa"],
  ["FR", "France", "Europe", "Europe"],
  ["DE", "Germany", "Europe", "Europe"],
  ["GB", "United Kingdom", "Europe", "Europe"],
  ["IT", "Italy", "Europe", "Europe"],
  ["GR", "Greece", "Europe", "Europe"],
  ["RU", "Russia", "Europe", "Europe"],
  ["UA", "Ukraine", "Europe", "Europe"],
  ["US", "United States", "Americas", "North America"],
  ["CU", "Cuba", "Americas", "North America"],
  ["HT", "Haiti", "Americas", "North America"],
  ["MX", "Mexico", "Americas", "North America"],
  ["PE", "Peru", "Americas", "South America"],
  ["BR", "Brazil", "Americas", "South America"],
  ["CL", "Chile", "Americas", "South America"],
  ["NZ", "New Zealand", "Oceania", "Oceania"],
  ["AU", "Australia", "Oceania", "Oceania"],
  ["KR", "South Korea", "Asia", "East Asia"],
  ["KP", "North Korea", "Asia", "East Asia"],
  ["ES", "Spain", "Europe", "Europe"],
  ["TN", "Tunisia", "Africa", "Africa"],
  ["MN", "Mongolia", "Asia", "East Asia"],
  ["PT", "Portugal", "Europe", "Europe"],
  ["IL", "Israel", "Asia", "Middle East"],
];
export const countries: Country[] = rows.map(
  ([code, name, continent, region]) => ({
    id: code,
    code,
    name: countryLabels.of(code) ?? name,
    continent,
    region,
  }),
);
export const regions = [...new Set(countries.map((c) => c.region))];
export const countryName = (id: string) =>
  countries.find((c) => c.id === id)?.name ?? id;

