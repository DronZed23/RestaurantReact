
import {cardToMenuData} from "../../../untils/constants";
import {useNavigate} from "react-router-dom";

type Props ={
    ide: number;
    className: string;
    className0: string;
    className1: string;
    className2: string;
    className3: string;

}

export const CardToMenu = ({ide, className0, className, className1, className2, className3} : Props) => {
    const navigate = useNavigate();
    const handleOpenMenu = () => {
        navigate('/menu');
    };
    return (
        <>
            {cardToMenuData.map(item => item.id === ide &&
                <div className={className0}>
                    <item.img className={className} />
                    <p className={className1}>{item.name}</p>
                    <p className={className2}>{item.description}</p>
                    <button className={className3} onClick={handleOpenMenu}>{item.buttonName}</button>
                </div>
                )}
        </>
    );
}