using COFFEHOUSE.Server.Model;
using COFFEHOUSE.Server.Model.Dtos;
using COFFEHOUSE.Server.Servicios;
using Microsoft.AspNetCore.Components.Forms.Mapping;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace COFFEHOUSE.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly IRepositorioUsuarios _repositorioUsuarios;
        private readonly UserManager<Usuario> _userManager;
        //private readonly SignInManager<Usuario> _signInManager;

        public UsuarioController(IRepositorioUsuarios repositorioUsuarios,
                                 UserManager<Usuario> userManager)
                                 
        {
            _repositorioUsuarios = repositorioUsuarios;
            _userManager = userManager;
            //_signInManager = signInManager;
        }

        [HttpPost("registro")]

        public async Task<IActionResult> RegistrarUsuario([FromBody] UsuarioDTO usuarioDTO)
        {
            var usuario = new Usuario()
            {
                Nombre = usuarioDTO.Nombre,
                Apellido = usuarioDTO.Apellido,
                NombreUsuario = usuarioDTO.NombreUsuario,
                Contraseña = usuarioDTO.Contraseña,
                Estado = usuarioDTO.Estado,
                IdRol = usuarioDTO.IdRol,
            };

            var resultado = await _userManager.CreateAsync(usuario, password: usuarioDTO.Contraseña);

            if (resultado.Succeeded)
            {
                return Ok(resultado);
            }
               
            return BadRequest();
        }

        



    }
}
