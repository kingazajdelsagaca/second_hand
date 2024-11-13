import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-85px-200px)]">
      <Loader2Icon className="animate-spin text-primary" />
    </div>
  );
}
