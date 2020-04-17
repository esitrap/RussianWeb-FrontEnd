import { Component, OnInit } from '@angular/core';
import {Validators,FormControl,FormGroup,FormBuilder} from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
  providers: [MessageService]
})
export class LoginpageComponent implements OnInit {

  userform: FormGroup;

  submitted: boolean;


  constructor(private fb: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {

    this.userform = this.fb.group({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)])),
  });


  }
  onSubmit(value: string) {
    this.submitted = true;
    this.messageService.add({severity:'success', summary:'تبریک', detail:'نام کاربری و رمز عبور صحیح بود'});
    this.submitted =! true;
    this.messageService.add({severity:'error', summary:'اخطار', detail:'نام کاربری و رمز عبور صحیح نیست'});
}

get diagnostic() { return JSON.stringify(this.userform.value); }

}
