/* eslint-disable @next/next/no-img-element */
import React from "react";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form className="bg-red-500 w-[25rem] h-[25rem] rounded-3xl flex flex-col items-center justify-around">
        <div className="w-full pl-6 pt-4 -mb-2">
          <div className="bg-green-900 w-fit p-3 rounded-full">
            <img
              src="./assets/images/icon-star.svg"
              className="rounded-full  h-5 w-5 z-50"
              alt="icon-star"
            />
          </div>
        </div>
        <h1 className="mr-auto pl-5 text-2xl font-bold">How did we do?</h1>
        <p className="px-6 text-sm -mt-6">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul className="flex w-full justify-around items-center h-12 px-5">
          {[1, 2, 3, 4, 5].map((num) => (
            <li
              className="bg-green-900 w-8 rounded-full h-8 p-6 flex items-center justify-center active:text-black active:bg-white hover:bg-orange-500 text-white "
              key={num}
            >
              {num}
            </li>
          ))}
        </ul>
        <button className="w-[85%] bg-cyan-800 rounded-full h-10">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
