import { MainContainer } from "@Components/Common";
import { ContactDetails } from "./ContactDetails";
import { ContactUsForm } from "./ContactUsForm";

const ContactUsContainer = () => {
  return (
    <MainContainer>
      <div className="flex flex-col max-w-[1020px] lg:flex-row gap-6 w-[90%] lg:w-[75%] mx-auto">
        <ContactDetails />
        <ContactUsForm />
      </div>
    </MainContainer>
  );
};

export default ContactUsContainer;
