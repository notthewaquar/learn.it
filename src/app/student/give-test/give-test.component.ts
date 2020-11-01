import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { TestInfoList } from 'src/app/shared/model/test-info.model';
import { TestInfoService } from 'src/app/shared/service/all-test/test-info.service';
import { TestQuestionService } from 'src/app/shared/service/all-test/test-question.service';

@Component({
  selector: 'app-give-test',
  templateUrl: './give-test.component.html',
  styleUrls: ['./give-test.component.css']
})

export class GiveTestComponent implements OnInit {
  testInfoList: TestInfoList;
  giveTestMode = true;
  // test
  previewForm: FormGroup;
  id: number;
  questionIndex = 0;

  slideIndex = 0;
  slideTestLength: number;
  disableNext = false;
  disablePrev = true;

  constructor(
    private router: Router,
    private testQuestionService: TestQuestionService,
    private testInfoService: TestInfoService
  ) { }

  ngOnInit(): void {
    const giveTestIndex = this.testInfoService.giveTestIndex;
    if (giveTestIndex === null) {
      this.giveTestMode = false;
    } else {
      this.testInfoList = this.testInfoService.getEachTestInfoList(giveTestIndex);
      this.previewForm = new FormGroup({
        eachTestCard: new FormArray([])
      });
      this.displayEachTest();
    }
  }
  displayEachTest() {
    // tslint:disable-next-line: prefer-for-of
    for (let index = 0; index < this.testInfoList.testQuestion.length; index++) {
      const control = new FormGroup({
        ansA: new FormControl(false),
        ansB: new FormControl(false),
        ansC: new FormControl(false),
        ansD: new FormControl(false)
      });
      (this.previewForm.get('eachTestCard') as FormArray).push(control);
    }
  }
  resetTestArr(index: number) {
    (this.previewForm.get('eachTestCard') as FormArray).controls[index].patchValue(
      {ansA: false, ansB: false, ansC: false, ansD: false}
    );
  }
  radioClickA(index: number) {
    this.resetTestArr(index);
    (this.previewForm.get('eachTestCard') as FormArray).controls[index].patchValue({ansA: true});
  }
  radioClickB(index: number) {
    this.resetTestArr(index);
    (this.previewForm.get('eachTestCard') as FormArray).controls[index].patchValue({ansB: true});
  }
  radioClickC(index: number) {
    this.resetTestArr(index);
    (this.previewForm.get('eachTestCard') as FormArray).controls[index].patchValue({ansC: true});
  }
  radioClickD(index: number) {
    this.resetTestArr(index);
    (this.previewForm.get('eachTestCard') as FormArray).controls[index].patchValue({ansD: true});
  }
  onSubmit() {
    let marks = 0;
    let attemptQuestion = 0;
    console.clear();
    for (let index = 0; index < this.testInfoList.testQuestion.length; index++) {
      const ansSelCorr = this.testInfoList.testQuestion[index].correct;
      let ansSelA = this.previewForm.value.eachTestCard[index].ansA;
      let ansSelB = this.previewForm.value.eachTestCard[index].ansB;
      let ansSelC = this.previewForm.value.eachTestCard[index].ansC;
      let ansSelD = this.previewForm.value.eachTestCard[index].ansD;
      if (ansSelA === true) {
        ansSelA = 'A';
      } else if (ansSelB === true) {
        ansSelB = 'B';
      } else if (ansSelC === true) {
        ansSelC = 'C';
      } else if (ansSelD === true) {
        ansSelD = 'D';
      }
      if ( ansSelA === ansSelCorr || ansSelB === ansSelCorr || ansSelC === ansSelCorr || ansSelD === ansSelCorr ) {
        marks = marks + 1;
      }
      if ( ansSelA === 'A' || ansSelB === 'B' || ansSelC === 'C' || ansSelD === 'D' ) {
        attemptQuestion = attemptQuestion + 1;
      } else {
        console.log('not');
      }
    }
    console.log('Correct: ' + marks);
    console.log('Attempted: ' + attemptQuestion );
    alert( 'Correct: ' + marks + '\n' + 'Attempted: ' + attemptQuestion);
  }
  nextSlide() {
    if (!this.disableNext) {
      this.slideIndex++;
      this.disablePrev = false;
    }
    if (this.slideIndex === this.testInfoList.testQuestion.length - 1) {
      this.disableNext = true;
    }
  }
  prevSlide() {
    if (!this.disablePrev) {
      this.slideIndex--;
      this.disableNext = false;
    }
    if (this.slideIndex === 0) {
      this.disablePrev = true;
    }
  }
}
