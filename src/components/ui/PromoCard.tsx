import ButtonRed from "./ButtonRed";

interface Props {
  imgSrc: string;
  name: string;
  discount: number;
  originalPrice: number;
}

const PromoCard = ({ imgSrc, name, originalPrice, discount }: Props) => {
  const finalPrice = `${(originalPrice * (1 - discount / 100)).toFixed(2)}`;
  return (
    <article>
      <img className="w-full h-auto rounded-2xl pb-2" src={imgSrc} alt="" />
      <div className="flex flex-col gap-3">
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-yellow-500">{name}</h3>
          <div className="">
            <div className="flex gap-2 items-center">
              <p className="font-medium text-white text-2xl">${finalPrice}</p>
              <p className="font-medium text-green-200 pt-1 underline">
                {discount}% OFF
              </p>
            </div>
            <p className="font-medium text-gray-500 line-through">
              ${originalPrice}
            </p>
          </div>
        </div>
        <ButtonRed text="See Ingredients" />
      </div>
    </article>
  );
};

export default PromoCard;
