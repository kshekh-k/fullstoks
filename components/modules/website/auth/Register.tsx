/* eslint-disable  no-useless-escape */
"use client";
import React, { useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useSession } from "next-auth/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import Toast from "../../custom/Toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Registerskeleton from "./register-skeleton";
import Image from "next/image";
import { Google_brand_icon } from "@/icons";

export default function Register() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  console.log(session);

  const initialValues = {
    name: "testname",
    email: "tesemail222@gmail.com",
    phone: '+18973654789',
    password: "Testpassword2024&",
    confirm_password: "Testpassword2024&",
    terms: true,
  };
  const validate = Yup.object({
    name: Yup.string().required().min(2).max(60),
    email: Yup.string().required().email(),
    password: Yup.string()
      .required("required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, //eslint-disable-next-line
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
    confirm_password: Yup.string()
      .required("The passwords are not the same")
      .oneOf([Yup.ref("password"), "null"], "Passwords must match"),
  });

  const router = useRouter();

  const handleSave = async (values: { email: string; password: string }) => {
    if (loading) {
      return;
    }
    setLoading(true);

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/api/register",
        { method: "POST", body: JSON.stringify(values) }
      );

      if (!response.ok) {
        response.json().then((data) => {
          console.log(data);
          toast.custom(<Toast message={data.message} status="error" />);
          return data;
        });
      } else {
        response.json().then((data) => {
          console.log(data);
          toast.custom(<Toast message={data.message} status="success" />);
          router.push("/signin");
          return data;
        });
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <section className="md:grid md:grid-cols-2 gap-2 flex flex-col justify-center items-center min-h-screen">
      <div className="bg-gray-200 overflow-hidden hidden md:flex flex-col justify-start items-center max-h-screen">
        <Image src={'/assets/images/login-thumb.jpg'} alt="login" width={1200} height={1000} className="object-cover w-auto flex-1 max-w-none" />
      </div>
      <div className="flex-1 flex justify-center items-center py-10 px-5 ">

        {loading ?
          <Registerskeleton />
          :
          <div className="flex-col gap-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-extrabold text-left text-primary-500">
                Register 👋
              </h1>
              <p className="text-base text-primary-950/50 text-left">
                Create your account now
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
                      <span className="inline-flex flex-1 text-center justify-center">Sign up with Google</span>
                    </Link>

                    <div className="flex justify-center items-center relative">
                      <hr className="w-full h-px border-0 bg-gray-300 absolute top-1/2" />
                      <span className="bg-white text-primary-300 font-semibold px-3 relative">OR</span>
                    </div>

                    <Form>
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2 w-80 max-w-full">
                          <Field
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className={cn(
                              "border px-4 text-primary-700 py-2 rounded shadow outline-none ease-in-out duration-200 focus:ring-0 focus:border-primary-600",
                              errors.name ? "border-red-300" : "border-primary-950/20"
                            )}
                          />
                          <ErrorMessage
                            name="name"
                            component="p"
                            className="text-red-500"
                          />
                        </div>

                        <div className="flex flex-col w-80 max-w-full">
                          <Field
                            type="email"
                            name="email"
                            placeholder="Enter email"
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
                            type="text"
                            name="phone"
                            placeholder="Mobile Number"
                            className={cn(
                              "border px-4 text-primary-700 py-2 rounded shadow outline-none ease-in-out duration-200 focus:ring-0 focus:border-primary-600",
                              errors.phone ? "border-red-300" : "border-primary-950/20"
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
                            placeholder="Password"
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

                        <div className="flex flex-col w-80 max-w-full">
                          <Field
                            type="password"
                            name="confirm_password"
                            placeholder="Confirm password"
                            className={cn(
                              "border px-4 text-primary-700 py-2 rounded shadow outline-none ease-in-out duration-200 focus:ring-0 focus:border-primary-600",
                              errors.password ? "border-red-300" : "border-primary-950/20"
                            )}
                          />
                          <ErrorMessage
                            name="confirm_password"
                            component="p"
                            className="text-red-500"
                          />
                        </div>


                        <div className="relative">
                          <p className="text-sm flex gap-2 items-center font-medium text-center text-gray-600 cursor-pointer">
                            <input id='rememberMe' required
                              className="md:-mt-0.5 outline-none ring-0 focus:ring-0 size-4 border text-primary-600 border-gray-500 cursor-pointer"
                              type="checkbox" />
                            <label
                              className="text-sm font-medium text-gray-600 cursor-pointer"
                              htmlFor="rememberMe"
                            >
                              I accept the </label>
                            <Link href={'#'} className="font-medium text-blue-600 hover:text-blue-800 text-sm ease-in-out duration-200">
                              Terms & Conditions.
                            </Link>
                          </p>
                        </div>

                        <div className="flex sm:w-full lg:max-w-lg">
                          <Button
                            disabled={loading}
                            type="submit"
                            variant="primary"
                            className="w-full inline-flex gap-4 items-center text-base"
                            size="lg"
                          >
                            Register
                          </Button>
                        </div>
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>


            <div className="flex justify-center w-full text-sm text-left mt-5">
              Do already have an account?
              <Link href="/signin" className="font-semibold text-blue-600 hover:text-blue-800 ml-1">
                Login!
              </Link>
            </div>



          </div>
        }
      </div>
    </section>
  );
}
