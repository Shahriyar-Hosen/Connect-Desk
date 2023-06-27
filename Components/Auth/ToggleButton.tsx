import { Button } from "@Components/Common";
import { IToggleButton } from "@Interface";

const toggleButton: ["Business Login", "Client Login"] = [
  "Business Login",
  "Client Login",
];

export const ToggleButton = ({ setUserType, userType }: IToggleButton) => (
  <div className="flex w-full max-w-[486px] mx-auto">
    {toggleButton.map((i) => (
      <Button
        key={i}
        onClick={() => setUserType(i)}
        variant={userType === i ? "primary" : "secondary"}
        size="lg"
        width="full"
        className={`${
          i === "Business Login" ? "rounded-r-none" : "rounded-l-none"
        } transition-all duration-500 capitalize`}
      >
        {i}
      </Button>
    ))}
  </div>
);
