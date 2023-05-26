// The component of the categories in the Side Bar used to structure the main SideBar component

import { useState } from "react"
import { Link } from "react-router-dom"

function SideBarCategories(props) {

    const [subCategory, setSubCategory] = useState(true) // The initial state of (subCategory) should be false and on Clicking the category it turns true, but i made it true to show the sub categories of (Grains, Cereal & Legumes) category as we are displaying its products

    return <div className="my-5">
       <Link><p onClick={() => setSubCategory(true)} className="font-semibold">{props.category} <span className=" text-gray-500 font-normal">({props.number})</span></p></Link>

        {subCategory &&
            <div className="text-sm text-gray-500 mt-3">{props.detailedCategories}</div>
        }
        <hr className="mt-5"/>
    </div>
}

export default SideBarCategories