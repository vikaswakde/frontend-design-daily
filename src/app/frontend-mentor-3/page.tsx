"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

type Props = {};

function Page({}: Props) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    const userAge = e.target[0].value;
    console.log(userAge);
    console.log(e);
    // setAge(userAge);
    ageCal(userAge);
  };

  const ageCal = (userAge: number) => {
    const currentYear = 2024;
    const agePassed = currentYear - userAge;
    console.log(agePassed);
    setAge(agePassed);
  };
  const [age, setAge] = useState(0);
  return (
    <main className="flex  items-center justify-center min-h-screen font-poppinsRegular ">
      <div className="bg-gray-300 w-[33rem] h-[23rem] rounded-2xl rounded-br-[9rem] text-black ">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col  h-36 items-center justify-center gap-3">
            <label
              htmlFor="year"
              className="uppercase text-[0.9rem] tracking-[0.2rem]"
            >
              year
            </label>
            {/* <select
              //   type=""
              className="h-12 w-28 pr-1 text-center text-sm rounded-lg appearance-auto hover:appearance-none flex items-center justify-center"
              //   placeholder="Year"
              name="year"
            >
              <option value="placeholder" selected>
                2000
              </option>
              <option value="value1">2001</option>
              <option value="value2">2002</option>
              <option value="value3">2003</option>
            </select> */}
            <input
              type="text"
              className="h-12 w-28 pr-1 text-center text-sm rounded-lg appearance-auto hover:appearance-none flex items-center justify-center"
              placeholder="Year"
              name="year"
            />
          </div>
          <div className="relative">
            <hr className="border-b border-red-600 mb-2 mr-6" />
            <button type="submit">
              <img
                src="./assets/images/icon-arrow.svg"
                alt="icon-arrow"
                className="absolute  right-0 -top-[1.7rem] h-16 w-16 bg-purple-600 rounded-full p-2 flex items-center justify-center mr-6 "
                // className="bg-purple-600 rounded-full p-2 "
              />
            </button>
          </div>
        </form>
        <div className="min-h-[57%] flex items-center justify-center gap-3">
          <span className="text-[3rem] text-purple-900 font-extrabold">
            {age}
          </span>
          <span className="text-3xl font-bold">years old</span>
        </div>
      </div>
    </main>
  );
}

export default Page;
