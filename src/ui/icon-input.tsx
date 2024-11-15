import * as React from "react";

import { cn } from "~/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: JSX.Element;
}

const IconInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div
        className={cn(
          "flex h-10 w-full items-center rounded-md border border-slate-200 bg-white px-3 py-2 text-sm \
          ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium \
          placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 \
          focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed \
          disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 \
          dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
          className
        )}
      >
        {icon}
        <input
          {...props}
          type={type}
          ref={ref}
          className="w-full p-2 py-1 placeholder:text-muted-foreground outline-none disabled:cursor-not-allowed 
          disabled:opacity-50"
        />
      </div>
    );
  }
);
IconInput.displayName = "IconInput";

export { IconInput };
