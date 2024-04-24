using System;
using System.Collections.Generic;

namespace COFFEHOUSE.Server.Model;

public partial class Factura
{
    public int IdFactura { get; set; }

    public int IdOrden { get; set; }

    public DateOnly Fecha { get; set; }

    public decimal Total { get; set; }

    public bool MetodoPago { get; set; }
}
