import { IChildren } from "@Interface";

export const CommonText = (props: IChildren) => (
  <div className="text-sm font-normal">{props.children}</div>
);
