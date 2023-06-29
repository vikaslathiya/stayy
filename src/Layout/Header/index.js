import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/images/house-icon.png";
import stayy_logo from "@/images/stayy-logo.png";
import ButtonPrimary from "../../components/Buttons/primary";
import ButtonSecondary from "../../components/Buttons/secondary";

const TopHeader = () => {
    return (
        <header class="sticky drop-shadow-sm bg-white top-0 z-10 h-max max-w-full rounded-none">
            <nav className="flex items-center justify-between py-3 px-10 lg:px-10 lg:py-3">
                <div className="flex items-center gap-10">
                    <Link href='/' className="flex items-center justify-center h-10 gap-2.5">
                        <div className="h-10 w-10">
                            <Image alt="logo" src={logo} />
                        </div>
                        <div className="h-3.5 w-16">
                            <Image alt="nature" src={stayy_logo} />
                        </div>
                    </Link>
                    <div className="w-px h-7 bg-light-gray hidden md:flex" />
                    <div className="hidden md:flex">
                        <a href="#" className="flex items-center text-dark text-sm font-semibold">
                            About
                        </a>
                    </div>
                    <div className="hidden md:flex">
                        <a href="#" className="flex items-center text-dark text-sm font-semibold">
                            Blog
                        </a>
                    </div>
                </div>
                <div className="flex gap-6">
                    <ButtonPrimary label="JOIN STAYY" classes='hidden md:flex' />
                    <ButtonSecondary label="Log in" />
                </div>
            </nav>
        </header>
    );
};

export default TopHeader;
