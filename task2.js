// Task 2: listUsers()


// importo util para controlar cómo se imprime cada usuario
import util from "util";
// importo la función que me da la url del servidor
import { getServerURL } from "./task1.js";

export async function listUsers() {// exporto la funcion para que index pueda usarla
  const res = await fetch(getServerURL() + "/users");//le pido la lista al servidor
  const data = await res.json();//convierto la respuesta a un objeto

  console.log("[");// imprimo el corchete de apertura
  data.forEach((user, i) => {
   
    const texto = util.inspect(user, { breakLength: 1 }); // convierto cada usuario a texto con una clave por línea
    console.log(i < data.length - 1 ? texto + "," : texto);// le pongo coma pegada si no es el ultimo
  });
  console.log("]");// imprimo el corchete de cierre
}