import { HeaderActiveData} from "../../../untils/constants";
import styles from "./styles.module.css";
import {LogoPicture} from "./LogoPicture";
import {useNavigate} from "react-router-dom";


type Props ={
    ide: number;
}

export const Header = ({ide} : Props) => {

    const navigate = useNavigate();
    const handleOpenAboutUs = () => {
        navigate('/aboutUs');
    };
    const handleOpenMain = () => {
        navigate('/main');
    };
    return (
        <>
            {HeaderActiveData.map(item => item.id === ide &&
                <header className={styles.mainHeader}>
                    <LogoPicture className={styles.logoPicture}/>
                    <p className={styles.logoName}>Bistro Bliss</p>
                    <div className={styles.headerSideBar}>
                        <button className={item.button1 === 1 ? styles.headerSideBarActiveButton : styles.headerSideBarButtons} onClick={handleOpenMain}>Home</button>
                        <button className={item.button2 === 1 ? styles.headerSideBarActiveButton : styles.headerSideBarButtons} onClick={handleOpenAboutUs}>About</button>
                        <button className={item.button3 === 1 ? styles.headerSideBarActiveButton : styles.headerSideBarButtons}>Menu</button>
                        <button className={item.button4 === 1 ? styles.headerSideBarActiveButton : styles.headerSideBarButtons}>Pages</button>
                        <button className={item.button5 === 1 ? styles.headerSideBarActiveButton : styles.headerSideBarButtons}>Contact</button>
                    </div>
                    <button className={styles.headerSideBarBookATableButton}>Book A Table</button>
                </header>
            )}
        </>
    );
}