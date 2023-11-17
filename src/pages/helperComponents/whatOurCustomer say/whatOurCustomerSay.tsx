import styles from './styles.module.css';

import CheeseBreakfast from "./img/cheaseBreakfast.png"
import FriedPotato from "./img/friedPotato.png"
import FriedOnion from "./img/friedOnion.png"
import Pancakes from "./img/pancakes.png"
import {CustomerCard} from "../../main/helper/ourCustomerCard";

export const WhatOurCustomerSay = () => {
    return (
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
    );
}