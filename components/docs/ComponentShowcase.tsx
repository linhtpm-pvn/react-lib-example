
import React from 'react';
import { CodeBlock } from './CodeBlock';
import { PropsTable } from './PropsTable';
import { PropDataItem } from '../../types';

interface ComponentShowcaseProps {
  title: string;
  description: string;
  code: string;
  propsData: PropDataItem[];
  children: React.ReactNode;
}

export const ComponentShowcase: React.FC<ComponentShowcaseProps> = ({
  title,
  description,
  code,
  propsData,
  children,
}) => {
  return (
    <section className="bg-slate-800/50 border border-slate-700 rounded-xl overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
        <p className="mt-2 text-slate-400">{description}</p>
      </div>

      <div className="p-6 md:p-8 border-t border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Preview</h3>
        <div className="bg-slate-900 rounded-lg p-6 flex justify-center items-center">
          {children}
        </div>
      </div>
      
      <div className="p-6 md:p-8 border-t border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Usage</h3>
        <CodeBlock code={code} />
      </div>

      <div className="p-6 md:p-8 border-t border-slate-700">
        <h3 className="text-lg font-semibold text-white mb-4">Properties</h3>
        <PropsTable data={propsData} />
      </div>
    </section>
  );
};
