import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-validationpage',
  templateUrl: './validationpage.component.html',
  styleUrls: ['./validationpage.component.css'],
  providers: [MessageService]
})
export class ValidationpageComponent implements OnInit {

  userform: FormGroup;

  submitted: boolean;

  genders: SelectItem[];

  description: string;

  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {

    this.userform = this.fb.group({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
      'description': new FormControl(''),
      'gender': new FormControl('', Validators.required)
    });

    this.genders = [];
    this.genders.push({ label: 'جنسیت', value: '' });
    this.genders.push({ label: 'آقا', value: 'Male' });
    this.genders.push({ label: 'خانم', value: 'Female' });
  }
  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
  }

  get diagnostic() { return JSON.stringify(this.userform.value); }

}
