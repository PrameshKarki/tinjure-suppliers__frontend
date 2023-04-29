import AcceptedPaymentMethods from "../atoms/AcceptedPaymentMethods";
import Copyright from "../atoms/Copyright";
import Links from "../atoms/Links";

const Footer = () => {
  return (
    <footer>
      <Links />
      <AcceptedPaymentMethods />
      <Copyright />
    </footer>
  );
};

export default Footer;
