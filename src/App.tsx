import MobileHeader from "./components/layout/MobileHeader";
import heroMobile from "./assets/images/heroMobile.webp";
import PromoCard from "./components/ui/PromoCard";

import bigSimple from "./assets/images/bigSimple.webp";

function App() {
  return (
    <>
      <MobileHeader />
      <section className="p-3">
        <img className="rounded-2xl" src={heroMobile} alt="" />
      </section>

      <section className="px-3 pt-20 pb-48">
        <div className="pb-11 text-center">
          <h2 className="font-bold text-4xl pb-2">Promos</h2>
          <p className="text-yellow-100">
            This section shows all the promotions that we currently have in our
            store.
          </p>
        </div>
        <div className="flex flex-col gap-10">
          <PromoCard
            imgSrc={bigSimple}
            name="Big Simple Burger"
            originalPrice={14.99}
            discount={60}
          />
          <PromoCard
            imgSrc={bigSimple}
            name="Big Simple Burger"
            originalPrice={25}
            discount={60}
          />
          <PromoCard
            imgSrc={bigSimple}
            name="Big Simple Burger"
            originalPrice={14.99}
            discount={60}
          />
        </div>
      </section>
    </>
  );
}

export default App;
