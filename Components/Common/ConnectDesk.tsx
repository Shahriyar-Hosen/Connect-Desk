import { IConnectDesk } from "@Interface";

export const ConnectDesk = ({
  text = "md",
  font = "Poppins",
}: IConnectDesk) => (
  <span
    className={`${
      (text === "md" && "text-xl") ||
      (text === "xl" && "sm:text-[32px] text-2xl")
    } 
      ${
        (font === "Poppins" && "font-[Poppins]") ||
        (font === "Exo" && "font-[Exo]") ||
        (font === "sans" && "font-sans")
      }
    text-secondary font-semibold`}
  >
    Connect<span className="text-primary ">Desk</span>
  </span>
);
