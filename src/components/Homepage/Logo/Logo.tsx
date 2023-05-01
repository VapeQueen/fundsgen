import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Logo.module.css';

interface Props {
  className?: string;
  classes?: {
    asset32x3?: string;
    root?: string;
  };
}
/* @figmaId 1:47 */
export const Logo: FC<Props> = memo(function Logo(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.asset32x3 || ''} ${classes.asset32x3}`}></div>
    </div>
  );
});
