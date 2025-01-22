import BackgroundAudio from "./component/BackgroundAudio";
import Hero from "./component/Hero";
import Footer from "./component/Footer";
import Header from "./component/Header";
import HeaderMobile from "./component/HeaderMobile";
import WelcomePopup from "./component/WelcomePopup";
import TextCarousel from "./TextCarousel";
import Content from "./component/Content";

const App = () => {
  return (
    <div className="bg-gold">
      <WelcomePopup coin="coin" />
      <Header />
      <HeaderMobile />
      <BackgroundAudio />
      <Hero />
      <TextCarousel />
      <Content />
      <TextCarousel />
      <TextCarousel />
      <TextCarousel />
      <Footer />
    </div>
  );
};
export default App;
