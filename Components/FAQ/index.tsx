import { Container } from "@Components/Common";

// If you need to keep an FAQ open, use (checked={true}) in the input section

const FAQ = () => (
  <Container className="mt-[60px]">
    <div className="collapse collapse-plus border-t rounded-none border-primary opacity-70 font-[Poppins]">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black">
        What is the monthly/yearly charge for this software?
      </div>
      <div className="collapse-content">
        <p>hello</p>
      </div>
    </div>

    <div className="collapse collapse-plus border-t rounded-none border-primary opacity-70 font-[Poppins]">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black">
        Click to open this one and close others
      </div>
      <div className="collapse-content">
        <p>hello</p>
      </div>
    </div>

    <div className="collapse collapse-plus border-t rounded-none border-primary opacity-70 font-[Poppins]">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-black">
        Click to open this one and close others
      </div>
      <div className="collapse-content">
        <p>hello</p>
      </div>
    </div>
  </Container>
);

export default FAQ;
