import { Component } from './IComponent';
import { Iterador } from './IIterador';

export class ComponentIterador<T> implements Iterador<Component<T>> {
    //
    private item: Component<T>;
    private position: number;
    private items: Component<T>[];

    constructor(c: Component<T>) {
        this.item = c;
        this.position = 0;
        this.items = this.item.getAllChildren();
    }

    next(): Component<T> {
        this.position = this.position + 1;
        this.item = this.items[this.position];
        return this.item;
    }

    hasNext(): boolean {
        return this.position < this.items.length ? true : false;
    }

    current(): Component<T> {
        return this.item;
    }
}
