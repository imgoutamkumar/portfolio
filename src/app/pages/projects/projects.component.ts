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
      project_img:
        'https://drive.google.com/file/d/1zsutuxsb9CUqzI-AvhUy-R5KGpj-0JZe/view?usp=share_link',
      thumbnail: 'hfgf',
      title: 'Crud App',
      description: 'sdsfs',
    },
    {
      project_id: 2,
      project_img:
        'https://drive.google.com/file/d/1zsutuxsb9CUqzI-AvhUy-R5KGpj-0JZe/view?usp=share_link',
      thumbnail: 'hfgf',
      title: 'Rest API',
      description: 'sdsfs',
    },
    {
      project_id: 3,
      project_img:
        'https://drive.google.com/file/d/1zsutuxsb9CUqzI-AvhUy-R5KGpj-0JZe/view?usp=share_link',
      thumbnail: 'hfgf',
      title: 'Spotify Clone',
      description: 'sdsfs',
    },
  ];
}
