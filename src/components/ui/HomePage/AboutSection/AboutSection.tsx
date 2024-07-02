import Image from "next/image";
import PrimaryBtn from "../../Button/PrimaryBtn";

const AboutSection = async () => {
  const db_url = process.env.NEXT_PUBLIC_DB_URL || "";
  const res = await fetch(`${db_url}/about`, {
    next: {
      revalidate: 5,
    },
  });
  const aboutSectionData = await res.json();

  const activeAboutSectionData = aboutSectionData?.data?.filter(
    (data: any) => data?.status === true
  );

  const { desc, photoUrl } = activeAboutSectionData[0] || {};

  return (
    <div className=" min-h-[85vh]  relative    flex items-center justify-center text-center lg:text-start lg:justify-start text-white">
      <div className=" w-full px-5 lg:px-0  lg:w-8/12 mx-auto grid  lg:grid-cols-5 gap-12">
        <div className=" lg:col-span-3 flex flex-col justify-center order-2 lg:order-1 w-full">
          <p className="text-[18px] leading-[32px]  ">{desc}</p>
          <div className="mt-6">
            <a
              href="https://drive.google.com/uc?export=download&id=1TvIc0eCG1-Hu_5kkaaNs1JlEmTNOAkL-"
              download={"Md.Jannatun Nime Resume.pdf"}
            >
              <PrimaryBtn>Get Resume</PrimaryBtn>
            </a>
          </div>
        </div>
        <div className=" lg:col-span-2 order-1 lg:order-2 w-full ">
          <Image
            className=" w-full h-full lg:w-[430px] lg:h-[430px] mx-auto rounded-md grayscale hover:grayscale-0 transition-all lg:hover:scale-105 duration-200 ease-in-out"
            width={430}
            height={430}
            src={photoUrl}
            alt="my image"
          />
        </div>
      </div>
       {/* section title  */}
       <div className=" absolute right-0 mt-12 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="text-center bg-gray-700 text-white px-3 py-1 rounded transform rotate-90">
          ABOUT ME 
        </div>
        
      </div>
    </div>
  );
};

export default AboutSection;
