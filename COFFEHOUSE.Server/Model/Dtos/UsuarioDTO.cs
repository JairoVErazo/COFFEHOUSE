﻿using System.ComponentModel.DataAnnotations;

namespace COFFEHOUSE.Server.Model.Dtos
{
    public class UsuarioDTO
    {
        [Required]
        public string Nombre { get; set; } = null!;
        [Required]
        public string Apellido { get; set; } = null!;
        [Required]
        public string NombreUsuario { get; set; } = null!;
        [Required]
        public string Contraseña { get; set; } = null!;
        [Required]
        public bool Estado { get; set; }
        [Required]
        public int IdRol { get; set; }
    }
}
