import { Component } from './IComponent';

export interface Convertidor<A, B> {
    convertir(c: Component<A>): Component<B>;
}
