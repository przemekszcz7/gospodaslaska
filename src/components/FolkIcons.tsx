import { motion } from "motion/react";

export const FolkFlower = ({ className = "w-6 h-6" }: { className?: string }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className={className}
    animate={{ scale: [1, 1.05, 1] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <circle cx="50" cy="50" r="10" fill="#C4882A" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <path
        key={angle}
        d="M50 40 Q60 10 50 0 Q40 10 50 40"
        transform={`rotate(${angle} 50 50)`}
        fill={angle % 90 === 0 ? "#8B1A1A" : "#1A2A4A"}
      />
    ))}
  </motion.svg>
);

export const Rooster = ({ className = "w-12 h-12" }: { className?: string }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className={className}
    animate={{ y: [0, -5, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <path d="M70 40 Q85 10 60 20 Q40 10 20 40 Q30 90 60 80 Q90 90 70 40" fill="currentColor" />
    <path d="M60 20 Q65 5 75 10" fill="#8B1A1A" />
    <circle cx="65" cy="30" r="2" fill="white" />
  </motion.svg>
);

export const Sunflower = ({ className = "w-24 h-24 text-gold" }: { className?: string }) => (
  <motion.svg 
    viewBox="0 0 100 100" 
    className={className}
    animate={{ rotate: 360 }}
    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
  >
    <circle cx="50" cy="50" r="15" fill="#1E1208" />
    {[...Array(24)].map((_, i) => (
      <path
        key={i}
        d="M50 35 Q55 10 50 0 Q45 10 50 35"
        transform={`rotate(${i * 15} 50 50)`}
        fill="#C4882A"
      />
    ))}
  </motion.svg>
);

export const FolkBird = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className}>
    <path d="M20 50 Q40 20 80 40 Q60 60 20 50" fill="currentColor" />
    <path d="M80 40 Q90 35 95 45" stroke="currentColor" fill="none" />
    <path d="M30 48 Q25 65 10 70" fill="#8B1A1A" />
  </svg>
);
