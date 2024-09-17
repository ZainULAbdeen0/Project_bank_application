"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomInput from "./CustomInput";
import { useRouter } from "next/navigation";
import { signIn, signUp } from "@/lib/actions/user.actions";
// shadcn imports
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try{
      if(type === "Sign-Up"){
        const newUser = await signUp(data);
        setUser(newUser);
      }else{
        const response= await signIn({
          email: data.email,
          password: data.password,
        }) 
        if(response){
          router.push('/');
        }
      }
    }catch(error){
      console.log(error)
    }finally{
      setIsLoading(false);
    }
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
            {user ? "Link Account" : type === "Sign-In" ? "Sign In" : "Sign Up"}
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
              {type === "Sign-Up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput
                      name="firstName"
                      control={form.control}
                      label="First Name"
                      placeholder="Eg. John"
                    />
                    <CustomInput
                      name="lastName"
                      control={form.control}
                      label="Last Name"
                      placeholder="Eg. Smith"
                    />
                  </div>
                  <CustomInput
                    name="address1"
                    control={form.control}
                    label="Address"
                    placeholder="Enter your specific address"
                  />
                  <CustomInput
                    name="city"
                    control={form.control}
                    label="City"
                    placeholder="Enter your City"
                  />
                  <div className="flex gap-4">
                    <CustomInput
                      name="state"
                      control={form.control}
                      label="state"
                      placeholder="Eg. NY"
                    />
                    <CustomInput
                      name="postalCode"
                      control={form.control}
                      label="Postal Code"
                      placeholder="Eg. 60000"
                    />
                  </div>
                  <div className="flex gap-4">
                    <CustomInput
                      name="dob"
                      control={form.control}
                      label="Date of Birth"
                      placeholder="YYYY-MM-DD"
                    />
                    <CustomInput
                      name="ssn"
                      control={form.control}
                      label="SSN"
                      placeholder="Eg. 1234"
                    />
                  </div>
                </>
              )}

              <CustomInput
                name="email"
                control={form.control}
                label="Email"
                placeholder="Enter your email"
              />
              <CustomInput
                name="password"
                control={form.control}
                label="Password"
                placeholder="Enter your password"
              />

              <div className="flex flex-col gap-4">
                {" "}
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ) : type === "Sign-In" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === "Sign-In"
                ? "Don't have an account?"
                : "Already have an acount?"}
            </p>
            <Link
              className="form-link"
              href={type === "Sign-In" ? "/sign-up" : "/sign-in"}
            >
              {type === "Sign-In" ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
