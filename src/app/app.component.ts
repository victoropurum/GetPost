import { Component } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name:string = '';
  age:number;
  found:boolean; 

  constructor(private httpClient: HttpClient){ console.log("HERE");}
    onNameKeyUp(event:any){

      
      console.log(event.target.value);
      this.found = false;
    }
  

  

  getProfile(){
    this.httpClient.get(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles/?name=${this.name}`).subscribe(
       (data:any[]) => {
         if(data.length) {
           this.age = data[0].age;
           this.found = true;
         }
       }
    )
  }


  postProfile(){
    this.httpClient.post(`https://my-json-server.typicode.com/techsithgit/json-faker-directory/profiles`,
    {
      name:'Mark',
      age: 73
    }).subscribe(
       (data:any) => {
         console.log(data)
         }
        )
  }


}
