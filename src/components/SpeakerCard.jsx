import React from "react";

const bgColors = [
  "bg-[#5373A6]",
  "bg-[#ACC8E2]",
  "bg-[#FFD9D9]",
  "bg-[#DBDCDE]",
  "bg-[#0C223F]",
  "bg-[#DF231D]",
];
const textColors = [
  "text-[#DBDCDE]",
  "text-[#0C223F]",
  "text-[#DF231D]",
  "text-[#5373A6]",
  "text-[#ACC8E2]",
  "text-[#FFD9D9]",
];
const borderColors = [
  "border-[#DBDCDE]",
  "border-[#0C223F]",
  "border-[#DF231D]",
  "border-[#5373A6]",
  "border-[#ACC8E2]",
  "border-[#FFD9D9]",
];

const SpeakerCard = ({ speaker, bgIndex }) => {
  const handleReadMore = () => {
    if (speaker.moreDetails) {
      window.open(speaker.moreDetails, "_blank");
    } else {
      alert("More details not available for this speaker.");
    }
  };

  return (
    <div className="laptop:z-50 h-[600px] laptop:h-[320px] p-3 rounded-lg flex flex-col laptop:flex-row items-stretch laptop:w-[80%]">
      {/* Speaker Image Card */}
      <div
        className={`w-full laptop:w-[30%] p-3 rounded-lg shadow-lg flex flex-col items-center justify-between text-center m-2 transition-all duration-700 ${bgColors[bgIndex]} ${textColors[bgIndex]}`}
      >
        <div className="flex-grow flex items-center justify-center">
          <img
            src={speaker.photo}
            alt={speaker.name}
            className="w-32 h-32 laptop:w-40 laptop:h-40 p-1 object-cover"
          />
        </div>
        <div className="flex-grow laptop:h-full">
          <h2 className="text-lg font-semibold">{speaker.name}</h2>
          <p className="text-sm">{speaker.title}</p>
        </div>
      </div>

      {/* Speaker Details Card */}
      <div
        className={`w-full laptop:w-[65%] p-3 rounded-lg shadow-lg flex flex-col justify-between m-2 transition-all duration-700 ${bgColors[bgIndex]} ${textColors[bgIndex]}`}
      >
        <div className="flex-grow mb-2 laptop:text-s">
          <p>{speaker.description}</p>
        </div>

        <div className="flex justify-end items-end w-full scale-[0.8]">
        <button
  onClick={handleReadMore}
  className="group mt-4 px-6 py-2 bg-white/10 backdrop-blur-md border border-white text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg flex items-center gap-1"
>
  Read More
  <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-1"><svg
  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
</svg></span>
</button>

        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;

