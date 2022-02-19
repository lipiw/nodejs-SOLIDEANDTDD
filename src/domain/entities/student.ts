import { Entity } from "../../core/domain/Entity";

type StudentProps = {
    name: string,
    email: string,
}

export class Student extends Entity<StudentProps>{
    private constructor(props: StudentProps, id?: string){      // só pode ser usuado dentro da propria classe
        super(props, id);
    }

    static create(props: StudentProps, id?: string){            // statico para ser chamado sem a classe ser instaciada
        const student = new Student(props, id);

        return student;
    }
}