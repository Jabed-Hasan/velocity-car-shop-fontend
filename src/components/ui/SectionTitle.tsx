import React from "react";

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="mb-4 md:mb-7">
      <div className="bg-velo-red h-1 w-20 rounded-full" />
      <div className="mt-3 flex items-end justify-between">
        <h3 className="text-2xl font-medium text-velo-black dark:text-white md:text-4xl">{title}</h3>
      </div>
    </div>
  );
};

export default SectionTitle;
