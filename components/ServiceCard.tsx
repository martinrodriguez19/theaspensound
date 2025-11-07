"use client";

import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div
      className="p-8 transition-colors group cursor-pointer"
      style={{ 
        backgroundColor: '#000000',
        border: '1px solid #374151'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#6b7280';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#374151';
      }}
    >
      <div className="mb-4 text-white group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-serif text-2xl mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}