// Task 3: addUser(first_name, last_name, email)

import { getServerURL } from "./task1.js";

export async function addUser (first_name, last_name, email){
    const res= await fetch(getServerURL() + "/users");// traigo la misla lista 
    const user = await res.json();
    const newId =Math.max(...user.map((user)=> user.id)) +1;// miro cual es el id mas alto y lo sumo como nuevo
    await fetch (getServerURL ()+ "/users", {// envio le usuario nuevo al servidor por el post
        method: "POST",// le digo al servidor que voy a crer algo nuevo
        body:JSON.stringify({//convierto los datos a json
            id:newId,
            first_name: first_name,
            last_name: last_name,
            email:email,
        }),
        headers:{ "Content-type": "application/json; charset=UTF-8"},
        //le digo al servidor que mando json y en utf8
    });



}