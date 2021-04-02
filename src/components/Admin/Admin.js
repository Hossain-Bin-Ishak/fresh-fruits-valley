import React, { useContext } from 'react';
import {Button }from 'react-bootstrap';
import { useHistory} from 'react-router';
import { UserContext } from '../../App';
import './Admin.css';

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
    <div className="container mb-3 text-center">
   
 <div className="admin-area">
 <Button className="mr-3" onClick={() => {
                            handleAddProduct()

                        }}>Add Product</Button>

        
<Button onClick={() => {
                            handleAddProduct()

                        }}>Manage Product</Button>
 </div>
    
    </div>
  );
};

export default Admin;