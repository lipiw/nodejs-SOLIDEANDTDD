import { Challange } from './../../src/domain/entities/challenge';
import { ChallangeRepository } from '../../src/application/repositories/ChallengeRepository';


export class InMemoryChallangesRepository implements ChallangeRepository{
    public items: Challange[] = [];

    async findById(id: string): Promise<Challange> {
        const challange = this.items.find(challange => challange.id === id)

        if(!challange){
            return null;
        }

        return challange;
    }
}