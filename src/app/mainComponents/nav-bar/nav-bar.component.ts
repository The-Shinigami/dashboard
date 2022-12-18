import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit , AfterViewInit {
  sidenav: any;
  sidenavColor: any;
  constructor() {
    window.addEventListener("resize", this.navbarColorOnResize);
   }

  ngOnInit(): void { }
   ngAfterViewInit(): void {
    this.sidenav = document.getElementById("side-nav-bar");
  this.sidenavColor = document.querySelector("#side-nav-bar aside");
  }

  toggleSideNavBar() {
    this.sidenavColor = document.querySelector("#side-nav-bar aside");
    this.sidenav?.classList.toggle("g-sidenav-pinned");
    if (this.sidenav?.classList.contains("g-sidenav-pinned")) {
      this.sidenavColor?.classList.add("bg-white");
    }else{
      this.sidenavColor?.classList.toggle("bg-white");
    }
  }
 
  
  navbarColorOnResize() {
   this.sidenavColor = document.querySelector("#side-nav-bar aside");
    if (window.innerWidth < 1200) { 
     
    this.sidenav?.classList.add("g-sidenav-pinned");
    this.sidenavColor?.classList.add('bg-white');

   } else {
     
     this.sidenav?.classList.remove("g-sidenav-pinned");
     this.sidenavColor?.classList.remove('bg-white');
     
   }
}

}
