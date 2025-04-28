interface Props {
  testimony: string;
  user: string;
  date: string;
}

const TestimonialsCard = ({ testimony, user, date }: Props) => {
  return (
    <article className="bg-dark-details flex flex-col gap-2 px-3 py-5 text-pretty rounded-xl">
      <div className="px-3">
        <p className="text-yellow-200">{user}</p>
        <p className="font-extralight text-sm text-gray-300">{date}</p>
      </div>
      <div className="">
        <p className="font-extralight">
          <Quote />
          {testimony}
          <Quote />
        </p>
      </div>
    </article>
  );
};

const Quote = () => {
  return <span className="font-bold text-amber-500"> " </span>;
};

export default TestimonialsCard;
