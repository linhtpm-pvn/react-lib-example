
import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden relative group">
      <button
        onClick={handleCopy}
        className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 text-white text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <pre className="text-sm p-4 overflow-x-auto">
        <code className="language-tsx text-cyan-300">{code.trim()}</code>
      </pre>
    </div>
  );
};
