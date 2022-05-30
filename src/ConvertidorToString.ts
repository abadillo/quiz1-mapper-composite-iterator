import { Composite } from './Composite';
import { Component } from './IComponent';
import { Convertidor } from './IConvertidor';
import { Leaf } from './Leaf';

export class ConvertidorToString implements Convertidor<number, String> {
    convertir(c: Component<number>): Component<String> {
        if (c instanceof Composite) {
            return new Composite<String>(c.getValor().toString());
        } else {
            return new Leaf<String>(c.getValor().toString());
        }
    }
}
