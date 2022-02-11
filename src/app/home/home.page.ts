import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  formGroup?: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      username: [undefined, Validators.required],
			password: [undefined, Validators.required]
    });
    this.formGroup.valueChanges.subscribe(values => console.log('changes', values));
  }

  submit() {
    console.log('submit clicked');
  }
}
