import { ComponentIterador } from './ComponentIterador';
import { Component } from './IComponent';
import { IIterable, Iterador } from './IIterador';

export class Composite<T> implements Component<T>, IIterable<Component<T>> {
    //
    private valor: T;
    private children: Component<T>[] = [];

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
        this.children.forEach((c) => {
            c.execute();
        });
    }

    add(c: Component<T>) {
        this.children.push(c);
    }

    getChildren(): Component<T>[] {
        return this.children;
    }

    getAllChildren(): Component<T>[] {
        let lista: Component<T>[] = [];

        lista.push(this);

        this.children.forEach((c) => {
            lista = lista.concat(c.getAllChildren());
        });

        return lista;
    }

    getIterador(): Iterador<Component<T>> {
        return new ComponentIterador<T>(this);
    }
}
