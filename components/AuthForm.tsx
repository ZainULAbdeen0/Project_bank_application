"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomInput from "./CustomInput";
// shadcn imports
import { Button } from "@/components/ui/button";
import {
  Form,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email({
    message: "Enter a valid email",
  }),
  password: z.string().min(1 , {
    message: "Password is required",
  })
});

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-2">
          <Image
            width={34}
            height={34}
            src="/icons/logo.svg"
            alt="Logo"
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="text-26 font-bold font-black-1 IBM-plex-font">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* plaid link */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <CustomInput
                form = {form}
                label= "Email"
                placeholder= "xyz@mail.com"
              />
               <CustomInput
                form = {form}
                label= "Password"
                placeholder= "●●●●"
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </>
      )}
    </section>
  );
};

export default AuthForm;
