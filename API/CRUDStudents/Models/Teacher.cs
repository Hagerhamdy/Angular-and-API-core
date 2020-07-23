using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDStudents.Models
{
    public class Teacher
    {
        [Key]
        public int TeacherID { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string TeacherName { get; set; }
    }
}
