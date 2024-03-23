import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  // constructor(private router: Router) {}
  // isActive(route: string): boolean {
  //   return this.router.isActive(route, true);
  // }
}
