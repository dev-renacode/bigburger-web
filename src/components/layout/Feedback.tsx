import TestimonialsCard from "../ui/TestimonialsCard";

const Feedback = () => {
  return (
    <section className="pb-50 space-y-6 px-3">
      <div className="text-center space-y-1">
        <h2 className="text-4xl font-bold">Our Happy Customers</h2>
        <p className="text-yellow-100">
          This section shows all the promotions that we currently have in our
          store.
        </p>
      </div>
      <TestimonialsCard
        testimony="BigBurger exceeded all my expectations. The quality of the burgers is outstanding: juicy, perfectly seasoned, and made with the freshest ingredients. The atmosphere is cozy and the service is top-notch. Every visit is an experience I want to repeat again and again. Definitely my favorite burger place! 🍔🔥"
        user="Emma Johnson"
        date="04/10/2025"
      />

      <TestimonialsCard
        testimony="There's no better place for a good burger than BigBurger. Every bite feels homemade yet gourmet, and they always surprise me with new delicious combinations. I highly recommend the Big Deluxe combo, it's an explosion of flavor!"
        user="Michael Smith"
        date="04/15/2025"
      />

      <TestimonialsCard
        testimony="I discovered BigBurger by chance and now I can't stop going. I love the variety on their menu and the personalized service. You can tell they put a lot of care into everything they do. A perfect 10 out of 10!"
        user="Olivia Brown"
        date="04/20/2025"
      />
    </section>
  );
};

export default Feedback;
