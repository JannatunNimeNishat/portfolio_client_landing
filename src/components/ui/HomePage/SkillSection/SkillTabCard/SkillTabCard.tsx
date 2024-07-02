import { Progress } from "antd";
import React from "react";

const SkillTabCard = ({ skillData }: { skillData: any }) => {
  
  const { name, percentage } = skillData || {};
  return (
    <div className="relative bg-[#1d293a] py-6 mt-6 rounded-md">
      {" "}
      <div className=" flex items-center justify-between  px-4">
        <p className="text-xl font-bold">{name}</p>
        <p className=" font-bold text-xl bg-green-500 text-white px-2 rounded-md">
          {percentage}%
        </p>
      </div>
      <Progress className="text-green-500 absolute -bottom-2 " showInfo={false}  strokeColor={"green"} status="active" percent={percentage} />
    </div>
  );
};

export default SkillTabCard;
