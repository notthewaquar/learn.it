import { TestQuestion } from './test-question.model';

export class TestInfoList {

  constructor(
    public selectClass: number,
    public subject: string,
    public noOfQues: number,
    public eachQuesMark: number,
    public examDate: string,
    public startTime: string,
    public endTime: string,
    public testQuestion: TestQuestion[]
  ) {}
}
