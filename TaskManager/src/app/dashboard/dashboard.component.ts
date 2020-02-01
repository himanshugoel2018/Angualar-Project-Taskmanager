import { Component, OnInit } from '@angular/core';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Designation: string;
  Username: string;
  NoofTeamMembers: number;
  TotalCostOfAllProjects: number;
  PendingTasks: number;
  UpComingProjects: number;
  ProjectCosts: number;

  CurrentExpenditure: number;
  AvaliableFunds: number;

  ngOnInit() {
    this.Designation = "Team Leader";
    this.Username = "John Smith";
    this.NoofTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCosts = 21115254;
    this.CurrentExpenditure = 9785665;
    this.AvaliableFunds = 58569;

  }

}
