// Task 4: delUser(number)

import { getServerURL } from "./task1.js";



export async function delUser(id) {
    await fetch(getServerURL() + "/users/" + id, { // le digo al server que voy a eliminar el id
        method:"DELETE",
    });

}