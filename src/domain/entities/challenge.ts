import { Entity } from "../../core/domain/Entity";

type ChallengeProps = {
    title: string,
    instructions: string,
}

export class Challange extends Entity<ChallengeProps>{
    private constructor(props: ChallengeProps, id?: string){      // só pode ser usuado dentro da propria classe
        super(props, id);
    }

    static create(props: ChallengeProps, id?: string){
        const challange = new Challange(props, id);

        return challange;
    }
}