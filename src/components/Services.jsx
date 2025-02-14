import React from "react";
import Button from "./Button";

const Services = () => {
  return (
    <div className="w-[100%] h-[100vh] bg-[#101010] font-mont">
      <div className="text-white text-center text-5xl border-b-[1px] border-[#404040] py-20 sm:px-10 px-5">
        We blend the power of strategy, design, and performance marketing to
        transform founders visions into remarkable brands. See our services.
      </div>

      <div className="w-[100%] bg-[#101010] flex text-[#fff] pt-5 sm:px-10 px-5">
        {/* Left */}
        <div className="w-[50%] text-xl">Tomorrows brands, today.</div>

        {/* Right */}
        <div className="w-[50%]">
          <div className="w-[60%] flex flex-col gap-5 text-xl">
            <div>We are a growth accelerator.</div>

            <div>
              Since 2013, we have been recognized globally for helping founders
              build market-defining brands that drive sustainable revenue and
              shape culture.
            </div>

            <div>
              In 2023, we launched our Venture Model to further support
              founders.
            </div>

            <div>
              We partner with five clients a year to give each one the focus and
              care they deserve.
            </div>

            <div>
              <Button text={"Learn more"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
