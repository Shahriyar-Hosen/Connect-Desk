"use client";

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

import { IChildrenWithClass, IClassName } from "@/Interface";
import { arrow } from "@/public/assets/icon";
import { CommonText, Container } from ".";

export const Pagination: FC = () => {
  const NavigationBtn: FC<IClassName & { right?: boolean }> = ({
    className,
    right,
  }) => (
    <Link href="">
      <button
        className={twMerge(
          "bg-[#DADADA] border-2 border-[#DADADA] hover:bg-gray-300 transition-all delay-100 rounded-[8px] p-3 py-4 shadow",
          className
        )}
      >
        <Image
          src={arrow}
          className={right ? "-rotate-90" : "rotate-90"}
          alt=""
        />
      </button>
    </Link>
  );

  const NumberBtn: FC<IChildrenWithClass> = ({ children, className }) => (
    <Link href="">
      <button
        className={twMerge(
          "border-2 hover:bg-[#E3EDEA] transition-all delay-100 rounded-[8px] p-3 py-2 shadow",
          className
        )}
      >
        {children}
      </button>
    </Link>
  );

  return (
    <Container className="mb-10 lg:mb-20">
      <div className="flex justify-center items-center gap-8">
        <NavigationBtn />
        <div className="flex justify-center items-center gap-2.5">
          <NumberBtn>1</NumberBtn>
          <NumberBtn>2</NumberBtn>
          <NumberBtn>3</NumberBtn>
          <NumberBtn>4</NumberBtn>
          <div className="pb-2.5">...</div>
          <NumberBtn>25</NumberBtn>
        </div>
        <NavigationBtn right />
      </div>
      <CommonText className="text-center mt-5">1 - 10 of 120 Blogs</CommonText>
    </Container>
  );
};
