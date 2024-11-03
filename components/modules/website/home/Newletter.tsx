"use client";
import React, { useState } from "react";
import Container from "../../custom/Container";
import Loading from "../../custom/Loading";
import { z } from "zod";
import toast from "react-hot-toast";
import Toast from "../../custom/Toast";
import Image from "next/image";

export default function Newletter() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleSave = async () => {
    setLoading(true);

    const Email = z.object({
      email: z.string().email().min(5),
    });
    const validatedFields = Email.safeParse({
      email: email,
    });

    if (!validatedFields.success) {
      toast.custom(
        <Toast message="Validation failed Try again!" status="error" />
      );
      setLoading(false);
      return;
    }

    if (loading) {
      return;
    }

    const sendEmail = async () => {
      const values = {
        subject: "Subscribe to the newsletter",
        email: email,
        message: "Ijust subscribed to your newsletter",
      };

      // Fetch api
      try {
        const response = await fetch(
          process.env.NEXT_PUBLIC_API_URL + "/api/sendemail",
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
            return data;
          });
        }
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    await sendEmail();
  };

  return (
    <section className="relative overflow-hidden">
      <div className="overflow-hidden absolute inset-0 flex justify-center">
        <Image src="/assets/images/shopping-mall-1316787_1920.jpg" width={1920} height={600} alt="background" className="w-full h-auto object-cover" />
      </div>
      <div className="relative bg-primary-900/90 py-20">
        <Container>
          {loading && <Loading isLoading={loading} />}

          <div className="flex justify-center gap-10 flex-wrap lg:flex-nowrap lg:justify-between">
            <div className="flex flex-col gap-2 items-start justify-start">
              <h2 className="text-xl xl:text-2xl font-bold uppercase text-white tracking-tigh w-full leading-8 text-left ">
                Subscribe to our newsletter
              </h2>

              <p className="text-white text-left text-sm">
                Subscribe to our newsletter & get notification about discouts.
              </p>
            </div>

            <CustomInput
              handleSave={handleSave}
              email={email}
              loading={loading}
              setEmail={setEmail}
            />
          </div>
        </Container>
      </div>
    </section>
  );
}

export const CustomInput = ({
  setEmail,
  handleSave,
  loading,
  email,
}: {
  setEmail: (value: string) => void;
  loading: boolean;
  email: string;
  handleSave: () => void;
}) => {
  return (
    <div className="flex bg-white rounded h-14 w-full max-w-xl relative">
      <input
        data-testid="newsletterEmail"
        data-cy="email"
        type="text"
        name="email"
        className="w-full outline-none px-4 border-0 focus:ring-0 rounded"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => {
          setEmail(e.currentTarget.value);
        }}
      />
<div className="absolute inset-y-0 right-0 flex flex-col p-1">
      <button
        data-cy="btn"
        data-testid="newsletterBtn"
        disabled={loading}
        onClick={handleSave}
        className={`bg-primary-600 text-white ms-auto px-6 py-2.5 flex-1 uppercase hover:bg-primary-900 rounded ${loading ? "cursor-wait" : ""
          }`}
      >
        subscribe
      </button>
    </div>
    </div>
  );
};
