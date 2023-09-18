import { InputField } from "@/components";
import { ChangeEvent, FC } from "react";
import { AuthMainRightSide } from "..";

export const ConfirmPasswordRightSide: FC = () => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
  };

  return (
    <AuthMainRightSide
      authTopLabel="Change Your Password"
      authTopLabelType="title"
      maxWidth="max-w-[485px]"
      btnText="submit"
    >
      <div>
        <InputField
          handleOnChange={handleOnChange}
          label="New Password"
          type="password"
          placeholder="Enter your password"
        />
        <InputField
          handleOnChange={handleOnChange}
          label="Confirm New Password"
          placeholder="Enter your password"
        />
      </div>
    </AuthMainRightSide>
  );
};
