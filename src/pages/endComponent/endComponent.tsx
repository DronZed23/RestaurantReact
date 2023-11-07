import styles from './styles.module.css';
import {WhiteBistro} from "./img/bistroBlissLogo";
import {TwitterImg} from "./img/twitterImg";
import {FacebookImg} from "./img/facebookImg";
import {InstagramImg} from "./img/instagramImg";
import {GithubImg} from "./img/githubImg";
import CheeseBreakfast from "./img/cheaseBreakfast.png"
import FriedPotato from "./img/friedPotato.png"
import FriedOnion from "./img/friedOnion.png"
import Pancakes from "./img/pancakes.png"

export const EndComponent = () => {
    return (
      <div className={styles.endContainer}>
        <div className={styles.endItemsContainer}>
            <div className={styles.endLozungContainer}>
                <div className={styles.endBistroContainer}>
                    <div className={styles.endBistroLogoContainer}>
                        <WhiteBistro className={styles.endBistroLogo}/>
                        <p className={styles.endBistroBlissText}>Bistro Bliss</p>
                    </div>
                    <div className={styles.endLozungDescription}>In the new era of technology we look a in the future with certainty and pride to for our company and.</div>
                    <div>
                        <TwitterImg className={styles.massagersImg}/>
                        <FacebookImg className={styles.massagersImg}/>
                        <InstagramImg className={styles.massagersImg}/>
                        <GithubImg className={styles.massagersImg}/>
                    </div>
                </div>
            </div>
            <div className={styles.endPagesContainer}>
                <div className={styles.endPagesListContainer}>
                    <p className={styles.endTitleText}>Pages</p>
                    <p className={styles.endPagesText}>Home</p>
                    <p className={styles.endPagesText}>About</p>
                    <p className={styles.endPagesText}>Menu</p>
                    <p className={styles.endPagesText}>Pricing</p>
                    <p className={styles.endPagesText}>Blog</p>
                    <p className={styles.endPagesText}>Contact</p>
                    <p className={styles.endPagesText}>Delivery</p>
                </div>
                <div className={styles.endPagesListContainer}>
                    <p className={styles.endTitleText}>Utility Pages</p>
                    <p className={styles.endPagesText}>Start Here</p>
                    <p className={styles.endPagesText}>Styleguide</p>
                    <p className={styles.endPagesText}>Password Protected</p>
                    <p className={styles.endPagesText}>404 Not Found</p>
                    <p className={styles.endPagesText}>Licenses</p>
                    <p className={styles.endPagesText}>Changelog</p>
                    <p className={styles.endPagesText}>View More</p>
                </div>
            </div>
            <div className={styles.endFollowUsInInstagram}>
                <div className={styles.endFollowUsInInstagramTitle}>Follow Us On Instagram</div>
                <div className={styles.endFollowUsInInstagramItemsContainer}>
                    <img src={CheeseBreakfast} className={styles.endFollowUsInInstagramImg}/>
                    <img src={FriedPotato} className={styles.endFollowUsInInstagramImg}/>
                    <img src={FriedOnion} className={styles.endFollowUsInInstagramImg}/>
                    <img src={Pancakes} className={styles.endFollowUsInInstagramImg}/>
                </div>
            </div>
        </div>
          <div></div>
      </div>
    );
}