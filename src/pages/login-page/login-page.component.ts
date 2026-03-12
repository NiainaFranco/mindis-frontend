import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { LoginInput } from "../../components/login-page/login-input/input.component";
import { FormControl } from "@angular/forms";
import { LoginService } from "../../service/login-service.service";

@Component({
  templateUrl: "./login-page.component.html",
  imports: [LoginInput]
})
export class LoginPage {
  constructor(private loginService: LoginService){

  }
  username = new FormControl("")
  password = new FormControl("")
  login(event: SubmitEvent){
    event.preventDefault()
    this.loginService.login({
      username: this.username.value || "",
      password: this.password.value || ""
    }).subscribe({
      complete: ()=>{
        console.log("done")
      },
      next: ()=>{

      },
      error: ()=>{
        console.log("something happened")
      }
    })
  }
}