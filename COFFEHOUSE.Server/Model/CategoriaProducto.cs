﻿using System;
using System.Collections.Generic;

namespace COFFEHOUSE.Server.Model;

public partial class CategoriaProducto
{
    public int IdCategoria { get; set; }

    public string NombreCategoria { get; set; } = null!;

    public virtual ICollection<Producto> Productos { get; set; } = new List<Producto>();
}
