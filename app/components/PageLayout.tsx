import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  showProfileName?: boolean;
};

export default function PageLayout({ children, showProfileName }: Props) {
  return (
    <main>
      <div className="content-container">
        <Navigation showProfileName={showProfileName} />
        {children}
        <Footer />
      </div>
    </main>
  );
}
