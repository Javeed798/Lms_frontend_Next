'use client';

import {useFormik} from "formik";
import * as Yup from "yup";
import {AiOutlineEye,AiOutlineEyeInvisible, AiFillGithub} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc"
import {FC, useState} from "react";
import {styles} from "../../styles/style";

type Props = {
    setRoute : (route: string) => void;
};

const schema = Yup.object().shape({
    name : Yup.string().required("name is required"),
    email: Yup.string().email("Invalid email").required("Please enter your email address"),
    password: Yup.string().required("Please enter your password").min(6)
})

const Signup:FC<Props> = ({setRoute}) => {

    const [show,setShow] = useState(false);

    const formik = useFormik({
        initialValues : {name : '',email : '', password :''},
        validationSchema : schema,
        onSubmit: async({name,email,password}) => {
            setRoute("Verification")
        }
    })

    const {errors,touched,values,handleChange,handleSubmit} = formik;


    return (
        <div className={"w-full"}>
            <h1 className={`${styles.title}`}>
                Signup With ELearning
            </h1>

            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name" className={`${styles.label}`}>Email Your Name</label>
                    <input type="name" name={"name"} value={values.name} id={"name"}
                           placeholder={"D Javeed Sharif"}
                           onChange={handleChange}
                           className={`${errors.name && touched.name && "border-red-500"} ${styles.input} `}
                    />
                    {
                        errors.name && touched.name && (
                            <span className={"text-red-500 pt-2 block"}>{errors.name}</span>
                        )
                    }
                </div>
               <div>
                   <label htmlFor="email" className={`${styles.label}`}>Email Your Email</label>
                   <input type="email" name={"email"} value={values.email} id={"email"}
                          placeholder={"example@gmail.com"}
                          onChange={handleChange}
                          className={`${errors.email && touched.email && "border-red-500"} ${styles.input} `}
                   />
                   {
                       errors.email && touched.email && (
                           <span className={"text-red-500 pt-2 block"}>{errors.email}</span>
                       )
                   }
               </div>
                <div className={"w-full mt-5 relative mb-5"}>
                    <label htmlFor="password" className={`${styles.label}`}>Email Your Password</label>
                    <input type={`${show ? "text" : "password"}`} name={"password"} id={"password"} value={values.password} onChange={handleChange}
                           placeholder={"Enter Your Password"}
                           className={`${errors.password && touched.password && "border-red-500"} ${styles.input} `}
                    />
                    {
                        show ? (
                            <span
                                onClick={() => setShow((prev) => !prev)}
                                className={"absolute top-11 right-0 dark:text-white text-black text-[24px]"}><AiOutlineEye  /></span>
                        ) : (
                            <span
                                className={"absolute top-11 right-0 dark:text-white text-black text-[24px]"}
                                onClick={() => setShow((prev) => !prev)}><AiOutlineEyeInvisible /></span>
                        )
                    }
                    {
                        errors.password && touched.password && (
                            <span className={"text-red-500 pt-2 block"}>{errors.password}</span>
                        )
                    }
                </div>

                <div>
                    <input type="submit" value={"Signup"} className={`${styles.button}`}/>
                </div>

                <br/>
                <h5 className={"text-center pt-4 font-Poppins text-[14px] text-black dark:text-white"}>Or Join With</h5>

                <div className={"flex items-center justify-center my-3"}>
                    <FcGoogle className={"cursor-pointer mr-2"} size={30} />
                    <AiFillGithub className={"cursor-pointer ml-2 text-black dark:text-white"} size={30} />
                </div>

                <h5 className={"text-center pt-4 font-Poppins text-[14px] text-black dark:text-white"}>Already Have an Account
                    <span className={"text-[#2190ff] pl-1 cursor-pointer"} onClick={() => setRoute("Login")}>
                        Sign in
                    </span>
                </h5>
            </form>
            <br/>
        </div>
    );
};
export default Signup;
