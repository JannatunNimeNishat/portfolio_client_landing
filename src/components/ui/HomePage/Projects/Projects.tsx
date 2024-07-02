import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = async() => {
    const db_url = process.env.NEXT_PUBLIC_DB_URL || "";
    const res = await fetch(`${db_url}/project`, {
      next: {
        revalidate: 5,
      },
    });
    const projectSectionData = await res.json();
  return (
    <div className="  my-24 relative    flex items-center justify-center text-center lg:text-start lg:justify-start text-white">
        <div className="lg:w-8/12 mx-auto px-5 lg:px-0 grid grid-cols-3 gap-8">
        {
            projectSectionData?.data?.map((projectData:any)=><ProjectCard key={projectData?._id}
            projectData={projectData}
            />)
        }
        </div>
        {/* section title  */}
       <div className=" absolute left-0 mt-12 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="text-center bg-gray-700 text-white px-3 py-1 rounded transform rotate-90">
          MY PROJECTS 
        </div>

      </div>
    </div>
  );
};

export default Projects;
