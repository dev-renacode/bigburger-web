import ButtonContact from "../ui/ButtonContact";
import whatsapp from "../../assets/icons/whatsapp.svg";
import uber from "../../assets/icons/uber.svg";
import instagram from "../../assets/icons/instagram.svg";

const Contact = () => {
  return (
    <section
      className="px-3 mb-30 flex flex-col bg-dark-details gap-5 p-14"
      id="contact"
    >
      <div>
        <h2 className="font-bold text-4xl text-center pb-2">Order Now!</h2>
        <p className="text-center">
          You can place your orders via Whatsapp, Instagram or visit us at Uber
          Eats.
        </p>
      </div>
      <article className="flex flex-col gap-3">
        <ButtonContact
          className="bg-[#25D366] hover:bg-[#25D366]/70 transition"
          text="Talk to us via Whatsapp"
          logo={whatsapp}
        />
        <ButtonContact
          className="bg-black hover:bg-gray-800 transition"
          text="Order via Uber Eats"
          logo={uber}
        />
        <ButtonContact
          className="bg-pink-600 hover:bg-pink-600/70"
          text="Talk to us via Instagram"
          logo={instagram}
        />
      </article>
    </section>
  );
};

export default Contact;
