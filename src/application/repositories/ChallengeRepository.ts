import { Challange } from './../../domain/entities/challenge';

export interface ChallangeRepository {
    findById(id: string): Promise<Challange | null>;
}