import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component1_Property1Group3868.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    sponsorAChild?: ReactNode;
  };
}
/* @figmaId 1:53 */
export const Component1_Property1Group3868: FC<Props> = memo(function Component1_Property1Group3868(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.frame24}></div>
      <div className={classes.frame21}>
        {props.text?.sponsorAChild != null ? (
          props.text?.sponsorAChild
        ) : (
          <div className={classes.sponsorAChild}>sponsor a child</div>
        )}
      </div>
    </div>
  );
});
