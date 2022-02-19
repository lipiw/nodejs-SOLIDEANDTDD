import { Entity } from "../../core/domain/Entity";

type SubmissionProps = {
    challengeId: string,
    studentId: string,
    createdAt?: Date;
}

export class Submission extends Entity<SubmissionProps>{
    private constructor(props: SubmissionProps, id?: string){      // só pode ser usuado dentro da propria classe
        super(props, id);
    }

    static create(props: SubmissionProps, id?: string){
        const submission = new Submission({
            ...props,
            createdAt: props.createdAt ?? new Date()                // caso o usuario não informe uma data eu instancio uma nova data tempo real
        }, id);

        return submission;
    }
}