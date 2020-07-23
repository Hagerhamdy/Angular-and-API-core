using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace CRUDStudents.Models
{
    public class StudentAccount
    {
        [Key]
        public int StudentAccountID { get; set; }
        [Column(TypeName = "nvarchar(20)")]
        [Required]
        public string StudentNo { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        [Required]
        public string StudentName { get; set; }
        [Required]
        public int TeacherID { get; set; }
        [Required]
        public int Age { get; set; }
    }
}
