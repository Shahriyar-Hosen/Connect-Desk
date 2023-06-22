import { Button, InputField } from "@Components/Common";

export const ContactUsForm = () => {
  const handleOnChange = () => {};
  return (
    <div className="bg-base-100 rounded-md p-6 w-full max-w-[520px]">
      <InputField handleOnChange={handleOnChange} placeholder="Your Name" />
      <InputField handleOnChange={handleOnChange} placeholder="Your Address" />
      <InputField handleOnChange={handleOnChange} placeholder="Write subject" />
      <InputField handleOnChange={handleOnChange} placeholder="Write message" />
      <br />
      <Button width="full" variant="primary">
        Submit
      </Button>
    </div>
  );
};
