import { useEffect, useState } from "react";
import Eachcat from "../../Eachcat/Eachcat";


const Category = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => { setCategory(data) })


    }, [])
    // setCategory(data)

    return (
        <div>
            <h1 className=" text-xl font-bold">All Category</h1>
            <div>
                <div className=" space-y-4">
                    {
                        category?.map((item, idx) => <Eachcat key={idx} item={item}></Eachcat>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Category;