import { logoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const handleLogout = async () => {
    try {
      const logoutUser = await logoutAccount();
      if (logoutUser) redirect("/sign-in")
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user.firstName[0]}</p>
      </div>
      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 font-semibold text-gray-700 truncate">
          {`${user.firstName} ${user.lastName}`}
        </h1>
        <p className="truncate text-14 font-normal text-gray-600">
          {user.email}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogout}>
        <Image src="/icons/logout.svg" fill alt="logout" />
      </div>
    </footer>
  );
};

export default Footer;
