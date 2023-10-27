'use client'

import React, {FC,useState} from "react";
import Heading from "@/app/utils/Heading";
import Header from "./components/Header";
import Hero from "@/app/components/Route/Hero";
interface Props {

}

const Page : FC<Props> = (props) => {

    //  NAVBAR LOGIN SIGNUP (open,setOpen) =>  1) to open or close the login and signup form.
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);
    const [route,setRoute] = useState("Login")

    return (
        <div>
            <Heading title={"E Learning"} description={"This is our Home"} keywords={"Programming, Mern, Redux"} />
            {/* NAVBAR LOGIN SIGNUP (open,setOpen) =>  2) Pass those state data in Header */}
            <Header open={open} setOpen={setOpen} activeItem={activeItem} route={route} setRoute={setRoute} />
            <Hero />
        </div>
    )
}

export default Page
