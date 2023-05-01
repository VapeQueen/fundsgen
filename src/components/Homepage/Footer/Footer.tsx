import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Logo } from '../Logo/Logo.js';
import classes from './Footer.module.css';
import { SocialsIcon } from './SocialsIcon.js';

interface Props {
  className?: string;
  classes?: {
    asset32x3?: string;
    root?: string;
  };
}
/* @figmaId 1:11 */
export const Footer: FC<Props> = memo(function Footer(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes._526AvenueOfTheFaso}>526 Avenue Of The Faso</div>
      <div className={classes.addresss}>Addresss</div>
      <div className={classes.donateAdoptContactStayInTouchA}>
        <div className={classes.textBlock}>Donate</div>
        <div className={classes.textBlock2}>Adopt</div>
        <div className={classes.textBlock3}>Contact</div>
        <div className={classes.textBlock4}>Stay in Touch</div>
        <div className={classes.textBlock5}>Art Patron</div>
        <div className={classes.textBlock6}>Terms and Conditions</div>
        <div className={classes.textBlock7}>Privacy Policy</div>
        <div className={classes.textBlock8}>Volunteer</div>
        <div className={classes.textBlock9}>
          <p></p>
        </div>
        <div className={classes.textBlock10}>
          <p></p>
        </div>
      </div>
      <div className={classes.usefulLinks}>
        <div className={classes.textBlock11}>
          <p></p>
        </div>
        <div className={classes.textBlock12}>Useful Links</div>
      </div>
      <div className={classes._2021FundgensAllRightsReserved}>© 2021 fundgens. All rights reserved.</div>
      <div className={classes.whySaveTheChildrenWhatWeDoWher}>
        <div className={classes.textBlock13}> Why Save the Children?</div>
        <div className={classes.textBlock14}> What We Do</div>
        <div className={classes.textBlock15}> Where We Work</div>
        <div className={classes.textBlock16}> Frequently Asked Questions</div>
        <div className={classes.textBlock17}> Where Does Your Money Go?</div>
        <div className={classes.textBlock18}> Charity Ratings</div>
        <div className={classes.textBlock19}> Donate</div>
        <div className={classes.textBlock20}>
          <p></p>
        </div>
        <div className={classes.textBlock21}>
          <p></p>
        </div>
      </div>
      <div className={classes.learnMore}>
        <div className={classes.textBlock22}> Learn More</div>
        <div className={classes.textBlock23}>
          <p></p>
        </div>
      </div>
      <div className={classes.journalAboutUsOurStory}>
        <div className={classes.textBlock24}>Journal</div>
        <div className={classes.textBlock25}>About us</div>
        <div className={classes.textBlock26}>Our Story</div>
      </div>
      <div className={classes.sITE}>SITE</div>
      <Logo
        className={classes.logo}
        classes={{ asset32x3: `${props.classes?.asset32x3 || ''} ${classes.asset32x3}` }}
      />
      <div className={classes.followUs}>follow us</div>
      <div className={classes.socials}>
        <SocialsIcon className={classes.icon} />
      </div>
    </div>
  );
});
