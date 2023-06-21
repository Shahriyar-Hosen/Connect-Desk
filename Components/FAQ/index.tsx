import { Container } from "@Components/Common";
import { IFAQ } from "@Interface/page";
import { SingleFAQ } from "./SingleFAQ";

const FAQ = ({ data, limit = data.length }: IFAQ) => (
  <Container className="mt-[60px]">
    {data.slice(0, limit).map((props, i) => (
      <SingleFAQ key={i} {...props} />
    ))}
  </Container>
);

export default FAQ;
