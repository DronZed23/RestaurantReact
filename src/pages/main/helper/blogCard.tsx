import {blogData, cardToMenuData} from "../../../untils/constants";

type Props ={
    ide: number;
    className: string;
    className0: string;
    className1: string;
    className2: string;
    className3: string;

}

export const BlogCard = ({ide, className0, className, className1, className2, className3} : Props) => {
    return (
        <>
            {blogData.map(item => item.id === ide &&
                <div className={className0}>
                    <img src={item.img}  className={className} />
                    <p className={className1}>{item.date}</p>
                    <p className={className2}>{item.articleName}</p>
                    <button className={className3}>{item.articleDescription}</button>
                </div>
            )}
        </>
    );
}