
import React from 'react';
import { PropDataItem } from '../../types';

interface PropsTableProps {
  data: PropDataItem[];
}

export const PropsTable: React.FC<PropsTableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-slate-400">
        <thead className="text-xs text-slate-300 uppercase bg-slate-700/50">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-l-lg">
              Prop
            </th>
            <th scope="col" className="px-6 py-3">
              Type
            </th>
            <th scope="col" className="px-6 py-3">
              Default
            </th>
            <th scope="col" className="px-6 py-3 rounded-r-lg">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-slate-800/50 border-b border-slate-700 last:border-b-0">
              <th scope="row" className="px-6 py-4 font-mono text-sm text-pink-400 whitespace-nowrap">
                {item.prop}
              </th>
              <td className="px-6 py-4 font-mono text-xs text-cyan-400">
                {item.type}
              </td>
              <td className="px-6 py-4 font-mono text-xs text-amber-400">
                {item.defaultValue}
              </td>
              <td className="px-6 py-4">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
