'use client';

import {FC, useState} from "react";
import Link from "next/link";
import NavItems from "@/app/utils/NavItems";
import ThemeSwitcher from "@/app/utils/ThemeSwitcher";
import {HiOutlineMenuAlt3} from "react-icons/hi";
import {HiOutlineUserCircle} from "react-icons/hi2";
import CustomModal from "@/app/utils/CustomModal";
import Login from "./Auth/Login";
import Signup from "@/app/components/Auth/Signup";
import Verification from "@/app/components/Auth/Verification";


// NAVBAR LOGIN SIGNUP (open,setOpen) =>  3) Access them In the props and destructure the below Props
type Props = {
    open: boolean;
    setOpen: (open: boolean) => void;
    activeItem:number,
    route: string,
    setRoute: (route: string) => void
};

const Header: FC<Props> = ({activeItem,open,setOpen,route,setRoute}) => {
    console.log("open",open)

    const [active, setActive] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

    // whenever im scrolling and if it exceeds 80px i need to make my header to be fixed and should undergo all the active
    // classes' functionality.
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 80) {
                setActive(true)
            } else {
                setActive(false);
            }
        })
    }

    const handleClose = (e:any) => {
        if (e.target.id === "screen")
            setOpenSidebar(false);
    }

    return (
        <div className={"relative w-full"}>
            <div
                className={`${active ? "dark:bg-opacity-50 dark:bg-gradient-to-b dark:from-gray-900 " +
                    "dark:to-black fixed top-0 left-0 w-full h-[80px] " +
                    "z-[80] border-b dark:border[#ffffff1c] shadow-xl " +
                    "transition duration-500"
                    : "w-full border-b dark:border-[#ffffff1c] " +
                    "h-[80px] z-[80] dark:shadow"}`}>

                <div className="w-[95%] 800px:w-[92%] m-auto py-2 h-full">
                    <div className="w-full h-[80px] flex items-center justify-between p-3">
                        <div><Link href={"/"}
                                   className={"text-[25px] font-Poppins font-[500] text-black dark:text-white"}
                        >
                            E Learning
                        </Link></div>

                        <div className={"flex items-center"}>
                            <NavItems activeItem={activeItem} isMobile={false}/>
                            <ThemeSwitcher/>

                        {/* For Mobile only   */}
                            
                          <div className={"800px:hidden"}>
                            <HiOutlineMenuAlt3
                            size={25}
                            className={"cursor-pointer dark:text-white text-black"}
                            onClick={() => setOpenSidebar(true)}
                            />
                          </div>
                            {/*  NAVBAR LOGIN SIGNUP (open,setOpen) 4) Here we are setting that open setOpen functionality  */}
                            <HiOutlineUserCircle size={25} className={"800px:block hidden cursor-pointer dark:text-white text-black"} onClick={() => setOpen(true)} />
                        </div>
                    </div>
                </div>
            {/*    Mobile Sidebar */}
                {
                    openSidebar && (
                        <div
                            onClick={handleClose}
                            className={"fixed w-full h-screen top-0 left-0 z-[99999] dark:bg-[unset] bg-[#00000024]"}
                            id={"screen"}
                        >
                            <div className={"w-[70%] fixed z-[999999] h-screen bg-white dark:bg-slate-900 dark:bg-opacity-90 top-0 right-0"}>
                                <NavItems activeItem={activeItem} isMobile={true}/>
                                {/* NAVBAR LOGIN SIGNUP (open,setOpen) 5) This for mobile screen */}
                                <HiOutlineUserCircle
                                    size={25}
                                    className={"cursor-pointer ml-5 my-2 dark:text-white text-black"}
                                    onClick={() => setOpen(true)} />
                                <br/>
                                <br/>
                                <p className={"text-base px-2 pl-5 text-black dark:text-white"}>
                                    Copyright &copy; By Javeed Sharif
                                </p>
                            </div>

                        </div>
                    )
                }
            </div>
            {
                route === "Login" && (
                    <>
                        {/* NAVBAR LOGIN SIGNUP (open,setOpen) 6) Finally here we are passing them in the custom modal to show that */}
                        {
                            open && (
                                <>
                                    <CustomModal
                                    open={open}
                                    setOpen={setOpen}
                                    setRoute={setRoute}
                                    activeItem={activeItem}
                                    component={Login}
                                    />
                                </>
                            )
                        }
                    </>
                )
            }

            {
                route === "Sign-Up" && (
                    <>
                        {/* NAVBAR LOGIN SIGNUP (open,setOpen) 6) Finally here we are passing them in the custom modal to show that */}

                        {
                            open && (
                                <>
                                    <CustomModal
                                        open={open}
                                        setOpen={setOpen}
                                        setRoute={setRoute}
                                        activeItem={activeItem}
                                        component={Signup}
                                    />
                                </>
                            )
                        }
                    </>
                )
            }

            {
                route === "Verification" && (
                    <>
                        {/* NAVBAR LOGIN SIGNUP (open,setOpen) 6) Finally here we are passing them in the custom modal to show that */}

                        {
                            open && (
                                <>
                                    <CustomModal
                                        open={open}
                                        setOpen={setOpen}
                                        setRoute={setRoute}
                                        activeItem={activeItem}
                                        component={Verification}
                                    />
                                </>
                            )
                        }
                    </>
                )
            }
        </div>
    );
};
export default Header;
