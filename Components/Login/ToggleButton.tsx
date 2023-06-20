import { Button } from "@Components/Common";

export const ToggleButton = () => {
  return (
    <div className="flex">
      <Button variant="primary" size="lg">
        Business
      </Button>
      <Button variant="secondary" size="lg">
        Client Login
      </Button>
    </div>
  );
};
