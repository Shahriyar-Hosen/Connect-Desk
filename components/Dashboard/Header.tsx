"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Header = () => {
  // const { sideBarOpen, setSideBarOpen } = useContext(GlobalContext);
  const [sideBarOpen, setSideBarOpen] = useState(true);

  // const { status } = useSession();
  const router = useRouter();

  // console.log(status);

  // useEffect(() => {
  //   if (status === "authenticated") router.push("/");
  // }, [status]);

  return (
    <header className="sticky top-0 z-999 flex w-full bg-[#ddffeb]">
      <div className="flex flex-grow items-center gap-2 justify-end py-4 px-4  md:px-6 2xl:px-11 max-w-[1440px]">
        {/* <RxAvatar className="text-primary" size={"50px"} />

        <MdOutlineClose className="text-primary lg:hidden " size={"30px"} />
        <RxHamburgerMenu className="text-primary lg:hidden" size={"30px"} /> */}

        {/* 
        <button
          onClick={() =>
            status === "authenticated" ? signOut() : signIn("google")
          }
          className="inline-flex items-center justify-center bg-black px-6 py-2 text-lg text-white font-medium tracking-wide uppercase"
        >
          {status === "authenticated" ? "Logout" : "Login"}
          
          Login
        </button> */}

        <ul className="menu bg-white lg:menu-horizontal rounded-lg py-0">
          <li>
            <Link href="/" className="hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Home
            </Link>
          </li>
          <li>
            <Link href="/dashboard" className="hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Updates
              <span className="badge badge-sm badge-warning">NEW</span>
            </Link>
          </li>
          <li>
            <a className="hover:text-primary">
              Stats
              <span className="badge badge-xs badge-info"></span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
