"use client";
import React, { useState } from "react";
import SkillTabCard from "../SkillTabCard/SkillTabCard";

const SkillTabs = ({
  webSkills,
  programmingSkills,
}: {
  webSkills: any;
  programmingSkills: any;
}) => {
  const [activeTab, setActiveTab] = useState(1);
  const handleActiveTabClick = (tabValue: number) => {
    setActiveTab(tabValue);
  };
  return (
    <div>
      {/* tab headers */}
      <div className="flex items-center gap-5">
        <button
          onClick={() => handleActiveTabClick(1)}
          className={`${
            activeTab === 1
              ? "bg-green-500 border border-green-500 text-white"
              : "border border-green-500"
          } px-3 py-2  rounded-md`}
        >
          Web
        </button>
        <button
          onClick={() => handleActiveTabClick(2)}
          className={`${
            activeTab === 2
              ? "bg-green-500 border border-green-500 text-white"
              : "border border-green-500"
          } px-3 py-2  rounded-md`}
        >
          Programming
        </button>
        <button
          onClick={() => handleActiveTabClick(3)}
          className={`${
            activeTab === 3
              ? "bg-green-500 border border-green-500 text-white"
              : "border border-green-500"
          } px-3 py-2  rounded-md`}
        >
          Others
        </button>
        <button
          onClick={() => handleActiveTabClick(4)}
          className={`${
            activeTab === 4
              ? "bg-green-500 border border-green-500 text-white"
              : "border border-green-500"
          } px-3 py-2  rounded-md`}
        >
          Tools
        </button>
      </div>
      {/* tab body */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 min-h-[250px]  mb-5 ">
        {activeTab === 1 &&
          webSkills?.map((skillData: any, index: number) => (
            <SkillTabCard key={index} skillData={skillData} />
          ))}
        {activeTab === 2 &&
          programmingSkills?.map((skillData: any, index: number) => (
            <SkillTabCard key={index} skillData={skillData} />
          ))}
      </div>
    </div>
  );
};

export default SkillTabs;
