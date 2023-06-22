import { ContactDetails } from "./ContactDetails";
import { ContactUsForm } from "./ContactUsForm";

const ContactUsContainer = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <ContactDetails />
      <ContactUsForm />
    </div>
  );
};

export default ContactUsContainer;
