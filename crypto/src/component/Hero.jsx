import BgImg from "../Assets/Image-1.jpg";

const Hero = () => {
  return (
    <div className="w-screen h-screen -z-2 md:h-full">
      <img src={BgImg} alt="" className="object-contain w-full" />
    </div>
  );
};
export default Hero;
