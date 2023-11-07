import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';
import {LogoPicture} from "../helperComponents/header/LogoPicture";
import {Header} from "../helperComponents/header/header";
import Beef from "./img/Beefstrogan.png"
import {PhoneImage} from "../main/img/phoneImage";
import {MailPicture} from "../main/img/mailPicture";
import {MapPicture} from "../main/img/mapPicture";

export const AboutUsPage = () => {
    return (
        <div>
            <Header ide={2}/>
            <div className={styles.aboutUsComeAndVisit}>
                <div className={styles.aboutUsComeAndVisitItemsContainer}>
                    <img src={Beef} className={styles.aboutUsComeAndVisitImg}/>
                    <div className={styles.comeAndVisitUsContainer}>
                        <div className={styles.comeAndVisitUsText}>Come and visit us</div>
                        <div>
                            <PhoneImage className={styles.mailPhoneMapIcon}/>
                            <p className={styles.phoneMailMapNumber}>(966) 182 - 5008</p>
                        </div>
                        <div>
                            <MailPicture className={styles.mailPhoneMapIcon}/>
                            <p className={styles.phoneMailMapNumber}>dima.vinogradov.2005@gmail.com</p>
                        </div>
                        <div>
                            <MapPicture className={styles.mailPhoneMapIcon}/>
                            <p className={styles.phoneMailMapNumber}>Lublino</p>
                        </div>
                    </div>
                    <div className={styles.comeAndVisitUsContainerArticle}>
                        <p className={styles.comeAndVisitUsArticleName}>We provide healthy
                            food for your family.</p>
                        <p className={styles.comeAndVisitUsArticleDescription}>Our story began with a vision to create a unique dining experience
                            that merges fine dining, exceptional service, and a vibrant ambiance.
                            Rooted in city's rich culinary culture, we aim to honor our local roots while
                            infusing a global palate.</p>
                        <p className={styles.comeAndVisitUsArticleDescription2}>At place, we believe that dining is not just about food, but also about the overall
                            experience. Our staff, renowned for their warmth and dedication, strives to make
                            every visit an unforgettable event.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}