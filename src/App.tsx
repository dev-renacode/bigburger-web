import MobileHeader from "./components/layout/MobileHeader";
import PromoCard from "./components/ui/PromoCard";

import heroMobile from "./assets/images/heroMobile.webp";

import bigSimple from "./assets/images/bigSimple.webp";
import spicyGrill from "./assets/images/spicyGrill.webp";
import hellishBite from "./assets/images/hellishBite.webp";
import ButtonContact from "./components/ui/ButtonContact";

import whatsapp from "./assets/icons/whatsapp.svg";
import uber from "./assets/icons/uber.svg";
import instagram from "./assets/icons/instagram.svg";

function App() {
  return (
    <>
      <MobileHeader />
      <section className="px-3 pt-3">
        <img className="rounded-2xl" src={heroMobile} alt="" />
      </section>

      <section className="px-3 pt-20 pb-30">
        <div className="pb-11 text-center">
          <h2 className="font-bold text-4xl pb-2">Promos</h2>
          <p className="text-yellow-100">
            This section shows all the promotions that we currently have in our
            store.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <PromoCard
            imgSrc={hellishBite}
            name="Hellish Bite Burger XL"
            originalPrice={25.99}
            discount={50}
            popular={true}
          />
          <PromoCard
            imgSrc={bigSimple}
            name="Big Simple Burger"
            originalPrice={10}
            discount={60}
            popular={false}
          />
          <PromoCard
            imgSrc={spicyGrill}
            name="Spicy Grill Burger"
            originalPrice={15}
            discount={20}
            popular={false}
          />
        </div>
      </section>

      <section className="px-3 mb-48  flex flex-col bg-dark-details gap-5 p-14">
        <div>
          <h2 className="font-bold text-4xl text-center pb-2">Contact</h2>
          <p className="text-center">
            You can place your orders via Whatsapp, Instagram or visit us at
            Uber Eats.
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
    </>
  );
}

export default App;
