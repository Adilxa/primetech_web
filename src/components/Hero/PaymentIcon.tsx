import React from 'react';

const PaymentIcon = () => {
  return (
    <svg
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: 'drop-shadow(0 10px 30px rgba(59, 130, 246, 0.3))' }}
    >
      {/* Background Circle */}
      <circle cx="150" cy="150" r="140" fill="url(#gradient1)" opacity="0.1" />

      {/* Main Card */}
      <rect
        x="60"
        y="90"
        width="180"
        height="120"
        rx="16"
        fill="url(#gradient2)"
      />

      {/* Card Stripe */}
      <rect x="60" y="110" width="180" height="30" fill="#1E3A8A" opacity="0.5" />

      {/* Chip */}
      <rect x="80" y="155" width="40" height="30" rx="6" fill="#60A5FA" />
      <line x1="90" y1="155" x2="90" y2="185" stroke="#3B82F6" strokeWidth="2" />
      <line x1="100" y1="155" x2="100" y2="185" stroke="#3B82F6" strokeWidth="2" />
      <line x1="110" y1="155" x2="110" y2="185" stroke="#3B82F6" strokeWidth="2" />

      {/* Contactless Icon */}
      <g transform="translate(190, 160)">
        <path
          d="M0 10 Q 5 5, 10 0"
          stroke="#60A5FA"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M-5 15 Q 5 5, 15 -5"
          stroke="#60A5FA"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.7"
        />
        <path
          d="M-10 20 Q 5 5, 20 -10"
          stroke="#60A5FA"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.4"
        />
      </g>

      {/* QR Code */}
      <rect x="140" y="155" width="60" height="40" rx="4" fill="#1E3A8A" opacity="0.3" />
      <g transform="translate(145, 160)">
        {/* QR Pattern */}
        {[0, 1, 2, 3, 4].map((i) =>
          [0, 1, 2, 3, 4].map((j) => (
            <rect
              key={`${i}-${j}`}
              x={i * 10}
              y={j * 6}
              width="8"
              height="4"
              fill={(i + j) % 2 === 0 ? '#3B82F6' : '#60A5FA'}
              opacity={Math.random() > 0.3 ? 1 : 0}
            />
          ))
        )}
      </g>

      {/* Floating Coins */}
      <circle cx="90" cy="60" r="15" fill="url(#gradient3)" />
      <circle cx="90" cy="60" r="12" fill="none" stroke="#60A5FA" strokeWidth="2" />
      <text x="90" y="66" textAnchor="middle" fill="#3B82F6" fontSize="16" fontWeight="bold">$</text>

      <circle cx="210" cy="70" r="12" fill="url(#gradient3)" opacity="0.8" />
      <circle cx="210" cy="70" r="10" fill="none" stroke="#60A5FA" strokeWidth="1.5" />
      <text x="210" y="74" textAnchor="middle" fill="#3B82F6" fontSize="12" fontWeight="bold">₽</text>

      {/* Particle Effects */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const radius = 160;
        const x = 150 + Math.cos(angle) * radius;
        const y = 150 + Math.sin(angle) * radius;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={2 + Math.random() * 3}
            fill="#3B82F6"
            opacity={0.3 + Math.random() * 0.4}
          />
        );
      })}

      {/* Gradients */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>

        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>

        <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PaymentIcon;
