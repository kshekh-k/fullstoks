"use client";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"; 
import toast from "react-hot-toast";
import Toast from "../../custom/Toast";
import { useRouter } from "next/navigation"; 
import Link from "next/link";
import Image from "next/image";
import Loginskeleton from "./login-skeleton";
import { Google_brand_icon } from "@/icons";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    email: "tesemail222@gmail.com",
    password: "Testpassword2024&",
  };
  const validate = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

  const router = useRouter();

  const handleSave = (values: { email: string; password: string }) => {
    if (loading) {
      return;
    }
    setLoading(true);

    signIn("credentials", {
      ...values,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          toast.custom(
            <Toast message="A error occurs please retry" status="error" />
          );
          setLoading(false);
        }

        if (callback?.ok && !callback?.error) {
          toast.custom(
            <Toast message="Logged in , Redirecting..." status="success" />
          );
          router.push("/cart");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className="md:grid md:grid-cols-2 gap-2 flex flex-col justify-center items-center min-h-screen">
      <div className="bg-gray-200 overflow-hidden hidden md:flex flex-col justify-start items-center max-h-screen">
        <Image src={'/assets/images/login-thumb-2.png'} alt="login" width={1200} height={1000} className="object-cover w-auto flex-1 max-w-none" />
      </div>
      <div className="flex-1 flex justify-center items-center py-10 px-5 ">
      
      
      {loading ? <Loginskeleton  /> 
     :
        <div className="flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-extrabold text-left text-primary-500">
             Welcome 👋
            </h1>
            <p className="text-base text-primary-950/50 text-left">
             Please login here
            </p>
          </div>

          <div
            className="flex flex-col w-full items-center pt-10"
          >
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={validate}
              onSubmit={async (values) => {
                handleSave(values);
              }}
            >
              {({
                errors,

                /* and other goodies */
              }) => (
                <div className="flex flex-col gap-5">
                    {/* Signup with Google */}
                    <Link href="#" className="inline-flex items-center shadow border border-blue-500 bg-blue-500 text-xl font-semibold text-white text-center" >
                      <span className="bg-white mr-1 size-12 inline-flex justify-center items-center">
                        <Google_brand_icon className="size-6" />
                      </span>
                      <span className="inline-flex flex-1 text-center justify-center">Sign in with Google</span>
                    </Link>

                    <div className="flex justify-center items-center relative">
                      <hr className="w-full h-px border-0 bg-gray-300 absolute top-1/2" />
                      <span className="bg-white text-primary-300 font-semibold px-3 relative">OR</span>
                    </div>
                <Form>
                  <div className="flex flex-col gap-4"> 
                  <div className="flex flex-col gap-2 w-80 max-w-full">
                    
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter Email"
                      className={cn(
                        "border px-4 text-primary-700 py-2 rounded shadow outline-none ease-in-out duration-200 focus:ring-0 focus:border-primary-600",
                        errors.email ? "border-red-300" : "border-primary-950/20"
                      )}
                    />
                    <ErrorMessage
                      name="email"
                      component="p"
                      className="text-red-500"
                    />
                  </div>

                  <div className="flex flex-col w-80 max-w-full">
                    
                    <Field
                      type="password"
                      name="password"
                       placeholder="Enter Password"
                      className={cn(
                        "border px-4 text-primary-700 py-2 rounded shadow outline-none ease-in-out duration-200 focus:ring-0 focus:border-primary-600",
                        errors.password ? "border-red-300" : "border-primary-950/20"
                      )}
                    />
                    <ErrorMessage
                      name="password"
                      component="p"
                      className="text-red-500"
                    />
                  </div>

                  <div className="flex justify-end">
                  
                  <Link href="/forgot-password" className="font-semibold text-sm text-blue-600 hover:text-blue-800 ml-1">
                  Forgot password?
              </Link></div>

                  <div className="flex sm:w-full lg:max-w-lg">
                    <Button
                      disabled={loading}
                      type="submit"
                      variant="primary"
                      className="w-full inline-flex gap-4 items-center text-base"
                      size="lg"
                    > Login 
                    </Button>
                  </div>
                  </div>
                </Form>
                
                </div>
              )}
            </Formik>
          </div>

          <div className="flex justify-center w-full text-sm text-left mt-5">
          Are you new here? Create an
            <Link href="/register" className="font-semibold text-blue-600 hover:text-blue-800 ml-1">
                Account!
            </Link>
          </div>
        </div>
}
     </div>
    </section>
  );
}
