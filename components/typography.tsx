// Typography.tsx
import { cn } from "@/lib/utils";
import React from "react";

type ComponentType =
  | "p"
  | "blockquote"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "small"
  | "ul"
  | "ol";

interface TypographyProps {
  variant: ComponentType;
  className?: string;
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  children,
  className,
}) => {
  const baseStyle = "leading-7"; // Basis-Stil

  // Definiert Styles für jede Variante
  const variantStyles = {
    p: `${baseStyle}`,
    blockquote: "mt-6 border-l-4 pl-4 italic text-lg",
    small: "text-sm font-medium leading-none",
    ul: "list-disc pl-5 my-4",
    ol: "list-decimal pl-5 my-4",
    h1: "scroll-m-20 text-2xl lg:text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 text-xl border-b pb-2 lg:text-3xl font-semibold tracking-tight first:mt-0",
    h3: "scroll-m-20 lg:text-2xl text-lg font-semibold tracking-tight",
    h4: "scroll-m-20 lg:text-xl text-md font-semibold tracking-tight",
  };

  // Mappt die Variantennamen zu den entsprechenden HTML-Elementen
  const componentMapping = {
    p: "p",
    blockquote: "blockquote",
    small: "small",
    ul: "ul",
    ol: "ol",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
  };

  // Bestimmt das zu verwendende HTML-Element basierend auf der Variantenprop
  const Component = componentMapping[variant] || "p";

  return React.createElement(
    Component,
    { className: cn(variantStyles[variant], className) },
    children
  );
};

export default Typography;
