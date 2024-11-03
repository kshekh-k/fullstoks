"use client";
import { cn } from '@/lib/utils';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import Toast from "../../custom/Toast";
import { useRouter } from "next/navigation";
import React from 'react'
import { signIn } from "next-auth/react";
import * as Yup from "yup";
import Link from 'next/link';
function Change_password() {
    const [loading, setLoading] = React.useState(false);

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
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="bg-white shadow-md rounded-md border border-gray-300 px-8 pt-6 pb-8 mb-4 max-w-sm w-full">
                <h1 className="text-2xl font-extrabold text-center pb-5 text-primary-500">Forgot Password</h1>

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
                                    > Reset Password
                                    </Button>
                                </div>
                                <div className="flex justify-center w-full text-sm text-left">
                                    Go to
                                    <Link href="/signin" className="font-semibold text-blue-600 hover:text-blue-800 ml-1">
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>


            </div>
        </div>
    )
}

export default Change_password
