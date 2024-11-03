"use client";
import React, { useState } from "react";
import Container from "../../custom/Container";
import Row from "../../custom/Row";
import Link from "next/link";
import { LogOut, Mail, User } from "lucide-react";
import LanguageCurrency from "../../custom/LanguageCurrency";
import UserMenu from "../../custom/UserMenu";
import { useSession } from "next-auth/react";
import { Emaillineicon, Loginicon, Phonelineicon } from "@/icons";

export default function Ad() {
  const { status } = useSession();

  const [openUserMenu, setOpenUserMenu] = useState(false);

  return (
    <section className="hidden relative lg:flex w-full bg-primary-500">
      <Container>
        <Row className="justify-between py-1">
          <div className="flex gap-10 text-sm"><p className="flex gap-1 items-center text-white"><Phonelineicon className={'size-3'} /><Link href="tel:+91-9828368878" className="hover:text-primary-100 ease-in-out duration-200">+91-9828368878</Link></p> <p className="flex gap-1 items-center text-white"><Emaillineicon className={'size-3'}/><Link href="mailto:help@fullstoks.com" className="hover:text-primary-100 ease-in-out duration-200">help@fullstoks.com</Link></p> </div>
          <div className="flex gap-4 items-center">
            <Link 
              id="contact"
              href="/contact"
              data-testid="contact"
              className="hidden items-center px-4 py-2 h-full rounded-md hover:bg-primary-100"
            >
              <Mail className="text-primary-500 h-4 w-4" />
              <span className="mx-2">Contact</span>
            </Link>

            <LanguageCurrency className="flex gap-4" />

            {/* TODO:Auth logic here */}
            <div className="flex justify-flex-end items-center gap-4 pl-4 py-2 h-full text-white">
              {/* If login  */}

              {status === "authenticated" ? (
                <div className="flex gap-2 text-sm hover:cursor-pointer hover:text-primary-100 ease-in-out duration-200">
                  <User className="size-4 " />
                  <span onClick={() => setOpenUserMenu(!openUserMenu)}>
                    Account
                  </span>
                  <UserMenu openUserMenu={openUserMenu} />
                </div>
              ) : (
                <Link
                  href="/signin"
                  className="cursor-pointer text-sm flex gap-2 items-center hover:text-primary-100 ease-in-out duration-200"
                >
                  <Loginicon className="size-4" />
                  <span>Login</span>
                </Link>
              )}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}
