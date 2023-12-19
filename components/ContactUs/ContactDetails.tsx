"use client";

import { contactData } from "@/public/Data";
import Image from "next/image";
import { FC } from "react";
import { CommonText } from "..";
import { IIntlTranslator } from "@/Interface";

export const ContactDetails: FC<IIntlTranslator> = ({ t }) => (
  <div className="w-full flex flex-col justify-center items-center mx-auto">
    <div>
      {contactData.map((data) => (
        <div key={data.title} className="my-4 flex gap-1 items-start">
          <Image src={data.icon} alt={data.title} />
          <div>
            <h3 className="text-sm font-semibold">{t(data.title)}</h3>
            {data.title === "Location" ? (
              <iframe
                className="w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
                height="150"
                aria-hidden="false"
              ></iframe>
            ) : (
              data.details.map((p) => (
                <div key={p}>
                  <CommonText>{p}</CommonText>
                </div>
              ))
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);
