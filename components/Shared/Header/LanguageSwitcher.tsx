import { IIntlLang, IIntlTranslator } from "@/Interface";
import { languages } from "@/app/i18n/settings";
import Link from "next/link";
import { FC } from "react";

export const LanguageSwitcher: FC<IIntlLang> = ({ lng }) => {
  return (
    <>
      {languages
        .filter((l) => lng !== l)
        .map((l, index) => {
          return (
            <span
              key={l}
              className="rounded-full bg-primary p-2 text-white w-10 h-10"
            >
              {index > 0 && "or"}
              <Link href={`/${l}`}>{l}</Link>
            </span>
          );
        })}
    </>
  );
};
