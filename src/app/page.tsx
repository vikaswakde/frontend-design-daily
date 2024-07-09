import Image from "next/image";
import teacher from "../../public/images/teacher.png";
import handMobile from "@/../public/images/mobilehand.png";
import { projectData } from "./utils/projectData";
export default function Home() {
  // console.log(listItems);
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h4 className="text-3xl font-extrabold">Hello Welcome to my website</h4>
      <p className="font-bold">This is is the list of my work i am doing</p>
      <ul className="">
        {projectData.map((project) => (
          <li
            key={project.id}
            className="flex flex-col gap-2 mt-2 bg-gray-300 text-black px-4 py-2 rounded-xl hover:bg-slate-50 hover:translate-x-1 hover:transform-none "
          >
            <a href={`/${project.folderName}`} className="cursor-pointer">
              {project.id}. {project.projectName}
            </a>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
}
