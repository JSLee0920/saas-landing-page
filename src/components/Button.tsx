import { ButtonHTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva("border rounded-full px-6 font-medium", {
  variants: {
    variant: {
      primary: "bg-lime-400 text-neutral-950 border-lime-500",
      secondary: "border-white text-white bg-transparent",
    },
    size: {
      default: "h-12",
      sm: "h-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export default function Button(
  props: {
    variant: "primary" | "secondary";
    size?: "default" | "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant, className, size, ...OtherProps } = props;
  return (
    <button
      className={classes({
        variant,
        size,
        className,
      })}
      {...OtherProps}
    />
  );
}
