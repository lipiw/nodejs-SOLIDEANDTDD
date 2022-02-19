import { Entity } from "../../core/domain/Entity";

type CorrectionProps = {
    grade: number,
    submissionId: string,
    createdAt: Date
}

export class Correction extends Entity<CorrectionProps>{
    private constructor(props: CorrectionProps, id?: string){      // só pode ser usuado dentro da propria classe
        super(props, id);
    }

    static create(props: CorrectionProps, id?: string){
        // Eu poderia, mas caso tiver um metodo para setar a nota, esta validação não constaria
        // if (props.grade < 0 || props.grade > 10){
        //     throw new Error('');
        // }

        const correction = new Correction(props, id);

        return correction;
    }
}