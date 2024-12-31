import React from "react";

import bg from "../../../../../src/assets/image/feedback/testi_bg_3 (1).jpg";
import icon from "../../../../../src/assets/image/icon/title_shape.svg";
import Image from "next/image";
import Container from "@/components/Share/Container/Container";
import FeedbackCard from "./FeedbackCard";


const Feedback = () => {
  return (
    <div className="my-20">
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: `url('${bg.src}')`,
        }}
      >
        <Container>
          <div className="relative text-center z-10 top-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Image src={icon} alt="icon" />
              <span className="text-[#44C7F4] font-semibold uppercase">
                CUSTOMER FEEDBACK
              </span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mt-2">
              What Happy <span className=" text-[#44C7F4]">Clients Says</span>
            </h2>
          </div>
          <FeedbackCard/>
        </Container>
      </div>
    </div>
  );
};

export default Feedback;
