import { IIntlTranslator } from "@/Interface";
import { Button, InputField } from "..";
import { FC } from "react";

export const ContactUsForm: FC<IIntlTranslator> = ({ t }) => {
  const handleOnChange = () => {};
  return (
    <div className="bg-base-100 bg-opacity-50 rounded-md p-6 w-full ">
      <InputField
        handleOnChange={handleOnChange}
        placeholder={t("contactForm.yourName")}
      />
      <InputField
        handleOnChange={handleOnChange}
        placeholder={t("contactForm.yourAddress")}
      />
      <InputField
        handleOnChange={handleOnChange}
        placeholder={t("contactForm.writeSubject")}
      />
      <textarea
        className="border-primary p-3 w-full"
        placeholder={t("contactForm.writeMessage")}
        rows={8}
      />
      <br /> <br />
      <Button width="full" variant="primary">
        {t("contactForm.submit")}
      </Button>
    </div>
  );
};
