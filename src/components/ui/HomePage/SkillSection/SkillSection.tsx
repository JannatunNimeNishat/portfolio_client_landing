import SkillTabs from "./SkillTabs/SkillTabs";

const SkillSection = async () => {
  const db_url = process.env.NEXT_PUBLIC_DB_URL || "";
  const res = await fetch(`${db_url}/skill`, {
    next: {
      revalidate: 5,
    },
  });
  const skillSectionData = await res.json();
  const webSkills = skillSectionData?.data?.filter(
    (skill: any) => skill?.category === "Web"
  );
  const programmingSkills = skillSectionData?.data?.filter(
    (skill: any) => skill?.category === "Programming"
  );

  return (
    <div id="skill" className=" min-h-[85vh]  relative    flex items-center justify-center text-center lg:text-start lg:justify-start text-white">
      <div className="lg:w-8/12 mx-auto px-8 lg:px-0">
        <div className="text-center bg-gray-700 text-white px-3 py-1 rounded transform my-8 w-3/4 mx-auto block lg:hidden ">
          MY SKILLS
        </div>

        <SkillTabs
          webSkills={webSkills}
          programmingSkills={programmingSkills}
        />
      </div>
      {/* section title  */}
      <div className=" absolute right-0 mt-12 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="text-center bg-gray-700 text-white px-3 py-1 rounded transform rotate-90">
          MY SKILLS
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
