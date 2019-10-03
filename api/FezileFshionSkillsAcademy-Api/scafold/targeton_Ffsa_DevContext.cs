using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace FezileFshionSkillsAcademy-Api.scafold
{
    public partial class targeton_Ffsa_DevContext : DbContext
    {
        public targeton_Ffsa_DevContext()
        {
        }

        public targeton_Ffsa_DevContext(DbContextOptions<targeton_Ffsa_DevContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TertiaryStudyRecord> TertiaryStudyRecord { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseMySQL("server=41.185.8.134;userid=targeton_root_Dev;password=WebDev@2019;database=targeton_Ffsa_Dev;SSL Mode=None;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TertiaryStudyRecord>(entity =>
            {
                entity.ToTable("TertiaryStudyRecord", "targeton_Ffsa_Dev");

                entity.HasIndex(e => e.TertiaryYear1RecordId)
                    .HasName("FK_TertiaryYearRecord_TertiaryYear1Record");

                entity.HasIndex(e => e.TertiaryYear2RecordId)
                    .HasName("FK_TertiaryYearRecord_TertiaryYear2Record");

                entity.HasIndex(e => e.TertiaryYear3RecordId)
                    .HasName("FK_TertiaryYearRecord_TertiaryYear3Record");

                entity.Property(e => e.Id)
                    .HasColumnName("ID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.TertiaryYear1RecordId)
                    .HasColumnName("TertiaryYear1RecordID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.TertiaryYear2RecordId)
                    .HasColumnName("TertiaryYear2RecordID")
                    .HasColumnType("int(11)");

                entity.Property(e => e.TertiaryYear3RecordId)
                    .HasColumnName("TertiaryYear3RecordID")
                    .HasColumnType("int(11)");
            });
        }
    }
}
