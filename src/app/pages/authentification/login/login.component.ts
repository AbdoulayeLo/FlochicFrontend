import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {LoginService} from "../../../services/login.service";
import {Router, RouterLink} from "@angular/router";
import {NgClass, NgIf} from "@angular/common";
// @ts-ignore
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgIf,
    RouterLink
  ],
  templateUrl:'./login.component.html',
  // styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{


  verifForm=false;
  message:string='';
  email:string="";
  password:string="";

  loginForm= this.formbuilder.group({
    email:[''],
    password:[''],
  });
  constructor(
    private  loginService: LoginService,
    private formbuilder: FormBuilder,
    private router:Router
  ) {
  }
ngOnInit():void {
}
login(){
    this.verifForm=true;
  this.loginService.getLogin(this.loginForm.value).subscribe(
    response => {
      if (response.status == 200) {
        localStorage.setItem('token', response.token);
        this.router.navigate(['/produit']);
      } else {
        this.message = "Email ou mot de passe incorrect";
      }
    },
    error => {
      // Gestion des erreurs côté serveur ou réseau
      this.message = "Une erreur s'est produite. Veuillez réessayer plus tard.";
      console.error(error);
    }
  );

}
  // login(){
  //   this.verifForm=true;
  //   this.loginService.getLogin(this.loginForm.value).subscribe(
  //     response=>{
  //       // console.log(this.loginForm.value)
  //       if(response.status==200){
  //         localStorage.setItem('token',response.token);
  //         this.router.navigate(['/produit']);
  //         // console.log(response)
  //       }else {
  //         this.message="Email ou mot de passe incorrect";
  //       }
  //     });
  // }
}
