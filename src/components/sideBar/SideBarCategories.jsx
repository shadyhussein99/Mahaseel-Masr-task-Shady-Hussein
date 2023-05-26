// The component of the categories in the Side Bar used to structure the main SideBar component

import { useState } from "react"

function SideBarCategories(props) {

    const [subCategory, setSubCategory] = useState(true) // The initial state of (subCategory) should be false and on Clicking the category it turns true, but i made it true to show the sub categories of (Grains, Cereal & Legumes) category as we are displaying its products

    return <div className="mb-10">
        <p onClick={() => setSubCategory(true)}>{props.category} <span>({props.number})</span></p>

        {subCategory &&
            <div>{props.detailedCategories}</div>
        }
        <hr />
    </div>
}

export default SideBarCategories