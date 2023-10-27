'use client'

import React, {FC,useState} from "react";
import Heading from "@/app/utils/Heading";
import Header from "./components/Header";
import Hero from "@/app/components/Route/Hero";
interface Props {

}

const Page : FC<Props> = (props) => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(0);

    return (
        <div>
            <Heading title={"E Learning"} description={"This is our Home"} keywords={"Programming, Mern, Redux"} />
            <Header open={open} setOpen={setOpen} activeItem={activeItem} />
            <Hero />
        </div>
    )
}

export default Page
