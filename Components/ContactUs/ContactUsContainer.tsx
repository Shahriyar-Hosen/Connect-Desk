import { MainContainer } from "@Components/Common";
import { ContactDetails } from "./ContactDetails";
import { ContactUsForm } from "./ContactUsForm";

const ContactUsContainer = () => {
  return (
    <MainContainer>
      <div className="flex flex-col md:flex-row gap-6 w-[90%] lg:w-[70%] mx-auto">
        <ContactDetails />
        <ContactUsForm />
      </div>
    </MainContainer>
  );
};

export default ContactUsContainer;
