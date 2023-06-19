"use client";

const CartTop = ({
  title,
  height,
  text,
}: {
  title: string;
  height: string;
  text: "md" | "lg";
}) => (
  <div
    className={`w-full bg-primary flex justify-center items-center rounded-t-[25px] ${height}`}
  >
    <h5
      className={`font-semibold text-white ${
        text === "lg" ? "text-lg sm:text-xl" : "text-sm sm:text-lg"
      }`}
    >
      {title}
    </h5>
  </div>
);

export default CartTop;
