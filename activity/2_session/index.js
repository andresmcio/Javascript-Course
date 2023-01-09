// Ejercicio 1
let person = {
    name: "Andrés",
    surname: "Ibarra",
    age: 31,
    ocupation: "Developer",
    hobbies: ["Video games", "Tennis", "Programming", "Reading", "Paddel"],
    activeStudent: true
}

let returnPropertiesList = (obj) => {
    let properties = [];
    for (let property in obj) {
      if(Array.isArray(obj[property]) == true){
        obj[property].forEach(element => {
          properties.push(element);
        });
      } else {
        properties.push(obj[property]);
      }
    }
    return properties;
}

returnPropertiesList(person);

// Ejercicio 2

let respuesta // El valor de this va a depender del cotexto en el que se emplee

//1. En el contexto global, this hace referencia al objeto window

respuesta = this;
console.log(respuesta); // window

//2. En el contexto de una función, this hace referencia al objeto window

let myFunc = () => {
    return this;
};

respuesta = myFunc();
console.log(respuesta); // window

//3. En el contexto de un método, this hace referencia al objeto que contiene el método

person["greeting"] = function (){
    let message = `Hello, my name is ${this.name} ${this.surname}.`;
    return message;
};

respuesta = person.greeting();
console.log(respuesta); // Hello, my name is Andrés Ibarra.

//4. En el contexto de una función constructora, this hace referencia al objeto que se está creando

function Person(name, surname, age, ocupation, hobbies, activeStudent) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.ocupation = ocupation;
    this.hobbies = hobbies;
    this.activeStudent = activeStudent;
}

let newPerson = new Person("Pepe", "López", 21, "Flojo", ["Nothing", "Nothing", "Nothing"], false);

respuesta = newPerson;
console.log(respuesta); // Person {name: "Pepe", surname: "López", age: 21, ocupation: "Flojo", hobbies: Array(3), activeStudent: false}

//5. En el contexto de una función flecha, this hace referencia al objeto window

let myArrowFunc = () => {
    return this;
};

respuesta = myArrowFunc();
console.log(respuesta); // window

//6. En el contexto de un evento, this hace referencia al elemento que ha disparado el evento

/* let domObj = document.querySelector(".container");

domObj.addEventListener("click", function(){
    respuesta = this;
    console.log(respuesta); // <div class="container">...</div>
}); */

// Ejercicio 3

class InvertirCadena{
  constructor(cadenaInvertir) {
    this.cadenaInvertir = cadenaInvertir;
    this.callback = (cadenaInvertir) => {
      if(cadenaInvertir === ''){
        return error.throw("Error: la cadena está vacía");
      } else {
        let cadena = cadenaInvertir.split("");
        let cadenaInvertida = cadena.reverse();
        let cadenaFinal = cadenaInvertida.join("");
        console.log(cadenaFinal) ;
      }
    };
  }

};

let invertirCadena = new InvertirCadena("Hola mundo");

invertirCadena.callback(invertirCadena.cadenaInvertir);

invertirCadena.nuevoMetodo(); //Dará error.

//Para que podamos añadir un nuevo método a la clase usaríamos prototype y lo definimos.

invertirCadena.prototype.nuevoMetodo = function(){
  console.log("Nuevo método");
};

invertirCadena.nuevoMetodo(); //Nuevo método se ejecuta correctamente.

// Ejercicio 4

class access {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  login(){
    if (this.username === "admin" && this.password === "passwd") {
      alert("User logged in");
    } else {
      alert("Error: invalid username or password");
    }
  }
}

let login = new access("admin", "passwd"); // User logged in
let badLogin = new access("pepe", "pass"); // Error: invalid username or password


// Ejercicio 5

let loginButton = document.querySelector("#loginSuccess");
let loginError = document.querySelector("#loginFailure");

loginButton.addEventListener("click", function(){
    let credentials = {
      username: "admin",
      password: "passwd"
    }
    let login = new access(credentials.username, credentials.password); // User logged in
    login.login();
});

loginError.addEventListener("click", function(){
    let credentials = {
      username: "pepe",
      password: "pass"
    }
    let login = new access(credentials.username, credentials.password); // Error: invalid username or password
    login.login();
});

// Ejercicio 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};

let loginButtonAsync = document.querySelector("#loginSuccessAsync");
let loginErrorAsync = document.querySelector("#loginFailureAsync");

loginButtonAsync.addEventListener("click", async () => {
  try {
    await loginWitUsername("admin", "passwd");
    alert("User logged in");
  } catch (err) {
    alert(err);
  }
});

loginErrorAsync.addEventListener("click", async () => {
  try{
    await loginWitUsername("pepe", "pass");
    alert("Error: invalid username or password");
  } catch (err) {
    alert(err);
  }
});