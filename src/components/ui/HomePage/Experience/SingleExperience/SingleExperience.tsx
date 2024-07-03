const SingleExperience = ({ experienceData }: { experienceData: any }) => {
  const { companyName, duration, position, desc } = experienceData || {};
  return <div className="">
   <h3 className="text-xl lg:text-[24px] lg:leading-[27px] font-semibold text-green-500 mt-3">
          {companyName}
        </h3>
        <h1 className=" text-2xl  lg:text-4xl lg:leading-[44px] font-bold text-white mt-3 lg:mt-1 lg:w-3/4 ">
          {position}
        </h1>
        <p className="text-xl  font-semibold mt-6 lg:mt-7">{duration}</p>
        <p className="text-xl  font-semibold mt-6 lg:mt-7">{desc}</p>
  </div>;
};

export default SingleExperience;
