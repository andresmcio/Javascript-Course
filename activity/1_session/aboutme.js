console.log("hello world");


console.log("laater");

let alumnName = "Andrés Ibarra Guerrero";
let ocupation = "Ingeniero preventa";
let position = "Desarrollador";
let message = `Hola, me llamo ${alumnName} y me dedico a ${ocupation}. Estoy cursando este Máster porque me gustaría trabajar como ${position}`;

console.log(message);

// Ejecicio 4

function divisibleX7() {
    for (let i = 0; i < 100; i++) {
        if (i % 7 === 0) {
            console.log(i);
        }
    }
}
divisibleX7();

// Ejercicio 6

let formatter = {
    prefix: "Hello",
    append: (str) => {
        console.log(`${formatter.prefix} ${str}`);
    }
}

formatter.append("World");

formatter.toLowerString = (str) => {
    console.log(str.toLowerCase());
};

formatter.toLowerString("HELLO WORLD");