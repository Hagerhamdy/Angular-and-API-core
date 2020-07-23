using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CRUDStudents.Models;

namespace CRUDStudents.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentAccountController : ControllerBase
    {
        private readonly APIDBContext _context;

        public StudentAccountController(APIDBContext context)
        {
            _context = context;
        }

        // GET: api/StudentAccount
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentAccount>>> GetstudentAccounts()
        {
            return await _context.studentAccounts.ToListAsync();
        }

        // GET: api/StudentAccount/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentAccount>> GetStudentAccount(int id)
        {
            var studentAccount = await _context.studentAccounts.FindAsync(id);

            if (studentAccount == null)
            {
                return NotFound();
            }

            return studentAccount;
        }

        // PUT: api/StudentAccount/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentAccount(int id,[FromForm] StudentAccount studentAccount)
        {
            if (id != studentAccount.StudentAccountID)
            {
                return BadRequest();
            }

            _context.Entry(studentAccount).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentAccountExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/StudentAccount
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<StudentAccount>> PostStudentAccount([FromForm]StudentAccount studentAccount)
        {
            _context.studentAccounts.Add(studentAccount);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudentAccount", new { id = studentAccount.StudentAccountID }, studentAccount);
        }

        // DELETE: api/StudentAccount/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<StudentAccount>> DeleteStudentAccount(int id)
        {
            var studentAccount = await _context.studentAccounts.FindAsync(id);
            if (studentAccount == null)
            {
                return NotFound();
            }

            _context.studentAccounts.Remove(studentAccount);
            await _context.SaveChangesAsync();

            return studentAccount;
        }

        private bool StudentAccountExists(int id)
        {
            return _context.studentAccounts.Any(e => e.StudentAccountID == id);
        }
    }
}
