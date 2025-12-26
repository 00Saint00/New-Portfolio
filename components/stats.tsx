"use client";
import CountUp from "react-countup";

const statData = [
  {
    number: 2,
    text: "Years of Expereience",
  },
  {
    number: 10,
    text: "Projects Completed",
  },
  {
    number: 200,
    text: "Code Commits",
  },
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-2 xl:flex gap-10 max-w-[80vw] mx-auto xl:max-w-none mb-5 md:mb-0">
          {statData.map((stat, index) => {
            const isLastItem = index === statData.length - 1;
            return (
              <div
                className={`flex gap-4 items-center justify-center xl:justify-start xl:flex-1  ${
                  isLastItem ? "col-span-2 xl:col-span-1" : ""
                }`}
                key={index}
              >
                <CountUp
                  end={stat.number}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  }`}
                >
                  {stat.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
