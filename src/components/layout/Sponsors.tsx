import cocacola from "../../assets/sponsors/CocaCola.svg";
import imax from "../../assets/sponsors/imax.svg";
import spotify from "../../assets/sponsors/Spotify.svg";
import uber from "../../assets/icons/uber.svg";

const imgClasses = "w-40";

const Sponsors = () => {
  return (
    <section className="pb-48 flex flex-col justify-center gap-14 px-3 text-pretty">
      <div className="text-center">
        <h2 className="text-4xl font-bold">Made Possible By</h2>
        <p className="text-slate-400">
          A big thank you to our sponsors for their invaluable support. With
          their help, we are able to bring our vision to life and create
          unforgettable experiences.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <img className={imgClasses} src={cocacola} alt="CocaCola Logo" />
        <img className={imgClasses} src={imax} alt="IMAX Logo" />
        <img className={imgClasses} src={spotify} alt="Spotify Logo" />
        <img className={imgClasses} src={uber} alt="Uber Logo" />
      </div>
    </section>
  );
};

export default Sponsors;
