import {Header} from "../helperComponents/header/header";
import styles from "./styles.module.css"
import {useState} from "react";
import {EndComponent} from "../helperComponents/endComponent/endComponent";
import {Filter} from "./helper/filter";

export const MenuPage = () => {
    const [active, setActive] = useState(0);
    const [categ, setCateg] = useState("All");
    const handleClick = (optionNumber : number, category : string) => {
        setActive(optionNumber);
        setCateg(category)
    }
    return (
        <div>
            <Header ide={3}/>
            <div className={styles.ourMenuContainer}>
                <div className={styles.ourMenuItemsContainer}>
                    <div className={styles.ourMenuTextAndButtonsContainer}>
                        <div className={styles.ourMenuTextContainer}>
                            <h1 className={styles.ourMenuTextTitle}>Our Menu</h1>
                            <p className={styles.ourMenuTextDescription}>We consider all the drivers of change gives you the components you need to change to create a truly happens.</p>
                        </div>
                        <div className={styles.ourMenuButtonsContainer} >
                            <button onClick={() => handleClick(
                                0, "All")} className={active === 0 ? styles.ourMenuActieFilterButton : styles.ourMenuFilterButton}>All</button>
                            <button onClick={() => handleClick(
                                1, "Breakfast")} className={active === 1 ? styles.ourMenuActieFilterButton : styles.ourMenuFilterButton}>Breakfast</button>
                            <button onClick={() => handleClick(
                                2, "Main Dishes")} className={active === 2 ? styles.ourMenuActieFilterButton : styles.ourMenuFilterButton}>Main Dishes</button>
                            <button onClick={() => handleClick(
                                3, "Drinks")} className={active === 3 ? styles.ourMenuActieFilterButton : styles.ourMenuFilterButton}>Drinks</button>
                            <button  onClick={() => handleClick(
                                4, "Desserts")} className={active === 4 ? styles.ourMenuActieFilterButton : styles.ourMenuFilterButton}>Desserts</button>

                        </div>
                    </div>
                    <div className={styles.ourMenuCards}>
                        <Filter ide={1} category={categ} className0={styles.noneCard} className1={styles.menuCardContainer} className2={styles.menuCardTextContainer}
                                className3={styles.menuCardPrice} className4={styles.menuCardName} className5={styles.menuCardDescription} />
                        <Filter ide={2} category={categ} className0={styles.noneCard} className1={styles.menuCardContainer} className2={styles.menuCardTextContainer}
                                className3={styles.menuCardPrice} className4={styles.menuCardName} className5={styles.menuCardDescription} />
                        <Filter ide={3} category={categ} className0={styles.noneCard} className1={styles.menuCardContainer} className2={styles.menuCardTextContainer}
                                className3={styles.menuCardPrice} className4={styles.menuCardName} className5={styles.menuCardDescription} />
                        <Filter ide={4} category={categ} className0={styles.noneCard} className1={styles.menuCardContainer} className2={styles.menuCardTextContainer}
                                className3={styles.menuCardPrice} className4={styles.menuCardName} className5={styles.menuCardDescription} />
                        <Filter ide={5} category={categ} className0={styles.noneCard} className1={styles.menuCardContainer} className2={styles.menuCardTextContainer}
                                className3={styles.menuCardPrice} className4={styles.menuCardName} className5={styles.menuCardDescription} />
                        <Filter ide={6} category={categ} className0={styles.noneCard} className1={styles.menuCardContainer} className2={styles.menuCardTextContainer}
                                className3={styles.menuCardPrice} className4={styles.menuCardName} className5={styles.menuCardDescription} />
                        <Filter ide={7} category={categ} className0={styles.noneCard} className1={styles.menuCardContainer} className2={styles.menuCardTextContainer}
                                className3={styles.menuCardPrice} className4={styles.menuCardName} className5={styles.menuCardDescription} />
                        <Filter ide={8} category={categ} className0={styles.noneCard} className1={styles.menuCardContainer} className2={styles.menuCardTextContainer}
                                className3={styles.menuCardPrice} className4={styles.menuCardName} className5={styles.menuCardDescription} />
                    </div>
                </div>
            </div>
            <EndComponent />
        </div>
    );}