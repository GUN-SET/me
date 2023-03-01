import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import ContactLinkItem from "../../ui/ContactLinkItem/ContactLinkItem";
import Title from "../../ui/Title/Title";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface IContactMe {}

const ContactMe = ({}: IContactMe) => {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:androysol@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message} (${formData.email})`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <Title text="CONTACT" />
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          I have just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Lets talk!</span>
        </h4>

        <div className="space-y-10">
          <ContactLinkItem icon={<PhoneIcon />}>+123456789</ContactLinkItem>

          <ContactLinkItem icon={<EnvelopeIcon />}>
            me@gmail.com
          </ContactLinkItem>

          <ContactLinkItem icon={<MapIcon />}>
            +123 Developer Lane
          </ContactLinkItem>

          {/*<div className='flex items-center space-x-5 justify-center'>*/}
          {/*	<MapIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />*/}
          {/*	<p className='text-2xl'></p>*/}
          {/*</div>*/}
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
