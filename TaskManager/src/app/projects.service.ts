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
    return this.httpclient.get<Project[]>('/api/projects');
  }
}
