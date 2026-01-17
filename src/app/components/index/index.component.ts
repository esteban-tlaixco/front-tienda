import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isadmin: boolean = false;
  constructor() { }

  ngOnInit(): void {
    let rol = sessionStorage.getItem("s-rol-sys");
    if(rol && rol === "CLIENTE") {
      this.isadmin = false
    }
    else {
      this.isadmin = true;
    }
  }

}
