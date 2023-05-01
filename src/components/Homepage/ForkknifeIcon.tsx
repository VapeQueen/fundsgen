import { memo, SVGProps } from 'react';

const ForkknifeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 186 173' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M61.0312 21.5288V48.4397' stroke='white' strokeWidth={8} strokeLinecap='round' strokeLinejoin='round' />
    <path d='M61.0312 78.0417V150.701' stroke='white' strokeWidth={8} strokeLinecap='round' strokeLinejoin='round' />
    <path
      d='M81.375 21.5288L87.1875 53.8219C87.1875 60.2454 84.4318 66.4058 79.5265 70.9479C74.6213 75.49 67.9683 78.0417 61.0312 78.0417C54.0942 78.0417 47.4412 75.49 42.536 70.9479C37.6307 66.4058 34.875 60.2454 34.875 53.8219L40.6875 21.5288'
      stroke='white'
      strokeWidth={8}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path d='M148.219 107.644H107.531C107.531 107.644 116.25 32.2932 148.219 21.5288V150.701' fill='white' />
    <path
      d='M148.219 107.644H107.531C107.531 107.644 116.25 32.2932 148.219 21.5288V150.701'
      stroke='white'
      strokeWidth={8}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(ForkknifeIcon);
export { Memo as ForkknifeIcon };
