import SkillCard from "./skillCard";

const skillCards = [
  {
    language: "Javascript",
    description: "I can explain Closures, Hoisting.. and so much more",
    url: "/images/javascript.png",
  },
  {
    language: "Typescript",
    description:
      "Using with React, basic usage for type checking in compile time",
    url: "/images/typescript.png",
  },
  {
    language: "Node",
    description:
      "basic usage of node as server and understanding middlewares concept",
    url: "",
  },
  {
    language: "ReactJs",
    description:
      "understanding how it works with useEffect and useState, now studying Suspense and more.",
    url: "/images/react.svg",
  },
  {
    language: "Vite",
    description: "Recently, it grows fastly by most developer and community",
    url: "/images/vite.svg",
  },
];

function Skill() {
  return (
    <section
      id='skill'
      className='pt-[--header-height] bg-[--main-section-connect-color] p-8 text-gray-200'
    >
      <h2>What Can You Do!</h2>
      <div className='w-full mt-10 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'>
        {skillCards.map((skillCard) => (
          <SkillCard skillCard={skillCard}></SkillCard>
        ))}
      </div>
    </section>
  );
}

export default Skill;
