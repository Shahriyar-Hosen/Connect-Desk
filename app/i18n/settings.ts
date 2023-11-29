export const fallbackLng: string = "en";
export const languages: string[] = [fallbackLng, "bn"];
export const defaultNS: string = "translation";
export const cookieName: string = "i18next";

export function getOptions(
  lng: string = fallbackLng,
  ns: string | string[] = defaultNS
) {
  return {
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
