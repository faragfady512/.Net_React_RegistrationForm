﻿using BueTask.DAL.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BueTask.DAL.Contexts
{
    public class BueTaskDBContext : DbContext
    {
        public BueTaskDBContext(DbContextOptions<BueTaskDBContext> options) : base(options)
        {

        }

        public DbSet<User> User { get; set; }
    }
}
