import type React from 'react';

const FullWidthWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className="mx-auto w-full max-w-7xl p-2">{children}</div>;
};

export default FullWidthWrapper;
