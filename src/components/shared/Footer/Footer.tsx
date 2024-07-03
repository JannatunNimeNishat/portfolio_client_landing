import Link from "next/link";


const Footer = () => {
    return (
        <div className=" bg-[#111a28] text-white py-8">
            <div className="flex items-center justify-between w-8/12 mx-auto">

            <div className="flex items-center gap-4">
                <Link className="hover:text-green-500 duration-200 ease-out" href={"https://github.com/JannatunNimeNishat"} target="_blank">GITHUB</Link>
                <Link className="hover:text-green-500 duration-200 ease-out" href={"https://www.linkedin.com/in/jannatun-nime/"} target="_blank">LINKEDIN</Link>
                <Link className="hover:text-green-500 duration-200 ease-out" href={"https://x.com/NimeNishat"} target="_blank">TWITTER</Link>
                <Link className="hover:text-green-500 duration-200 ease-out" href={"https://www.facebook.com/jannatunbd/"} target="_blank">FACEBOOK</Link>
            </div>
            <p className="hover:text-green-500 duration-200 ease-out">Md.Jannatun Nime </p>
            </div>
        </div>
    );
};

export default Footer;