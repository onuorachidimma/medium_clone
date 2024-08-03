import { Link } from "react-router-dom";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div>
      <div className={styles.footerContainer}>
        <a href="#">Help</a>
        <a href="#">Status</a>
        <a href="#">About</a>
        <a href="#">Careers</a>
        <a href="#">Press</a>
        <a href="#">Blog</a>
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Text to spech</a>
        <a href="#">Teams</a>
      </div>
      <div className={styles.footerContainerHidden}>
        <a href="#">About</a>
        <a href="#">Help</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
      </div>
    </div>
  );
};

export default Footer;
