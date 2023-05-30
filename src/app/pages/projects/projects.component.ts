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
      thumbnail: 'hfgf',
      title: 'Crud App',
      description: 'sdsfs',
    },
    {
      project_id: 2,
      thumbnail: 'hfgf',
      title: 'Rest API',
      description: 'sdsfs',
    },
    {
      project_id: 2,
      thumbnail: 'hfgf',
      title: 'Spotify Clone',
      description: 'sdsfs',
    },
  ];
}
