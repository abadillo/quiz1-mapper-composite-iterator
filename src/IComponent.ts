// T es number, o string o ...
export interface Component<T> {
    setValor(v: T): void;
    getValor(): T;
    execute(): void;
    getAllChildren(): Component<T>[];
}
