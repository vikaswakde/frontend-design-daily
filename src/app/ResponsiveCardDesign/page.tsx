import React from "react";
import SummaryCards from "./SummaryCards";
const page = () => (
  <div className="bg-white flex items-center justify-center">
    <div className="flex flex-col items-center min-h-screen md:flex-row ">
      <div className="h-[24rem] w-full  rounded-b-3xl pt-5 md:rounded-3xl bg-gradient-to-b from-slate-blue to-royal-blue">
        <div className="flex items-center justify-center">Your Result</div>
        <div className="flex justify-center h-[9rem] items-center bg-gradient-to-b from-cobalt-blue to-royal-blue rounded-full w-[9rem] mx-auto my-4 flex-col ">
          <span className="text-[3rem]">76</span>
          <span>of 100</span>
        </div>
        <div className="flex items-center justify-center text-2xl font-bold">
          Great
        </div>
        <div className="flex items-center justify-center px-9 my-4">
          You scored higher then 65% of the people who have taken the tests.
        </div>
      </div>
      <div className="h-[25.5rem] w-full flex flex-col justify-between bg-gradient-to-b from-pale-white to-white rounded-3xl">
        <div className="mx-5 mt-5">Summary</div>
        <div>
          <SummaryCards />
        </div>
        <div className="bg-gray-500 h-[3.4rem] flex items-center justify-center rounded-full mb-4 mx-7 ">
          Continue
        </div>
      </div>
    </div>
  </div>
);

export default page;
