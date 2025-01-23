import BgImg from "../Assets/Image-1.jpg";

const Hero = () => {
  return (
    <div id="home" className="w-screen -z-2">
      <img src={BgImg} alt="" className="object-contain w-full" />
    </div>
  );
};
export default Hero;
