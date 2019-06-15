using System;
using System.Collections.Generic;

namespace WebApplication.Models
{
    public partial class Classe
    {
        public Classe()
        {
            Jogador = new HashSet<Jogador>();
        }

        public int IdClasse { get; set; }
        public string NomeClasse { get; set; }
        public string HabilidadeEspecial { get; set; }

        public virtual ICollection<Jogador> Jogador { get; set; }
    }
}
