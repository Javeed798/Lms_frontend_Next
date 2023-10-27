import {FC} from "react";
import Image from "next/image";
import {BiSearch} from "react-icons/bi";

type Props = {};
const Hero : FC<Props> = () => {
    return (
        <div className={"w-full 1000px:flex items-center"}>
        <div className={"absolute ml-32 top-[100px] 1000px:top-[unset] 1500px:w-[700px] 1100px:h-[600px] h-[50vh] w-[40vh] hero_animation duration-300 transition-all rounded-full"}> </div>
            <div className={"1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-10  "}>
                <Image
                    className={"object-contain 1100px:max-w-[90%] 1500px:max-w-[85%] h-auto z-[10]"}
                    src={require("../../../public/assets/banner-img-1.png")} alt="Banner Image" />
            </div>
            <div className={"1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]  "}>
                <h2 className={"dark:text-white -ml-20 text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[70px] font-[600] font-Josefin py-2 1000px:leading-[76px] 1500px:w-[60%]"}>
                    Improve Your Online Learning Experience Better Instantly
                </h2>
                <br/>
                <p className={"dark:text-[#edfff4] text-[#000000c7] font-Josefin font-[600] text-[18px] 1500px:!w-[65%] 1100px:!w-[78%] "}>
                    we Have 40k+ clients & 500k+ online registered Students. Find
                    your desired course form them.
                </p>
                <br/>
                <br/>
                <div className={"1500px:w-[55%] 1100px:w-[78px] w-[90%] h-[50px] bg-transparent relative "}>
                    <input type="search"
                    placeholder={"Search Courses"}
                    className={"bg-transparent dark:text-white border dark:border-slate-500 dark-bg-[#575757] dark:placeholder:text-[#ffffffdd] rounded-[5px] p-2 w-full h-full outline-none text-black  "}
                    />
                    <div className={"absolute flex items-center justify-center w-[50px] cursor-pointer h-[50px] right-0 top-0 bg-[#39c1f3] rounded-r-[5px]"}>
                        <BiSearch className={"text-white"} size={30} />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;
