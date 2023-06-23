import { Button, InputField } from "@Components/Common";

export const ContactUsForm = () => {
  const handleOnChange = () => {};
  return (
    <div className="bg-base-100 bg-opacity-50 rounded-md p-6 w-full ">
      <InputField handleOnChange={handleOnChange} placeholder="Your Name" />
      <InputField handleOnChange={handleOnChange} placeholder="Your Address" />
      <InputField handleOnChange={handleOnChange} placeholder="Write subject" />
      <textarea
        className="border-primary p-3 w-full"
        placeholder="Write message"
        rows={8}
      />
      <br /> <br />
      <Button width="full" variant="primary">
        Submit
      </Button>
    </div>
  );
};
