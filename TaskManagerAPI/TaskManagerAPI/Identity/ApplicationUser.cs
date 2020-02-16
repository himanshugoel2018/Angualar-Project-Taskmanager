using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace TaskManagerAPI.Identity
{
    public class ApplicationUser : IdentityUser<String>
    {
        [NotMapped]
        public string Token { get; set; }
    }
}

