import {
  GithubOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import PrimaryBtn from "../../Button/PrimaryBtn";

const HeroSection = async () => {
  const db_url = process.env.NEXT_PUBLIC_DB_URL || "";
  const res = await fetch(`${db_url}/hero`, {
    next: {
      revalidate: 5,
    },
  });
  const heroSectionData = await res.json();

  const activeHeroSectionData = heroSectionData?.data?.filter(
    (data: any) => data?.status === true
  );

  const { greetings, name, dentation, tags } = activeHeroSectionData[0];
  return (
    <div className=" min-h-[85vh]  relative    flex items-center justify-center text-center lg:text-start lg:justify-start text-white">
      <div className="lg:w-8/12 mx-auto px-5 lg:px-0">
        <div>
          <p className="text-[22px] leading-[26px] font-semibold text-green-500">
            {greetings}
          </p>
          <h1 className="text-4xl lg:text-[78px] lg:leading-[85px] font-bold text-white">
            {name}
          </h1>

          <h3 className="text-[24px] leading-[27px] font-semibold text-green-500 mt-3">
            {dentation}
          </h3>
          <div className="flex flex-col lg:flex-row items-center   gap-2 mt-2 lg:mt-1 ">
            {tags?.map((item: string[], index: number) => (
              <div className="flex items-center  gap-2" key={index}>
                <div className="h-4 w-4 bg-green-500 rounded-full hidden lg:block" />
                <p>{item}</p>
              </div>
            ))}
          </div>
          {/* get resume button */}
          <div className="mt-6">
            <a
              href="https://drive.google.com/uc?export=download&id=1TvIc0eCG1-Hu_5kkaaNs1JlEmTNOAkL-"
              download={"Md.Jannatun Nime Resume.pdf"}
            >
              <PrimaryBtn>Get Resume</PrimaryBtn>
            </a>
          </div>
        </div>
      </div>
      {/* contact info */}
      <div className=" absolute left-0 mt-12 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="text-center bg-gray-700 text-white px-3 py-1 rounded transform rotate-90">
          FIND ME ON
        </div>
        <a
          href="https://github.com/jannatunNimeNishat"
          target="_blank"
          className="text-2xl text-gray-500 hover:text-white mt-12"
        >
          <GithubOutlined />
        </a>
        <a
          href="https://www.linkedin.com/in/jannatun-nime/"
          target="_blank"
          className="text-2xl text-gray-500 hover:text-white"
        >
          <LinkedinOutlined />
        </a>

        <a
          href="https://x.com/NimeNishat"
          target="_blank"
          className="text-2xl text-gray-500 hover:text-white"
        >
          <TwitterOutlined />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
