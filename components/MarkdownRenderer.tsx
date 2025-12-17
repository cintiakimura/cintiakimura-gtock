
import React, { useEffect, useRef } from 'react';

declare global {
    interface Window {
        marked: {
            parse(markdown: string): string;
        };
    }
}

interface MarkdownRendererProps {
  content: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const htmlContent = window.marked.parse(content || '');

  useEffect(() => {
    if (contentRef.current) {
        // Make images responsive and lazy-load
        contentRef.current.querySelectorAll('img').forEach(img => {
            img.classList.add('max-w-full', 'h-auto', 'my-6', 'rounded-lg', 'shadow-lg', 'mx-auto', 'border-2', 'border-white/10');
        });
        
        // Style tables
        contentRef.current.querySelectorAll('table').forEach(table => {
            table.classList.add('w-full', 'my-6', 'border-collapse', 'text-left');
        });
        contentRef.current.querySelectorAll('th, td').forEach(cell => {
            cell.classList.add('border', 'border-white/10', 'px-4', 'py-2');
        });
         contentRef.current.querySelectorAll('thead').forEach(thead => {
            thead.classList.add('bg-lumen-surface');
        });
         contentRef.current.querySelectorAll('th').forEach(th => {
            th.classList.add('font-bold', 'uppercase', 'tracking-wider');
        });

        // Style headings
        contentRef.current.querySelectorAll('h1').forEach(h => h.classList.add('text-4xl', 'font-bold', 'mb-4', 'mt-6', 'text-lumen-primary'));
        contentRef.current.querySelectorAll('h2').forEach(h => h.classList.add('text-3xl', 'font-bold', 'mb-3', 'mt-8', 'border-b', 'border-lumen-primary/20', 'pb-2', 'text-lumen-secondary'));
        contentRef.current.querySelectorAll('h3').forEach(h => h.classList.add('text-2xl', 'font-bold', 'mb-2', 'mt-6'));
        
        // Style paragraphs
        contentRef.current.querySelectorAll('p').forEach(p => p.classList.add('my-4', 'leading-relaxed', 'text-lg'));
        
        // Style lists
        contentRef.current.querySelectorAll('ul, ol').forEach(list => list.classList.add('list-disc', 'my-4', 'pl-6', 'space-y-2', 'text-lg'));
        contentRef.current.querySelectorAll('ol').forEach(list => list.classList.add('list-decimal'));

        // Style links
        contentRef.current.querySelectorAll('a').forEach(a => a.classList.add('text-lumen-primary', 'hover:underline', 'font-semibold'));
        
        // Style code
        contentRef.current.querySelectorAll('pre > code').forEach(code => {
          if (code.parentElement) {
            code.parentElement.classList.add('bg-black/50', 'p-4', 'rounded-md', 'my-4', 'overflow-x-auto', 'text-sm');
          }
        });
        contentRef.current.querySelectorAll('p > code, li > code').forEach(code => code.classList.add('bg-lumen-surface', 'px-2', 'py-1', 'rounded-md', 'font-mono', 'text-sm'));
        
        // Style blockquotes
        contentRef.current.querySelectorAll('blockquote').forEach(bq => bq.classList.add('border-l-4', 'border-lumen-primary', 'pl-4', 'my-4', 'italic', 'text-text-muted'));
        
        // Style strong tags
        contentRef.current.querySelectorAll('strong').forEach(s => s.classList.add('font-bold', 'text-text-primary'));
    }
  }, [htmlContent]);
  

  return (
    <div
      ref={contentRef}
      className="text-text-primary"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
};