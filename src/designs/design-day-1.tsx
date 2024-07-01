import Image from "next/image";
import teacher from "../../public/images/teacher.png";
import handMobile from "@/../public/images/mobilehand.png";
export default function Home() {
  return (
    <div>
      {/* navigation header */}
      <div className="flex justify-between pt-6 px-4">
        <span>Logo</span>
        <div className="">
          <ul className="flex space-x-9 ">
            <li>Platform</li>
            <li>Pricing</li>
            <li>Events</li>
            <li>Abouts Us</li>
          </ul>
        </div>
        <div>
          <button>Join us</button>
        </div>
      </div>

      {/* landing page */}
      <div className="flex justify-around  px-4 pt-8  ">
        <div className="min-h-[85vh] mb-28 w-[46%] rounded-xl">
          <div className=" bg-gray-500 min-h-[70%] rounded-2xl flex  flex-col justify-around p-5">
            <div className="font-mono text-8xl -tracking-[0.07em] pr-5">
              New goals require new knowldge
            </div>
            <div className="max-w-[45%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              doloribus, possimus, dolor eligendi illum repellendus maxime fuga
              saepe veritatis necessitatibus tenetur animi voluptas quae?
              Veritatis, eum.
            </div>
          </div>
          <div className="flex mt-4 max-h-[30%] ">
            <div className="bg-gray-400 min-w-[70%] mr-5 rounded-3xl">
              <Image src={teacher} alt="image" className="object-cover  h-44" />
            </div>
            <div className="bg-red-500 min-w-[30%] rounded-3xl">
              bottom right
            </div>
          </div>
        </div>
        <div className="min-h-[85vh] bg-gray-500 mb-28 w-[45%] rounded-xl flex items-stretch ">
          <Image
            src={handMobile}
            alt="mobile"
            className="object-fill w-[85vh] h-[85vh]"
          />
        </div>
      </div>
    </div>
  );
}
