/**
 * ═══════════════════════════════════════════════════════
 * M SEARCH — Buscador de funciones Lenguaje M (Power Query)
 * Power BI Guide · 2026
 * ═══════════════════════════════════════════════════════
 *
 * Estructura idéntica a dax-search.js.
 * Reutiliza los estilos de assets/css/dax-search.css.
 * URLs relativas al nivel topics/ (ej: "lenguaje-m/tabla.html#addcolumn")
 */

// ─────────────────────────────────────────────────────
// PARTE A: Índice completo de funciones M
// ─────────────────────────────────────────────────────

const M_FUNCTIONS = [

  // ─── TABLA → lenguaje-m/tabla.html ───
  { name: "Table.AddColumn",           url: "lenguaje-m/tabla.html#addcolumn",       category: "Tabla", categoryIcon: "📊", description: "Añade una nueva columna calculada a una tabla",                              level: "intermedio" },
  { name: "Table.TransformColumns",    url: "lenguaje-m/tabla.html#transformcolumns",category: "Tabla", categoryIcon: "📊", description: "Transforma valores de columnas existentes con una función",                   level: "intermedio" },
  { name: "Table.SelectRows",          url: "lenguaje-m/tabla.html#selectrows",      category: "Tabla", categoryIcon: "📊", description: "Filtra filas de una tabla según una condición booleana",                     level: "intermedio" },
  { name: "Table.SelectColumns",       url: "lenguaje-m/tabla.html#selectrows",      category: "Tabla", categoryIcon: "📊", description: "Selecciona solo las columnas especificadas",                                 level: "principiante" },
  { name: "Table.RemoveColumns",       url: "lenguaje-m/tabla.html#selectrows",      category: "Tabla", categoryIcon: "📊", description: "Elimina una o más columnas de una tabla",                                    level: "principiante" },
  { name: "Table.RenameColumns",       url: "lenguaje-m/tabla.html#selectrows",      category: "Tabla", categoryIcon: "📊", description: "Renombra columnas de una tabla",                                             level: "principiante" },
  { name: "Table.TransformColumnTypes",url: "lenguaje-m/tabla.html#transformcolumns",category: "Tabla", categoryIcon: "📊", description: "Cambia los tipos de datos de columnas",                                      level: "principiante" },
  { name: "Table.Group",               url: "lenguaje-m/tabla.html#group",           category: "Tabla", categoryIcon: "📊", description: "Agrupa filas y aplica operaciones de agregación",                            level: "avanzado" },
  { name: "Table.NestedJoin",          url: "lenguaje-m/tabla.html#join",            category: "Tabla", categoryIcon: "📊", description: "Une dos tablas y anida el resultado en una nueva columna",                   level: "avanzado" },
  { name: "Table.Join",                url: "lenguaje-m/tabla.html#join",            category: "Tabla", categoryIcon: "📊", description: "Une dos tablas basándose en columnas clave",                                  level: "avanzado" },
  { name: "Table.ExpandTableColumn",   url: "lenguaje-m/tabla.html#join",            category: "Tabla", categoryIcon: "📊", description: "Expande columnas de una tabla anidada dentro de otra tabla",                 level: "avanzado" },
  { name: "Table.Combine",             url: "lenguaje-m/tabla.html#combinewith",     category: "Tabla", categoryIcon: "📊", description: "Combina (apila) una lista de tablas en una sola tabla",                      level: "intermedio" },
  { name: "Table.Pivot",               url: "lenguaje-m/tabla.html#pivot",           category: "Tabla", categoryIcon: "📊", description: "Convierte valores de una columna en nuevas columnas (pivotear)",             level: "avanzado" },
  { name: "Table.Unpivot",             url: "lenguaje-m/tabla.html#unpivot",         category: "Tabla", categoryIcon: "📊", description: "Convierte columnas en filas clave-valor (anular dinamización)",              level: "intermedio" },
  { name: "Table.UnpivotOtherColumns", url: "lenguaje-m/tabla.html#unpivot",         category: "Tabla", categoryIcon: "📊", description: "Anula la dinamización de todas las columnas excepto las especificadas",      level: "intermedio" },
  { name: "Table.Distinct",            url: "lenguaje-m/tabla.html#distinct",        category: "Tabla", categoryIcon: "📊", description: "Elimina filas duplicadas de una tabla",                                      level: "principiante" },
  { name: "Table.Sort",                url: "lenguaje-m/tabla.html#sort",            category: "Tabla", categoryIcon: "📊", description: "Ordena las filas de una tabla por una o más columnas",                       level: "principiante" },
  { name: "Table.Buffer",              url: "lenguaje-m/tabla.html#distinct",        category: "Tabla", categoryIcon: "📊", description: "Almacena la tabla en memoria para optimizar el rendimiento",                 level: "avanzado" },
  { name: "Table.PromoteHeaders",      url: "lenguaje-m/tabla.html#addcolumn",       category: "Tabla", categoryIcon: "📊", description: "Convierte la primera fila en encabezados de columna",                        level: "principiante" },

  // ─── LISTA → lenguaje-m/lista.html ───
  { name: "List.Sum",         url: "lenguaje-m/lista.html#sum",        category: "Lista", categoryIcon: "📝", description: "Suma todos los valores numéricos de una lista",                                            level: "principiante" },
  { name: "List.Average",     url: "lenguaje-m/lista.html#average",    category: "Lista", categoryIcon: "📝", description: "Calcula el promedio de los valores de una lista",                                          level: "principiante" },
  { name: "List.Count",       url: "lenguaje-m/lista.html#count",      category: "Lista", categoryIcon: "📝", description: "Cuenta el número de elementos de una lista",                                               level: "principiante" },
  { name: "List.Min",         url: "lenguaje-m/lista.html#min-max",    category: "Lista", categoryIcon: "📝", description: "Devuelve el valor mínimo de una lista",                                                    level: "principiante" },
  { name: "List.Max",         url: "lenguaje-m/lista.html#min-max",    category: "Lista", categoryIcon: "📝", description: "Devuelve el valor máximo de una lista",                                                    level: "principiante" },
  { name: "List.Distinct",    url: "lenguaje-m/lista.html#distinct",   category: "Lista", categoryIcon: "📝", description: "Devuelve los valores únicos de una lista eliminando duplicados",                           level: "principiante" },
  { name: "List.Contains",    url: "lenguaje-m/lista.html#contains",   category: "Lista", categoryIcon: "📝", description: "Devuelve true si la lista contiene el valor especificado",                                 level: "principiante" },
  { name: "List.First",       url: "lenguaje-m/lista.html#first-last", category: "Lista", categoryIcon: "📝", description: "Devuelve el primer elemento de una lista",                                                 level: "principiante" },
  { name: "List.Last",        url: "lenguaje-m/lista.html#first-last", category: "Lista", categoryIcon: "📝", description: "Devuelve el último elemento de una lista",                                                 level: "principiante" },
  { name: "List.Select",      url: "lenguaje-m/lista.html#select",     category: "Lista", categoryIcon: "📝", description: "Filtra elementos de una lista según una condición",                                        level: "intermedio" },
  { name: "List.Transform",   url: "lenguaje-m/lista.html#transform",  category: "Lista", categoryIcon: "📝", description: "Aplica una función a cada elemento de la lista",                                           level: "intermedio" },
  { name: "List.Sort",        url: "lenguaje-m/lista.html#sort",       category: "Lista", categoryIcon: "📝", description: "Ordena los elementos de una lista",                                                        level: "principiante" },
  { name: "List.Combine",     url: "lenguaje-m/lista.html#combine",    category: "Lista", categoryIcon: "📝", description: "Une varias listas en una sola",                                                            level: "intermedio" },
  { name: "List.Generate",    url: "lenguaje-m/lista.html#generate",   category: "Lista", categoryIcon: "📝", description: "Genera una lista dinámicamente con un bucle iterativo",                                    level: "avanzado" },
  { name: "List.Accumulate",  url: "lenguaje-m/lista.html#accumulate", category: "Lista", categoryIcon: "📝", description: "Acumula un valor iterando sobre la lista — fold funcional",                               level: "avanzado" },
  { name: "List.Dates",       url: "lenguaje-m/lista.html#generate",   category: "Lista", categoryIcon: "📝", description: "Genera una lista de fechas a partir de una fecha inicial",                                level: "intermedio" },
  { name: "List.Numbers",     url: "lenguaje-m/lista.html#generate",   category: "Lista", categoryIcon: "📝", description: "Genera una lista de números en un rango dado",                                             level: "principiante" },
  { name: "List.RemoveNulls", url: "lenguaje-m/lista.html#distinct",   category: "Lista", categoryIcon: "📝", description: "Elimina los valores null de una lista",                                                    level: "principiante" },
  { name: "List.Union",       url: "lenguaje-m/lista.html#combine",    category: "Lista", categoryIcon: "📝", description: "Devuelve la unión de varias listas sin duplicados",                                        level: "intermedio" },
  { name: "List.Intersect",   url: "lenguaje-m/lista.html#distinct",   category: "Lista", categoryIcon: "📝", description: "Devuelve los elementos comunes a todas las listas",                                        level: "intermedio" },
  { name: "List.Single",      url: "lenguaje-m/lista.html#first-last", category: "Lista", categoryIcon: "📝", description: "Devuelve el único elemento de la lista — error si hay más de uno",                        level: "intermedio" },

  // ─── TEXTO → lenguaje-m/texto.html ───
  { name: "Text.Upper",               url: "lenguaje-m/texto.html#upper",            category: "Texto", categoryIcon: "🔤", description: "Convierte todo el texto a mayúsculas",                                       level: "principiante" },
  { name: "Text.Lower",               url: "lenguaje-m/texto.html#lower",            category: "Texto", categoryIcon: "🔤", description: "Convierte todo el texto a minúsculas",                                       level: "principiante" },
  { name: "Text.Proper",              url: "lenguaje-m/texto.html#proper",           category: "Texto", categoryIcon: "🔤", description: "Convierte a formato de título (primera letra de cada palabra en mayúscula)",  level: "principiante" },
  { name: "Text.Length",              url: "lenguaje-m/texto.html#length-fn",        category: "Texto", categoryIcon: "🔤", description: "Devuelve el número de caracteres de una cadena de texto",                    level: "principiante" },
  { name: "Text.Trim",                url: "lenguaje-m/texto.html#trim",             category: "Texto", categoryIcon: "🔤", description: "Elimina espacios al inicio y al final del texto",                           level: "principiante" },
  { name: "Text.Clean",               url: "lenguaje-m/texto.html#clean",            category: "Texto", categoryIcon: "🔤", description: "Elimina caracteres no imprimibles de un texto",                             level: "principiante" },
  { name: "Text.Contains",            url: "lenguaje-m/texto.html#contains-fn",      category: "Texto", categoryIcon: "🔤", description: "Devuelve true si el texto contiene la subcadena especificada",               level: "principiante" },
  { name: "Text.StartsWith",          url: "lenguaje-m/texto.html#startswith",       category: "Texto", categoryIcon: "🔤", description: "Devuelve true si el texto empieza por el prefijo dado",                      level: "principiante" },
  { name: "Text.EndsWith",            url: "lenguaje-m/texto.html#startswith",       category: "Texto", categoryIcon: "🔤", description: "Devuelve true si el texto termina con el sufijo dado",                       level: "principiante" },
  { name: "Text.PositionOf",          url: "lenguaje-m/texto.html#positionof",       category: "Texto", categoryIcon: "🔤", description: "Devuelve la posición de la primera ocurrencia de una subcadena",             level: "intermedio" },
  { name: "Text.Replace",             url: "lenguaje-m/texto.html#replace-fn",       category: "Texto", categoryIcon: "🔤", description: "Reemplaza todas las ocurrencias de un texto por otro",                       level: "principiante" },
  { name: "Text.Remove",              url: "lenguaje-m/texto.html#removematching",   category: "Texto", categoryIcon: "🔤", description: "Elimina todos los caracteres que coinciden con la lista dada",                level: "intermedio" },
  { name: "Text.Select",              url: "lenguaje-m/texto.html#removematching",   category: "Texto", categoryIcon: "🔤", description: "Conserva solo los caracteres que coinciden con la lista dada",                level: "intermedio" },
  { name: "Text.Split",               url: "lenguaje-m/texto.html#split-fn",         category: "Texto", categoryIcon: "🔤", description: "Divide un texto en una lista usando un separador",                           level: "intermedio" },
  { name: "Text.Combine",             url: "lenguaje-m/texto.html#combine",          category: "Texto", categoryIcon: "🔤", description: "Une una lista de textos con un separador",                                   level: "intermedio" },
  { name: "Text.Start",               url: "lenguaje-m/texto.html#start",            category: "Texto", categoryIcon: "🔤", description: "Extrae los N primeros caracteres de un texto",                               level: "principiante" },
  { name: "Text.End",                 url: "lenguaje-m/texto.html#start",            category: "Texto", categoryIcon: "🔤", description: "Extrae los N últimos caracteres de un texto",                                level: "principiante" },
  { name: "Text.Middle",              url: "lenguaje-m/texto.html#middle",           category: "Texto", categoryIcon: "🔤", description: "Extrae caracteres desde una posición con longitud opcional",                  level: "principiante" },
  { name: "Text.BeforeDelimiter",     url: "lenguaje-m/texto.html#beforedelimiter",  category: "Texto", categoryIcon: "🔤", description: "Extrae el texto anterior a un delimitador",                                  level: "intermedio" },
  { name: "Text.AfterDelimiter",      url: "lenguaje-m/texto.html#beforedelimiter",  category: "Texto", categoryIcon: "🔤", description: "Extrae el texto posterior a un delimitador",                                 level: "intermedio" },
  { name: "Text.BetweenDelimiters",   url: "lenguaje-m/texto.html#betweendelimiters",category: "Texto", categoryIcon: "🔤", description: "Extrae el texto entre dos delimitadores",                                    level: "intermedio" },
  { name: "Text.PadStart",            url: "lenguaje-m/texto.html#padstart",         category: "Texto", categoryIcon: "🔤", description: "Rellena el texto por la izquierda hasta alcanzar la longitud indicada",       level: "intermedio" },
  { name: "Text.PadEnd",              url: "lenguaje-m/texto.html#padstart",         category: "Texto", categoryIcon: "🔤", description: "Rellena el texto por la derecha hasta alcanzar la longitud indicada",         level: "intermedio" },
  { name: "Text.From",                url: "lenguaje-m/texto.html#from",             category: "Texto", categoryIcon: "🔤", description: "Convierte cualquier valor a texto",                                           level: "principiante" },
  { name: "Text.Format",              url: "lenguaje-m/texto.html#format-fn",        category: "Texto", categoryIcon: "🔤", description: "Formatea texto con plantilla y valores interpolados",                         level: "intermedio" },
  { name: "Number.FromText",          url: "lenguaje-m/texto.html#tonumber",         category: "Texto", categoryIcon: "🔤", description: "Convierte texto a número interpretando el formato",                           level: "principiante" },

  // ─── NÚMERO → lenguaje-m/numero.html ───
  { name: "Number.Round",          url: "lenguaje-m/numero.html#round",           category: "Número", categoryIcon: "🔢", description: "Redondea un número al número de decimales indicado",                           level: "principiante" },
  { name: "Number.RoundDown",      url: "lenguaje-m/numero.html#rounddown",       category: "Número", categoryIcon: "🔢", description: "Redondea siempre hacia abajo (equivale a FLOOR)",                              level: "principiante" },
  { name: "Number.RoundUp",        url: "lenguaje-m/numero.html#rounddown",       category: "Número", categoryIcon: "🔢", description: "Redondea siempre hacia arriba (equivale a CEILING)",                           level: "principiante" },
  { name: "Number.IntegerDivide",  url: "lenguaje-m/numero.html#roundtowardszero",category: "Número", categoryIcon: "🔢", description: "División entera, descarta el resto",                                            level: "principiante" },
  { name: "Number.Mod",            url: "lenguaje-m/numero.html#roundtowardszero",category: "Número", categoryIcon: "🔢", description: "Devuelve el resto de dividir dos números",                                      level: "principiante" },
  { name: "Number.Abs",            url: "lenguaje-m/numero.html#abs",             category: "Número", categoryIcon: "🔢", description: "Devuelve el valor absoluto (sin signo) de un número",                          level: "principiante" },
  { name: "Number.Power",          url: "lenguaje-m/numero.html#power",           category: "Número", categoryIcon: "🔢", description: "Eleva un número a una potencia",                                                level: "principiante" },
  { name: "Number.Sqrt",           url: "lenguaje-m/numero.html#power",           category: "Número", categoryIcon: "🔢", description: "Raíz cuadrada de un número",                                                    level: "principiante" },
  { name: "Number.Log",            url: "lenguaje-m/numero.html#log",             category: "Número", categoryIcon: "🔢", description: "Logaritmo de un número en la base indicada",                                    level: "intermedio" },
  { name: "Number.Log10",          url: "lenguaje-m/numero.html#log",             category: "Número", categoryIcon: "🔢", description: "Logaritmo en base 10 de un número",                                             level: "intermedio" },
  { name: "Number.Exp",            url: "lenguaje-m/numero.html#log",             category: "Número", categoryIcon: "🔢", description: "Número e elevado a la potencia dada (exponencial)",                             level: "intermedio" },
  { name: "Number.Sin",            url: "lenguaje-m/numero.html#trig",            category: "Número", categoryIcon: "🔢", description: "Seno de un ángulo en radianes",                                                 level: "avanzado" },
  { name: "Number.Cos",            url: "lenguaje-m/numero.html#trig",            category: "Número", categoryIcon: "🔢", description: "Coseno de un ángulo en radianes",                                               level: "avanzado" },
  { name: "Number.Tan",            url: "lenguaje-m/numero.html#trig",            category: "Número", categoryIcon: "🔢", description: "Tangente de un ángulo en radianes",                                             level: "avanzado" },
  { name: "Number.From",           url: "lenguaje-m/numero.html#fromtext",        category: "Número", categoryIcon: "🔢", description: "Convierte un valor de cualquier tipo a número",                                 level: "principiante" },
  { name: "Number.ToText",         url: "lenguaje-m/numero.html#tohex",           category: "Número", categoryIcon: "🔢", description: "Convierte un número a texto con formato opcional",                              level: "principiante" },
  { name: "Number.Random",         url: "lenguaje-m/numero.html#random-fn",       category: "Número", categoryIcon: "🔢", description: "Genera un número aleatorio entre 0 y 1",                                        level: "intermedio" },
  { name: "Number.RandomBetween",  url: "lenguaje-m/numero.html#random-fn",       category: "Número", categoryIcon: "🔢", description: "Genera un número aleatorio entre dos valores dados",                            level: "intermedio" },
  { name: "Number.E",              url: "lenguaje-m/numero.html#constants-fn",    category: "Número", categoryIcon: "🔢", description: "Constante matemática e (2.71828...)",                                           level: "avanzado" },
  { name: "Number.PI",             url: "lenguaje-m/numero.html#constants-fn",    category: "Número", categoryIcon: "🔢", description: "Constante matemática π (3.14159...)",                                           level: "avanzado" },
  { name: "Number.Epsilon",        url: "lenguaje-m/numero.html#constants-fn",    category: "Número", categoryIcon: "🔢", description: "Diferencia mínima entre dos números flotantes distintos",                      level: "avanzado" },

  // ─── FECHA Y HORA → lenguaje-m/fecha-hora.html ───
  { name: "Date.From",             url: "lenguaje-m/fecha-hora.html#date-from",     category: "Fecha y Hora", categoryIcon: "📅", description: "Convierte un valor a tipo Date",                                        level: "principiante" },
  { name: "#date",                 url: "lenguaje-m/fecha-hora.html#date-from",     category: "Fecha y Hora", categoryIcon: "📅", description: "Literal de fecha: crea una fecha con #date(año, mes, día)",             level: "principiante" },
  { name: "DateTime.LocalNow",     url: "lenguaje-m/fecha-hora.html#date-today",   category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve la fecha y hora actuales en la zona horaria local",              level: "principiante" },
  { name: "DateTime.FixedLocalNow",url: "lenguaje-m/fecha-hora.html#date-today",   category: "Fecha y Hora", categoryIcon: "📅", description: "Fecha y hora actuales fijadas en el momento de la evaluación",           level: "intermedio" },
  { name: "Date.Year",             url: "lenguaje-m/fecha-hora.html#date-year",    category: "Fecha y Hora", categoryIcon: "📅", description: "Extrae el año de una fecha",                                              level: "principiante" },
  { name: "Date.Month",            url: "lenguaje-m/fecha-hora.html#date-year",    category: "Fecha y Hora", categoryIcon: "📅", description: "Extrae el número de mes (1-12) de una fecha",                            level: "principiante" },
  { name: "Date.Day",              url: "lenguaje-m/fecha-hora.html#date-year",    category: "Fecha y Hora", categoryIcon: "📅", description: "Extrae el día del mes (1-31) de una fecha",                              level: "principiante" },
  { name: "Date.QuarterOfYear",    url: "lenguaje-m/fecha-hora.html#date-quarter", category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve el trimestre (1-4) de una fecha",                               level: "principiante" },
  { name: "Date.WeekOfYear",       url: "lenguaje-m/fecha-hora.html#date-quarter", category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve el número de semana del año (1-53)",                            level: "principiante" },
  { name: "Date.DayOfWeek",        url: "lenguaje-m/fecha-hora.html#date-quarter", category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve el día de la semana como número (0=lunes por defecto)",          level: "principiante" },
  { name: "Date.DayOfYear",        url: "lenguaje-m/fecha-hora.html#date-quarter", category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve el día del año (1-365)",                                         level: "principiante" },
  { name: "Date.AddDays",          url: "lenguaje-m/fecha-hora.html#date-add",     category: "Fecha y Hora", categoryIcon: "📅", description: "Suma o resta días a una fecha",                                           level: "principiante" },
  { name: "Date.AddMonths",        url: "lenguaje-m/fecha-hora.html#date-add",     category: "Fecha y Hora", categoryIcon: "📅", description: "Suma o resta meses a una fecha",                                          level: "principiante" },
  { name: "Date.AddYears",         url: "lenguaje-m/fecha-hora.html#date-add",     category: "Fecha y Hora", categoryIcon: "📅", description: "Suma o resta años a una fecha",                                           level: "principiante" },
  { name: "Date.StartOfMonth",     url: "lenguaje-m/fecha-hora.html#date-startend",category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve el primer día del mes de una fecha",                            level: "intermedio" },
  { name: "Date.EndOfMonth",       url: "lenguaje-m/fecha-hora.html#date-startend",category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve el último día del mes de una fecha",                            level: "intermedio" },
  { name: "Date.StartOfWeek",      url: "lenguaje-m/fecha-hora.html#date-startend",category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve el primer día de la semana",                                     level: "intermedio" },
  { name: "Date.EndOfWeek",        url: "lenguaje-m/fecha-hora.html#date-startend",category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve el último día de la semana",                                     level: "intermedio" },
  { name: "Date.StartOfYear",      url: "lenguaje-m/fecha-hora.html#date-startend",category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve el primer día del año",                                          level: "intermedio" },
  { name: "Date.EndOfYear",        url: "lenguaje-m/fecha-hora.html#date-startend",category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve el último día del año",                                          level: "intermedio" },
  { name: "DateTime.From",         url: "lenguaje-m/fecha-hora.html#datetime-fn",  category: "Fecha y Hora", categoryIcon: "📅", description: "Convierte un valor a DateTime",                                          level: "principiante" },
  { name: "#datetime",             url: "lenguaje-m/fecha-hora.html#datetime-fn",  category: "Fecha y Hora", categoryIcon: "📅", description: "Literal de fecha-hora: #datetime(año, mes, día, h, m, s)",              level: "principiante" },
  { name: "Time.Hour",             url: "lenguaje-m/fecha-hora.html#time-fn",      category: "Fecha y Hora", categoryIcon: "📅", description: "Extrae la hora (0-23) de un valor de tiempo",                            level: "principiante" },
  { name: "Time.Minute",           url: "lenguaje-m/fecha-hora.html#time-fn",      category: "Fecha y Hora", categoryIcon: "📅", description: "Extrae los minutos (0-59) de un valor de tiempo",                        level: "principiante" },
  { name: "Time.Second",           url: "lenguaje-m/fecha-hora.html#time-fn",      category: "Fecha y Hora", categoryIcon: "📅", description: "Extrae los segundos (0-59) de un valor de tiempo",                       level: "principiante" },
  { name: "Duration.Days",         url: "lenguaje-m/fecha-hora.html#duration-fn",  category: "Fecha y Hora", categoryIcon: "📅", description: "Extrae los días de una duración",                                        level: "intermedio" },
  { name: "Duration.Hours",        url: "lenguaje-m/fecha-hora.html#duration-fn",  category: "Fecha y Hora", categoryIcon: "📅", description: "Extrae las horas de una duración",                                       level: "intermedio" },
  { name: "Duration.Minutes",      url: "lenguaje-m/fecha-hora.html#duration-fn",  category: "Fecha y Hora", categoryIcon: "📅", description: "Extrae los minutos de una duración",                                     level: "intermedio" },
  { name: "Duration.TotalDays",    url: "lenguaje-m/fecha-hora.html#duration-fn",  category: "Fecha y Hora", categoryIcon: "📅", description: "Convierte una duración a número total de días (con decimales)",           level: "intermedio" },
  { name: "Duration.TotalHours",   url: "lenguaje-m/fecha-hora.html#duration-fn",  category: "Fecha y Hora", categoryIcon: "📅", description: "Convierte una duración a número total de horas",                         level: "intermedio" },
  { name: "Date.ToText",           url: "lenguaje-m/fecha-hora.html#date-totext",  category: "Fecha y Hora", categoryIcon: "📅", description: "Convierte una fecha a texto con formato personalizable",                  level: "principiante" },
  { name: "DateTime.ToText",       url: "lenguaje-m/fecha-hora.html#date-totext",  category: "Fecha y Hora", categoryIcon: "📅", description: "Convierte un DateTime a texto con formato personalizable",               level: "principiante" },

  // ─── LÓGICAS → lenguaje-m/logicas.html ───
  { name: "if",              url: "lenguaje-m/logicas.html#if-basic",      category: "Lógicas", categoryIcon: "🎯", description: "Expresión condicional if...then...else",                                              level: "principiante" },
  { name: "else",            url: "lenguaje-m/logicas.html#if-basic",      category: "Lógicas", categoryIcon: "🎯", description: "Rama alternativa de una expresión if/then/else",                                     level: "principiante" },
  { name: "and",             url: "lenguaje-m/logicas.html#and-or-not",    category: "Lógicas", categoryIcon: "🎯", description: "Operador lógico AND — true si ambas condiciones son ciertas",                        level: "principiante" },
  { name: "or",              url: "lenguaje-m/logicas.html#and-or-not",    category: "Lógicas", categoryIcon: "🎯", description: "Operador lógico OR — true si al menos una condición es cierta",                      level: "principiante" },
  { name: "not",             url: "lenguaje-m/logicas.html#and-or-not",    category: "Lógicas", categoryIcon: "🎯", description: "Operador lógico NOT — invierte el valor booleano",                                   level: "principiante" },
  { name: "try",             url: "lenguaje-m/logicas.html#try-basic",     category: "Lógicas", categoryIcon: "🎯", description: "Control de errores: try evalúa y captura errores",                                   level: "intermedio" },
  { name: "otherwise",       url: "lenguaje-m/logicas.html#try-basic",     category: "Lógicas", categoryIcon: "🎯", description: "Valor alternativo cuando try produce un error",                                      level: "intermedio" },
  { name: "error",           url: "lenguaje-m/logicas.html#error-raise",   category: "Lógicas", categoryIcon: "🎯", description: "Lanza un error explícito con mensaje personalizado",                                 level: "intermedio" },
  { name: "null",            url: "lenguaje-m/logicas.html#null-handling", category: "Lógicas", categoryIcon: "🎯", description: "Valor nulo — equivale a BLANK en DAX — manejo con ??",                              level: "principiante" },
  { name: "Logical.From",    url: "lenguaje-m/logicas.html#logical-from",  category: "Lógicas", categoryIcon: "🎯", description: "Convierte un valor a lógico (true/false)",                                           level: "intermedio" },
  { name: "Logical.FromText",url: "lenguaje-m/logicas.html#logical-from",  category: "Lógicas", categoryIcon: "🎯", description: "Convierte texto (\"true\"/\"false\") a valor lógico",                                level: "intermedio" },

  // ─── RECORD → lenguaje-m/record.html ───
  { name: "Record.Field",           url: "lenguaje-m/record.html#record-field",       category: "Record", categoryIcon: "📋", description: "Obtiene el valor de un campo de un registro por nombre",                  level: "intermedio" },
  { name: "Record.HasFields",       url: "lenguaje-m/record.html#record-field",       category: "Record", categoryIcon: "📋", description: "Comprueba si un registro tiene uno o más campos",                         level: "intermedio" },
  { name: "Record.FieldNames",      url: "lenguaje-m/record.html#record-fieldnames",  category: "Record", categoryIcon: "📋", description: "Devuelve una lista con los nombres de campos de un registro",               level: "intermedio" },
  { name: "Record.FieldValues",     url: "lenguaje-m/record.html#record-fieldnames",  category: "Record", categoryIcon: "📋", description: "Devuelve una lista con los valores de un registro",                        level: "intermedio" },
  { name: "Record.FieldCount",      url: "lenguaje-m/record.html#record-fieldnames",  category: "Record", categoryIcon: "📋", description: "Cuenta el número de campos de un registro",                                level: "principiante" },
  { name: "Record.ToList",          url: "lenguaje-m/record.html#record-tolist",      category: "Record", categoryIcon: "📋", description: "Convierte un registro a una lista de valores",                             level: "intermedio" },
  { name: "Record.ToTable",         url: "lenguaje-m/record.html#record-tolist",      category: "Record", categoryIcon: "📋", description: "Convierte un registro a una tabla de dos columnas (nombre, valor)",        level: "intermedio" },
  { name: "Record.AddField",        url: "lenguaje-m/record.html#record-addfields",   category: "Record", categoryIcon: "📋", description: "Añade un campo nuevo a un registro",                                       level: "intermedio" },
  { name: "Record.AddFields",       url: "lenguaje-m/record.html#record-addfields",   category: "Record", categoryIcon: "📋", description: "Añade múltiples campos nuevos a un registro",                              level: "intermedio" },
  { name: "Record.RemoveFields",    url: "lenguaje-m/record.html#record-addfields",   category: "Record", categoryIcon: "📋", description: "Elimina campos de un registro",                                            level: "intermedio" },
  { name: "Record.RenameFields",    url: "lenguaje-m/record.html#record-addfields",   category: "Record", categoryIcon: "📋", description: "Renombra campos de un registro",                                           level: "intermedio" },
  { name: "Record.TransformFields", url: "lenguaje-m/record.html#record-transformfields", category: "Record", categoryIcon: "📋", description: "Aplica transformaciones a campos específicos de un registro",          level: "avanzado" },
  { name: "Record.Combine",         url: "lenguaje-m/record.html#record-combine",     category: "Record", categoryIcon: "📋", description: "Combina varios registros en uno solo",                                     level: "intermedio" },
  { name: "Record.FromList",        url: "lenguaje-m/record.html#record-fromlist",    category: "Record", categoryIcon: "📋", description: "Crea un registro a partir de una lista de valores y una lista de nombres",  level: "avanzado" },
  { name: "Record.FromTable",       url: "lenguaje-m/record.html#record-fromlist",    category: "Record", categoryIcon: "📋", description: "Crea un registro a partir de una tabla de dos columnas",                   level: "avanzado" },

  // ─── TRANSFORMACIÓN → lenguaje-m/transformacion.html ───
  { name: "Combiner.CombineTextByDelimiter",  url: "lenguaje-m/transformacion.html#combiner-combine",     category: "Transformación", categoryIcon: "🔄", description: "Función que combina texto usando un delimitador — úsala en Table.Group",                 level: "avanzado" },
  { name: "Combiner.CombineTextByLengths",    url: "lenguaje-m/transformacion.html#combiner-bylengths",   category: "Transformación", categoryIcon: "🔄", description: "Combina texto concatenando fragmentos de longitudes fijas",                             level: "avanzado" },
  { name: "Combiner.CombineTextByPositions",  url: "lenguaje-m/transformacion.html#combiner-bylengths",   category: "Transformación", categoryIcon: "🔄", description: "Combina texto colocando fragmentos en posiciones absolutas",                            level: "avanzado" },
  { name: "Splitter.SplitTextByDelimiter",    url: "lenguaje-m/transformacion.html#splitter-delimiter",   category: "Transformación", categoryIcon: "🔄", description: "Divide texto por un delimitador — úsala en Table.TransformColumns",                    level: "avanzado" },
  { name: "Splitter.SplitTextByLengths",      url: "lenguaje-m/transformacion.html#splitter-lengths",     category: "Transformación", categoryIcon: "🔄", description: "Divide texto en fragmentos de longitudes fijas",                                          level: "avanzado" },
  { name: "Splitter.SplitTextByPositions",    url: "lenguaje-m/transformacion.html#splitter-lengths",     category: "Transformación", categoryIcon: "🔄", description: "Divide texto en posiciones absolutas especificadas",                                      level: "avanzado" },
  { name: "Comparer.Ordinal",                 url: "lenguaje-m/transformacion.html#comparer-ordinal",     category: "Transformación", categoryIcon: "🔄", description: "Comparador de texto sensible a mayúsculas (ordinal)",                                     level: "avanzado" },
  { name: "Comparer.OrdinalIgnoreCase",       url: "lenguaje-m/transformacion.html#comparer-ordinal",     category: "Transformación", categoryIcon: "🔄", description: "Comparador de texto insensible a mayúsculas",                                              level: "avanzado" },
  { name: "Comparer.FromCulture",             url: "lenguaje-m/transformacion.html#comparer-ordinal",     category: "Transformación", categoryIcon: "🔄", description: "Comparador según la cultura especificada (para idiomas)",                                  level: "avanzado" },
  { name: "Replacer.ReplaceValue",            url: "lenguaje-m/transformacion.html#replacer-replacevalue",category: "Transformación", categoryIcon: "🔄", description: "Reemplaza valores exactos — úsalo en Table.ReplaceValue",                                 level: "avanzado" },
  { name: "Replacer.ReplaceText",             url: "lenguaje-m/transformacion.html#replacer-replacevalue",category: "Transformación", categoryIcon: "🔄", description: "Reemplaza subcadenas de texto — úsalo en Table.ReplaceValue",                             level: "avanzado" },
  { name: "Value.Is",                         url: "lenguaje-m/transformacion.html#value-is",             category: "Transformación", categoryIcon: "🔄", description: "Comprueba si un valor es de un tipo concreto",                                             level: "avanzado" },
  { name: "Value.Type",                       url: "lenguaje-m/transformacion.html#value-is",             category: "Transformación", categoryIcon: "🔄", description: "Devuelve el tipo M de un valor",                                                           level: "avanzado" },
  { name: "Value.As",                         url: "lenguaje-m/transformacion.html#value-is",             category: "Transformación", categoryIcon: "🔄", description: "Convierte un valor a un tipo concreto con validación",                                     level: "avanzado" },
  { name: "Value.Metadata",                   url: "lenguaje-m/transformacion.html#value-replace",        category: "Transformación", categoryIcon: "🔄", description: "Lee los metadatos de un valor M",                                                          level: "avanzado" },
  { name: "Value.ReplaceMetadata",            url: "lenguaje-m/transformacion.html#value-replace",        category: "Transformación", categoryIcon: "🔄", description: "Establece los metadatos de un valor M",                                                   level: "avanzado" },

  // ─── TIPO → lenguaje-m/tipo.html ───
  { name: "type",             url: "lenguaje-m/tipo.html#type-list",         category: "Tipo", categoryIcon: "🏷️", description: "Palabra clave para declarar tipos en M — text, number, date, etc.",                level: "avanzado" },
  { name: "nullable",         url: "lenguaje-m/tipo.html#nullable-type",     category: "Tipo", categoryIcon: "🏷️", description: "Modificador de tipo que permite valores null además del tipo base",                 level: "avanzado" },
  { name: "Type.Is",          url: "lenguaje-m/tipo.html#type-is",           category: "Tipo", categoryIcon: "🏷️", description: "Comprueba si un tipo es compatible con otro tipo",                                 level: "avanzado" },
  { name: "Type.IsNullable",  url: "lenguaje-m/tipo.html#type-is",           category: "Tipo", categoryIcon: "🏷️", description: "Comprueba si un tipo admite null",                                                 level: "avanzado" },
  { name: "Type.NonNullable", url: "lenguaje-m/tipo.html#type-is",           category: "Tipo", categoryIcon: "🏷️", description: "Devuelve la versión no nullable de un tipo",                                       level: "avanzado" },
  { name: "Type.RecordFields",url: "lenguaje-m/tipo.html#type-record",       category: "Tipo", categoryIcon: "🏷️", description: "Devuelve la definición de campos de un tipo record",                               level: "avanzado" },
  { name: "Type.TableRow",    url: "lenguaje-m/tipo.html#type-record",       category: "Tipo", categoryIcon: "🏷️", description: "Devuelve el tipo de fila de un tipo table",                                        level: "avanzado" },
  { name: "Type.Union",       url: "lenguaje-m/tipo.html#type-is",           category: "Tipo", categoryIcon: "🏷️", description: "Crea un tipo unión que acepta varios tipos",                                       level: "avanzado" },

  // ─── CONECTORES → lenguaje-m/conectores.html ───
  { name: "Excel.Workbook",         url: "lenguaje-m/conectores.html#excel",           category: "Conectores", categoryIcon: "🔌", description: "Lee tablas y hojas de un archivo Excel (.xlsx, .xlsb)",              level: "principiante" },
  { name: "Csv.Document",           url: "lenguaje-m/conectores.html#csv",             category: "Conectores", categoryIcon: "🔌", description: "Carga un archivo CSV como tabla — permite configurar delimitador",    level: "principiante" },
  { name: "Json.Document",          url: "lenguaje-m/conectores.html#json",            category: "Conectores", categoryIcon: "🔌", description: "Parsea un documento JSON a una estructura M (record, list, table)",   level: "intermedio" },
  { name: "Web.Contents",           url: "lenguaje-m/conectores.html#web-contents",    category: "Conectores", categoryIcon: "🔌", description: "Descarga contenido de una URL — APIs REST, HTML, archivos",           level: "intermedio" },
  { name: "Sql.Database",           url: "lenguaje-m/conectores.html#sql-database",    category: "Conectores", categoryIcon: "🔌", description: "Conecta a una base de datos SQL Server",                             level: "avanzado" },
  { name: "Sql.Databases",          url: "lenguaje-m/conectores.html#sql-database",    category: "Conectores", categoryIcon: "🔌", description: "Lista todas las bases de datos disponibles en un servidor SQL",       level: "avanzado" },
  { name: "PostgreSQL.Database",    url: "lenguaje-m/conectores.html#other-dbs",       category: "Conectores", categoryIcon: "🔌", description: "Conecta a una base de datos PostgreSQL",                             level: "avanzado" },
  { name: "MySQL.Database",         url: "lenguaje-m/conectores.html#other-dbs",       category: "Conectores", categoryIcon: "🔌", description: "Conecta a una base de datos MySQL",                                  level: "avanzado" },
  { name: "Oracle.Database",        url: "lenguaje-m/conectores.html#other-dbs",       category: "Conectores", categoryIcon: "🔌", description: "Conecta a una base de datos Oracle",                                 level: "avanzado" },
  { name: "Odbc.Query",             url: "lenguaje-m/conectores.html#other-dbs",       category: "Conectores", categoryIcon: "🔌", description: "Ejecuta una consulta sobre cualquier origen ODBC",                   level: "avanzado" },
  { name: "SharePoint.Files",       url: "lenguaje-m/conectores.html#sharepoint-files",category: "Conectores", categoryIcon: "🔌", description: "Lista archivos de una biblioteca de SharePoint",                     level: "intermedio" },
  { name: "SharePoint.Tables",      url: "lenguaje-m/conectores.html#sharepoint-files",category: "Conectores", categoryIcon: "🔌", description: "Lee una lista de SharePoint como tabla",                             level: "intermedio" },
  { name: "Folder.Files",           url: "lenguaje-m/conectores.html#folder-fn",       category: "Conectores", categoryIcon: "🔌", description: "Lista todos los archivos de una carpeta local o de red",             level: "intermedio" },
  { name: "Folder.Contents",        url: "lenguaje-m/conectores.html#folder-fn",       category: "Conectores", categoryIcon: "🔌", description: "Lista archivos y subcarpetas de una carpeta",                        level: "intermedio" },

  // ─── BINARIO → lenguaje-m/binario.html ───
  { name: "Binary.From",              url: "lenguaje-m/binario.html#binary-from",      category: "Binario", categoryIcon: "💾", description: "Convierte un valor a formato binario",                                  level: "avanzado" },
  { name: "#binary",                  url: "lenguaje-m/binario.html#binary-from",      category: "Binario", categoryIcon: "💾", description: "Literal binario — crea un valor binario desde bytes hexadecimales",     level: "avanzado" },
  { name: "Binary.ToText",            url: "lenguaje-m/binario.html#binary-totext",    category: "Binario", categoryIcon: "💾", description: "Convierte binario a texto con la codificación indicada (Base64, hex)",  level: "avanzado" },
  { name: "Binary.Buffer",            url: "lenguaje-m/binario.html#binary-totext",    category: "Binario", categoryIcon: "💾", description: "Almacena un binario en memoria para evitar lecturas repetidas",          level: "avanzado" },
  { name: "Binary.Length",            url: "lenguaje-m/binario.html#binary-length",    category: "Binario", categoryIcon: "💾", description: "Devuelve el tamaño de un valor binario en bytes",                       level: "avanzado" },
  { name: "Binary.Range",             url: "lenguaje-m/binario.html#binary-length",    category: "Binario", categoryIcon: "💾", description: "Extrae un fragmento de un valor binario",                               level: "avanzado" },
  { name: "Binary.InferContentType",  url: "lenguaje-m/binario.html#binary-length",    category: "Binario", categoryIcon: "💾", description: "Detecta el tipo MIME de un valor binario",                              level: "avanzado" },
  { name: "Binary.Combine",           url: "lenguaje-m/binario.html#binary-combine",   category: "Binario", categoryIcon: "💾", description: "Une varios valores binarios en uno solo",                               level: "avanzado" },
  { name: "Binary.Decompress",        url: "lenguaje-m/binario.html#binary-decompress",category: "Binario", categoryIcon: "💾", description: "Descomprime un binario usando GZip, Deflate u otros algoritmos",         level: "avanzado" },
  { name: "Binary.Compress",          url: "lenguaje-m/binario.html#binary-decompress",category: "Binario", categoryIcon: "💾", description: "Comprime un binario con GZip, Deflate u otros algoritmos",               level: "avanzado" },
  { name: "File.Contents",            url: "lenguaje-m/binario.html#file-contents",    category: "Binario", categoryIcon: "💾", description: "Lee el contenido de un archivo local como binario",                     level: "intermedio" },

  // ─── ESPECIALES → lenguaje-m/especiales.html ───
  { name: "#shared",             url: "lenguaje-m/especiales.html#shared-fn",           category: "Especiales", categoryIcon: "⭐", description: "Record global con todas las funciones M disponibles — introspección del entorno",  level: "avanzado" },
  { name: "#table",              url: "lenguaje-m/especiales.html#table-literal",        category: "Especiales", categoryIcon: "⭐", description: "Crea una tabla literal con schema y datos inline",                                   level: "intermedio" },
  { name: "Expression.Evaluate", url: "lenguaje-m/especiales.html#expression-eval",     category: "Especiales", categoryIcon: "⭐", description: "Evalúa una expresión M dada como texto — metaprogramación",                       level: "avanzado" },
  { name: "Expression.Constant", url: "lenguaje-m/especiales.html#expression-constant", category: "Especiales", categoryIcon: "⭐", description: "Convierte un valor primitivo a su representación M como texto",                    level: "avanzado" },
  { name: "Expression.Identifier",url: "lenguaje-m/especiales.html#expression-constant",category: "Especiales", categoryIcon: "⭐", description: "Genera el identificador M correcto para un nombre de campo",                      level: "avanzado" },
  { name: "Character.FromNumber", url: "lenguaje-m/especiales.html#character-fn",       category: "Especiales", categoryIcon: "⭐", description: "Devuelve el carácter Unicode correspondiente a un número",                        level: "intermedio" },
  { name: "Character.ToNumber",   url: "lenguaje-m/especiales.html#character-fn",       category: "Especiales", categoryIcon: "⭐", description: "Devuelve el código Unicode de un carácter",                                       level: "intermedio" },
  { name: "Environment.UserName", url: "lenguaje-m/especiales.html#environment-fn",     category: "Especiales", categoryIcon: "⭐", description: "Devuelve el nombre de usuario del sistema operativo actual",                      level: "avanzado" },
  { name: "Diagnostics.Trace",    url: "lenguaje-m/especiales.html#diagnostics-fn",     category: "Especiales", categoryIcon: "⭐", description: "Traza mensajes de diagnóstico durante la evaluación M",                           level: "avanzado" },
  { name: "Table.View",           url: "lenguaje-m/especiales.html#table-view",         category: "Especiales", categoryIcon: "⭐", description: "Crea una tabla con comportamiento query folding personalizado",                    level: "avanzado" },
  { name: "Json.FromValue",       url: "lenguaje-m/especiales.html#json-from-value",    category: "Especiales", categoryIcon: "⭐", description: "Serializa cualquier valor M a texto JSON",                                        level: "intermedio" }

];

// ─────────────────────────────────────────────────────
// PARTE B: Utilidades compartidas
// ─────────────────────────────────────────────────────

/**
 * Normaliza texto para búsqueda: minúsculas, sin puntos ni espacios
 */
function mNormalizeText(text) {
  return text.toLowerCase().replace(/[.\s#]/g, '');
}

/**
 * Resalta la coincidencia con <mark>
 */
function mHighlightMatch(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

/**
 * Genera el badge de nivel
 */
function mGetLevelBadge(level) {
  const badges = {
    principiante: '<span class="dax-level-badge dax-level-badge--beginner">🟢 Principiante</span>',
    intermedio:   '<span class="dax-level-badge dax-level-badge--intermediate">🟡 Intermedio</span>',
    avanzado:     '<span class="dax-level-badge dax-level-badge--advanced">🔴 Avanzado</span>'
  };
  return badges[level] || '';
}

/**
 * Detecta el contexto de página actual
 * - 'hub'     → topics/lenguaje-m.html
 * - 'subpage' → topics/lenguaje-m/ALGO.html
 * - 'other'   → cualquier otra página
 */
function detectCurrentMPage() {
  const path = window.location.pathname;
  if (path.includes('/lenguaje-m/')) {
    return 'subpage';
  } else if (path.includes('/lenguaje-m.html') || path.includes('lenguaje-m')) {
    return 'hub';
  }
  return 'other';
}

// ─────────────────────────────────────────────────────
// PARTE C: Clase MSearch
// ─────────────────────────────────────────────────────

class MSearch {
  constructor(functions, options = {}) {
    this.functions = functions;
    this.maxResults = options.maxResults || 8;
    this.placeholder = options.placeholder || 'Buscar función M...';
    this.searchTimeout = null;
  }

  /**
   * Busca funciones según el query.
   * Devuelve array de resultados ordenados por relevancia.
   */
  search(query) {
    if (!query || query.trim().length === 0) return [];

    const normalizedQuery = mNormalizeText(query);
    const results = [];

    this.functions.forEach(func => {
      const normalizedName     = mNormalizeText(func.name);
      const normalizedDesc     = mNormalizeText(func.description);
      const normalizedCategory = mNormalizeText(func.category);

      let score = 0;
      let highlightedName = func.name;

      if (normalizedName === normalizedQuery) {
        score = 100;
        highlightedName = `<mark>${func.name}</mark>`;
      } else if (normalizedName.startsWith(normalizedQuery)) {
        score = 80;
        highlightedName = mHighlightMatch(func.name, query);
      } else if (normalizedName.includes(normalizedQuery)) {
        score = 60;
        highlightedName = mHighlightMatch(func.name, query);
      } else if (normalizedDesc.includes(normalizedQuery)) {
        score = 40;
        highlightedName = func.name;
      } else if (normalizedCategory.includes(normalizedQuery)) {
        score = 20;
        highlightedName = func.name;
      }

      if (score > 0) {
        results.push({ ...func, score, highlightedName });
      }
    });

    results.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.name.localeCompare(b.name);
    });

    return results.slice(0, this.maxResults);
  }

  /**
   * Navega a la URL de una función.
   * Ajusta la ruta relativa según la página actual.
   *
   * El índice usa URLs relativas a topics/:
   *   "lenguaje-m/tabla.html#addcolumn"
   *
   * Desde topics/lenguaje-m.html  → úsala tal cual
   * Desde topics/lenguaje-m/*.html → prepend "../"
   */
  navigate(url) {
    const currentPage = detectCurrentMPage();
    let finalUrl = url;

    if (currentPage === 'subpage') {
      finalUrl = `../${url}`;
    }
    // hub o 'other': usar la URL como viene

    window.location.href = finalUrl;
  }

  /**
   * Conecta la lógica de búsqueda a elementos del DOM existentes.
   */
  bindToInput(inputEl, resultsEl, clearBtn) {
    if (!inputEl || !resultsEl) return;

    let activeIndex = -1;
    const self = this;

    // Búsqueda en tiempo real con debounce 150ms
    inputEl.addEventListener('input', function (e) {
      const query = e.target.value.trim();

      if (clearBtn) clearBtn.hidden = query.length === 0;

      clearTimeout(self.searchTimeout);
      self.searchTimeout = setTimeout(() => {
        if (query.length === 0) {
          resultsEl.classList.remove('is-open');
          resultsEl.innerHTML = '';
          inputEl.setAttribute('aria-expanded', 'false');
          return;
        }

        const results = self.search(query);
        activeIndex = -1;
        self.renderResults(resultsEl, results, query);
        inputEl.setAttribute('aria-expanded', results.length > 0 ? 'true' : 'false');
      }, 150);
    });

    // Navegación por teclado
    inputEl.addEventListener('keydown', function (e) {
      const items = resultsEl.querySelectorAll('.dax-search-result-item');

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIndex = Math.min(activeIndex + 1, items.length - 1);
        self.updateActiveItem(items, activeIndex);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIndex = Math.max(activeIndex - 1, -1);
        self.updateActiveItem(items, activeIndex);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (activeIndex >= 0 && items[activeIndex]) {
          items[activeIndex].click();
        } else if (items.length > 0) {
          items[0].click();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        inputEl.value = '';
        resultsEl.classList.remove('is-open');
        resultsEl.innerHTML = '';
        if (clearBtn) clearBtn.hidden = true;
        inputEl.setAttribute('aria-expanded', 'false');
      } else if (e.key === 'Tab') {
        resultsEl.classList.remove('is-open');
        inputEl.setAttribute('aria-expanded', 'false');
      }
    });

    // Botón limpiar
    if (clearBtn) {
      clearBtn.addEventListener('click', function () {
        inputEl.value = '';
        inputEl.focus();
        resultsEl.classList.remove('is-open');
        resultsEl.innerHTML = '';
        clearBtn.hidden = true;
        inputEl.setAttribute('aria-expanded', 'false');
      });
    }

    // Blur: cerrar dropdown (con delay para permitir clicks)
    inputEl.addEventListener('blur', function () {
      setTimeout(() => {
        resultsEl.classList.remove('is-open');
        inputEl.setAttribute('aria-expanded', 'false');
      }, 200);
    });
  }

  /**
   * Renderiza los resultados en el dropdown
   */
  renderResults(resultsEl, results, query) {
    if (results.length === 0) {
      resultsEl.innerHTML = `
        <div class="dax-search-no-results">
          <span class="dax-search-no-results-icon">🔍</span>
          <p>No encontramos "<strong>${this.escapeHtml(query)}</strong>"</p>
          <p class="dax-search-no-results-hint">
            Prueba con el inicio del nombre, ej: "Text" en vez de "Texto completo"
          </p>
        </div>
      `;
      resultsEl.classList.add('is-open');
      return;
    }

    const itemsHtml = results.map((result, index) => `
      <div class="dax-search-result-item" role="option"
           data-url="${this.escapeHtml(result.url)}" data-index="${index}">
        <span class="dax-search-result-icon">${result.categoryIcon}</span>
        <div class="dax-search-result-body">
          <div class="dax-search-result-name">${result.highlightedName}</div>
          <div class="dax-search-result-desc">${this.escapeHtml(result.description)}</div>
          <div class="dax-search-result-meta">
            <span class="dax-search-result-category">${result.categoryIcon} ${this.escapeHtml(result.category)}</span>
            ${mGetLevelBadge(result.level)}
          </div>
        </div>
      </div>
    `).join('');

    const hintHtml = `
      <div class="dax-search-hint">
        <span>↑↓ navegar · Enter abrir · Esc cerrar</span>
      </div>
    `;

    resultsEl.innerHTML = itemsHtml + hintHtml;
    resultsEl.classList.add('is-open');

    // Event listeners en cada resultado
    resultsEl.querySelectorAll('.dax-search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        this.navigate(item.getAttribute('data-url'));
      });
    });
  }

  /**
   * Actualiza el elemento activo en la navegación por teclado
   */
  updateActiveItem(items, activeIndex) {
    items.forEach((item, index) => {
      if (index === activeIndex) {
        item.classList.add('is-active');
        item.setAttribute('aria-selected', 'true');
        item.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } else {
        item.classList.remove('is-active');
        item.setAttribute('aria-selected', 'false');
      }
    });
  }

  /**
   * Escapa HTML para prevenir XSS
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Inicializa todos los widgets marcados con data-m-search="true"
   * Busca .dax-search-input, .dax-search-results y .dax-search-clear
   * dentro de cada wrapper (reutiliza los mismos CSS que DAX).
   */
  initAll() {
    const widgets = document.querySelectorAll('[data-m-search="true"]');
    widgets.forEach(wrapper => {
      const input    = wrapper.querySelector('.dax-search-input');
      const results  = wrapper.querySelector('.dax-search-results');
      const clearBtn = wrapper.querySelector('.dax-search-clear');
      if (input && results) {
        if (this.placeholder) input.setAttribute('placeholder', this.placeholder);
        this.bindToInput(input, results, clearBtn);
      }
    });
  }
}

// ─────────────────────────────────────────────────────
// Inicialización automática
// ─────────────────────────────────────────────────────

window.mSearch = new MSearch(M_FUNCTIONS, { maxResults: 8 });

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.mSearch.initAll());
} else {
  window.mSearch.initAll();
}
