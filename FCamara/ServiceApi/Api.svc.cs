using System;
using System.Collections.Generic;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.Text;
using FCamara.Contexto;
using FCamara.Models;

namespace FCamara.ServiceApi
{
    public class Api : IApi
    {
        ProdutoContexto dbProduto = new ProdutoContexto();

        public void DeletarProduto(int id)
        {
            try
            {
                var p = dbProduto.Produtos.Find(id);
                dbProduto.Produtos.Remove(p);
                dbProduto.SaveChanges();
            }
            catch
            {

            }

        }

        public void InserirProduto(Produto _produto)
        {
            try
            {
                dbProduto.Produtos.AddOrUpdate(_produto);
                dbProduto.SaveChanges();
            }
            catch
            {

            }

        }

        public List<Produto> ListaProduto()
        {
            try
            {
                return dbProduto.Produtos.ToList();
            }
            catch
            {
                return new List<Produto>();
            }

        }

        public Produto BuscarProduto(int id)
        {
            if (dbProduto.Produtos.Find(id) != null)
            {
                return dbProduto.Produtos.Find(id);
            }
            else
            {
                return new Produto();

            }
        }
    }
}
