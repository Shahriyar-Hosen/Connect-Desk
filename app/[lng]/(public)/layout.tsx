import { FC } from "react";

import { IChildren } from "@/Interface";
import { Wrapper } from "@/components/Shared";

const PublicLayout: FC<IChildren> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);

export default PublicLayout;
