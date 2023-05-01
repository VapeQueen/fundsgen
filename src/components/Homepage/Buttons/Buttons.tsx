import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Buttons.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    donateNow?: ReactNode;
  };
}
/* @figmaId 1:2 */
export const Buttons: FC<Props> = memo(function Buttons(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.donateNow != null ? props.text?.donateNow : <div className={classes.donateNow}>Donate Now</div>}
    </button>
  );
});
