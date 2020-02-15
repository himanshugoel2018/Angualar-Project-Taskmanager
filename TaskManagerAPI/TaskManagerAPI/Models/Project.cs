using Microsoft.EntityFrameworkCore;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskManagerAPI.Models
{
	public class Project
	{
		[Key]
		[DatabaseGenerated(DatabaseGeneratedOption.None)]
		public int projectID { get; set; }
		public string projectName { get; set; }
		public DateTime dateOfStart { get; set; }
		public int teamSize { get; set; }
	}

	public class TaskManagerDbContext : DbContext
	{
		public DbSet<Project> Projects { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			base.OnConfiguring(optionsBuilder);
			optionsBuilder.UseSqlServer("data source=LHTU05CG8335W82\\SQLEXPRESS2014; integrated security=yes; initial catalog = TaskManager");
		}
	}
}
