"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={"light"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:text-base group-[.toaster]:bg-primary-gray group-[.toaster]:bg-opacity-90 group-[.toaster]:backdrop-blur-md group-[.toaster]:text-slate-100 group-[.toaster]:border-slate-600 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-slate-950 dark:group-[.toaster]:text-slate-50 dark:group-[.toaster]:border-slate-800",
          description:
            "group-[.toast]:text-slate-200 dark:group-[.toast]:text-slate-400",
          actionButton:
            "group-[.toast]:bg-slate-900 group-[.toast]:text-slate-50 \
            dark:group-[.toast]:bg-slate-50 dark:group-[.toast]:text-slate-900",
          cancelButton:
            "group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500 \
            dark:group-[.toast]:bg-slate-800 dark:group-[.toast]:text-slate-400",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };