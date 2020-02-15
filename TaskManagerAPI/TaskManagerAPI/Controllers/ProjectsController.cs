﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using TaskManagerAPI.Models;

namespace TaskManagerAPI.Controllers
{
	[EnableCors("AllowAll")]
	public class ProjectsController : Controller
	{

		[HttpGet]
		[Route("api/projects")]
		public List<Project> Get()
		{
			TaskManagerDbContext db = new TaskManagerDbContext();
			List<Project> projects = db.Projects.ToList();
			return projects;
		}


		[HttpPost]
		[Route("api/projects")]
		public Project Posts([FromBody] Project project)
		{
			TaskManagerDbContext db = new TaskManagerDbContext();
			if (!string.IsNullOrEmpty(project.projectName))
			{
				db.Projects.Add(project);
				db.SaveChanges();
			}

			return project;
		}

		[HttpPut]
		[Route("api/projects")]
		public Project Put([FromBody] Project project)
		{
			TaskManagerDbContext db = new TaskManagerDbContext();
			Project existingProject = db.Projects.Where(t => t.projectID == project.projectID).FirstOrDefault();
			if (existingProject != null)
			{
				existingProject.projectName = project.projectName;
				existingProject.teamSize = project.teamSize;
				existingProject.dateOfStart = project.dateOfStart;

				db.SaveChanges();
				return existingProject;

			}
			else
			{
				return null;
			}

		}

		[HttpDelete]
		[Route("api/projects")]
		public int Delete(int projectID)
		{
			TaskManagerDbContext db = new TaskManagerDbContext();
			Project existingProject = db.Projects.Where(t => t.projectID == projectID).FirstOrDefault();
			if (existingProject != null)
			{
				db.Projects.Remove(existingProject);
				db.SaveChanges();
				return projectID;

			}
			else
			{
				return -1;
			}
		}
	}
}