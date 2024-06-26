import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const FullWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "container md:container lg:container-2xl px-3 mx-auto lg:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default FullWidthWrapper;
