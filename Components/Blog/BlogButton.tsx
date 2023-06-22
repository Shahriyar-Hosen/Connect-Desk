export const BlogButton = ({
  text,
  isHaveBackground,
}: {
  text: string;
  isHaveBackground?: boolean;
}) => (
  <div className={`${isHaveBackground && "bg-base-100"} p-3 rounded-md`}>
    <p className="text-[13px] font-semibold">{text}</p>
  </div>
);
