import { ChallangeRepository } from './../repositories/ChallengeRepository';
import { StudentRepository } from './../repositories/StudentsRepository';
import {Submission} from "../../domain/entities/submission";

type CreateChallengeSubmissionRequest ={
    studentId: string;
    challengeId: string;
}

export class CreateChallengeSubmission{
    constructor(
        private studentsRepository: StudentRepository,
        private challengeRepository: ChallangeRepository,
    ) {}

    async execute({studentId, challengeId}: CreateChallengeSubmissionRequest){
        const student = await this.studentsRepository.findById(studentId);
        const challenge = await this.challengeRepository.findById(challengeId);

        if(!student) {
            throw new Error('Students does not exists.')
        }

        if(!challenge) {
            throw new Error('Challenge does not exists.')
        }

        const submission = Submission.create({
            studentId,
            challengeId,
        })

        return submission;
    }
}