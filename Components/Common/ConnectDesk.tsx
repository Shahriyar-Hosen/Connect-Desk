import { IConnectDesk } from "@Interface";

export const ConnectDesk = ({ text = "md" }: IConnectDesk) => (
  <span
    className={`${
      text === "md" && "text-xl"
    } text-secondary font-semibold font-sans`}
  >
    Connect<span className="text-primary ">Desk</span>
  </span>
);
