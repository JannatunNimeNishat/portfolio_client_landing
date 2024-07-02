import React from "react";

const Education = async () => {
  const db_url = process.env.NEXT_PUBLIC_DB_URL || "";
  const res = await fetch(`${db_url}/education`, {
    next: {
      revalidate: 5,
    },
  });
  const educationSectionData = await res.json();

  const activeEducationSectionData = educationSectionData?.data[0];

  const { degreeName, institute, duration, result, skills } =
    activeEducationSectionData || {};
  return (
    <div  id="education" className=" min-h-[90vh]  relative    flex items-center justify-center text-center lg:text-start lg:justify-start text-white">
      <div className="lg:w-8/12 mx-auto px-5 lg:px-0">
        <div className="text-center bg-gray-700 text-white px-3 py-1 rounded transform my-8 w-3/4 mx-auto block lg:hidden ">
          MY EDUCATION
        </div>
        <h3 className="text-xl lg:text-[24px] lg:leading-[27px] font-semibold text-green-500 mt-3">
          {degreeName}
        </h3>
        <h1 className=" text-2xl  lg:text-4xl lg:leading-[44px] font-bold text-white mt-3 lg:mt-1 lg:w-3/4 ">
          {institute}
        </h1>
        <p className="text-xl  font-semibold mt-6 lg:mt-7">{duration}</p>
        <div className="mt-8 lg:mt-5">
          {skills?.map((skill: any, index: number) => (
            <div
              key={index}
              className="flex items-center justify-center lg:justify-start mt-2 gap-2  text-center"
            >
              <div className="h-4 w-4 bg-green-500 rounded-full hidden lg:block" />
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
      {/* section title  */}
      <div className=" absolute left-0 mt-12 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="text-center bg-gray-700 text-white px-3 py-1 rounded transform rotate-90">
          MY EDUCATION
        </div>
      </div>
    </div>
  );
};

export default Education;
