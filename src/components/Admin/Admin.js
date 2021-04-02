import React, { useContext } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import {Button }from 'react-bootstrap';
import { useHistory} from 'react-router';
import { UserContext } from '../../App';

const Admin = () => {

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const handleAddProduct = () => {
   
       if(loggedInUser){
        history.push('/addProduct');
       } else {
        history.push('/login');
       }
    }
  return (
    <div className="text-center">
      
        <Button onClick={() => {
                            handleAddProduct()

                        }}>Add Product</Button>
    
    </div>
  );
};

export default Admin;