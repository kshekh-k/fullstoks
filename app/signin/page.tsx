import { auth } from "@/auth";
import Login from "@/components/modules/website/auth/Login";
import { mergeOpenGraph } from "@/lib/mergeOpenGraph";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";

export default  async function page() {

  const session = await auth();
  if(session){
    redirect('/')
  }

  return <Login />;
}
export const metadata: Metadata = {
  title: "Fullstoks Fashin Strore",
  description: "Buy fashion product here",
  icons: {
    icon: "/assets/images/fullstoks-fav.svg",
  },

  openGraph: mergeOpenGraph({
    title: "Login - Next Js App",
    url: "/",
  }),
};
