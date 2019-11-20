using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace FCamara.Models
{
    [Table("Produto")]
    public class Produto
    {
        [Key]
        public int Id { get; set; }
        public string Descricao { get; set; }
        public string Codigo { get; set; }

    }
}