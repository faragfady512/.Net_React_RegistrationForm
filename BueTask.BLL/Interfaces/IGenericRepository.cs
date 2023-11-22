using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BueTask.BLL.Interfaces
{
    // Interface for a generic repository that can perform CRUD operations on entities.
    public interface IGenericRepository<TEntity> where TEntity : class
    {

        // Get an entity by its unique identifier.
        Task<TEntity> GetByIdAsync(int id);


        // Get all entities of the specified type.
        Task<IEnumerable<TEntity>> GetAllAsync();

        
        // Adds a new entity to the repository.
        Task AddAsync(TEntity entity);


        
        // Updates an existing entity in the repository.
        Task UpdateAsync(TEntity entity);


    }
}
