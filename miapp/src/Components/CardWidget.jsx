import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"

const CardWidget = () => {
    return ( <>
        
        <div className="card-widget">
            <FontAwesomeIcon icon= {faShoppingCart} size="50px" color="black"/>
            <div className= "qty-display">0</div>
        </div>
        
        </>
    )
}

export default CardWidget