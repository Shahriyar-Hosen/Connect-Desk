import { IComponentHeader } from "@Interface";

export const ComponentHeader = ({
  title,
  position,
  children,
  subTitle,
}: IComponentHeader) => {
  return (
    <div
      className={`text-xl font-semibold ${
        position === "center" ? "text-center" : "text-left"
      }`}
    >
      <h3>{title}</h3>
      <h3>{subTitle}</h3>
      {children}
      <div
        className={`w-full flex pt-2.5 ${
          position === "center" ? "justify-center" : "justify-start"
        }`}
      >
        <div className="w-[159px] h-[4px] opacity-60 bg-primary "></div>
      </div>
    </div>
  );
};
