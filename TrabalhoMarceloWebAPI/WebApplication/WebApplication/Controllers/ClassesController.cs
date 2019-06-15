﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassesController : ControllerBase
    {
        private readonly WebAPIContext _context;

        public ClassesController(WebAPIContext context)
        {
            _context = context;
        }

        // GET: api/Classes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Classe>>> GetClasse()
        {
            return await _context.Classe.ToListAsync();
        }

        // GET: api/Classes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Classe>> GetClasse(int id)
        {
            var classe = await _context.Classe.FindAsync(id);

            if (classe == null)
            {
                return NotFound();
            }

            return classe;
        }

        // PUT: api/Classes/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClasse(int id, Classe classe)
        {
            if (id != classe.IdClasse)
            {
                return BadRequest();
            }

            _context.Entry(classe).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClasseExists(id))
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

        // POST: api/Classes
        [HttpPost]
        public async Task<ActionResult<Classe>> PostClasse(Classe classe)
        {
            _context.Classe.Add(classe);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ClasseExists(classe.IdClasse))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetClasse", new { id = classe.IdClasse }, classe);
        }

        // DELETE: api/Classes/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Classe>> DeleteClasse(int id)
        {
            var classe = await _context.Classe.FindAsync(id);
            if (classe == null)
            {
                return NotFound();
            }

            _context.Classe.Remove(classe);
            await _context.SaveChangesAsync();

            return classe;
        }

        private bool ClasseExists(int id)
        {
            return _context.Classe.Any(e => e.IdClasse == id);
        }
    }
}
