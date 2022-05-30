import { ComponentIterador } from './ComponentIterador';
import { Component } from './IComponent';
import { IIterable, Iterador } from './IIterador';

export class Leaf<T> implements Component<T>, IIterable<Component<T>> {
    //
    private valor: T;

    constructor(valor: T) {
        this.valor = valor;
    }

    setValor(v: T): void {
        this.valor = v;
    }

    getValor(): T {
        return this.valor;
    }

    execute(): void {
        console.log(this.valor);
    }

    getAllChildren(): Component<T>[] {
        let lista: Component<T>[] = [];

        lista.push(this);

        return lista;
    }

    getIterador(): Iterador<Component<T>> {
        return new ComponentIterador<T>(this);
    }
}
