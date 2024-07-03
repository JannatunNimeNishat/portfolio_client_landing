"use client"
import Image from "next/image";
import React, { useState } from "react";
const blogData: any = [
  {
    _id: "1",
    title: "The Future of Web Development: Trends to Watch in 2024",
    imageURL: "https://i.ibb.co/JH0ppfJ/future-Of-Web-Development.png",
    description:
      "As we move further into 2024, the landscape of web development continues to evolve at a rapid pace. From the rise of serverless architectures to the growing importance of progressive web apps (PWAs), this article explores the key trends that developers need to watch out for in the coming year.",
    date: "07 Feb, 2024",
    ert: "14 mins",
    tags: ["Web Development", "Trends", "PWAs", "Serverless"],
  },
  {
    _id: "2",
    title: "AI and Machine Learning",
    imageURL: "https://i.ibb.co/y0MhRPs/AIand-Machine-Learning.png",
    description:
      "Artificial Intelligence and Machine Learning are no longer just buzzwords; they are transforming industries across the globe. This blog delves into the latest advancements in AI and ML, and how they are being applied in healthcare, finance, and other sectors to drive innovation and efficiency.",
    date: "12 March, 2024",
    ert: "10 mins",
    tags: ["AI", "Machine Learning", "Innovation", "Technology"],
  },
  {
    _id: "3",
    title: "Building Modern Web Applications with Next.js",
    imageURL:
      "https://i.ibb.co/N3wDDgf/Building-Modern-Web-Applicationswith-Next-JS.png",
    description:
      "Next.js has become a popular choice for developers looking to build modern web applications with ease. In this blog, we explore the features that make Next.js stand out, such as server-side rendering, static site generation, and API routes, and provide tips for getting started with this powerful framework.",
    date: "29 April, 2024",
    ert: "12 mins",
    tags: ["Next.js", "Web Development", "JavaScript", "React"],
  },
];
const SingleBlogPage = ({ params }: { params: any }) => {
  const { blogId } = params;
  const [selectedBlog,setSelectedBlog] = useState(blogData?.find((item: any) => item?._id === blogId))

  const { title, imageURL, description, date, ert, tags } = selectedBlog || {};
  return (
    <div className="max-w-[1440px]  mx-auto text-white">
      <div className="lg:w-9/12 mx-auto py-20 px-5 lg:px-0 flex flex-col gap-5 rounded-md ">
        <Image  className="h-full w-full  grayscale hover:grayscale-0 transition-all duration-300 " height={350} width={350} src={imageURL} alt="blog image" />
        <h1 className="text-4xl font-bold text-green-500 text-center pt-10 pb-2">{title}</h1>
        <div className="flex gap-3 items-center justify-center">
        <p>{date}</p> | <p>{ert}</p>
        </div>
        <hr className=" border w-3/4 mx-auto"/>
        <p className="mt-5 text-center">
            {description}
        </p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
