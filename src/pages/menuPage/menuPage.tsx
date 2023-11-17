import {Header} from "../helperComponents/header/header";
import styles from "./styles.module.css"

export const MenuPage = () => {
    return (
        <div>
            <Header ide={3}/>
            <div className={styles.ourMenuContainer}>
                <div className={styles.ourMenuItemsContainer}>
                    <div className={styles.ourMenuTextContainer}>

                    </div>
                    <div className={styles.ourMenuFilterContainer}>
                    </div>
                </div>
            </div>
        </div>
    );}