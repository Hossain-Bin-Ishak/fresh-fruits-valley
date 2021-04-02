import React , { useContext }  from 'react';
import { Link } from 'react-router-dom';
import { useHistory} from 'react-router';
import { UserContext } from '../../App';

const ProductDetail = (props) => {
    const {_id, name, price, wight, imageURL } = props.product;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleRoute = () => {
   
        if(loggedInUser){
         history.push('/checkout');
        } else {
         history.push('/login');
        }
        console.log(handleRoute);
     }

    return (
        <div className="col-md-3">
            <img style={{height: '150px'}} src={imageURL} alt=""/>
            <h4>{name} | {wight} gm</h4>
            <h5>Price: {price} <Link onClick={() => {
                            handleRoute()

                        }} to={`/checkout/${_id}`} className="btn btn-primary">Shop Now</Link> </h5>
        </div>
    );
};

export default ProductDetail;