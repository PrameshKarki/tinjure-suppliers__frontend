import { ReactNode } from "react";
import Footer from "../components/common/molecules/Footer";
import MenuBar from "../components/common/molecules/MenuBar";
import NavigationBar from "../components/common/molecules/NavigationBar";

interface IProps {
  children: ReactNode;
}

const Main = (props: IProps) => {
  const { children } = props;
  return (
    <>
      <header className="sticky top-0 z-50">
        <NavigationBar />
        <MenuBar />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
