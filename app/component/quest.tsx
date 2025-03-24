// components/Quest.tsx
import React, { useState } from 'react';

interface QuestProps {
  title: string;
  index: number;
  children: React.ReactNode;
}

const Quest: React.FC<QuestProps> = ({ title, index, children }) => {
  const [activeQuest, setActiveQuest] = useState<number | null>(null);

  const toggleActiveQuest = () => {
    setActiveQuest(activeQuest === index ? null : index);
  };

  return (
    <div key={index} className="mb-6 border-b border-[#444] pb-4">
      <button
        onClick={toggleActiveQuest}
        className="flex items-center gap-3 w-full text-left"
      >
        <img
          src="/questmark.svg"
          alt="!"
          className="w-5 h-5 mt-1 shrink-0"
        />
        <h3 className="uppercase font-semibold text-lg text-yellow-400 grow">
          {title}
        </h3>
        <span className="text-yellow-400 text-xl">
          {activeQuest === index ? '▲' : '▼'}
        </span>
      </button>
      {activeQuest === index && (
        <div className="mt-2 text-sm text-[#DDD]">{children}</div>
      )}
    </div>
  );
};

export default Quest;
