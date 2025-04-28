import PromoCard from "../ui/PromoCard";

import bigSimple from "../../assets/images/bigSimple.webp";
import spicyGrill from "../../assets/images/spicyGrill.webp";
import hellishBite from "../../assets/images/hellishBite.webp";

const Promos = () => {
  return (
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
  );
};

export default Promos;
