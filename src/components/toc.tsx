'use client';

import React from 'react';
import { AlignLeft } from 'lucide-react';

interface TocProps {
  doc: {
    title: string;
    slug: string;
    date?: string;
  };
}

const Toc: React.FC<TocProps> = ({}) => {
  return (
    <aside className="fixed right-0 hidden xl:block w-64 p-6 top-16 border-l border-[var(--color-border)] h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="top-0 pb-2">
        <h2 className="flex flex-1 gap-2 item-center font-semibold text-[var(--color)]">
          <AlignLeft size={19} />
          On this page
        </h2>
      </div>
      {/* <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
        下载pdf
      </button> */}
      <div>
        这篇文章有不妥，
        <a
          href="https://github.com/amehito/tokyo-cool/issues/new"
          className="cursor-pointer font-bold border-b"
        >
          我要反馈
        </a>
      </div>
      {/* 最新更新时间：{doc.date} */}
    </aside>
  );
};

export default Toc;
