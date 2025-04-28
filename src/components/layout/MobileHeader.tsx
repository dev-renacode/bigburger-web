import logo from "../../assets/images/logo.webp";
import home from "../../assets/icons/home.svg";
import book from "../../assets/icons/book.svg";
import promo from "../../assets/icons/promo.svg";
import phone from "../../assets/icons/phone.svg";

const navLinks = [
  {
    label: "Home",
    href: "#",
    icon: home,
  },
  {
    label: "Promos",
    href: "#promos",
    icon: promo,
  },
  {
    label: "Contact",
    href: "#contact",
    icon: phone,
  },
  {
    label: "Feedback",
    href: "#feedback",
    icon: book,
  },
];

const MobileHeader = () => {
  return (
    <header
      className="
      bg-dark-details/80 
      fixed w-full h-28 bottom-0 
      flex flex-col items-center
      backdrop-blur-xl
    "
    >
      <img
        className="w-40 h-auto absolute bottom-20"
        src={logo}
        width={200}
        height={96}
        alt="Logo Image BigBurger"
      />
      <ul className="flex gap-8 h-full pb-4 font-semibold text-lg justify-center items-end">
        {navLinks.map((el, i) => (
          <li key={i}>
            <a
              className="flex flex-col items-center text-white hover:text-gray-300"
              href={el.href}
            >
              <img className="w-7" src={el.icon} alt="" />
              {el.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default MobileHeader;
