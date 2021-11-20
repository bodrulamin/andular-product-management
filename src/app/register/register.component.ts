import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../appmodelclass/apirespons';
import { ApiStatus } from '../appmodelclass/apistatus';
import { User } from '../appmodelclass/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  msg : String = '';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  register() {
   
    const header = { 'content-Type': 'application/json' }
    this.http.post('http://localhost:8080/register', JSON.stringify(this.user), { headers: header })
      .subscribe(data => {

        let result = <ApiResponse> data;

        if(result.status == ApiStatus.SUCCESS){
          
          window.location.href = 'success';
          
        }else{
           this.msg = result.msg;
        }
      })


  

  }

}
