"use client";
import PrimaryBtn from "@/components/ui/Button/PrimaryBtn";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SingleProjectPage = ({ params }: { params: any }) => {
  const { projectId } = params;

  const [projectData, setProjectData] = useState<any>(null);

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_DB_URL}/project/${projectId}`
        );

        if (res.ok) {
          const projectData = await res.json();
          setProjectData(projectData);
        } else {
          console.error("Failed to fetch project data");
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    if (projectId) {
      fetchProjectData();
    }
  }, [projectId]);

  if (!projectData) {
    return <div className="text-green-500 text-xl font-semibold text-center flex items-center justify-center min-h-screen ">Loading...</div>;
  }
  const { title, desc, projectImg, technologyUsed, liveLink, gitLinks, _id } =
    projectData?.data || {};
  return (
    <div className="max-w-[1440px]  mx-auto text-white">
      <div className="lg:w-9/12 mx-auto py-20 px-5 lg:px-0">
        <div className=" flex flex-col items-center  ">
          <h1 className="text-3xl lg:text-5xl font-bold text-green-500">{title}</h1>
          <p className="lg:text-xl py-4 lg:py-8 text-center lg:w-3/4 mx-auto">
            This page contains the case study of {title} Project which includes
            the Project Overview, Tools Used and Live Links to the official
            product.
          </p>
          <Link href={liveLink?.client} target="_blank" className="mt-6 lg:mb-5">
            <PrimaryBtn>SEE LIVE</PrimaryBtn>
          </Link>
          <Image
            className="lg:w-2/4 mt-14 rounded-t-md grayscale hover:grayscale-0 transition-all duration-300 "
            height={350}
            width={250}
            src={projectImg?.projectHero}
            alt="project image"
          />
        </div>
        <h3 className="mt-20 text-green-500 font-bold text-2xl lg:text-3xl">
          Project Overview
        </h3>
        <p className="mt-5 leading-6 lg:leading-7">{desc}</p>
        <h3 className="mt-20 text-green-500 font-bold text-2xl lg:text-3xl">Tools Used</h3>
        <div className="mt-5  lg:flex flex-row items-center gap-4 ">
          {technologyUsed?.map((item: string, index: number) => (
            <div
              key={index}
              className="px-3 py-2 bg-green-500 text-white rounded-md mt-3 lg:mt-0"
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-20 text-green-500 font-bold text-2xl lg:text-3xl">
          Project GitHub Link
        </h3>
        <div className="mt-5 flex items-center gap-3">
          <Link href={gitLinks?.client} target="_blank">
            <PrimaryBtn>CLIENT</PrimaryBtn>
          </Link>
          <Link href={gitLinks?.server} target="_blank">
            <PrimaryBtn>SERVER</PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleProjectPage;
