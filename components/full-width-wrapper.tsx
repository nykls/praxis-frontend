import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

const FullWidthWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-20 py-3">
      {children}
    </div>
  );
};

export default FullWidthWrapper;
