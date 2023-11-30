import { FC } from "react";

import { IChildren, IIntlParams } from "@/Interface";
import { Wrapper } from "@/components/Shared";

const PublicLayout: FC<IChildren & IIntlParams> = ({ children, params }) => (
  <Wrapper params={params}>{children}</Wrapper>
);

export default PublicLayout;
