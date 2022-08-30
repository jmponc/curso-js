// Declaro un array con nombres
let arr = ["Juan", "Carlos", "Hector", "Ruben", "Paula", "Ana", "Natalia", "Susana", "Brunella", "Gonzalo"];

//Saludo por medio de un Alert a todos menos a Paula (no hay nada personal contra Paula)
for(let i = 0; i < arr.length; i++){
    if (i == 4){
        continue;
    }
    else{
        alert(`Hola ${arr[i]} como estás?`);
    };
};