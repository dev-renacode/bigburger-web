import logo from "../../assets/images/logo.png";
import home from "../../assets/icons/home.svg";
import book from "../../assets/icons/book.svg";

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
  ];

  return (
    <header className="bg-dark-details fixed w-full h-20 bottom-0 flex flex-col items-center">
      <img className="w-40 h-auto absolute bottom-13" src={logo} alt="" />
      <ul className="flex gap-5 justify-center items-end h-full pb-5 font-semibold">
        {navLinks.map((el, i) => (
          <li key={i}>
            <img src={el.icon} alt="" />
            <a className="flex flex-col items-center" href={el.href}>
              {el.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default MobileHeader;
