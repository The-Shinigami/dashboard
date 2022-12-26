import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav-bar',
  templateUrl: './side-nav-bar.component.html',
  styleUrls: ['./side-nav-bar.component.css']
})
export class SideNavBarComponent implements OnInit {

     links = [
    { title: "Dashboard", url: "", icon: "assets/img/side-navbar-svgs/dashboard.svg", active: true}
    // { title: "Tables", url: "" ,icon:"assets/img/side-navbar-svgs/tables.svg", active: false},
    // { title: "Billing", url: "" ,icon:"assets/img/side-navbar-svgs/billing.svg", active: false},
    // { title: "Virtual Reality", url: "" ,icon:"assets/img/side-navbar-svgs/vr.svg", active: false},
    // { title: "RTL", url: "" ,icon:"assets/img/side-navbar-svgs/rtl.svg", active: false}
     ]
  accountLinks = [
     { title: "Profile", url: "", icon: "assets/img/side-navbar-svgs/profile.svg", active: false}
    // { title: "Sign In", url: "" ,icon:"assets/img/side-navbar-svgs/signin.svg", active: false},
    // { title: "Sign Up", url: "" ,icon:"assets/img/side-navbar-svgs/signup.svg", active: false}
   ]
  
  constructor() { 

  }

  ngOnInit(): void {
  }

}
