
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

        <SingleProduct
            image="https://images.tridge.com/200x200/image/original/91/a4/15/91a41569ed9068351c5c5dbd28de9634d47e1904.jpg"
            product="Maize (Corn)"
            description="Zea Mays, Маис (кукуруза), 玉米, Maïs, 옥수수, Maíz, Maize (Corn), Corn, Maize"
        />

        <SingleProduct
            image="https://images.tridge.com/200x200/image/original/f1/fe/4b/f1fe4b262cfebbc0017cc47ff6d31f7f6403a3e0.jpg"
            product="Wheat"
            description="Triticum aestivum, Пшеница, 小麦, Blé, 소맥, Trigo, Wheat"
        />

        <SingleProduct
            image="https://images.tridge.com/200x200/image/original/72/86/b1/7286b1b1397fb5f2cead0a481435a58e31bd72d3.jpg"
            product="Barley"
            description="Hordeum vulgare, Ячмень, 大麦, Orge, 보리, Cebada, Barley"
        />

        <SingleProduct
            image="https://images.tridge.com/200x200/image/original/ce/11/40/ce1140206e339987a5353344aef5cd83464ffaad.jpg"
            product="Dried Mung Bean"
            description="Vigna radiata, 绿豆, Haricot mungo, Soya verde, Mung Bean, Moog Dal, Moong Dal, Mungbean, Green Gram, Mung Dal"
        />

        <SingleProduct
            image="https://images.tridge.com/200x200/image/original/cc/8f/af/cc8faf74f5844cd125151bcb82c3c5efb7ab0cd0.jpg"
            product="Dried Adzuki Bean"
            description="Vigna angularis, Бобы адзуки, 红豆, Haricot Azuki, 팥, Frijol (judía) adzuki, Adzuki Bean, Red Mung Bean, Aduki Bean, Azuki Bean"
        />

        <SingleProduct
            image="https://images.tridge.com/200x200/image/original/95/aa/98/95aa9860ebd765f5743100525b85414a36215aee.jpg"
            product="Millet"
            description="Pennisetum glaucum, Просо, 小米, 밀레, Mijo, Millet"
        />
    </section>
}

export default Products