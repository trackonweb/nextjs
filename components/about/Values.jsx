import React from "react";

const values = [
  {
    id: 1,
    title: "Transparency",
    description:
      "Transparency is our cornerstone. We believe in open communication, honesty, and clarity at every step. By fostering transparency, we build trust with our clients, ensuring they have a clear view of our processes, actions, and decisions.",
  },
  {
    id: 2,
    title: "Flexibility",
    description: `Flexibility defines our adaptability to evolving needs. We embrace change, pivot swiftly, and tailor our approach to suit diverse project requirements. Our agile mindset allows us to remain responsive and deliver dynamic solutions effectively.`,
  },
  {
    id: 3,
    title: "Quality",
    description:
      "Quality is ingrained in everything we do. From conceptualization to deployment, we uphold rigorous standards to ensure excellence. Our commitment to precision, robustness, and innovation guarantees that our solutions exceed industry benchmarks and client expectations.",
  },
  {
    id: 4,
    title: "Professionalism",
    description:
      "Professionalism guides our conduct. We adhere to ethical principles, exhibit reliability, and maintain a high standard of work ethics. Our team embodies professionalism through expertise, dedication, and a client-centric approach, ensuring a seamless experience throughout collaborations.",
  },
];

const Values = () => {
  return (
    <div className="py-20 bg-[#0588b0]">
      <div className="container mx-auto">
        <h2 className="lg:text-[34px] text-[28px] font-[700] leading-10 text-center text-white xl:mx-20 lg:mx-10 mx-4">
          Our Values
        </h2>
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-start items-start xl:mx-20 lg:mx-10 mx-4 pt-10">
          {values.map((item, index) => {
            return (
              <div class="card" key={index}>
                <p class="card-title">{item.title}</p>
                <p class="small-desc">{item.description}</p>
                <div class="go-corner">
                  <div class="go-arrow">→</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Values;
