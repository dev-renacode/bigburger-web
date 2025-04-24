interface Props {
  text: string;
  logo: string;
  className: string;
}

const ButtonWhatsapp = ({ text, logo, className }: Props) => {
  return (
    <button
      className={`flex items-center justify-center gap-3 px-5 py-2 rounded-xl ${className}`}
    >
      <img className="w-8" src={logo} alt="" />
      <p className="text-white font-medium">{text}</p>
    </button>
  );
};

export default ButtonWhatsapp;
