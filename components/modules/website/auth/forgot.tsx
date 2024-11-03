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
function Forgot() {
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
                                <div className="flex sm:w-full lg:max-w-lg">
                                    <Button
                                        disabled={loading}
                                        type="submit"
                                        variant="primary"
                                        className="w-full inline-flex gap-4 items-center text-base"
                                        size="lg"
                                    > Send Reset Link
                                    </Button>
                                </div>
                                <div className="flex justify-center w-full text-sm text-left">
                                    Back to
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

export default Forgot
