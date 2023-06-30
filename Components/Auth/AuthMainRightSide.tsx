"use client";

import { Button } from "@Components/Common";
import { IAuthMainRightSide } from "@Interface";
import Link from "next/link";
import { AgreeSection } from "./AgreeSection";
import { AuthNavigate } from "./AuthNavigate";
import { AuthTopSection } from "./AuthTopSection";

export const AuthMainRightSide = ({
  setUserType,
  userType,
  children,
  agreeSectionLabel1,
  authTopLabel,
  btnText,
  maxWidth,
  authNavigateBtnText,
  authNavigateLink,
  authNavigateLabel,
  agreeSectionLabel2,
  agreeSectionLabelLink2,
  authTopLabelType,
  btnLink,
}: IAuthMainRightSide) => (
  <section className="w-[90%] md:w-full mx-auto lg:pr-5">
    <div className={`w-full ${maxWidth} mx-auto`}>
      <AuthTopSection
        label={authTopLabel}
        userType={userType}
        setUserType={setUserType}
        labelType={authTopLabelType}
      />

      {children}

      {agreeSectionLabel1 && (
        <AgreeSection
          label1={agreeSectionLabel1}
          label2={agreeSectionLabel2}
          labelLink2={agreeSectionLabelLink2}
        />
      )}

      <br />

      <Link href={btnLink || ""}>
        <Button variant="primary" width="full" size="lg">
          {btnText}
        </Button>
      </Link>

      <AuthNavigate
        label={authNavigateLabel}
        btnText={authNavigateBtnText}
        link={authNavigateLink}
      />
    </div>
  </section>
);
