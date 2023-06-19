"use client";

import {
  BackgroundImage,
  ComponentHeader,
  Container,
  MainContainer,
} from "@Components/Common";
import { packagesData } from "@public/Data";
import { packageBg, packageBgLite } from "@public/assets/images";

const Packages = () => {
  return (
    <MainContainer>
      <Container>
        <ComponentHeader
          title={
            <>
              Pricing To <span className="text-primary">Suite</span> All Size
            </>
          }
          subTitle={
            <>
              Of <span className="text-secondary">Business</span>
            </>
          }
        />

        {/* Package Card */}
        <section className="flex justify-center items-center flex-wrap gap-[30px] md:gap-[60px]">
          {packagesData.map(({ duration, features, price, title }, i) => (
            <BackgroundImage
              key={i}
              img={i % 2 === 0 ? packageBgLite : packageBg}
              className="sm:w-96"
            >
              <div className="">
                Package CardPackage CardPackage CardPackage CardPackage Card
                Package Card
              </div>
            </BackgroundImage>

            // <section
            //   key={i}
            //   className="flex justify-center items-center mt-[30px] md:mt-[60px] shadow-2xl rounded-[25px]"
            // >
            //   <div className="w-full sm:w-[499px] max-w-[499px] h-[585px] sm:h-[730px] md:h-[735px] bg-[#02684833] rounded-[25px] relative">
            //     <div className="absolute top-0 z-10">
            //       <Image src={rectangle} alt="" />
            //     </div>

            //     <div className="absolute w-full z-10 rounded-t-[25px] flex flex-col items-center">
            //       <div className="w-full h-16 sm:h-20 bg-primary flex justify-center items-center rounded-t-[25px]">
            //         <h5 className="font-semibold text-xl sm:text-3xl text-white">
            //           {title}
            //         </h5>
            //       </div>

            //       <CommonText
            //         text="lg"
            //         className="text-[#1B253F] mt-3 sm:mt-[18px]"
            //       >
            //         {duration}
            //       </CommonText>

            //       <h6 className="font-semibold text-3xl sm:text-5xl md:text-[52px] mt-[10px] flex justify-center items-center gap-1">
            //         <Image src={takaLogo} width={21} alt="" /> {price}
            //       </h6>

            //       <div className="mt-3 sm:mt-6 w-[85%] h-auto rounded-[25px]  bg-white relative pb-6">
            //         <div className="rounded-t-[25px] w-full h-[50px] sm:h-[55px] md:h-[60px] bg-primary flex justify-center items-center ">
            //           <h5 className="font-semibold text-lg sm:text-2xl text-white">
            //             Features
            //           </h5>
            //         </div>

            //         <div className="flex flex-col items-start justify-center m-4 sm:my-6 sm:mx-5 gap-[5px] sm:gap-3">
            //           {features.map((item, i) => (
            //             <div
            //               key={i}
            //               className="flex justify-start items-center gap-[10px]"
            //             >
            //               <Image src={tick} alt="package" />
            //               <CommonText>{item}</CommonText>
            //             </div>
            //           ))}
            //         </div>

            //         <div className="flex justify-center items-center absolute -bottom-[25px] w-full">
            //           <Button variant="primary" rounded text="18" size="lg">
            //             Purchase Package
            //           </Button>
            //         </div>
            //       </div>
            //     </div>
            //   </div>
            // </section>
          ))}
        </section>
      </Container>
    </MainContainer>
  );
};

export default Packages;
