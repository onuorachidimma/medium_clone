import Navbar from "./navbar";
import Hero from "./hero";
import Footer from "./footer";
import footer from "./footer.module.css";
const LandingPage = () => {
  return (
    <div className={footer.landingPage}>
      <Navbar />
      <Hero />
      <div className={footer.footer}>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
