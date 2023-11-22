using BueTask.BLL.Interfaces;
using BueTask.DAL.Contexts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace BueTask.BLL.Repositories
{
    // Generic repository implementation for CRUD operations on entities.
    public class GenericRepository<TEntity> : IGenericRepository<TEntity> where TEntity : class
        {
            private readonly BueTaskDBContext _context;
            private readonly DbSet<TEntity> _dbSet;

            public GenericRepository(BueTaskDBContext context)
            {
                _context = context;
                _dbSet = _context.Set<TEntity>();
            }

        // Retrieves an entity by its unique identifier asynchronously.
        public async Task<TEntity> GetByIdAsync(int id)
        {
            return await _dbSet.FindAsync(id);
        }

        // Retrieves all entities of the specified type asynchronously.
        public async Task<IEnumerable<TEntity>> GetAllAsync()
        {
            return await _dbSet.AsNoTracking().ToListAsync();
        }

        // Adds a new entity to the repository asynchronously and saves changes to the database.
        public async Task AddAsync(TEntity entity)
        {
            _dbSet.Add(entity);
            await _context.SaveChangesAsync();
        }

        // Updates an entity in the repository asynchronously.
        public async Task UpdateAsync(TEntity entity)
        {
            _dbSet.Attach(entity);
            _context.Entry(entity).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }


    }
 }

