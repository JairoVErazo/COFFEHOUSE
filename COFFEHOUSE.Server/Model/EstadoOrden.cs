using System;
using System.Collections.Generic;

namespace COFFEHOUSE.Server.Model;

public partial class EstadoOrden
{
    public int IdEstado { get; set; }

    public string Estado { get; set; } = null!;

    public virtual ICollection<Orden> Ordens { get; set; } = new List<Orden>();
}
