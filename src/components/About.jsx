import React from "react";

function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center ">
        <div className="lg:flex-grow md:w-1/2  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Eldad.
            <br className="hidden lg:inline-block" />
            I'm a Front-End Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            I‌ am ‌a‌ ‌software‌ ‌developer‌ ‌with‌ ‌2‌ ‌years‌ ‌of‌
            ‌experience‌ ‌in‌ ‌building‌ ‌front-end‌‌ applications.‌ ‌Proven‌
            ‌experience‌ ‌and‌ ‌skills‌ ‌include‌ ‌building‌ ‌web‌
            ‌applications‌‌ in‌ ‌React‌.‌ ‌I‌ ‌also‌ ‌have‌
            ‌experience‌ ‌in‌ ‌backend‌ ‌development‌ ‌using‌‌ NodeJs‌ ‌and‌
            ‌Express.‌ ‌I‌ ‌am‌ ‌very‌ ‌flexible‌ ‌with‌ ‌technologies‌ ‌and‌
            ‌able‌ ‌to‌ ‌adapt‌ ‌to‌‌ new‌ ‌environments‌ ‌quickly. I have been
            working on designing ‌and‌ ‌developing‌ ‌software‌ ‌solutions‌ ‌for‌
            ‌clients‌ ‌using‌‌ React.‌ ‌Creating‌ ‌test‌ ‌plans‌ ‌and‌
            ‌Carrying‌ ‌out‌ ‌manual‌ ‌and‌ ‌automated‌ ‌tests.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              lets work
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-black-700 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="eldad"
            src="LINKDPROF.jpeg"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
