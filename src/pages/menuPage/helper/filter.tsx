import {ALittleInfoSlideData, menuCardData} from "../../../untils/constants";
import styles from "../styles.module.css";

type Props ={
    ide: number;
    category: string;
    className0: string;
    className1: string;
    className2: string;
    className3: string;
    className4: string;
    className5: string;
}

export const Filter = ({ide, category, className0, className1, className2, className3, className4, className5} : Props) => {
    return (
        <>
            {menuCardData.map(item => item.id === ide &&
                <div className={category === item.category || category === "All"  ? className1 : className0 }>
                    <img src={item.img}/>
                    <div className={className2}>
                        <h3 className={className3}>${item.pricez}</h3>
                        <p className={className4}>{item.name}</p>
                        <p className={className5}>{item.description}</p>
                    </div>
                </div>
            )}
        </>
    );
}