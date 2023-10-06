import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import News from "../News/News";

const Newses = () => {
    // const { handlenews, news } = useContext(catContext)
    const [news, setNews] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => {

                const filtered = data.filter(i => (parseInt(i.category_id)) == parseInt(id) + 1)
                setNews(filtered)
            })

    }, [id]
    )



    return (
        news ?
            <>
                {
                    <div>
                        {
                            news?.map((newsItem, idx) => <News key={idx} news={newsItem} />)
                        }

                    </div>
                }
            </> : 'comming/.....'
    );
};

export default Newses;