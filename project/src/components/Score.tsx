// project/src/components/Score.tsx
import React from 'react';

type ScoreProps = {
  score: number;
};

const Score: React.FC<ScoreProps> = ({ score }) => {
  return (
    <div className="text-4xl font-bold font-lobster text-red-500 mb-4">
      Score: {score}
    </div>
  );
};

export default Score;
