import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = 'w-5 h-5' }) => {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, '');

  switch (key) {
    case 'python':
      return (
        <svg className={className} viewBox="0 0 128 128" fill="none">
          <path
            d="M63.5 10C35.8 10 37.6 22 37.6 22L37.7 34.4H64V38H27.5C14.7 38 7.3 47.9 7.3 64.1C7.3 80.3 15.6 86 23.4 86H32.6V73.4C32.6 59.8 44.5 59.8 44.5 59.8H63.9C78.4 59.8 79.4 49.3 79.4 49.3V23C79.4 23 79.9 10 63.5 10ZM50.8 19.3C53.7 19.3 56 21.6 56 24.5C56 27.4 53.7 29.7 50.8 29.7C47.9 29.7 45.6 27.4 45.6 24.5C45.6 21.6 47.9 19.3 50.8 19.3Z"
            fill="#387EB8"
          />
          <path
            d="M64.5 118C92.2 118 90.4 106 90.4 106L90.3 93.6H64V90H100.5C113.3 90 120.7 80.1 120.7 63.9C120.7 47.7 112.4 42 104.6 42H95.4V54.6C95.4 68.2 83.5 68.2 83.5 68.2H64.1C49.6 68.2 48.6 78.7 48.6 78.7V105C48.6 105 48.1 118 64.5 118ZM77.2 108.7C74.3 108.7 72 106.4 72 103.5C72 100.6 74.3 98.3 77.2 98.3C80.1 98.3 82.4 100.6 82.4 103.5C82.4 106.4 80.1 108.7 77.2 108.7Z"
            fill="#FFE052"
          />
        </svg>
      );

    case 'powerbi':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <rect x="2" y="16" width="6" height="14" rx="1.5" fill="#EAA400" />
          <rect x="10" y="10" width="6" height="20" rx="1.5" fill="#F2C811" />
          <rect x="18" y="5" width="6" height="25" rx="1.5" fill="#F9DE69" />
          <rect x="26" y="2" width="4" height="28" rx="1.5" fill="#111111" />
        </svg>
      );

    case 'sql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="9" ry="3" fill="#F4D83D" stroke="#111111" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke="#111111" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke="#111111" />
        </svg>
      );

    case 'pandas':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="currentColor">
          <rect x="4" y="6" width="6" height="20" rx="1" fill="#150458" />
          <rect x="13" y="11" width="6" height="15" rx="1" fill="#E70488" />
          <rect x="22" y="15" width="6" height="11" rx="1" fill="#FFCA00" />
        </svg>
      );

    case 'numpy':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="4" fill="#013243" />
          <path d="M6 18V6l6 6v6L6 18z" fill="#4DABCF" />
          <path d="M12 18V6l6 6v6l-6-6z" fill="#013243" stroke="#4DABCF" strokeWidth="1" />
        </svg>
      );

    case 'scikitlearn':
      return (
        <svg className={className} viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="14" fill="#F89939" />
          <path d="M9 16c0-3.87 3.13-7 7-7s7 3.13 7 7" stroke="#3499CD" strokeWidth="3" />
          <circle cx="16" cy="16" r="4" fill="#FFFFFF" />
        </svg>
      );

    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#F05032">
          <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.7 4.7l2.8 2.8c.6-.2 1.4 0 1.8.5.5.5.6 1.3.4 1.9l2.7 2.7c.6-.2 1.4-.1 1.9.4.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.6-.6-.7-1.5-.3-2.2l-2.5-2.5v6.5c.2.1.4.3.5.5.7.7.7 1.8 0 2.5-.7.7-1.8.7-2.5 0-.7-.7-.7-1.8 0-2.5.2-.2.4-.4.6-.5V9.4c-.2-.1-.4-.3-.6-.5-.6-.6-.7-1.5-.3-2.2L7.6 3.6 2.4 8.8c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.5z" />
        </svg>
      );

    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#111111">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      );

    case 'java':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#007396">
          <path d="M8.8 19.2c2.8.2 5.5-.1 8.2-.7.6-.1 1.2.2 1.3.8.1.6-.2 1.2-.8 1.3-3.2.7-6.4 1-9.6.8-.7 0-1.2-.6-1.2-1.2 0-.6.6-1 1.3-1h.8zM4 16.5c3.5.5 7.1.6 10.6.2 1.6-.2 3.2-.6 4.8-1.2.6-.2 1.3.1 1.5.7.2.6-.1 1.3-.7 1.5-1.8.7-3.6 1.2-5.5 1.4-3.8.4-7.7.3-11.5-.2-.7-.1-1.1-.7-1-1.4.1-.6.7-1 1.3-1h.5zM12 2C8 6 9 8 7 11c-1 1.5-2 2-2 3.5 0 2.5 3 4.5 7 4.5s7-2 7-4.5c0-1.5-1-2-2-3.5-2-3-1-5-5-9z" />
        </svg>
      );

    case 'html':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#E34F26">
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.6 5.8l-.2 2.2H9.2l.2 2.2h8l-.6 6.8L12 20.3l-4.8-1.3-.3-3.7h2.2l.2 1.9 2.7.7 2.7-.7.3-3.4H6.8l-.8-8.8h11.6z" />
        </svg>
      );

    case 'css':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="#1572B6">
          <path d="M3 2l1.6 18.2L12 22l7.4-1.8L21 2H3zm14.6 5.8l-.2 2.2H9.2l.2 2.2h8l-.6 6.8L12 20.3l-4.8-1.3-.3-3.7h2.2l.2 1.9 2.7.7 2.7-.7.3-3.4H6.8l-.8-8.8h11.6z" />
        </svg>
      );

    default:
      return (
        <span className="w-2 h-2 rounded-full bg-[#111111]" />
      );
  }
};
