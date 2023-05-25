
import SingleProduct from "./SingleProduct"
import { useSelector } from "react-redux"

function Products() {

    // In real project, we should use (category) as the value of the (code) parameter in the API to return the required data and use map     method to map <SingleProduct> component in the returned data, but in the task there is no data so we made it manually
    const category = useSelector((state) => state.category.value)

    return <section>
        <SingleProduct
            image="https://images.tridge.com/200x200/image/original/9f/63/d9/9f63d965a26c8485699ca4f0b1ef1f885afe8cf1.jpg"
            product="Rice"
            description="Oryza sativa, Рис, 大米, Riz, 쌀, Arroz, Rice"
        />

        <SingleProduct
            image="https://images.tridge.com/200x200/image/original/7f/cf/4a/7fcf4ada7a1c44addfea15270222f394997bad84.jpg"
            product="Dried Common Bean"
            description="Phaseolus vulgaris, Фасоль обыкновенная, 菜豆, Haricot commun, 일반 콩, Frijol común (judía), Common Bean, Field Bean, Pop Bean, Flageolet Bean, Pole Bean, Navy Bean, Haricot Bean, Bush Bean, Green Bean, Garden Bean, String Bean, Snap Bean, Runner Bean, French Bean"
        />
    </section>
}

export default Products