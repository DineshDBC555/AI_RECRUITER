import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-style-one',
  templateUrl: './navbar-style-one.component.html',
  styleUrls: ['./navbar-style-one.component.scss']
})
export class NavbarStyleOneComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
logout(){
  localStorage.removeItem("Usertype");
   // this.router.navigate(['/login']);
}
}
