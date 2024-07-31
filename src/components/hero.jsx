import styles from './hero.module.css'
import heroImage from '../assets/images/heroImage.webp'
const Hero = () => {
  return (
    <div className={styles.hero}>
      
        <div>
        <h1>Human stories & ideas</h1>
        <p>A place to read, write, and deepen your understanding</p>
        <a href="">Get Started</a>
        </div>

        <div>
            <img src={heroImage} alt="" />
        </div>
      
    </div>
  );
};

export default Hero;
