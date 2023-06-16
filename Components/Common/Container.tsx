import { IChildrenWithClass } from "@Interface";

export const Container = ({ children, className }: IChildrenWithClass) => {
  return (
    <section className={`w-[90%] sm:w-full container mx-auto ${className}`}>
      {children}
    </section>
  );
};
