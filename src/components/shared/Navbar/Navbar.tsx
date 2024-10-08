"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Navbar = () => {
  const pathName = usePathname();
  const [smNavbarOptions, setSmNavbarOptions] = useState(false);
  /*   const [isScrolledUp, setIsScrolledUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY) {
        setIsScrolledUp(true);
      } else {
        setIsScrolledUp(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  if (!hasMounted) {
    return null; 
  } */

  return (
    <>
      {/* sm nav */}
      <div className=" flex lg:hidden justify-between items-center px-3 py-[30px] shadow-lg bg-[#111a28] ">
        <figure>
          <Link
            href={"/"}
            className="text-2xl font-semibold text-green-500 px-2 cursor-pointer"
          >
            N
          </Link>
        </figure>

        <figure
          className={`duration-500  cursor-pointer`}
          onClick={() => setSmNavbarOptions(true)}
        >
          <MenuOutlined className="text-3xl text-white" />
        </figure>
      </div>
      {/* sm nav bar options */}
      <div
        className={` fixed  top-0 right-0 z-10 w-full h-full bg-[#111a28] text-white  ${
          smNavbarOptions ? "translate-x-0 z-10" : "translate-x-full z-10"
        } duration-300  `}
      >
        <div className="flex justify-between items-center text-white mx-4 py-[24px] font-customFontGroteskRegular">
          <Link
            href={"/"}
            onClick={() => setSmNavbarOptions(false)}
            className="text-2xl font-semibold text-green-500 px-2 cursor-pointer"
          >
            BloodBond
          </Link>

          <figure
            className={` duration-500  cursor-pointer`}
            onClick={() => setSmNavbarOptions(false)}
          >
            <CloseOutlined className="text-3xl" />
          </figure>
        </div>
        <hr />
        {pathName === "/blog" ||
        pathName === "/blog/1" ||
        pathName === "/blog/2" ||
        pathName === "/blog/3" ||
        pathName.includes("/project/") ? (
          <div className="flex flex-col gap-[24px] items-end mt-[16px] px-[18px] ">
            <Link
                  className={`${pathName === "/" ? "text-green-500" : ""}
        hover:text-green-500 duration-150 font-medium text-[18px]
        `}
                  href={"/"}
                  onClick={() => setSmNavbarOptions(false)}
                >
                  HOME
                </Link>
            <Link
              href={"/blog"}
              className={`${pathName === "/blog" ? "text-green-500" : " "}
          text-[18px] font-medium leading-[26px]
          `}
              onClick={() => setSmNavbarOptions(false)}
            >
              BLOG
            </Link>
          </div>
        ) : (
          <div className="flex flex-col gap-[24px] items-end mt-[16px] px-[18px] ">
            <Link
              onClick={() => setSmNavbarOptions(false)}
              href={"/"}
              className={`${pathName === "/" ? "text-green-500" : ""}
            text-[18px] font-medium leading-[26px]
            `}
            >
              HOME
            </Link>

            <Link
              onClick={() => setSmNavbarOptions(false)}
              href={"#about"}
              className={`${pathName === "/about" ? "text-green-500" : " "}
            text-[18px] font-medium leading-[26px]
            `}
            >
              ABOUT
            </Link>

            <Link
              href={"#education"}
              className={`${pathName === "/education" ? "text-green-500" : " "}
            text-[18px] font-medium leading-[26px]
            `}
              onClick={() => setSmNavbarOptions(false)}
            >
              EDUCATION
            </Link>
            <Link
              href={"#skill"}
              className={`${pathName === "/skill" ? "text-green-500" : " "}
            text-[18px] font-medium leading-[26px]
            `}
              onClick={() => setSmNavbarOptions(false)}
            >
              SKILL
            </Link>
            <Link
              href={"#project"}
              className={`${pathName === "/project" ? "text-green-500" : " "}
            text-[18px] font-medium leading-[26px]
            `}
              onClick={() => setSmNavbarOptions(false)}
            >
              PROJECT
            </Link>
            <Link
              href={"#contact"}
              className={`${pathName === "/contact" ? "text-green-500" : " "}
            text-[18px] font-medium leading-[26px]
            `}
              onClick={() => setSmNavbarOptions(false)}
            >
              CONTACT
            </Link>
            <Link
              href={"/blog"}
              className={`${pathName === "/blog" ? "text-green-500" : " "}
            text-[18px] font-medium leading-[26px]
            `}
              onClick={() => setSmNavbarOptions(false)}
            >
              BLOG
            </Link>
          </div>
        )}
      </div>
      {/* lg navbar */}
      <div className="hidden lg:block  w-full mx-auto shadow-lg bg-[#111a28]">
        <div className=" w-8/12 mx-auto lg:flex items-center  justify-between ">
          {/* logo */}
          <div className="  text-left flex justify-start py-5 w-full">
            <Link
              href={"/"}
              className="text-4xl font-semibold text-green-500 px-3 cursor-pointer"
            >
              N
            </Link>
          </div>
          {/* links */}
          <div className="flex items-center  w-full   py-5 text-white">
            {pathName === "/blog" ||
            pathName === "/blog/1" ||
            pathName === "/blog/2" ||
            pathName === "/blog/3" ||
            pathName.includes("/project/") ? (
              <ul className="flex items-center gap-10  w-full justify-end ">
                <Link
                  className={`${pathName === "/" ? "text-green-500" : ""}
        hover:text-green-500 duration-150 font-medium text-[18px]
        `}
                  href={"/"}
                >
                  HOME
                </Link>
                <Link
                  href={"/blog"}
                  className={`${pathName === "/blog" ? "text-green-500" : " "}
          text-[18px] font-medium leading-[26px]
          `}
                >
                  BLOG
                </Link>
              </ul>
            ) : (
              <ul className="flex items-center gap-10 ">
                <Link
                  className={`${pathName === "/" ? "text-green-500" : ""}
          hover:text-green-500 duration-150 font-medium text-[18px]
          `}
                  href={"/"}
                >
                  HOME
                </Link>
                <Link
                  className={`${pathName === "/about" ? "text-green-500" : ""}
          hover:text-green-500 duration-150 font-medium text-[18px]
          `}
                  href={"#about"}
                 
                >
                  ABOUT
                </Link>
                <Link
                  className={`${pathName === "/about" ? "text-green-500" : ""}
          hover:text-green-500 duration-150 font-medium text-[18px]
          `}
                  href={"#education"}
                
                >
                  EDUCATION
                </Link>
                <Link
                  className={`${pathName === "/skill" ? "text-green-500" : ""}
          hover:text-green-500 duration-150 font-medium
          `}
                  href={"#skill"}
                 
                >
                  SKILL
                </Link>
                <Link
                  className={`${pathName === "/project" ? "text-green-500" : ""}
          hover:text-green-500 duration-150 font-medium
          `}
                  href={"#project"}
                >
                  PROJECT
                </Link>
                <Link
                  href={"#contact"}
                 
                  className={`${
                    pathName === "/contact" ? "text-green-500" : " "
                  }
            hover:text-green-500 duration-150 font-medium 
            `}

                 
                >
                  CONTACT
                </Link>
                <Link
                  href={"/blog"}
                  className={`${pathName === "/blog" ? "text-green-500" : " "}
            hover:text-green-500 duration-150 font-medium
            `}
                >
                  BLOG
                </Link>
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
