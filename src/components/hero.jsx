import styles from "./hero.module.css";
import "../components/fonts.css";
import heroImage from "../assets/images/heroImage.webp";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.discount}>
        <p>Be part of a better internet.</p>
        <a href="">Get 20% off membership for a limited time</a>
      </div>
      <div className={styles.heroBody}>
        <div className={styles.backgroundImage}>
          <h2 className={styles.heroIntroText}>
            Human <br /> stories & ideas
          </h2>
          <div className={styles.subTexts}>
            <p>A place to read, write, and deepen your understanding</p>
            <a className={styles.getStarted} href="">
              Start reading
            </a>
          </div>
        </div>
        <div className={styles.heroImageContainer}>
          <img src={heroImage} alt="medium Image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
