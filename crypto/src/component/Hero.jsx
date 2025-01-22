import BgImg from "../Assets/Image-1.jpg";

const Hero = () => {
  return (
    <div className="w-screen -z-2 md:h-screen">
      <img src={BgImg} alt="" className="object-contain w-full" />
    </div>
  );
};
export default Hero;
