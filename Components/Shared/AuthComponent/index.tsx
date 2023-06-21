import { IAuthComponent } from "@Interface";

export const AuthComponent = ({
  leftComponent,
  rightComponent,
}: IAuthComponent) => {
  return (
    <div className="w-[100%] flex flex-col lg:flex-row gap-10">
      {leftComponent}
      {rightComponent}
    </div>
  );
};
