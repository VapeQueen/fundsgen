import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 172 171' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M132.965 170.422H145.83C152.34 170.422 157.688 165.463 158.463 159.108L171.25 31.3875H132.5V0H117.233V31.3875H78.715L81.04 49.5225C94.2925 53.165 106.693 59.7525 114.133 67.0375C125.293 78.0425 132.965 89.435 132.965 108.035V170.422V170.422ZM0.75 162.672V155H117.233V162.672C117.233 166.935 113.745 170.422 109.405 170.422H8.5775C4.2375 170.422 0.75 166.935 0.75 162.672V162.672ZM117.233 108.422C117.233 46.4225 0.75 46.4225 0.75 108.422H117.233ZM0.905 124H117.155V139.5H0.905V124Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
