import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  public projectDetails = [
    {
      project_id: 1,
      thumbnail: 'assets/portfolio.png',
      title: 'Portfolio Website',
      description:
        'This website is built with the help of Angular FrameWork using HTML, CSS ,TypeScript and Some Popular Libraries like Angular Material, Aos Animation libraries etc.',
      view: 'https://imgoutamkumar.github.io/portfolio/',
    },
    {
      project_id: 2,
      thumbnail: 'assets/crud_app.png',
      title: 'Crud App',
      description:
        'This is an Employee Management Web Application, Where you can Create, Read, update, and Delete the employee information.This App Uses Fake JSON Server to handle Server side processes',
      view: 'https://github.com/imgoutamkumar/crud-app',
    },
    {
      project_id: 3,
      thumbnail: 'assets/spotify_clone.png',
      title: 'Spotify Clone',
      description: 'This is a Spotify Front-end UI Clone app.',
      view: 'https://github.com/imgoutamkumar/spotify-clone',
    },
  ];
}
