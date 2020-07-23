using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDStudents.Models
{
    public class APIDBContext : DbContext
    {
        public APIDBContext(DbContextOptions<APIDBContext> options) : base(options)
        {

        }

        public DbSet<Teacher> teachers { get; set; }
        public DbSet<StudentAccount> studentAccounts { get; set; }
    
    
    }
}
