import { useState } from "react";
import BadgePopular from "./BadgePopular";
import ButtonRed from "./ButtonRed";
import xIcon from "../../assets/icons/x.svg";

interface Props {
  imgSrc: string;
  pngImg: string;
  name: string;
  discount: number;
  originalPrice: number;
  popular: boolean;
  description: string;
  ingredients: string[];
}

const finalPrice = (originalPrice: number, discount: number) => {
  return (originalPrice * (1 - discount / 100)).toFixed(2);
};

const PromoCard = ({
  imgSrc,
  pngImg,
  name,
  originalPrice,
  discount,
  popular,
  description,
  ingredients,
}: Props) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <article className="">
        <img
          className="w-full h-auto rounded-2xl pb-2"
          src={imgSrc}
          width={900}
          height={426}
          alt="burger promos"
        />
        <div className="flex flex-col gap-3">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl font-bold text-yellow-500">{name}</h3>
              {popular ? <BadgePopular /> : null}
            </div>
            <div className="">
              <div className="flex gap-2 items-center">
                <p className="font-medium text-white text-2xl">
                  ${finalPrice(originalPrice, discount)}
                </p>
                <p className="font-medium text-green-200 pt-1 underline">
                  {discount}% OFF
                </p>
              </div>
              <p className="font-medium text-gray-500 line-through">
                ${originalPrice}
              </p>
            </div>
          </div>
          <ButtonRed onClick={handleClick} text="See Ingredients" />
        </div>
      </article>
      <Modal
        open={open}
        handleClick={handleClick}
        name={name}
        description={description}
        ingredients={ingredients}
        pngImg={pngImg}
      />
    </>
  );
};

interface ModalProps {
  open: boolean;
  handleClick: () => void;
  name: string;
  description: string;
  ingredients: string[];
  pngImg: string;
}

const Modal = ({
  open,
  handleClick,
  name,
  description,
  ingredients,
  pngImg,
}: ModalProps) => {
  return (
    <section
      onClick={handleClick}
      className={`${
        open ? "hidden" : "flex"
      } fixed top-0 left-0 w-screen h-screen justify-center items-center bg-black/70`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-dark-details w-[80vw] h-[75vh] mb-27"
      >
        <button onClick={handleClick}>
          <img className="w-10" src={xIcon} alt="" />
        </button>
        <div className="px-2 flex flex-col gap-2">
          <img src={pngImg} alt="" />
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-yellow-500">{name}</h2>
            <p className="font-extralight">{description}</p>
          </div>
          <ul className="pt-5">
            <h4 className="font-semibold text-green-500">Ingredients:</h4>
            {ingredients.map((el) => (
              <li className="font-light">- {el}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PromoCard;
