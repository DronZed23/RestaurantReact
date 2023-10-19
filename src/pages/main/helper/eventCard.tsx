import {eventCardData} from "../../../untils/constants";


type Props ={
    ide: number;
    className: string;
    className0: string;
    className1: string;
}

export const EventCard = ({ide, className, className0, className1} : Props) => {
    return (
        <>
            {eventCardData.map(item => item.id === ide &&
                <div className={className}>
                    <img src={item.img}/>
                    <p className={className0}>{item.eventName}</p>
                    <p className={className1}>{item.description}</p>
                </div>
            )}
        </>
    );}