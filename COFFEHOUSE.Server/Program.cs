
using COFFEHOUSE.Server.Model;
using COFFEHOUSE.Server.Servicios;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace COFFEHOUSE.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddControllers();
            builder.Services.AddDbContext<CoffehouseContext>(options => 
            options.UseSqlServer("name=DefaultConnection"));
            builder.Services.AddTransient<IRepositorioUsuarios, RepositorioUsuarios>();
            builder.Services.AddTransient<IUserStore<Usuario>, UserStore>();
            builder.Services.AddIdentityCore<Usuario>();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            app.UseDefaultFiles();
            app.UseStaticFiles();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }
    }
}
