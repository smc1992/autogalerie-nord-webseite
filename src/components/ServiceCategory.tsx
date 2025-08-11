"use client";

import { useState, ReactNode } from 'react';

interface ServiceCategoryProps {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  isEssential?: boolean;
  children: ReactNode;
}

export default function ServiceCategory({ 
  title, 
  description, 
  enabled, 
  onToggle, 
  isEssential = false, 
  children 
}: ServiceCategoryProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex justify-between items-start">
        <div className="flex-grow pr-4">
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
        <div className="flex-shrink-0">
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="checkbox" 
              className="sr-only peer" 
              checked={enabled}
              onChange={(e) => onToggle(e.target.checked)}
              disabled={isEssential}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-custom-red"></div>
          </label>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-200 flex justify-end">
        {!isEssential && (
          <button onClick={() => setIsOpen(!isOpen)} className="text-sm text-gray-500 hover:text-custom-red focus:outline-none">
            {isOpen ? 'Details ausblenden' : 'Details anzeigen'}
          </button>
        )}
      </div>
      {isOpen && !isEssential && (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
}
