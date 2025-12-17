
import React from 'react';

interface ScoreCircleProps {
  score: number;
  total: number;
}

export const ScoreCircle: React.FC<ScoreCircleProps> = ({ score, total }) => {
  const percentage = total > 0 ? (score / total) * 100 : 0;
  const radius = 60;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getStrokeColor = () => {
    if (percentage < 50) return '#EF4444'; // red-500
    if (percentage < 80) return '#F59E0B'; // amber-500
    return '#00c600'; // lumen-primary
  };

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
        <circle
          stroke="#265627" // lumen-dim
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke={getStrokeColor()}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset, transition: 'stroke-dashoffset 0.5s ease-out' }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <span className="text-3xl font-bold" style={{ color: getStrokeColor() }}>
          {Math.round(percentage)}%
        </span>
        <span className="text-sm text-text-muted font-mono">
          {score}/{total}
        </span>
      </div>
    </div>
  );
};