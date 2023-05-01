import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Navbar.module.css';

interface Props {
  className?: string;
  classes?: {
    asset32x3?: string;
    root?: string;
  };
  text?: {
    aboutUs?: ReactNode;
    campaign?: ReactNode;
    contactUs?: ReactNode;
  };
}
/* @figmaId 1:5 */
export const Navbar: FC<Props> = memo(function Navbar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.asset32x3 || ''} ${classes.asset32x3}`}></div>
      {props.text?.aboutUs != null ? props.text?.aboutUs : <div className={classes.aboutUs}>About us</div>}
      {props.text?.campaign != null ? props.text?.campaign : <div className={classes.campaign}>Campaign</div>}
      {props.text?.contactUs != null ? props.text?.contactUs : <div className={classes.contactUs}>Contact us</div>}
    </div>
  );
});
