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
      <div className="w-8/12 mx-auto grid grid-cols-5 gap-12">
        <div className="col-span-3 flex flex-col justify-center">
          <p className="text-[18px] leading-[32px] text-justify">{desc}</p>
          <div className="mt-6">
            <a
              href="https://drive.google.com/uc?export=download&id=1TvIc0eCG1-Hu_5kkaaNs1JlEmTNOAkL-"
              download={"Md.Jannatun Nime Resume.pdf"}
            >
              <PrimaryBtn>Get Resume</PrimaryBtn>
            </a>
          </div>
        </div>
        <div className="col-span-2">
          <Image
            className="rounded-md grayscale hover:grayscale-0 transition-all hover:scale-105 duration-200 ease-in-out"
            width={400}
            height={400}
            src={photoUrl}
            alt="my image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
