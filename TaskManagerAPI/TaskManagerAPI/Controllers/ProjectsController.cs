using System;
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
	}
}