import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../appmodelclass/apirespons';
import { ApiStatus } from '../appmodelclass/apistatus';

import { User } from '../appmodelclass/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  user: User = new User();

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login() {


    const header = { 'content-Type': 'application/json' }
    this.http.post('http://localhost:8080/login', JSON.stringify(this.user), { headers: header, })
      .subscribe(data => {

        let res = <ApiResponse>data;
        console.log(res.msg);
        console.log(res.status);



        if (res.status == ApiStatus.SUCCESS) {
          console.log('successaaaaaaaaa');
          window.location.href = 'success'

        }



      })

  }




}
