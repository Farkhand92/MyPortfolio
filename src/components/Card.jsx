import React, { useState } from "react";

const Card = ({
  height = "h-60",
  width = "w-70 lg:w-85",
  bgImg,
  bgOpacity = '1',
  cClass,
  content,
  bg = "bg-black",
  bgSize = "bg-cover",
  isFlipped = false,
  onFlipToggle = null,
  backSideContent = null
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`card relative ${height} ${width} 2xl:w-100 3xl:w-7xl 4xl:w-140 perspective mt-4 md:m-8 mx-2 2xl:h-60`}
    >
      {/* Flip Container */}
      <div
        className={`
          relative w-full h-full transition-transform duration-700 
          ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
        `}
        style={{
          transformStyle: "preserve-3d",
          transitionDelay: "0.15s",
        }}
      >
        {/* FRONT SIDE */}
        <div
          className={`
            absolute inset-0 rounded-2xl overflow-hidden ${bg}
            [backface-visibility:hidden]
          `}
          style={{
            transform: "rotateY(0deg)",
            boxShadow: isHovered
              ? "4px 8px 20px rgba(147, 51, 234, 1)"
              : "0 5px 35px rgba(147, 51, 234, 0.6)",
            transition: "box-shadow 0.3s ease",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Background */}
          <div
            className={`absolute inset-0 bg-no-repeat ${bgSize} bg-center`}
            style={{
              backgroundImage: `url(${bgImg})`,
              opacity: bgOpacity
            }}
          ></div>
          {/* Content */}
          <div className={cClass}>{content}</div>
        </div>

        {/* BACK SIDE */}
        <div
          className={`absolute w-full h-full rounded-2xl bg-gradient-to-br from-violet-800 to-black text-white p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-center items-center`}
        >
          <p className="text-center text-sm md:text-base font">{backSideContent}</p>
          <button
            className="mt-4 px-4 py-2 bg-white text-black rounded hover:bg-gray-800 hover:text-amber-50 hover:border-white hover:border-2 2xl:scale-110"
            onClick={onFlipToggle}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;