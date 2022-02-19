import { Challange } from './../../domain/entities/challenge';
import { Student } from './../../domain/entities/student';
import { InMemoryChallangesRepository } from './../../../tests/repositories/in-memory-challenges-repository';
import { InMemoryStudentsRepository } from './../../../tests/repositories/in-memory-students-repository';
import { CreateChallengeSubmission } from './create-challenge-submission';

describe('Create challenge submission use case', () =>{
    it('should be able to create a new challenge submission', async () =>{
        const StudentRepository = new InMemoryStudentsRepository;
        const ChallangeRepository = new InMemoryChallangesRepository;

        const student = Student.create({
            name: 'Felipe',
            email: 'felipe.lipiw@gmail.com'
        })

        const challaenge = Challange.create({
            title: "Challenge-01",
            instructions: "https://example.com"
        })

        StudentRepository.items.push(student);
        ChallangeRepository.items.push(challaenge);

        const sut = new CreateChallengeSubmission(StudentRepository,ChallangeRepository);

        const response = await sut.execute({
            studentId: student.id,
            challengeId: challaenge.id,
        })

        expect(response).toBeTruthy()
    });
});