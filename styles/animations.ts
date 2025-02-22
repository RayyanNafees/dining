import { animation } from "@twind/core";

export const bounceLeft = animation(
  "1s ease infinite",
  `0%,
    100% {
      transform: translateX(25%);
      animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
      transform: none;
      animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }`,
);
