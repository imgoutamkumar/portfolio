import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css'],
})
export class TopNavBarComponent {
  onNavigateToAbout() {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
  onNavigateToOurEdu() {
    document.getElementById('edu')?.scrollIntoView({ behavior: 'smooth' });
  }
  onNavigateToProjects() {
    document.getElementById('project')?.scrollIntoView({ behavior: 'smooth' });
  }
  onNavigateToHome() {
    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
  }
}
