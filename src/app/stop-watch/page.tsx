"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

const Page = () => {
  // state to store time
  const [time, setTime] = useState(0);

  // state to check stopwatch is running or not
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: null | ReturnType<typeof setTimeout> = null;
    if (isRunning) {
      // setting time from 0 to 1 every 10 milliseconds using js setInterval time
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    // @ts-expect-error
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  //    Calculation
  const hours = Math.floor(time / 36000);
  const minutes = Math.floor((time % 36000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  // Method to start and stop timer
  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  // Method to reset timer back to 0
  const reset = () => {
    setTime(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#356966] to-[#7B9C83]">
      <div className="bg-gradient-to-r from-[#eccfcf] to-[#e9b4b4] w-[32rem] rounded-2xl text-black h-[15rem] flex  justify-evenly flex-col">
        <div className="flex items-center justify-center mx-10 px-4 rounded-[1.3rem]  bg-[#CFC595] border-x-[4px] border-b-[0.7rem] border-[#B4A86D]  gap-x-4 text-[2.7rem] font-digitalClock text-[#676767] text-5xl py-4  pb-5 felx-1 w-[80%]  ">
          <span>{hours}</span>
          <span>:</span>
          <span>{minutes.toString().padStart(2, "0")}</span>
          <span>:</span>
          <span className="w-[2rem] mr-[0.5rem]">
            {seconds.toString().padStart(2, "0")}
          </span>
          <span>:</span>
          <div className="flex items-center justify-center w-[2.5rem]">
            <span>{milliseconds.toString().padStart(2, "0")}</span>
          </div>
        </div>
        <div className="flex items-center justify-evenly pt-2 pb-6">
          {isRunning ? (
            <>
              <button
                onClick={startAndStop}
                className="w-[6rem] rounded-lg shadow-lg border-b-4 p-x-6 pt-1 bg-[#eccfcf] hover:bg-[#e9b4b4] hover:border-b-[#7B9C83] uppercase"
              >
                Stop
              </button>
              <button
                onClick={reset}
                className="w-[6rem] rounded-lg shadow-lg border-b-4 p-x-6 pt-1 bg-[#eccfcf] hover:bg-[#e9b4b4] hover:border-b-[#7B9C83] uppercase"
              >
                Clear
              </button>{" "}
            </>
          ) : (
            <button
              onClick={startAndStop}
              className="w-[6rem] rounded-lg shadow-lg border-b-4  p-x-6 pt-1 bg-[#eccfcf] hover:bg-[#e9b4b4] hover:border-b-[#7B9C83] uppercase"
            >
              Start
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
