import { Component } from "@angular/core";
import { LoginInput } from "../../components/login-page/login-input/input.component";
import { FormControl } from "@angular/forms";
import { AuthService } from "../../service/auth-service.service";

@Component({
  templateUrl: "./login-page.component.html",
  imports: [LoginInput]
})
export class LoginPage {
  constructor(private authService: AuthService){

  }
  username = new FormControl("")
  password = new FormControl("")
  login(event: SubmitEvent){
    event.preventDefault()
    this.authService.login({
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