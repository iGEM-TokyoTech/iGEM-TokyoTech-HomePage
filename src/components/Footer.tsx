import { config } from "../utils/config";

const Footer = () => {
  return (
    <footer>
      <a href={"https://twitter.com/" + config.site.brand.twitter}>X</a>
      <span>{config.site.brand.name}</span>
    </footer>
  );
};

export default Footer;
