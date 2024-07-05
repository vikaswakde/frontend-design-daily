"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

const ChallengeTwo = () => {
  const [selectedRating, setSelectedRating] = useState<number>();
  const [isSubmited, setIsSubmitted] = useState(false);

  const handleSelectedRating = (rating: number) => {
    setSelectedRating(rating);
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitted(true);
  }
  return !isSubmited ? (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="bg-gradient-to-tr from-dark-blue to-dark-blue-default w-[25rem] h-[25rem] rounded-3xl flex flex-col items-center justify-around"
        onSubmit={handleSubmit}
      >
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
        <div className="flex w-full justify-around items-center h-12 px-5">
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              onClick={() => handleSelectedRating(rating)}
              className="bg-gray-600 shadow-slate-500 w-8 rounded-full h-8 p-6 flex items-center justify-center active:text-black active:bg-white hover:bg-orange-500 text-white "
              key={rating}
              type="button"
            >
              {rating}
            </button>
          ))}
        </div>
        <button
          // disabled={selectedRating == undefined}
          className="w-[85%] bg-cyan-800 rounded-full h-10"
        >
          Submit
        </button>
      </form>
    </div>
  ) : (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gradient-to-tr from-dark-blue to-dark-blue-default w-[25rem] h-[25rem] rounded-3xl flex flex-col items-center justify-around text-center">
        <img
          src="./assets/images/illustration-thank-you.svg"
          className="mt-4 h-23 -mb-3"
          alt="icon-thank-you"
        />
        <div className="bg-gray-600 text-blue-300 px-4 py-2 rounded-full -mb-4">
          <p>You selected {selectedRating} out of 5</p>
        </div>
        <h1 className="pl-5 text-2xl font-bold -mb-4">Thank You!</h1>
        <p className="px-8 text-sm -mt-6 pb-5 text-gray-300">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
};

export default ChallengeTwo;
