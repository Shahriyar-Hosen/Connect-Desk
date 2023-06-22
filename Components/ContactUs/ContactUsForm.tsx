import { Button, InputField } from "@Components/Common";

export const ContactUsForm = () => {
  const handleOnChange = () => {};
  return (
    <div className="bg-base-100 p-6">
      <InputField handleOnChange={handleOnChange} placeholder="Your Name" />
      <InputField handleOnChange={handleOnChange} placeholder="Your Address" />
      <InputField handleOnChange={handleOnChange} placeholder="Write subject" />
      <InputField handleOnChange={handleOnChange} placeholder="Write message" />
      <Button variant="primary">Submit</Button>
    </div>
  );
};
