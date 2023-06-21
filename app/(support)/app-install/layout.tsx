import { Footer, Header } from "@Components/Shared";
import { IChildren } from "@Interface";

export const metadata = {
  title: "Connect Desk | App Install",
  description: "Generated by Baitul Hikmah Team",
};

const AppInstallLayout = ({ children }: IChildren) => (
  <html lang="en">
    <body>
      <Header />
      <main>{children}</main>
      <Footer />
    </body>
  </html>
);

export default AppInstallLayout;
