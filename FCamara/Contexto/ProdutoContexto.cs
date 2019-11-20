
using FCamara.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace FCamara.Contexto
{
    public class ProdutoContexto : DbContext
    {
        public ProdutoContexto()
            :base("FCamara")
        {

        }
        public DbSet<Produto> Produtos { get; set; }


    }
}