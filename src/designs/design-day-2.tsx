import Image from "next/image";
import teacher from "../../public/images/teacher.png";
import handMobile from "@/../public/images/mobilehand.png";
export default function Home() {
  return (
    <div className="w-[100%] px-10 min-h-screen">
      <div className="flex justify-between">
        <div>Logo</div>
        <div className="flex w-[60%] justify-between">
          <div>
            <ul className="flex space-x-8">
              <li>Catalogue</li>
              <li>Your Cart</li>
              <li>Favourites</li>
              <li>Your Orders</li>
            </ul>
          </div>
          <div>Get started</div>
        </div>
      </div>
      {/* heder image */}
      <div className="h-[25rem] w-full bg-blue-600 rounded-3xl flex">
        <div className="flex flex-col pt-10 justify-between">
          <div className="ml-12">Explore New Places</div>
          <div className="ml-12">Enjoy every good moment</div>
          <div className="ml-12">
            <div className="bg-black w-[30%] rounded-t-2xl text-center h-[3rem]">
              Online Booking
            </div>
            <div className="bg-white text-black flex mb-5  justify-between h-[6rem] w-[70rem] rounded-b-2xl rounded-tr-2xl">
              <div className="flex justify-between  w-full px-10">
                <div>Enjoy</div>
                <div>Date</div>
                <div>Phone xxx</div>
              </div>
              <div>
                <div className="h-[4rem] w-[8rem] my-4 mr-4 bg-blue-400 rounded-xl text-center">
                  Book Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* middle section */}
      <div className="flex justify-between mt-10 mx-20">
        <div className="h-[13rem] w-[20%]">Flgihts</div>
        <div className="flex w-[80%] h-[12rem]">
          <div className="flex space-x-72 justify-around">
            <div>discount</div>
            <div>Guide</div>
            <div>Support</div>
            <div>Managment</div>
          </div>
        </div>
      </div>
      {/* popluar destination */}
      <div className="mx-20">
        <div className="flex flex-col ">
          <div className="flex flex-col">
            <h4>Popluar Desiantion</h4>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus{" "}
          </p>
        </div>
        <div>arrows</div>
        <div className="flex w-full  space-x-5 justify-between">
          <div className="w-1/4 h-[15rem]">
            <div className="h-[12rem] w-[95%]">Image</div>
            <div>
              <h4>01 --</h4>
              <div className="flex items-center justify-between space-x-5">
                <span>Graboska</span>
                <span>Pexels</span>
              </div>
            </div>
          </div>
          <div className="w-1/4 h-[15rem]">
            <div className="h-[12rem] w-[95%]">Image2</div>
            <div>
              <h4>02 --</h4>
              <div className="flex items-center justify-between space-x-5">
                <span>Grabowskq</span>
                <span>Pexels</span>
              </div>
            </div>
          </div>{" "}
          <div className="w-1/4 h-[15rem]">
            <div className="h-[12rem] w-[95%]">Image2</div>
            <div>
              <h4>02 --</h4>
              <div className="flex items-center justify-between space-x-5">
                <span>Grabowskq</span>
                <span>Pexels</span>
              </div>
            </div>
          </div>
          <div className="w-1/4 h-[15rem]">
            <div className="h-[12rem] w-[95%]">Image2</div>
            <div>
              <h4>02 --</h4>
              <div className="flex items-center justify-between space-x-5">
                <span>Grabowskq</span>
                <span>Pexels</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
