"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

interface IFormInput {
    name: string; // Defines the shape of the form's data
    email: string;
    message: string;
  }

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [messageState, setMessageState] = useState(false);

  const defaultValues = {
    name: "",
    email: "",
    message: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({ defaultValues });

  const onSubmit = () => {
    const form = formRef.current;
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result?.text === "OK") {
            toast.success("Successfully sent.");
          }
          reset(defaultValues);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="  py-24 relative    flex items-center justify-center text-center lg:text-start lg:justify-start text-white">
      <div className="lg:w-8/12 mx-auto px-5 lg:px-0 ">
        <div className="text-center bg-gray-700 text-white px-3 py-1 rounded transform my-8 w-3/4 mx-auto block lg:hidden ">
          CONTACT WITH ME
        </div>
        {/* from */}
        <div className="flex justify-center items-center min-h-screen ">
          <form
            id="contact-form"
            ref={formRef}
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-800 p-6 rounded-md w-full max-w-md"
          >
            <div className="mb-4">
              <label className="block text-white" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                 //name="name"
                type="text"
                {...register("name", { required: true })}
                className="w-full mt-2 p-2 border border-gray-700 rounded bg-gray-900 text-white"
              />
              {errors.name && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-white" htmlFor="email">
                Email
              </label>
              <input
                id="email"
               // name="email"
                type="email"
                {...register("email", { required: true })}
                className="w-full mt-2 p-2 border border-gray-700 rounded bg-gray-900 text-white"
              />
              {errors.email && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-white" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
              //  name="message"
                {...register("message", { required: true })}
                className="w-full mt-2 p-2 border border-gray-700 rounded bg-gray-900 text-white"
              />
              {errors.message && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>

            <button
              type="submit"
              className="W-FULL relative rounded px-5 py-2.5 overflow-hidden group bg-green-500  hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative">Say Hello</span>
            </button>
          </form>
        </div>
      </div>
      {/* section title  */}
      <div className=" absolute left-0 mt-12 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        <div className="text-center bg-gray-700 text-white px-3 py-1 rounded transform rotate-90">
          CONTACT WITH ME
        </div>
      </div>
    </div>
  );
};

export default Contact;
