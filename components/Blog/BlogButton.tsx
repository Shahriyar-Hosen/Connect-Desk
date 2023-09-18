import { FC } from "react";

export interface IBlogButton {
  text: string;
  isHaveBackground?: boolean;
}
export const BlogButton: FC<IBlogButton> = ({ text, isHaveBackground }) => (
  <div className={`${isHaveBackground && "bg-base-100"} p-3 rounded-md`}>
    <p className="text-[13px] font-semibold">{text}</p>
  </div>
);
