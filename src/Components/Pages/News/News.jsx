import { Link } from "react-router-dom";


const News = ({ news }) => {

    const { rating, total_view, title, author, thumbnail_url, image_url, details } = news
    const { name, published_date, img } = author;


    return (
        news ?
            <>
                <div>
                    <div className=" w-[560px] space-y-2 mb-8">
                        <div className=" flex items-center gap-3 bg-slate-300">
                            <div className=" w-[40px] h-[40px] ">
                                <img className=" w-full rounded-full" src={img} alt="" />
                            </div>

                            <div>
                                <h1>{name}</h1>
                                <p>{published_date}</p>
                            </div>
                        </div>
                        <h2 className=" font-bold">{title}</h2>
                        <div className=" w-[518px] h-[262px]">
                            <img className=" w-full h-[262px] object-fill" src={thumbnail_url} alt="" />
                        </div>
                        <p>{details.length > 200 ? details.slice(0, 200) : details} <Link to='/details' ><span className=" font-semibold">Read More</span></Link></p>

                    </div>

                </div>
            </> : 'loading.....'
    );
};

export default News;