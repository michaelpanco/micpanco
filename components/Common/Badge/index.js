import { twMerge } from "tailwind-merge";

export default function Badge({ children, theme = "teal" }) {
  return (
    <div
      className={twMerge(
        "inline-block text-white px-4 text-xs lg:text-sm py-2 rounded-lg font-semibold text-center",
        theme === "teal" && "bg-[#468AA9]",
        theme === "lime" && "bg-[#82b983]"
      )}
    >
      {children}
    </div>
  );
}
