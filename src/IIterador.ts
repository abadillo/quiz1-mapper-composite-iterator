// A es leaf o composite
export interface Iterador<A> {
    next(): A;
    hasNext(): boolean;
    current(): A;
}

export interface IIterable<A> {
    // addItem(item: number): void;
    getIterador(): Iterador<A>;
}
