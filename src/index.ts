import { Composite } from './Composite';
import { ConvertidorToString } from './ConvertidorToString';
import { Component } from './IComponent';
import { Iterador } from './IIterador';
import { Leaf } from './Leaf';

let nodo1: Composite<number> = new Composite(1);
let nodo2: Composite<number> = new Composite(2);
let nodo3: Composite<number> = new Composite(3);
let nodo4: Composite<number> = new Composite(4);
let nodo5: Composite<number> = new Composite(5);

let hoja1: Leaf<number> = new Leaf(10);
let hoja2: Leaf<number> = new Leaf(20);
let hoja3: Leaf<number> = new Leaf(30);
let hoja4: Leaf<number> = new Leaf(40);
let hoja5: Leaf<number> = new Leaf(50);

// arbol
nodo1.add(nodo2);
nodo2.add(hoja1);
nodo2.add(hoja2);
nodo1.add(nodo3);
nodo3.add(nodo4);
nodo4.add(hoja3);
nodo4.add(nodo5);
nodo5.add(hoja4);
nodo5.add(hoja5);

let convertidor = new ConvertidorToString();

// Con iterador

let structOriginalConIterador: Component<number>[] = [];
let iterador1: Iterador<Component<number>> = nodo1.getIterador();

while (iterador1.hasNext()) {
    structOriginalConIterador = structOriginalConIterador.concat(iterador1.current());
    iterador1.next();
}

let structTransformado: Component<String>[] = [];

structOriginalConIterador.forEach((e) => {
    structTransformado = structTransformado.concat(convertidor.convertir(e));
});

console.log("Usando el iterador:")
console.log(nodo1);
console.log(structOriginalConIterador);
console.log(structTransformado);

////////
//////
/////
////
//
///
////

// Sin Iterador
let structOriginalSinIterador: Component<number>[] = nodo1.getAllChildren();

structTransformado = [];

structOriginalSinIterador.forEach((e) => {
    structTransformado = structTransformado.concat(convertidor.convertir(e));
});

console.log(" ")
console.log("Sin usar el iterador:")
console.log(nodo1);
console.log(structOriginalSinIterador);
console.log(structTransformado);

// interface Funcion<A, B> {
//     aplicarFuncion(e: A): B;
// }
// class FuncionToString implements Funcion<number, String> {
//     aplicarFuncion(n: number): String {
//         return n.toString();
//     }
// }
// class FuncionPotencia implements Funcion<number, number> {
//     aplicarFuncion(n: number): number {
//         return n * n;
//     }
// }

// let Funcion = new FuncionToString();
// let n = Funcion.aplicarFuncion(45);
// console.log(typeof n);

// let Funcion2 = new FuncionPotencia();
// let nn = Funcion.aplicarFuncion(45);
// console.log(typeof nn);

// class Mapper<A, B> {
//     map(estructura: Component<A>): Component<B> {
//         let estructura = estructura;

//         return estructuraTrans;
//     }
// }

// let mapper = new Mapper<number, String>().map(nodo1);

// class Mapper<A, B> {

//     map(estructura: Array<number>): Array<String> {

//         estructura.forEach(element => {
//             element.toString()
//         });

//         return estructura;
//     }
// }

// let estructura = [1,2,4]
// let mapper = new Mapper<number, String>();
// let estructuraTrans = mapper.map(estructura)
