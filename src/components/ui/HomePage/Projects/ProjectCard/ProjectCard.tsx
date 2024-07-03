import { ExportOutlined, GithubOutlined } from "@ant-design/icons";
import Image from "next/image";

const ProjectCard = ({ projectData }: { projectData: any }) => {
  const { title, desc, projectImg, technologyUsed, liveLink, gitLinks } =
    projectData || {};

  return (
    <div className="bg-[#1d293a] text-white rounded-md group cursor-default">
      <Image
        className="w-full rounded-t-md grayscale group-hover:grayscale-0 transition-all duration-300 "
        height={350}
        width={250}
        src={projectImg?.projectHero}
        alt="project img"
      />
      <div className="p-4 mt-0">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="my-3 text-[12px]">{`${desc?.slice(0,150)}...`}</p>
      {/* links */}
        <div className="flex items-center justify-center lg:justify-start gap-3 ">
            {/* git client */}
          <div className="flex flex-col items-center  ">
            <a
              href={gitLinks?.client}
              target="_blank"
              className="text-xl text-gray-500 hover:text-green-500 "
            >
              <GithubOutlined />
            </a>
            
          </div>
            {/* live client */}
          <div className="flex flex-col items-center ">
            <a
              href={liveLink?.client}
              target="_blank"
              className="text-xl text-gray-500 hover:text-green-500 "
            >
              <ExportOutlined />
            </a>
            
          </div>
        </div>
        {/* technology used */}
        <p className="mt-4 text-sm">Technology Used:</p>
        <div className="grid grid-cols-2 mt-2">
            {
              technologyUsed?.map((item:any,index:number)=>{
                return <div key={index} className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-gray-500 duration-200 group-hover:bg-green-500"/>
                  <p  className="text-[12px]">{item}</p>
                </div>
              })  
            }
        </div>
       
      </div>
    </div>
  );
};

export default ProjectCard;
