import { Student } from './../../src/domain/entities/student';
import { StudentRepository } from './../../src/application/repositories/StudentsRepository';


export class InMemoryStudentsRepository implements StudentRepository{
    public items: Student[] = [];

    async findById(id: string): Promise<Student> {
        const student = this.items.find(student => student.id === id)

        if(!student){
            return null;
        }

        return student;
    }
}