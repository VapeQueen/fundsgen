import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Buttons } from './Buttons/Buttons.js';
import { Component1_Property1Group3868 } from './Component1_Property1Group3868/Component1_Property1Group3868.js';
import { Footer } from './Footer/Footer.js';
import { ForkknifeIcon } from './ForkknifeIcon.js';
import { Group41Icon } from './Group41Icon.js';
import { Group3856Icon } from './Group3856Icon.js';
import classes from './Homepage.module.css';
import { Navbar } from './Navbar/Navbar.js';
import { VectorIcon } from './VectorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 1:66 */
export const Homepage: FC<Props> = memo(function Homepage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame25}>
        <div className={classes.rectangle2192}></div>
      </div>
      <div className={classes.changeWillNotComeIfWeWaitForSo}>
        Change will not come if we wait for some other person, or if we wait for some other time. We are the ones we’ve
        been waiting for. We are the change that we seek
      </div>
      <div className={classes.helpingTheGreatPeopleOfBurkina}>Helping the great people of Burkina Faso</div>
      <div className={classes.frame18}>
        <div className={classes.learnAboutWhatWeDo}>Learn about what we do</div>
        <div className={classes.childrenSFeeding}>children’s feeding</div>
        <div className={classes.womenEmpowerment}>women empowerment</div>
        <div className={classes.communityServices}>community services</div>
        <div className={classes.girlSEducation}>Girl&#39;s Education</div>
        <div className={classes.group41}>
          <Group41Icon className={classes.icon} />
        </div>
        <div className={classes.frame19}></div>
      </div>
      <div className={classes.frame20}>
        <div className={classes.ourImpactSince2001}>
          <p className={classes.labelWrapper}>
            <span className={classes.label}>Our Impact </span>
            <span className={classes.label2}>Since 2001</span>
          </p>
        </div>
        <div className={classes.vector}>
          <VectorIcon className={classes.icon2} />
        </div>
        <div className={classes._167M}>16.7M</div>
        <div className={classes.weHaveServerd167MPeople2001}>We have serverd 16.7M people 2001 </div>
        <div className={classes.forkKnife}>
          <ForkknifeIcon className={classes.icon3} />
        </div>
        <div className={classes._25800}>258,000</div>
        <div className={classes.childrenInOurStrategicFeedingP}>Children in our strategic feeding program</div>
        <div className={classes.group3856}>
          <Group3856Icon className={classes.icon4} />
        </div>
        <div className={classes._13000}>130,000</div>
        <div className={classes.volunteerMobilisedInAcrossAfri}>volunteers mobilised in across Africa.</div>
      </div>
      <div className={classes.frame24}></div>
      <div className={classes.frame21}>
        <div className={classes._1ChildIn13DiesBeforeTheir5thBi}>
          1 child in 13 dies before their 5th birthday, 11 times the U.S rate
        </div>
      </div>
      <div className={classes.frame242}></div>
      <div className={classes.frame212}>
        <div className={classes._5InEvery100ChildrenIsMurdered}>
          <div className={classes.textBlock}>5 in every 1,000 children is murdered</div>
          <div className={classes.textBlock2}>
            <p></p>
          </div>
        </div>
      </div>
      <div className={classes.frame243}></div>
      <div className={classes.frame213}>
        <div className={classes._25OfChildrenSufferFromStunting}>
          <div className={classes.textBlock3}>25% of children suffer from stunting due to malnutrition</div>
          <div className={classes.textBlock4}>
            <p></p>
          </div>
        </div>
      </div>
      <div className={classes.frame244}></div>
      <div className={classes.frame214}>
        <div className={classes._32OfGirlsAges1519AreMarriedAnd}>
          <div className={classes.textBlock5}>32% of girls (ages 15-19) are married, and 1 in 10 gives birth</div>
          <div className={classes.textBlock6}>
            <p></p>
          </div>
          <div className={classes.textBlock7}>
            <p></p>
          </div>
          <div className={classes.textBlock8}>
            <p></p>
          </div>
        </div>
      </div>
      <div className={classes.frame245}></div>
      <div className={classes.frame215}>
        <div className={classes._36OfChildrenAreOutOfSchoolAnd6}>
          <div className={classes.textBlock9}>
            36% of children are out of school, and 67% of girls (ages 15+) struggle to read and write
          </div>
          <div className={classes.textBlock10}>
            <p></p>
          </div>
          <div className={classes.textBlock11}>
            <p></p>
          </div>
          <div className={classes.textBlock12}>
            <p></p>
          </div>
        </div>
      </div>
      <div className={classes.frame246}></div>
      <div className={classes.frame216}>
        <div className={classes._42AreEngagedInChildLaborInstea}>
          <div className={classes.textBlock13}>42% are engaged in child labor, instead of learning</div>
          <div className={classes.textBlock14}>
            <p></p>
          </div>
          <div className={classes.textBlock15}>
            <p></p>
          </div>
        </div>
      </div>
      <Buttons
        className={classes.buttons}
        text={{
          donateNow: <div className={classes.donateNow}>Donate Now</div>,
        }}
      />
      <div className={classes.frame26}>
        <div className={classes.challengesForChildren}>
          <p className={classes.labelWrapper2}>
            <span className={classes.label3}>Challenges</span>
            <span className={classes.label4}> for Children </span>
          </p>
        </div>
      </div>
      <div className={classes.frame27}>
        <div className={classes.howYouCanHelpChildrenInBurkina}>How you can help children in burkinafaso</div>
      </div>
      <div className={classes.ourLatestBlog}>Our Latest Blog</div>
      <Navbar
        className={classes.navbar}
        classes={{ asset32x3: classes.asset32x3 }}
        text={{
          aboutUs: <div className={classes.aboutUs}>About us</div>,
          campaign: <div className={classes.campaign}>Campaign</div>,
          contactUs: <div className={classes.contactUs}>Contact us</div>,
        }}
      />
      <Footer className={classes.footer} classes={{ asset32x3: classes.asset32x32 }} />
      <Component1_Property1Group3868 className={classes.component1} />
      <Component1_Property1Group3868
        className={classes.component4}
        text={{
          sponsorAChild: <div className={classes.sponsorAChild}>Donate</div>,
        }}
      />
      <div className={classes.component5}>
        <div className={classes.frame247}></div>
        <div className={classes.frame217}>
          <div className={classes.sponsorAChild2}>
            <div className={classes.textBlock16}>Help SPREAD</div>
            <div className={classes.textBlock17}>AWARENESS</div>
          </div>
        </div>
      </div>
      <div className={classes.frame28}>
        <div className={classes.blogCard}>
          <div className={classes.container}></div>
          <div className={classes.charityLaw}>Charity Law</div>
          <div className={classes.charityGroupToSueLibyaCoastgua}>
            Charity group to sue Libya coastguard for failing
          </div>
          <div className={classes.kabbaniHopesToExpandThisInitia}>
            Kabbani hopes to expand this initiative across Egypt. Here, prices have soared recently due to economic
            reforms thus straining millions of Egyptians living under the poverty line.
          </div>
        </div>
        <div className={classes.blogCard2}>
          <div className={classes.container2}></div>
          <div className={classes.theNeedy}>The needy</div>
          <div className={classes.egyptANewBreadthOfLifeForTheNe}>Egypt: A new breadth of life for the needy</div>
          <div className={classes.forThoseWhoCannotAffordNewClot}>
            <div className={classes.textBlock18}>
              For those who cannot afford new clothes or are in dire financial needs, this store simply accepts old
              clothes donated by some, repairs it and offers it to people in need.
            </div>
            <div className={classes.textBlock19}>And the woman behind the project dubbed ‘Your old is their </div>
          </div>
        </div>
        <div className={classes.blogCard3}>
          <div className={classes.container3}></div>
          <div className={classes.rateOfSchoolDropoutIncreasing}>Rate of school dropout increasing</div>
          <div className={classes.foodRescueSchemeFeedsVulnerabl}>
            {' '}
            Food rescue scheme feeds vulnerable people as pandemic bites
          </div>
          <div className={classes.itIsLikeAGreenInitiativeThousa}>
            It is like a green initiative. Thousands of tons of clothes on rooftops, under the bed and above the
            closets. Tons of neglected clothing. We take these and recycle it in a proper way and then we resell it. The
            money gained from this is given{' '}
          </div>
        </div>
        <Buttons
          className={classes.buttons2}
          text={{
            donateNow: <div className={classes.donateNow2}>Read more</div>,
          }}
        />
      </div>
    </div>
  );
});
