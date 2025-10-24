"use client";

interface ITextProps {
  type?: "h1" | "h2" | "h3";
  label: string;
}

export default function Text({ label, type }: ITextProps) {
  if(type === "h1") {
    return (
      <div className="flex flex-col items-start mb-4">
        <h1 className="text-3xl font-semibold text-primary dark:text-gray-50">
          {label}
        </h1>
        <span className="block w-12 h-1 bg-primary dark:bg-gray-50 rounded-full mt-2" />
      </div>
    );
  }

  else if(type === "h2") {
    return (
      <h1 className="text-3xl lg:text-5xl font-semibold text-primary dark:text-gray-50 mb-4">
        {label}
      </h1>
    );
  }

  else if(type === "h3") {
    return (
      <h1 className="text-lg font-semibold text-primary dark:text-gray-50">
        {label}
      </h1>
    );
  }

  else {
    return (
      <h1 className="text-sm text-gray-600 dark:text-gray-50">
        {label}
      </h1>
    );
  }
}
