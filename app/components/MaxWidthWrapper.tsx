import React from "react";

const MaxWidthWrapper = ({
  className,
  children,
  noPadding = false,
  id,
}: {
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
  id?: string;
}) => {
  return (
    <div
      id={id}
      className={`${className || ""} max-w-[1375px] w-full mx-auto ${
        noPadding ? " py-0" : "py-5 lg:py-12"
      }   px-5 md:px-10  `}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
