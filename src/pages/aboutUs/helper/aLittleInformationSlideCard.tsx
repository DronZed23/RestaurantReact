import {ALittleInfoSlideData} from "../../../untils/constants";

type Props ={
    ide: number;
    className0: string;
    className1: string;
    className2: string;
    className3: string;

}

export const ALittleInfo = ({ide, className0, className1, className2, className3} : Props) => {
    return (
        <>
            {ALittleInfoSlideData.map(item => item.id === ide &&
                <div className={className0}>
                    <div className={className1}>
                        <h2 className={className2}>{item.int}</h2>
                        <p className={className3}>{item.name}</p>
                    </div>
                </div>
            )}
        </>
    );
}