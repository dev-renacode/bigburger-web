import heroMobile from "../../assets/images/heroMobile.webp";

const Hero = () => {
  return (
    <section className="px-3 pt-3">
      <img
        className="rounded-2xl"
        src={heroMobile}
        width={700}
        height={700}
        alt="Hero image burger"
      />
    </section>
  );
};

export default Hero;
