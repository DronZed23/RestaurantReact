import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import {LogoPicture} from "./img/LogoPicture";
import {CardToMenu} from "./helper/cardToMenu";
import Burito from "./img/buritoImage.png";
import Cooking from "./img/cooking.png";
import GrilledMeal from "./img/grilledMeal.png"
import Soup from "./img/soup.png";
import {PhoneImage} from "./img/phoneImage";
import {MailPicture} from "./img/mailPicture";
import {MapPicture} from "./img/mapPicture";
import {EventCard} from "./helper/eventCard";
import {TimerImage} from "./img/timer";
import {CheckPicture} from "./img/checkPicture";
import {MarketImage} from "./img/marketImage";
import {CustomerCard} from "./helper/ourCustomerCard";
import {BlogCard} from "./helper/blogCard";
import {EndComponent} from "../endComponent/endComponent";


export const MainPage = () => {
    return (
        <div>
            <header className={styles.mainHeader}>
                <LogoPicture className={styles.logoPicture}/>
                <p className={styles.logoName}>Bistro Bliss</p>
                <div className={styles.headerSideBar}>
                <button className={styles.headerSideBarActiveButton}>Home</button>
                <button className={styles.headerSideBarButtons}>About</button>
                <button className={styles.headerSideBarButtons}>Menu</button>
                <button className={styles.headerSideBarButtons}>Pages</button>
                <button className={styles.headerSideBarButtons}>Contact</button>
                </div>
                <button className={styles.headerSideBarBookATableButton}>Book A Table</button>
            </header>
            <div className={styles.landingImg}>
                    <h1 className={styles.landingSlogan}>Best food for your taste</h1>
                    <p className={styles.landingSloganDescription}>Discover delectable cuisine and
                        unforgettable moments in our welcoming, culinary haven.</p>
                    <div className={styles.container}>
                        <button className={styles.redBookATableButton}>Book A Table</button>
                        <button className={styles.exploreMenuButton}>Explore Menu</button>
                </div>
            </div>
            <div className={styles.cardsToMenuContainer}>
                <p className={styles.textBrowseOurMenu}>Browse Our Menu</p>
                <div className={styles.CardContainer}>
                    <CardToMenu ide={1} className0={styles.cardToMenuContainer} className={styles.cardToMenuPicture} className1={styles.cardToMenuName}
                    className2={styles.cardsToMenuDescription} className3={styles.cardsToMenuButton}/>
                    <CardToMenu ide={2} className0={styles.cardToMenuContainer} className={styles.cardToMenuPicture} className1={styles.cardToMenuName}
                                className2={styles.cardsToMenuDescription} className3={styles.cardsToMenuButton}/>
                    <CardToMenu ide={3} className0={styles.cardToMenuContainer} className={styles.cardToMenuPicture} className1={styles.cardToMenuName}
                                className2={styles.cardsToMenuDescription} className3={styles.cardsToMenuButton}/>
                    <CardToMenu ide={4} className0={styles.cardToMenuContainer} className={styles.cardToMenuPicture} className1={styles.cardToMenuName}
                                className2={styles.cardsToMenuDescription} className3={styles.cardsToMenuButton}/>
                </div>
            </div>
            <div className={styles.aboutUsContainer}>
                <div className={styles.aboutUsItemContainer}>
                    <img src={Burito}/>
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
                        <button className={styles.moreAboutUsButton}>More About Us</button>
                    </div>
                </div>


            </div>
            <div className={styles.eventListContainer}>
            <p className={styles.eventListName}>We also offer unique<br/> services for your events</p>
            <div className={styles.CardContainer}>
                < EventCard ide={1} className={styles.eventCard} className0={styles.eventCardName}
                            className1={styles.eventCardDescription}/>
                < EventCard ide={2} className={styles.eventCard} className0={styles.eventCardName}
                            className1={styles.eventCardDescription}/>
                < EventCard ide={3} className={styles.eventCard} className0={styles.eventCardName}
                            className1={styles.eventCardDescription}/>
                < EventCard ide={4} className={styles.eventCard} className0={styles.eventCardName}
                            className1={styles.eventCardDescription}/>
            </div>
            </div>
            <div className={styles.fastestDeliveryContainer}>
                <div className={styles.fastestDeliveryItemsContainer}>
                    <img src={Cooking} />
                    <img src={Soup} className={styles.soapImg}/>
                    <img src={GrilledMeal} className={styles.grilledMeal}/>
                    <div className={styles.fastestDeliveryTextContainer}>
                        <h2 className={styles.fastestDeliveryTextName}>Fastest Food Delivery in City</h2>
                        <p className={styles.fastestDeliveryTextDescription}>Our visual designer lets you quickly and of drag a down your way to customapps for both keep desktop. </p>
                        <div>
                            <div className={styles.TimerCheckMarketContainer}>
                                <TimerImage className={styles.TimerCheckMarketImage}/>
                                <p className={styles.TimerCheckMarketDescription}>Delivery within 30 minutes</p>
                            </div>
                            <div className={styles.TimerCheckMarketContainer}>
                                <CheckPicture className={styles.TimerCheckMarketImage}/>
                                <p className={styles.TimerCheckMarketDescription}>Best Offer & Prices</p>
                            </div>
                            <div className={styles.TimerCheckMarketContainer}>
                                <MarketImage className={styles.TimerCheckMarketImage}/>
                                <p className={styles.TimerCheckMarketDescription}>Online Services Available</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.ourCustomersSayContainer}>
                <div className={styles.ourCustomersSayTitle}>What Our Customers Say</div>
                <div className={styles.ourCustomerCardsContainer}>
                    <CustomerCard ide={1} className={styles.ourCustomerCardContainer} className0={styles.ourCustomerCardTitle}
                                  className1={styles.ourCustomerCardDescription} className2={styles.ourCustomerCardLine} className3={styles.ourCustomerCardPersonIcon}
                                  className4={styles.ourCustomerCardPersonName} className5={styles.ourCustomerCardPersonPlace} />
                    <CustomerCard ide={2} className={styles.ourCustomerCardContainer} className0={styles.ourCustomerCardTitle}
                                  className1={styles.ourCustomerCardDescription} className2={styles.ourCustomerCardLine} className3={styles.ourCustomerCardPersonIcon}
                                  className4={styles.ourCustomerCardPersonName} className5={styles.ourCustomerCardPersonPlace} />
                    <CustomerCard ide={3} className={styles.ourCustomerCardContainer} className0={styles.ourCustomerCardTitle}
                                  className1={styles.ourCustomerCardDescription} className2={styles.ourCustomerCardLine} className3={styles.ourCustomerCardPersonIcon}
                                  className4={styles.ourCustomerCardPersonName} className5={styles.ourCustomerCardPersonPlace} />
                </div>
            </div>
            <div className={styles.blogContainer}>
                <div className={styles.blogTitle}>Our Blog & Articles<button className={styles.blogReadAllButton}>Read All Articles</button></div>
                <div className={styles.blogItemsContainer}>
                    <BlogCard ide={1} className0={styles.blogBigCardContainer} className={styles.blogBigCardImg}
                    className1={styles.blogBigCardDate} className2={styles.blogBigCardTitle} className3={styles.blogBigCardDescription}/>
                    <div className={styles.blogSmallCardsContainer}>
                        <BlogCard ide={2} className0={styles.blogSmallCardContainer} className={styles.blogSmallCardImg}
                                  className1={styles.blogSmallCardDate} className2={styles.blogSmallCardTitle} className3={styles.blogSmallCardTitle}/>
                        <BlogCard ide={3} className0={styles.blogSmallCardContainer} className={styles.blogSmallCardImg}
                                  className1={styles.blogSmallCardDate} className2={styles.blogSmallCardTitle} className3={styles.blogSmallCardTitle}/>
                        <BlogCard ide={4} className0={styles.blogSmallCardContainer} className={styles.blogSmallCardImg}
                                  className1={styles.blogSmallCardDate} className2={styles.blogSmallCardTitle} className3={styles.blogSmallCardTitle}/>
                        <BlogCard ide={5} className0={styles.blogSmallCardContainer} className={styles.blogSmallCardImg}
                                  className1={styles.blogSmallCardDate} className2={styles.blogSmallCardTitle} className3={styles.blogSmallCardTitle}/>
                    </div>
                </div>

            </div>
            <EndComponent />
        </div>
    );
};