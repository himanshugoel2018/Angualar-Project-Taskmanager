import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpclient: HttpClient) { }

  getAllProjects(): Observable<Project[]> {

    // var currentUser = { token: "" };
    // var headers = new HttpHeaders;
    // headers = headers.set("Authorization", "Bearer");
    // if (sessionStorage.currentUser != null) {
    //   currentUser = JSON.parse(sessionStorage.currentUser);
    //   headers = headers.set("Authorization", "Bearer " + currentUser.token);
    // }
    return this.httpclient.get<Project[]>('http://localhost:1762/api/projects', { responseType: "json" })
      .pipe(map(
        (data: Project[]) => {
          for (let index = 0; index < data.length; index++) {
            data[index].teamSize = data[index].teamSize * 100;

          }
          return data;
        }
      ));
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.httpclient.post<Project>('http://localhost:1762/api/projects', newProject);
  }

  updateProject(existingProject: Project): Observable<Project> {
    return this.httpclient.put<Project>('http://localhost:1762/api/projects', existingProject);
  }

  deleteProject(projectID: number): Observable<string> {
    return this.httpclient.delete<string>('http://localhost:1762/api/projects?projectID=' + projectID);
  }

  searchProject(searchby: string, searchtext: string): Observable<Project[]> {
    return this.httpclient.get<Project[]>('http://localhost:1762/api/projects/search/' + searchby + '/' + searchtext);
  }
}
