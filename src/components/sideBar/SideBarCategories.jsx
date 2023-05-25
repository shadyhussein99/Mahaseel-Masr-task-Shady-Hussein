// The component of the categories in the Side Bar used to structure the main SideBar component
// Using Redux has no meaning in the task, but in real project there should be data managed by a third-party state management like Redux
import { useDispatch } from "react-redux"
import { searchByCategory } from "../../redux/categorySlice"

import { useState } from "react"

function SideBarCategories(props) {

    const dispatch = useDispatch()

    const [subCategory, setSubCategory] = useState(true) // The initial state of (subCategory) should be false and on Clicking the category it turns true, but i made it true to show the sub categories of (Grains, Cereal & Legumes) category as we are displaying its products

    const handleClick = () => {
        dispatch(searchByCategory(props.codeParameter))
        setSubCategory(true)
    }

    return <div>
            <p onClick={handleClick}>{props.category} <span>({props.number})</span></p>

            {subCategory && 
           <div>{props.detailedCategories}</div>
            }
        <hr />
    </div>
}

export default SideBarCategories