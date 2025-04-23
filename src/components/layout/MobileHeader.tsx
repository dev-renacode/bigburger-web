import logo from "../../assets/images/logo.png";
import home from "../../assets/icons/home.svg";
import book from "../../assets/icons/book.svg";
import promo from "../../assets/icons/promo.svg";
import phone from "../../assets/icons/phone.svg";

const MobileHeader = () => {
  const navLinks = [
    {
      label: "Inicio",
      href: "#",
      icon: home,
    },
    {
      label: "Menu",
      href: "#",
      icon: book,
    },
    {
      label: "Promo",
      href: "#",
      icon: promo,
    },
    {
      label: "Contacto",
      href: "#",
      icon: phone,
    },
  ];

  return (
    <header className="bg-dark-details fixed w-full h-28 bottom-0 flex flex-col items-center">
      <img className="w-40 h-auto absolute bottom-20" src={logo} alt="" />
      <ul className="flex gap-8 justify-center items-end h-full pb-4 font-semibold text-lg">
        {navLinks.map((el, i) => (
          <li key={i}>
            <a className="flex flex-col items-center text-white hover:text-gray-300" href={el.href}>
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
