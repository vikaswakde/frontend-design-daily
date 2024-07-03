import Image from "next/image";
import teacher from "../../public/images/teacher.png";
import handMobile from "@/../public/images/mobilehand.png";
export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h4 className="text-3xl font-extrabold">Hello Welcome to my website</h4>
      <p className="font-bold">This is is the list of my work i am doing</p>
      <ul>
        <li>
          <a href="/frontend-mentor-1" className="cursor-pointer">
            1. Responsive Card Design
          </a>
        </li>
      </ul>
    </div>
  );
}
