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
  editProject: Project = new Project();
  editIndex: number = null;
  deleteProject: Project = new Project();
  deleteIndex: number = null;
  searchBy: string = "Project Name";
  searchText: string = "";



  constructor(private projectService: ProjectsService) { }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(
      (response: Project[]) => {
        this.projects = response;
      },
      (error) => {
        console.log(error);
        alert("Authentication Failed");
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

  onEditClick(event, index: number) {
    this.editProject = this.projects[index];
    this.editIndex = index;
  }

  onUpdateClick() {
    this.projectService.updateProject(this.editProject).subscribe(
      (response: Project) => {
        this.projects[this.editIndex] = response;
        // this.editProject = null;
      }, (error) => { console.log(error); }, () => { }
    )
  }

  onDeleteClick(event, index) {
    this.deleteProject = this.projects[index];
    this.deleteIndex = index;

  }

  onDeleteConfirmationClick() {
    this.projectService.deleteProject(this.deleteProject.projectID).subscribe(
      (response: string) => {
        this.projects.splice(this.deleteIndex, 1);
        // this.deleteProject = null;

      }
      ,
      (error) => { console.log(error); }, () => { }
    )
  }

  onSearchClick() {
    if (this.searchBy == "all") {
      this.searchText = "all"
    }
    this.projectService.searchProject(this.searchBy, this.searchText).subscribe(
      (response: Project[]) => {
        this.projects = response;
      },
      (error) => { console.log(error); },
      () => { }
    );
  }

}
