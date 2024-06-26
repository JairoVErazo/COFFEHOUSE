﻿using System;
using System.Collections.Generic;

namespace COFFEHOUSE.Server.Model;

public partial class PedidoIngrediente
{
    public int IdPedido { get; set; }

    public int Entrada { get; set; }

    public DateOnly FechaPedido { get; set; }

    public decimal PrecioUnitario { get; set; }

    public int IdIngrediente { get; set; }

    public virtual Ingrediente IdIngredienteNavigation { get; set; } = null!;
}
