import works from "../../lib/works";
import Image from "next/image";
import Link from "next/link";
const Works = () => {
  return (
    <section
      id="works"
      className="min-h-screen flex flex-col gap-10"
    >
      <div>
      <h2 className="text-4xl md:text-6xl font-bold py-2">
        Works
      </h2>
      </div>
      <div className="flex flex-col md:flex-row-reverse justify-center items-center gap-8">
      {works.map((work) => (<div key={work.id} className="card w-[320px] h-[480px] glass">
  <figure><img src={work.image} alt={work.title}/></figure>
  <div className="card-body">
    <h2 className="card-title">{work.title}</h2>
    <p>{work.description}</p>
    <div className="card-actions justify-end">
      <Link className="btn btn-outline w-16" href={work.path} target="_blank">Demo</Link>
      <Link className="btn btn-outline w-16" href={work.code} target="_blank">Code</Link>
    </div>
  </div>
</div>))}
      </div>
    </section>
  );
};
export default Works;