import SideBarCategories from "./SideBarCategories"

function SideBar(props) {

    return <aside className=" z-10 bg-white fixed top-0 left-0 h-screen w-3/4 border-r-2 shadow-2xl">
            <i onClick={() => props.setDisplaySideBar(false)} className="fa-solid fa-xmark fa-lg cursor-pointer"></i>
            <SideBarCategories
                category="Seafood"
                number="224"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Vegetables"
                number="162"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Packaged Fruits & Vegetables"
                number="142"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Fruits"
                number="139"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Grains, Cereal & Legumes"
                number="95"
                codeParameter=""
                detailedCategories={
                    <div>
                        <p>Legumes (40)</p>
                        <p>Milling Products (38)</p>
                        <p>Grain & Cereals (17)</p>
                    </div>
                }
            />

            <SideBarCategories
                category="Oil & Fats"
                number="89"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Herbs, Spices & Seasonings"
                number="78"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Nuts & Seeds"
                number="72"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Packaged Meat & Seafood"
                number="57"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Dairy"
                number="56"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Snack & Confectionary"
                number="54"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Simple Processed Fruits"
                number="44"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Non-Alcoholic Beverage"
                number="42"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Other Packaged Foods"
                number="35"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Meat"
                number="30"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Agricultural By-products"
                number="26"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Simple Processed Vegetables"
                number="17"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Coffee & Tea"
                number="16"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Alcoholic Beverage"
                number="16"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Food Additives"
                number="9"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Packaged Legumes, Beans & Peas"
                number="7"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Cocoa Products"
                number="5"
                codeParameter=""
                detailedCategories=""
            />

            <SideBarCategories
                category="Others"
                number="4"
                codeParameter=""
                detailedCategories=""
            />
        </aside>
}

export default SideBar