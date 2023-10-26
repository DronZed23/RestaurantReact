import {eventCardData, ourCustomerData} from "../../../untils/constants";


type Props ={
    ide: number;
    className: string;
    className0: string;
    className1: string;
    className2: string;
    className3: string;
    className4: string;
    className5: string;
}

export const CustomerCard = ({ide, className, className0, className1, className2, className3, className4, className5} : Props) => {
    return (
        <>
            {ourCustomerData.map(item => item.id === ide &&
                <div className={className}>
                    <h3 className={className0}>{item.title}</h3>
                    <p className={className1}>{item.description}</p>
                    <hr className={className2}/>
                    <img src={item.personIcon} className={className3}/>
                    <p className={className5}>{item.personName}</p>
                    <p className={className4}>{item.placeOfResidence}</p>
                </div>
            )}
        </>
    );}