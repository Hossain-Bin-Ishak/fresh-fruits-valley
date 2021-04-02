import axios from "axios";
import { Button } from "react-bootstrap";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);
    const onSubmit = data => {
      console.log(data.price, data.wight);
      const fruitData = {
        id: data._id,
        name: data.fruitName,
        price: data.price,
        wight: data.wight,
        imageURL: imageURL
      };
     const url =`http://localhost:5500/addProduct`;
     console.log(fruitData);
     fetch(url, {
         method: 'POST',
         headers: {'Content-Type': 'application/json'},
         body: JSON.stringify(fruitData)
     })
     .then(res => console.log('Servier side response', res))
    };

  const handleImageUpload = event => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', 'a7915b9f212a4d28faff77a845b1d274');
    imageData.append('image', event.target.files[0] )

    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      setImageURL(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  
  function loadAllProducts (){
    fetch('http://localhost:5500/products')
    .then(res => res.json())
    .then(fruits => {
        console.log(fruits);
        const container = document.getElementById("products");
        container.innerHTML = '';
        fruits.forEach(fr => {
            const p = document.createElement('p');
            p.innerHTML = `${fr.name} Price: ${fr.price} Wigth:  ${fr.wight}
            <button onclick="deleteProduct('${fr._id}')">Delete</button>
                `;
            container.appendChild(p);
        });
    })
 }
 loadAllProducts();

 function deleteProduct(id){
  fetch(`/delete/${id}`,{
      method: 'DELETE'
  })
  .then(res => res.json())
  .then(result => {
      // if(result){
      //     event.target.parentNode.style.display = 'none';
      // }
  })
}




    return (
    <div className="text-center">  
        <form  action="/addProduct" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <input name="fruitName" type="text" placeholder="Fruit Name" ref={register({ required: true })} />
        <br/>
        <input name="wight" type="text" placeholder="Wight" ref={register({ required: true })} />
        <br/>
        <input name="price" type="text" placeholder="Price" ref={register({ required: true })} />
        <br/>
        <input name="image" type="file" onChange={handleImageUpload}/>
        <br/>
        {errors.image && <span>This field is required</span>}
        
       <input  type="submit"/>
        </form>

        <div id="products">

        </div>
        <div id="update">

        </div>

    </div>
    );
};

export default AddProduct;