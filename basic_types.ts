//
// TS Types
//

// Primitive types are the most basic types
let myName: string = "Aaron"; // strings
let height: number = 1.78; // numbers: floting point numbers
let isDone: boolean = true; // boolean

let aCounter; // unkwnow (any) type
let bCounter = 0; // number (inferred)
let cCounter: number; //number
let dCounter: number = 0; //number

// Any 
let anyData: any = 1;
anyData = true;
anyData = "maybe a string instead";

// Functions
function greets(name: string = "Roc"): string {
  return `Hello ${name}`;
}

console.log(greets()) 

/// function with optional parameter
function addThree(x: number, y: number, z?: number): number {
  if (z !== undefined) {
    return x + y + z;
  }
  return x + y;
}

console.log(addThree(1,2,3)) 
console.log(addThree(1,2)) 

// Union Types
let id: number | string;
id = 10;
console.log(typeof id, id); // number
id = "11";
console.log(typeof id, id); // string
//quan fem una petició a una API, puc esperar un JSON o un error. Per tant podem tenir aquest tipus de problema

//com convertim d'un tipus a un altre.
//  Type assertions
let someValue: any;
someValue = "Hello, TypeScript!";
let strLength: number = (someValue as string).length; 

let anotherValue: number | string;
anotherValue = "Learning TypeScript";
let anotherStrLength: number = (<string>anotherValue).length; //li posem davant el tipus que volem convertir. 
// En aquest exemple ens retorna el tamany en caràcters d'un string (un número)

// Arrays of types
//com defineixo un array de números, tenim dues formes totalment compatibles una amb l'altre, podem utilitzar la que vulguem
const listOfNotes: number[] = [7, 10, 4]; //forma 1
const listOfNotes2: Array<number> = [12, 12, 12]; //forma 2
console.log(typeof listOfNotes, listOfNotes); // JSON object, ens retorna JSON (quasevol cosa complexe torna JSON, ja que no és capaç de diferenciar-ho)
console.log(typeof listOfNotes2, listOfNotes2); // JSON object

const listOfStrings: string[] = ["hello", "how are you"];
const listOfStrings2: Array<string> = ["hola", "que tal"];

const listOfAny: any[] = [1, true, "free"]; //en altres llenguatges no podriem fer un potipoti de diferents tipus de dades, en JS i TS sí
listOfAny[1] = 100;
console.log(listOfAny); // JSON object

// Tuples
let strNumTuple: [string, number];
strNumTuple = ["Hello", 1000];
console.log(typeof strNumTuple, strNumTuple); // JSON object

// JSON Objects


//varies formes de definir objectes nous
/// type
type Task = {
  id: string | number
  title: string
  completed: boolean
}

const task: Task = {
  id: 1,
  title: "My Title",
  completed: true
}
console.log(typeof task, task); // JSON object

/// interface
//defineixo una interfaç i després creo un objecte amb aquesta interfaç. Interfaç no és un tipus com a tal.
interface Product {
  name: string;
  readonly price: number; // readonly is a modifier
  description?: string;
}
//un mateix objecte JSON pot complir amb diferents interfaç a la vegada

const product: Product = {
  name: "laptop",
  price: 1000,
  description: "good laptop",
};

console.log(typeof product, product); // JSON object

// enums
//són un conjunt de valors constants que poden ser assignats a una variable. 
//per exemple jo vull que un objecte JSON tingui un estat, i aquest estat només pot ser un d'aquests tres valors.
enum Status {
  Activo,     // 0
  Inactivo,   // 1
  Pendiente   // 2
}

let estadoActual: Status = Status.Activo;
console.log(estadoActual); // 0
console.log(Status[0]);    // "Activo"

//exemple molt clar de com utilitzar enums
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  InternalServerError = 500
}

console.log(HttpStatus.OK);       // 200
console.log(HttpStatus[404]);     // "NotFound"


enum RolUsuario {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Usuario = "USUARIO"
}

let rol: RolUsuario = RolUsuario.Admin;
console.log(rol); // "ADMIN"

//tipos genèrics
function identidad<T>(arg: T): T{
  return arg;
}

let resultado1: string = identidad<string>("Hola");
let resultado2: number = identidad<number>(123);