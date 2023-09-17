import React from 'react';

const GlobalLeaders = ({ cardItems }) => (
  <div className="flex flex-col gap-10 lg:flex-row lg:gap-20">
    {cardItems.map((item, index) => (
      <div
        style={{ boxShadow: '0px 1px 8px 0px rgba(20, 26, 31, 0.20)' }}
        key={index}
        className="rounded-xl bg-white p-[28px]  text-center  lg:flex lg:w-[384px] lg:flex-col lg:justify-between"
      >
        <img src={item.imgSrc} alt={item.alt} />

        <h3 className="mt-16 mb-6 text-xl font-bold">{item.title}</h3>
        <p className="mb-16">{item.text}</p>

        {/* Link each item with a link tag here */}
        <button className="mx-auto text-center font-bold uppercase text-[#0073E5]">
          <span className="flex items-center gap-2 ">
            <span>Learn more</span>

            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="12"
                viewBox="0 0 20 12"
                fill="none"
              >
                <path
                  d="M0.884277 6H17.5816M17.5816 6L12.3637 1M17.5816 6L12.3637 11"
                  stroke="#0073E6"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </span>
        </button>
      </div>
    ))}
  </div>
);

export default GlobalLeaders;
