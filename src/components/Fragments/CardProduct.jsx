
import Button from "../Elements/Button";

const CardProduct = ( props ) => {
    const { children } = props;
    return (
            <div className="w-full max-w-sm bg-gray-800 border border-gray-200 rounded-lg shadow gap-3">
                {children}
            </div>
    )
}

const Header = ({image}) => {
    return (
        <a href="#">
            <img 
            src={image}
            alt="product" 
            className="p-3 rounded-t-lg"
            />
        </a>
    )
}

const Body = (props) => {
    const { children , title } = props;
    return (
        <div className="px-5 pb-5">
                    <a href="">
                        <h5 className="text-xl font-semibold tracking-tight text-white">
                            {title}
                        </h5>
                        <p className="text-sm text-white" >
                            
                        </p>
                    </a>
                </div>
    )
}

const Footer = ({ price }) => {
    return (
        <div className="flex items-center justify-between px-5 pb-5">
                    <span className="text-3xl font-bold text-white">
                        {price}
                    </span>
                    <Button className="bg-blue-600">Add To Cart</Button>
                </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct