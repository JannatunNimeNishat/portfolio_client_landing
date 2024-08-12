import React from 'react';
import SingleExperience from './SingleExperience/SingleExperience';

const Experience = async() => {
    const db_url = process.env.NEXT_PUBLIC_DB_URL || "";
    const res = await fetch(`${db_url}/experience`, {
      next: {
        revalidate: 5,
      },
    });
    const experienceSectionData = await res.json();
  
    return (
        <div   className="  py-24 relative    flex items-center justify-center text-center lg:text-start lg:justify-start text-white">
        <div className="lg:w-8/12 mx-auto px-5 lg:px-0 ">
        <div className="text-center bg-gray-700 text-white px-3 py-1 rounded transform my-8 w-3/4 mx-auto block lg:hidden ">
          MY EXPERIENCE
        </div>
       <div className='flex flex-col lg:flex-col gap-14'>
       {
            experienceSectionData?.data?.map((experienceData:any)=><SingleExperience
            key={experienceData?._id}
            experienceData={experienceData}
            />)
        }
       </div>
        </div>
             {/* section title  */}
      <div className=" absolute left-0 mt-12 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="text-center bg-gray-700 text-white px-3 py-1 rounded transform rotate-90">
        MY EXPERIENCE
        </div>
      </div>
        </div>
    );
};

export default Experience;