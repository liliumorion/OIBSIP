import Image from "next/image";
import skills from "../../lib/skills.js";

function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col gap-10 py-4">
       <div className="px-44">
      <h2 className="text-4xl md:text-6xl text-white font-bold">
        Skills
      </h2>
      </div>
      <div className=" grid grid-cols-3 md:grid-cols-4 gap-4 p-8 ">
        {skills.map((skill) => (
          <div key={skill.id} className="flex justify-center items-center p-4">
            <Image
              src={skill.image}
              alt={skill.name}
              className="max-h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
