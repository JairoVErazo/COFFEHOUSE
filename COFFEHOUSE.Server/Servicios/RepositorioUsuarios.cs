using COFFEHOUSE.Server.Model;
using COFFEHOUSE.Server.Model.Dtos;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace COFFEHOUSE.Server.Servicios
{

    public interface IRepositorioUsuarios
    {
        Task<int> CrearUsuario(Usuario usuario);
        Task<Usuario?> GetUsuarioPorNombreUsuario(string nombreUsuario);
    }

    public class RepositorioUsuarios : IRepositorioUsuarios
    {
        private readonly CoffehouseContext _context;

        public RepositorioUsuarios( CoffehouseContext context)
        {
            _context = context;
        }


        public async Task<int> CrearUsuario(Usuario usuario)
        {
            if (usuario == null)
            {
                throw new ArgumentException("Error al recibir los datos del usuario");
            }

            DateOnly hoy = DateOnly.FromDateTime(dateTime: DateTime.Now);

            Usuario usuarioNuevo = new Usuario()
            {
                Nombre = usuario.Nombre,
                Apellido = usuario.Apellido,
                NombreUsuario = usuario.NombreUsuario,
                Contraseña = usuario.Contraseña,
                FechaCreacion = hoy,
                Estado = usuario.Estado,
                IdRol = usuario.IdRol,
            };

            await _context.AddAsync(usuarioNuevo);
            await _context.SaveChangesAsync();

            int idUsuario = usuarioNuevo.IdUsuario; 

            return idUsuario;
        }


        public async Task<Usuario?> GetUsuarioPorNombreUsuario(string nombreUsuario)
        {
            var usuario = await _context.Usuarios.Where(x => x.NombreUsuario == nombreUsuario).SingleOrDefaultAsync();

            return usuario;
        }
    }
}
