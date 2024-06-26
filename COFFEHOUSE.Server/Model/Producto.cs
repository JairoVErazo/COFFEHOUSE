﻿using System;
using System.Collections.Generic;

namespace COFFEHOUSE.Server.Model;

public partial class Producto
{
    public int IdProducto { get; set; }

    public int IdCategoria { get; set; }

    public string NombreProducto { get; set; } = null!;

    public bool DeTemporada { get; set; }

    public bool Disponible { get; set; }

    public string? Imagen { get; set; }

    public string Descripcion { get; set; } = null!;

    public virtual CategoriaProducto IdCategoriaNavigation { get; set; } = null!;

    public virtual ICollection<Receta> Receta { get; set; } = new List<Receta>();
}
