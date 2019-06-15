using System;
using System.Collections.Generic;

namespace WebApplication.Models
{
    public partial class Jogador
    {
        public int IdJogador { get; set; }
        public string NomeJogador { get; set; }
        public int PontosAtk { get; set; }
        public int PontosDef { get; set; }
        public int PontosFur { get; set; }
        public string Arma { get; set; }
        public int IdClasse { get; set; }

        public virtual Classe IdClasseNavigation { get; set; }
    }
}
