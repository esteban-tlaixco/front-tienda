import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SecurityService } from '../services/security.service';
import { LoginRequest } from '../models/security/login.equest';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private securityService: SecurityService,
    private formBuilder: FormBuilder
  ) { }

  formLogin!: FormGroup;

  passwordControl = new FormControl();
  usuarioControl = new FormControl();

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group( {
      password: this.passwordControl,
      usuario: this.usuarioControl,
    });
  }

  login() {
    let request: LoginRequest = {
      username: this.usuarioControl.value,
      password: this.passwordControl.value,
    }

    this.securityService.login(request).subscribe((res) => {
      if(res.success){
        this.securityService.saveToken(res);
        this.router.navigate(['/index']); 
      }
      else {
        Swal.fire({
          text: res.message ?? 'Usuario o contraseña incorrectos',
          icon: 'error'
        })
      }
    });
    
  }
}
