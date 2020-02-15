import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/projects.service';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Project[];
  newProject: Project = new Project();

  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
      }
    );
  }

  onSaveClick() {
    this.projectService.insertProject(this.newProject).subscribe(
      (response) => {
        this.projects.push(response);
      },
      (error) => { console.log(error); },
      () => {
        this.newProject.projectID = null;
        this.newProject.projectName = null;
        this.newProject.dateOfStart = null;
        this.newProject.teamSize = null;
      }
    );

  }

}
