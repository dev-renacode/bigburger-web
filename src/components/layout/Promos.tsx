import PromoCard from "../ui/PromoCard";

import bigSimple from "../../assets/images/bigSimple.webp";
import spicyGrill from "../../assets/images/spicyGrill.webp";
import hellishBite from "../../assets/images/hellishBite.webp";
import bigSimplePng from "../../assets/images/BigSimplePng.webp";
import spicyGrillPng from "../../assets/images/SpicyGrillPng.webp";
import hellishBitePng from "../../assets/images/hellishBitePng.webp";

const promos = [
  {
    id: 1,
    name: "Hellish Bite Burger XL",
    originalPrice: 25.99,
    discount: 50,
    popular: false,
    imgSrc: hellishBite,
    pngImg: hellishBitePng,
    description:
      "A burger that tastes like real hell. With a spicy touch and a big piece of New York beef, it will give you a taste explosion!",
    ingredients: ["New York Steak", "Lettuce", "Tomato", "Garlic Sauce"],
  },
  {
    id: 2,
    name: "Big Simple Burger",
    originalPrice: 10,
    discount: 60,
    popular: false,
    imgSrc: bigSimple,
    pngImg: bigSimplePng,
    description:
      "A classic that never fails. Juicy meat, fresh ingredients, and our signature sauce for a timeless flavor.",
    ingredients: ["Beef Patty", "Lettuce", "Tomato", "Pickles"],
  },
  {
    id: 3,
    name: "Spicy Grill Burger",
    originalPrice: 15,
    discount: 20,
    popular: false,
    imgSrc: spicyGrill,
    pngImg: spicyGrillPng,
    description:
      "A bold burger for those who love heat. Grilled to perfection and loaded with fiery flavors.",
    ingredients: ["Jalapeños", "Pepper Jack Cheese", "BBQ Sauce"],
  },
];

const Promos = () => {
  return (
    <section className="px-3 pt-20 pb-30" id="promos">
      <div className="pb-11 text-center">
        <h2 className="font-bold text-4xl pb-2">Promos</h2>
        <p className="text-yellow-100">
          This section shows all the promotions that we currently have in our
          store.
        </p>
      </div>
      <div className="flex flex-col gap-10">
        {promos.map((promo, i) => (
          <PromoCard
            key={i}
            name={promo.name}
            originalPrice={promo.originalPrice}
            discount={promo.discount}
            popular={promo.popular}
            imgSrc={promo.imgSrc}
            pngImg={promo.pngImg}
            description={promo.description}
            ingredients={promo.ingredients}
          />
        ))}
      </div>
    </section>
  );
};

export default Promos;
