import Image from './Image';
const Cards = ({ job }) => {
  console.log(job.logo);
  return (
    <article key={job.id}>
      <section>
        <Image url={job.logo} desc={job.company} />
      </section>
    </article>
  );
};

export default Cards;
