using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;

namespace TaskManagerAPI.Models
{
	public class Project
	{
		[Key]
		public int ProjectID { get; set; }
		public string ProjectName { get; set; }
		public DateTime DateOfStart { get; set; }
		public int TeamSize { get; set; }
	}

	public class TaskManagerDbContext : DbContext
	{
		public DbSet<Project> Projects { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			base.OnConfiguring(optionsBuilder);
			optionsBuilder.UseSqlServer("data source=localhost; integrated security=yes; initial catalog = TaskManagerDatabase");
		}
	}
}
