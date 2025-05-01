import Title from "./Title";
import Price from "./Price";
import Feature from "./Feature";
import './Product.css'

function Product({title, price, features}){
    return (
        <div className="Product">
            <Title/>
            <Feature />
            <Price />
        </div>
    );
} 

export default Product;