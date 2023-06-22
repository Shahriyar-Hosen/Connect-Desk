import PageHeader from "@Components/PageHeader";

const ContactUs = () => {
  return (
    <main>
      <PageHeader
        pageName="Contact US"
        mainTitle="Feel Free To Contact"
        subTitle={<span className="text-primary">With Us</span>}
      />
    </main>
  );
};

export default ContactUs;
