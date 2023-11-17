import {blogData, cardToMenuData, FeelTheAuthenticData} from "../../../untils/constants";

type Props ={
    ide: number;
    className: string;
    className0: string;
    className1: string;
    className2: string;
    className3: string;

}

export const AuthenticCard = ({ide, className0, className, className1, className2, className3} : Props) => {
    return (
        <>
            {FeelTheAuthenticData.map(item => item.id === ide &&
                <div className={className0}>
                    < item.img className={className} />
                    <div className={className1}>
                        <p className={className2}>{item.name}</p>
                        <p className={className3}>{item.description}</p>
                    </div>
                </div>
            )}
        </>
    );
}