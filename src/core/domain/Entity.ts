import crypto from 'crypto';

// COMPORTAMENTOS PADRÕES QUE TEMOS EM TODAS AS CLASSES

export abstract class Entity<T>{
    protected _id: string;
    public props: T;

    get id(){
        return this._id;
    }
    
    constructor(props, id?: string){        // Chamo todas propriedades que aquela classe tem e o id (opcional)
        this.props = props;
        this._id = id ?? crypto.randomUUID();
    }
}