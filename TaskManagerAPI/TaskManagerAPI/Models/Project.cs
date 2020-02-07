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
			optionsBuilder.UseSqlServer("data source=LHTU05CG8335W82\\SQLEXPRESS2014; integrated security=yes; initial catalog = TaskManager");
		}
	}
}
