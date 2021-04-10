import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-multi-checkbox',
  templateUrl: './multi-checkbox.component.html',
  styleUrls: ['./multi-checkbox.component.css']
})
export class MultiCheckboxComponent implements OnInit {


  myForm: FormGroup;
  selectedOptions: any[];
  outputOptions: any = [
    { name: "Loan Number", value: "loanNumber", selected: false },
    { name: "Name", value: "name", selected: false },
    { name: "Property Address", value: "propertyAddress", selected: false },
    { name: "Custodian", value: "custodian", selected: false },
    { name: "Document Type", value: "documentType", selected: false }
  ];
  allSelected = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createFormInputs();
  }

  createFormInputs() {
    this.myForm = this.fb.group({
      outputOptions: new FormArray([])
    });
    this.setOutputOptionsControls();
  }

  setOutputOptionsControls() {
    this.myForm.controls.outputOptions = new FormArray([]);
    this.outputOptions.forEach(option => {
      (this.myForm.controls.outputOptions as FormArray).push(new FormControl(option.selected));
    });
    this.checkChange();
  }

  setSelectedOutputOptions() {
    this.selectedOptions = this.convertToValue('outputOptions');
  }

  selectAll(event) {
    this.outputOptions.forEach(option => {
      option.selected = event.target.checked;
    });
    this.allSelected = event.target.checked;
    this.setOutputOptionsControls();
  }

  checkChange() {
    this.allSelected = true;
    for (let control of this.myForm.controls.outputOptions['controls']) {
      if (!control.value) {
        this.allSelected = false;
        break;
      }
    }
    this.setSelectedOutputOptions()
  }

  convertToValue(key: string) {
    let valueArr = [];
    this.myForm.controls[key]['controls'].forEach((x, i) => {
      if (x.value) {
        valueArr.push(this[key][i]);
      }
    });
    return valueArr;
  }

  submitForm() {
    const valueToStore = Object.assign({}, this.myForm.value, {
      outputOptions: this.convertToValue('outputOptions')
    });
    console.log(valueToStore);
  }


}
