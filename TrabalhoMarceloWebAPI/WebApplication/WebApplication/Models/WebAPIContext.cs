using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WebApplication.Models
{
    public partial class WebAPIContext : DbContext
    {
        public WebAPIContext()
        {
        }

        public WebAPIContext(DbContextOptions<WebAPIContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Classe> Classe { get; set; }
        public virtual DbSet<Jogador> Jogador { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseNpgsql("Server=localhost;Database=WebAPI;Port=5432;User Id=postgres;Password=root;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity<Classe>(entity =>
            {
                entity.HasKey(e => e.IdClasse)
                    .HasName("classe_pk");

                entity.ToTable("classe");

                entity.Property(e => e.IdClasse)
                    .HasColumnName("id_classe")
                    .ValueGeneratedNever();

                entity.Property(e => e.HabilidadeEspecial)
                    .IsRequired()
                    .HasColumnName("habilidade_especial")
                    .HasColumnType("character varying(30)");

                entity.Property(e => e.NomeClasse)
                    .IsRequired()
                    .HasColumnName("nome_classe")
                    .HasColumnType("character varying(30)");
            });

            modelBuilder.Entity<Jogador>(entity =>
            {
                entity.HasKey(e => e.IdJogador)
                    .HasName("jogador_pk");

                entity.ToTable("jogador");

                entity.Property(e => e.IdJogador)
                    .HasColumnName("id_jogador")
                    .ValueGeneratedNever();

                entity.Property(e => e.Arma)
                    .IsRequired()
                    .HasColumnName("arma")
                    .HasColumnType("character varying(30)");

                entity.Property(e => e.IdClasse).HasColumnName("id_classe");

                entity.Property(e => e.NomeJogador)
                    .IsRequired()
                    .HasColumnName("nome_jogador")
                    .HasColumnType("character varying(60)");

                entity.Property(e => e.PontosAtk).HasColumnName("pontos_atk");

                entity.Property(e => e.PontosDef).HasColumnName("pontos_def");

                entity.Property(e => e.PontosFur).HasColumnName("pontos_fur");

                entity.HasOne(d => d.IdClasseNavigation)
                    .WithMany(p => p.Jogador)
                    .HasForeignKey(d => d.IdClasse)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("classe_jogador_fk");
            });
        }
    }
}
