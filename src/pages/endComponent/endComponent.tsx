import styles from './styles.module.css';
import {WhiteBistro} from "./img/bistroBlissLogo";
import {TwitterImg} from "./img/twitterImg";
import {FacebookImg} from "./img/facebookImg";

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
                    </div>
                </div>
            </div>
            <div className={styles.endPagesContainer}>

            </div>
            <div className={styles.endFollowUsInInstagram}>

            </div>
        </div>
          <div></div>
      </div>
    );
}