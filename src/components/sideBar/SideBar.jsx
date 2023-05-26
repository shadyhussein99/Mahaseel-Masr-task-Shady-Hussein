import { Link } from "react-router-dom"
import SideBarCategories from "./SideBarCategories"

function SideBar() {

    return <aside className="md:mx-4 md:mt-16 md:px-5 md:py-10 md:bg-gray-100 ">
        <SideBarCategories
            category="Seafood"
            number="224"
            detailedCategories=""
        />

        <SideBarCategories
            category="Vegetables"
            number="162"
            detailedCategories=""
        />

        <SideBarCategories
            category="Packaged Fruits & Vegetables"
            number="142"
            detailedCategories=""
        />

        <SideBarCategories
            category="Fruits"
            number="139"
            detailedCategories=""
        />

        <SideBarCategories
            category="Grains, Cereal & Legumes"
            number="95"
            detailedCategories={
                <div>
                    <Link to="#"><p className="mt-2">Legumes (40)</p></Link>
                    <Link to="#"><p className="mt-2">Milling Products (38)</p></Link>
                    <Link to="#"><p className="mt-2">Grain & Cereals (17)</p></Link>
                </div>
            }
        />

        <SideBarCategories
            category="Oil & Fats"
            number="89"
            detailedCategories=""
        />

        <SideBarCategories
            category="Herbs, Spices & Seasonings"
            number="78"
            detailedCategories=""
        />

        <SideBarCategories
            category="Nuts & Seeds"
            number="72"
            detailedCategories=""
        />

        <SideBarCategories
            category="Packaged Meat & Seafood"
            number="57"
            detailedCategories=""
        />

        <SideBarCategories
            category="Dairy"
            number="56"
            detailedCategories=""
        />

        <SideBarCategories
            category="Snack & Confectionary"
            number="54"
            detailedCategories=""
        />

        <SideBarCategories
            category="Simple Processed Fruits"
            number="44"
            detailedCategories=""
        />

        <SideBarCategories
            category="Non-Alcoholic Beverage"
            number="42"
            detailedCategories=""
        />

        <SideBarCategories
            category="Other Packaged Foods"
            number="35"
            detailedCategories=""
        />

        <SideBarCategories
            category="Meat"
            number="30"
            detailedCategories=""
        />

        <SideBarCategories
            category="Agricultural By-products"
            number="26"
            detailedCategories=""
        />

        <SideBarCategories
            category="Simple Processed Vegetables"
            number="17"
            detailedCategories=""
        />

        <SideBarCategories
            category="Coffee & Tea"
            number="16"
            detailedCategories=""
        />

        <SideBarCategories
            category="Alcoholic Beverage"
            number="16"
            detailedCategories=""
        />

        <SideBarCategories
            category="Food Additives"
            number="9"
            detailedCategories=""
        />

        <SideBarCategories
            category="Packaged Legumes, Beans & Peas"
            number="7"
            detailedCategories=""
        />

        <SideBarCategories
            category="Cocoa Products"
            number="5"
            detailedCategories=""
        />

        <SideBarCategories
            category="Others"
            number="4"
            detailedCategories=""
        />
    </aside>
}

export default SideBar