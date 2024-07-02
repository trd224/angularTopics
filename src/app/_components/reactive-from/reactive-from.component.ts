import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.scss']
})
export class ReactiveFromComponent implements OnInit {

  myForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){

  }


  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  submitForm(){
    console.log(this.myForm.controls['email'].errors);
  }
}
