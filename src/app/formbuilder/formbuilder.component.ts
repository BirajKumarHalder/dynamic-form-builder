import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent implements OnInit {

  @Input('formDefs') formDefs: any;
  @Output('formSubmitter') formSubmitter = new EventEmitter();
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({});
    if (this.formDefs.length > 0) {
      this.formDefs.forEach(def => {
        if (def.modelBind != null && def.modelBind != undefined) {
          const validationArr = [];
          if (def.required) {
            validationArr.push(Validators.required);
          }
          this.form.addControl(def.modelBind, this.formBuilder.control(def.default, validationArr));
        }
      });
    }
  }

  submitForm() {
    console.log(this.form.value);
    this.formSubmitter.emit(this.form);
  }

  resetForm() {
    this.form.reset();
  }

}
