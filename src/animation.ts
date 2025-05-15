import { keyframes } from "styled-components";

// Fade-in and smooth slide-up animation
export const fadeInSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px); /* Smaller offset for a smooth start */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Hover zoom effect
export const hoverZoom = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
`;

// Animation settings with optimized timing
export interface AnimationSettings {
  defaultDuration: string;
  easing: string;
  staggerIncrement: number;
}

export const animationSettings: AnimationSettings = {
  defaultDuration: "2s", // Extended duration for smoothness
  easing: "cubic-bezier(0.25, 0.1, 0.25, 1)", // Smooth cubic-bezier curve
  staggerIncrement: 0.3, // Slightly larger delay for staggered effects
};
