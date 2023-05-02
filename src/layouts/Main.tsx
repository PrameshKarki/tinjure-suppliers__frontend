import { useRouter } from "next/router";
import { ReactNode } from "react";
import Breadcrumb from "../components/common/atoms/Breadcrumb";
import Footer from "../components/common/molecules/Footer";
import MenuBar from "../components/common/molecules/MenuBar";
import NavigationBar from "../components/common/molecules/NavigationBar";

const ROOT_PATH = "/";

interface IProps {
  children: ReactNode;
}

const Main = (props: IProps) => {
  const { children } = props;
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <>
      <header className="sticky top-0 z-50">
        <NavigationBar />
        <MenuBar />
        {currentPath !== ROOT_PATH && <Breadcrumb />}
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Main;
