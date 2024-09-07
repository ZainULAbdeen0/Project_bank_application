"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MobileNav = ({ user }: MobileNavProps) => {
  const pathName = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="Menu"
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="bg-white">
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
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((link) => {
                  const isActive =
                    pathName === link.route ||
                    pathName.startsWith(`${link.route}/`);
                  return (
                    <SheetClose asChild key={link.label}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >

                          <Image
                            src={link.imgURL}
                            width={20}
                            height={20}
                            alt={link.label}
                            className={cn({
                              "brightness-[3] invert-0": isActive,
                            })}
                          />
                    
                        <p
                          className={cn("text-16 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {link.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
