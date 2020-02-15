import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpclient: HttpClient) { }

  getAllProjects(): Observable<Project[]> {
    // return this.httpclient.get<Project[]>('/api/projects');
    return this.httpclient.get<Project[]>('http://localhost:1762/api/projects');
  }

  insertProject(newProject: Project): Observable<Project> {
    return this.httpclient.post<Project>('http://localhost:1762/api/projects', newProject);
  }

  updateProject(existingProject: Project): Observable<Project> {
    return this.httpclient.put<Project>('http://localhost:1762/api/projects', existingProject);
  }
}
