/**
 * ═══════════════════════════════════════════════════════
 * DAX SEARCH — Buscador de funciones DAX
 * Power BI Guide · 2026
 * ═══════════════════════════════════════════════════════
 */

// ─────────────────────────────────────────────────────
// PARTE A: Índice completo de funciones DAX
// ─────────────────────────────────────────────────────

const DAX_FUNCTIONS = [
  // ─── AGREGACIÓN → dax/agregacion.html ───
  { name: "SUM", url: "dax/agregacion.html#suma", category: "Agregación", categoryIcon: "📊", description: "Suma todos los valores de una columna numérica", level: "principiante" },
  { name: "SUMX", url: "dax/agregacion.html#suma", category: "Agregación", categoryIcon: "📊", description: "Itera fila a fila, calcula una expresión y suma los resultados", level: "intermedio" },
  { name: "COUNT", url: "dax/agregacion.html#conteo", category: "Agregación", categoryIcon: "📊", description: "Cuenta valores numéricos no vacíos de una columna", level: "principiante" },
  { name: "COUNTA", url: "dax/agregacion.html#conteo", category: "Agregación", categoryIcon: "📊", description: "Cuenta valores no vacíos de cualquier tipo de columna", level: "principiante" },
  { name: "COUNTX", url: "dax/agregacion.html#conteo", category: "Agregación", categoryIcon: "📊", description: "Itera fila a fila y cuenta los resultados no vacíos", level: "intermedio" },
  { name: "COUNTAX", url: "dax/agregacion.html#conteo", category: "Agregación", categoryIcon: "📊", description: "Itera fila a fila y cuenta resultados no vacíos de cualquier tipo", level: "intermedio" },
  { name: "COUNTBLANK", url: "dax/agregacion.html#conteo", category: "Agregación", categoryIcon: "📊", description: "Cuenta las celdas vacías (BLANK) de una columna", level: "principiante" },
  { name: "COUNTROWS", url: "dax/agregacion.html#conteo", category: "Agregación", categoryIcon: "📊", description: "Cuenta el número de filas de una tabla", level: "principiante" },
  { name: "DISTINCTCOUNT", url: "dax/agregacion.html#distinctcount", category: "Agregación", categoryIcon: "📊", description: "Cuenta los valores únicos (distintos) de una columna", level: "principiante" },
  { name: "DISTINCTCOUNTNOBLANK", url: "dax/agregacion.html#distinctcount", category: "Agregación", categoryIcon: "📊", description: "Cuenta valores únicos excluyendo los BLANK", level: "intermedio" },
  { name: "AVERAGE", url: "dax/agregacion.html#media", category: "Agregación", categoryIcon: "📊", description: "Calcula la media aritmética ignorando valores BLANK", level: "principiante" },
  { name: "AVERAGEA", url: "dax/agregacion.html#media", category: "Agregación", categoryIcon: "📊", description: "Media incluyendo columnas no numéricas (TRUE=1, texto=0)", level: "intermedio" },
  { name: "AVERAGEX", url: "dax/agregacion.html#media", category: "Agregación", categoryIcon: "📊", description: "Itera fila a fila, evalúa una expresión y promedia los resultados", level: "intermedio" },
  { name: "MIN", url: "dax/agregacion.html#minmax", category: "Agregación", categoryIcon: "📊", description: "Devuelve el valor mínimo de una columna numérica o de fecha", level: "principiante" },
  { name: "MINA", url: "dax/agregacion.html#minmax", category: "Agregación", categoryIcon: "📊", description: "Mínimo incluyendo valores lógicos", level: "intermedio" },
  { name: "MINX", url: "dax/agregacion.html#minmax", category: "Agregación", categoryIcon: "📊", description: "Itera fila a fila y devuelve el mínimo de la expresión", level: "intermedio" },
  { name: "MAX", url: "dax/agregacion.html#minmax", category: "Agregación", categoryIcon: "📊", description: "Devuelve el valor máximo de una columna numérica o de fecha", level: "principiante" },
  { name: "MAXA", url: "dax/agregacion.html#minmax", category: "Agregación", categoryIcon: "📊", description: "Máximo incluyendo valores lógicos", level: "intermedio" },
  { name: "MAXX", url: "dax/agregacion.html#minmax", category: "Agregación", categoryIcon: "📊", description: "Itera fila a fila y devuelve el máximo de la expresión", level: "intermedio" },
  { name: "PRODUCT", url: "dax/agregacion.html#producto", category: "Agregación", categoryIcon: "📊", description: "Multiplica todos los valores de una columna", level: "intermedio" },
  { name: "PRODUCTX", url: "dax/agregacion.html#producto", category: "Agregación", categoryIcon: "📊", description: "Itera fila a fila, evalúa una expresión y multiplica los resultados", level: "avanzado" },
  { name: "APPROXIMATEDISTINCTCOUNT", url: "dax/agregacion.html#approximated", category: "Agregación", categoryIcon: "📊", description: "Estimación rápida del conteo distinto (~2% error) con algoritmo HyperLogLog", level: "avanzado" },

  // ─── FILTRO → dax/filtro.html ───
  { name: "CALCULATE", url: "dax/filtro.html#calculate", category: "Filtro y Contexto", categoryIcon: "🎯", description: "Evalúa una expresión en un contexto de filtro modificado — la función más importante de DAX", level: "intermedio" },
  { name: "CALCULATETABLE", url: "dax/filtro.html#calculate", category: "Filtro y Contexto", categoryIcon: "🎯", description: "Como CALCULATE pero devuelve una tabla en lugar de un escalar", level: "avanzado" },
  { name: "ALL", url: "dax/filtro.html#all-family", category: "Filtro y Contexto", categoryIcon: "🎯", description: "Elimina todos los filtros de una tabla o columna", level: "intermedio" },
  { name: "ALLEXCEPT", url: "dax/filtro.html#all-family", category: "Filtro y Contexto", categoryIcon: "🎯", description: "Elimina todos los filtros excepto los de las columnas especificadas", level: "intermedio" },
  { name: "ALLSELECTED", url: "dax/filtro.html#all-family", category: "Filtro y Contexto", categoryIcon: "🎯", description: "Elimina filtros directos manteniendo los de slicers y filtros de página", level: "avanzado" },
  { name: "ALLNOBLANKROW", url: "dax/filtro.html#all-family", category: "Filtro y Contexto", categoryIcon: "🎯", description: "Como ALL pero excluye la fila en blanco de relaciones inválidas", level: "avanzado" },
  { name: "ALLCROSSFILTERED", url: "dax/filtro.html#all-family", category: "Filtro y Contexto", categoryIcon: "🎯", description: "Elimina filtros incluyendo los que llegan por filtrado cruzado", level: "avanzado" },
  { name: "REMOVEFILTERS", url: "dax/filtro.html#removefilters", category: "Filtro y Contexto", categoryIcon: "🎯", description: "Alias más legible de ALL cuando se usa como modificador de CALCULATE", level: "intermedio" },
  { name: "KEEPFILTERS", url: "dax/filtro.html#keepfilters", category: "Filtro y Contexto", categoryIcon: "🎯", description: "Modificador de CALCULATE que intersecta el filtro en vez de reemplazarlo", level: "avanzado" },
  { name: "FILTER", url: "dax/filtro.html#filter", category: "Filtro y Contexto", categoryIcon: "🎯", description: "Devuelve una tabla filtrada según una condición", level: "intermedio" },
  { name: "VALUES", url: "dax/filtro.html#values", category: "Filtro y Contexto", categoryIcon: "🎯", description: "Devuelve los valores únicos de una columna en el contexto actual", level: "intermedio" },
  { name: "DISTINCT", url: "dax/filtro.html#values", category: "Filtro y Contexto", categoryIcon: "🎯", description: "Como VALUES pero sin incluir la fila en blanco por relaciones inválidas", level: "intermedio" },
  { name: "SELECTEDVALUE", url: "dax/filtro.html#selectedvalue", category: "Filtro y Contexto", categoryIcon: "🎯", description: "Devuelve el único valor seleccionado en un slicer, o el alternativo si hay varios", level: "intermedio" },
  { name: "HASONEVALUE", url: "dax/filtro.html#selectedvalue", category: "Filtro y Contexto", categoryIcon: "🎯", description: "TRUE si hay exactamente un valor visible para la columna en el contexto actual", level: "intermedio" },
  { name: "TREATAS", url: "dax/filtro.html#treatas", category: "Filtro y Contexto", categoryIcon: "🎯", description: "Aplica valores de una tabla como filtros de otras columnas (relación virtual)", level: "avanzado" },

  // ─── FECHA Y HORA → dax/fecha-hora.html ───
  { name: "DATE", url: "dax/fecha-hora.html#construir", category: "Fecha y Hora", categoryIcon: "📅", description: "Crea una fecha a partir de año, mes y día — la forma más segura de construir fechas", level: "principiante" },
  { name: "TIME", url: "dax/fecha-hora.html#construir", category: "Fecha y Hora", categoryIcon: "📅", description: "Crea un valor de hora a partir de hora, minuto y segundo", level: "principiante" },
  { name: "DATEVALUE", url: "dax/fecha-hora.html#construir", category: "Fecha y Hora", categoryIcon: "📅", description: "Convierte texto en fecha", level: "principiante" },
  { name: "TIMEVALUE", url: "dax/fecha-hora.html#construir", category: "Fecha y Hora", categoryIcon: "📅", description: "Convierte texto en hora", level: "principiante" },
  { name: "YEAR", url: "dax/fecha-hora.html#extraer", category: "Fecha y Hora", categoryIcon: "📅", description: "Extrae el año de una fecha", level: "principiante" },
  { name: "MONTH", url: "dax/fecha-hora.html#extraer", category: "Fecha y Hora", categoryIcon: "📅", description: "Extrae el número de mes (1-12) de una fecha", level: "principiante" },
  { name: "DAY", url: "dax/fecha-hora.html#extraer", category: "Fecha y Hora", categoryIcon: "📅", description: "Extrae el día del mes (1-31) de una fecha", level: "principiante" },
  { name: "HOUR", url: "dax/fecha-hora.html#extraer", category: "Fecha y Hora", categoryIcon: "📅", description: "Extrae la hora (0-23) de un valor de fecha/hora", level: "principiante" },
  { name: "MINUTE", url: "dax/fecha-hora.html#extraer", category: "Fecha y Hora", categoryIcon: "📅", description: "Extrae el minuto (0-59) de un valor de fecha/hora", level: "principiante" },
  { name: "SECOND", url: "dax/fecha-hora.html#extraer", category: "Fecha y Hora", categoryIcon: "📅", description: "Extrae el segundo (0-59) de un valor de fecha/hora", level: "principiante" },
  { name: "WEEKDAY", url: "dax/fecha-hora.html#extraer", category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve el día de la semana como número (1-7)", level: "principiante" },
  { name: "WEEKNUM", url: "dax/fecha-hora.html#extraer", category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve el número de semana del año (1-53)", level: "principiante" },
  { name: "QUARTER", url: "dax/fecha-hora.html#extraer", category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve el trimestre (1-4) de una fecha", level: "principiante" },
  { name: "DATEDIFF", url: "dax/fecha-hora.html#calcular", category: "Fecha y Hora", categoryIcon: "📅", description: "Calcula la diferencia entre dos fechas en el intervalo especificado", level: "principiante" },
  { name: "EDATE", url: "dax/fecha-hora.html#calcular", category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve la fecha resultante de sumar N meses a una fecha", level: "intermedio" },
  { name: "EOMONTH", url: "dax/fecha-hora.html#calcular", category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve el último día del mes resultante de sumar N meses", level: "principiante" },
  { name: "NETWORKDAYS", url: "dax/fecha-hora.html#calcular", category: "Fecha y Hora", categoryIcon: "📅", description: "Cuenta los días laborables entre dos fechas, excluyendo festivos opcionales", level: "intermedio" },
  { name: "YEARFRAC", url: "dax/fecha-hora.html#calcular", category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve la fracción de año entre dos fechas (ej: 0.5 = 6 meses)", level: "intermedio" },
  { name: "TODAY", url: "dax/fecha-hora.html#hoy", category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve la fecha actual sin hora — función volátil", level: "principiante" },
  { name: "NOW", url: "dax/fecha-hora.html#hoy", category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve la fecha y hora actuales — función volátil", level: "principiante" },
  { name: "UTCTODAY", url: "dax/fecha-hora.html#hoy", category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve la fecha actual en UTC", level: "intermedio" },
  { name: "UTCNOW", url: "dax/fecha-hora.html#hoy", category: "Fecha y Hora", categoryIcon: "📅", description: "Devuelve la fecha y hora actuales en UTC", level: "intermedio" },
  { name: "CALENDAR", url: "dax/fecha-hora.html#calendario", category: "Fecha y Hora", categoryIcon: "📅", description: "Genera una tabla con todas las fechas entre dos fechas indicadas", level: "intermedio" },
  { name: "CALENDARAUTO", url: "dax/fecha-hora.html#calendario", category: "Fecha y Hora", categoryIcon: "📅", description: "Genera automáticamente una tabla de calendario con el rango de fechas del modelo", level: "principiante" },

  // ─── LÓGICAS → dax/logicas.html ───
  { name: "IF", url: "dax/logicas.html#if", category: "Lógicas", categoryIcon: "🔀", description: "Función condicional básica — si condición, devuelve A, si no devuelve B", level: "principiante" },
  { name: "IF.EAGER", url: "dax/logicas.html#if", category: "Lógicas", categoryIcon: "🔀", description: "Versión ansiosa de IF que evalúa ambas ramas siempre", level: "avanzado" },
  { name: "SWITCH", url: "dax/logicas.html#switch", category: "Lógicas", categoryIcon: "🔀", description: "Evalúa múltiples condiciones y devuelve el resultado del primer match", level: "principiante" },
  { name: "AND", url: "dax/logicas.html#and-or", category: "Lógicas", categoryIcon: "🔀", description: "TRUE si ambas condiciones son verdaderas (equivale a &&)", level: "principiante" },
  { name: "OR", url: "dax/logicas.html#and-or", category: "Lógicas", categoryIcon: "🔀", description: "TRUE si al menos una condición es verdadera (equivale a ||)", level: "principiante" },
  { name: "NOT", url: "dax/logicas.html#and-or", category: "Lógicas", categoryIcon: "🔀", description: "Invierte el valor lógico de una expresión", level: "principiante" },
  { name: "IFERROR", url: "dax/logicas.html#iferror", category: "Lógicas", categoryIcon: "🔀", description: "Devuelve un valor alternativo si la expresión produce un error", level: "principiante" },
  { name: "ISERROR", url: "dax/logicas.html#iferror", category: "Lógicas", categoryIcon: "🔀", description: "TRUE si la expresión produce un error", level: "intermedio" },
  { name: "COALESCE", url: "dax/logicas.html#coalesce", category: "Lógicas", categoryIcon: "🔀", description: "Devuelve el primer valor no-BLANK de la lista", level: "intermedio" },
  { name: "TRUE", url: "dax/logicas.html#true-false", category: "Lógicas", categoryIcon: "🔀", description: "Devuelve el literal booleano TRUE", level: "principiante" },
  { name: "FALSE", url: "dax/logicas.html#true-false", category: "Lógicas", categoryIcon: "🔀", description: "Devuelve el literal booleano FALSE", level: "principiante" },
  { name: "BITAND", url: "dax/logicas.html#bits", category: "Lógicas", categoryIcon: "🔀", description: "AND bit a bit sobre enteros", level: "avanzado" },
  { name: "BITOR", url: "dax/logicas.html#bits", category: "Lógicas", categoryIcon: "🔀", description: "OR bit a bit sobre enteros", level: "avanzado" },
  { name: "BITXOR", url: "dax/logicas.html#bits", category: "Lógicas", categoryIcon: "🔀", description: "XOR bit a bit sobre enteros", level: "avanzado" },
  { name: "BITLSHIFT", url: "dax/logicas.html#bits", category: "Lógicas", categoryIcon: "🔀", description: "Desplazamiento de bits hacia la izquierda", level: "avanzado" },
  { name: "BITRSHIFT", url: "dax/logicas.html#bits", category: "Lógicas", categoryIcon: "🔀", description: "Desplazamiento de bits hacia la derecha", level: "avanzado" },

  // ─── MATEMÁTICAS → dax/matematicas.html ───
  { name: "DIVIDE", url: "dax/matematicas.html#esenciales", category: "Matemáticas", categoryIcon: "🔢", description: "División segura que devuelve BLANK (no error) cuando el denominador es 0", level: "principiante" },
  { name: "ABS", url: "dax/matematicas.html#esenciales", category: "Matemáticas", categoryIcon: "🔢", description: "Valor absoluto — elimina el signo negativo", level: "principiante" },
  { name: "SIGN", url: "dax/matematicas.html#esenciales", category: "Matemáticas", categoryIcon: "🔢", description: "Devuelve 1 (positivo), -1 (negativo) o 0", level: "principiante" },
  { name: "MOD", url: "dax/matematicas.html#esenciales", category: "Matemáticas", categoryIcon: "🔢", description: "Devuelve el resto de la división entera", level: "principiante" },
  { name: "QUOTIENT", url: "dax/matematicas.html#esenciales", category: "Matemáticas", categoryIcon: "🔢", description: "Devuelve la parte entera de una división (sin el resto)", level: "principiante" },
  { name: "ROUND", url: "dax/matematicas.html#redondeo", category: "Matemáticas", categoryIcon: "🔢", description: "Redondea al número de decimales especificado", level: "principiante" },
  { name: "ROUNDUP", url: "dax/matematicas.html#redondeo", category: "Matemáticas", categoryIcon: "🔢", description: "Redondea siempre hacia arriba", level: "principiante" },
  { name: "ROUNDDOWN", url: "dax/matematicas.html#redondeo", category: "Matemáticas", categoryIcon: "🔢", description: "Redondea siempre hacia abajo", level: "principiante" },
  { name: "INT", url: "dax/matematicas.html#redondeo", category: "Matemáticas", categoryIcon: "🔢", description: "Redondea al entero inferior (hacia -infinito)", level: "principiante" },
  { name: "TRUNC", url: "dax/matematicas.html#redondeo", category: "Matemáticas", categoryIcon: "🔢", description: "Trunca los decimales hacia cero", level: "principiante" },
  { name: "CEILING", url: "dax/matematicas.html#redondeo", category: "Matemáticas", categoryIcon: "🔢", description: "Redondea al múltiplo superior más cercano", level: "principiante" },
  { name: "FLOOR", url: "dax/matematicas.html#redondeo", category: "Matemáticas", categoryIcon: "🔢", description: "Redondea al múltiplo inferior más cercano", level: "principiante" },
  { name: "MROUND", url: "dax/matematicas.html#redondeo", category: "Matemáticas", categoryIcon: "🔢", description: "Redondea al múltiplo más cercano", level: "intermedio" },
  { name: "ISO.CEILING", url: "dax/matematicas.html#redondeo", category: "Matemáticas", categoryIcon: "🔢", description: "Como CEILING pero siempre hacia +infinito (incluso con negativos)", level: "intermedio" },
  { name: "EVEN", url: "dax/matematicas.html#redondeo", category: "Matemáticas", categoryIcon: "🔢", description: "Redondea al entero par superior", level: "principiante" },
  { name: "ODD", url: "dax/matematicas.html#redondeo", category: "Matemáticas", categoryIcon: "🔢", description: "Redondea al entero impar superior", level: "principiante" },
  { name: "SQRT", url: "dax/matematicas.html#potencias", category: "Matemáticas", categoryIcon: "🔢", description: "Raíz cuadrada", level: "principiante" },
  { name: "SQRTPI", url: "dax/matematicas.html#potencias", category: "Matemáticas", categoryIcon: "🔢", description: "Raíz cuadrada de (número × π)", level: "avanzado" },
  { name: "POWER", url: "dax/matematicas.html#potencias", category: "Matemáticas", categoryIcon: "🔢", description: "Eleva la base al exponente indicado", level: "principiante" },
  { name: "EXP", url: "dax/matematicas.html#potencias", category: "Matemáticas", categoryIcon: "🔢", description: "Calcula e elevado a la potencia indicada", level: "intermedio" },
  { name: "LN", url: "dax/matematicas.html#potencias", category: "Matemáticas", categoryIcon: "🔢", description: "Logaritmo natural (base e)", level: "intermedio" },
  { name: "LOG", url: "dax/matematicas.html#potencias", category: "Matemáticas", categoryIcon: "🔢", description: "Logaritmo en la base especificada (por defecto base 10)", level: "intermedio" },
  { name: "LOG10", url: "dax/matematicas.html#potencias", category: "Matemáticas", categoryIcon: "🔢", description: "Logaritmo en base 10", level: "intermedio" },
  { name: "PI", url: "dax/matematicas.html#conversion", category: "Matemáticas", categoryIcon: "🔢", description: "Devuelve el valor de π (3.14159...)", level: "principiante" },
  { name: "DEGREES", url: "dax/matematicas.html#conversion", category: "Matemáticas", categoryIcon: "🔢", description: "Convierte radianes a grados", level: "intermedio" },
  { name: "RADIANS", url: "dax/matematicas.html#conversion", category: "Matemáticas", categoryIcon: "🔢", description: "Convierte grados a radianes", level: "intermedio" },
  { name: "CONVERT", url: "dax/matematicas.html#conversion", category: "Matemáticas", categoryIcon: "🔢", description: "Convierte un valor a un tipo de dato específico", level: "intermedio" },
  { name: "CURRENCY", url: "dax/matematicas.html#conversion", category: "Matemáticas", categoryIcon: "🔢", description: "Convierte al tipo Currency (4 decimales, alta precisión)", level: "intermedio" },
  { name: "GCD", url: "dax/matematicas.html#conversion", category: "Matemáticas", categoryIcon: "🔢", description: "Máximo común divisor", level: "avanzado" },
  { name: "LCM", url: "dax/matematicas.html#conversion", category: "Matemáticas", categoryIcon: "🔢", description: "Mínimo común múltiplo", level: "avanzado" },
  { name: "FACT", url: "dax/matematicas.html#conversion", category: "Matemáticas", categoryIcon: "🔢", description: "Factorial de un número", level: "avanzado" },
  { name: "COMBIN", url: "dax/matematicas.html#combinatoria", category: "Matemáticas", categoryIcon: "🔢", description: "Combinaciones sin repetición C(n,k)", level: "avanzado" },
  { name: "COMBINA", url: "dax/matematicas.html#combinatoria", category: "Matemáticas", categoryIcon: "🔢", description: "Combinaciones con repetición", level: "avanzado" },
  { name: "PERMUT", url: "dax/matematicas.html#combinatoria", category: "Matemáticas", categoryIcon: "🔢", description: "Permutaciones sin repetición (el orden importa)", level: "avanzado" },
  { name: "RAND", url: "dax/matematicas.html#aleatorio", category: "Matemáticas", categoryIcon: "🔢", description: "Número decimal aleatorio entre 0 y 1 — función volátil", level: "intermedio" },
  { name: "RANDBETWEEN", url: "dax/matematicas.html#aleatorio", category: "Matemáticas", categoryIcon: "🔢", description: "Entero aleatorio entre dos valores — función volátil", level: "principiante" },
  { name: "SIN", url: "dax/matematicas.html#trigonometria", category: "Matemáticas", categoryIcon: "🔢", description: "Seno de un ángulo en radianes", level: "avanzado" },
  { name: "COS", url: "dax/matematicas.html#trigonometria", category: "Matemáticas", categoryIcon: "🔢", description: "Coseno de un ángulo en radianes", level: "avanzado" },
  { name: "TAN", url: "dax/matematicas.html#trigonometria", category: "Matemáticas", categoryIcon: "🔢", description: "Tangente de un ángulo en radianes", level: "avanzado" },
  { name: "ASIN", url: "dax/matematicas.html#trigonometria", category: "Matemáticas", categoryIcon: "🔢", description: "Arcoseno — devuelve el ángulo cuyo seno es el valor", level: "avanzado" },
  { name: "ACOS", url: "dax/matematicas.html#trigonometria", category: "Matemáticas", categoryIcon: "🔢", description: "Arcocoseno — devuelve el ángulo cuyo coseno es el valor", level: "avanzado" },
  { name: "ATAN", url: "dax/matematicas.html#trigonometria", category: "Matemáticas", categoryIcon: "🔢", description: "Arcotangente — devuelve el ángulo cuya tangente es el valor", level: "avanzado" },
  { name: "COT", url: "dax/matematicas.html#trigonometria", category: "Matemáticas", categoryIcon: "🔢", description: "Cotangente de un ángulo en radianes", level: "avanzado" },
  { name: "SINH", url: "dax/matematicas.html#trigonometria", category: "Matemáticas", categoryIcon: "🔢", description: "Seno hiperbólico", level: "avanzado" },
  { name: "COSH", url: "dax/matematicas.html#trigonometria", category: "Matemáticas", categoryIcon: "🔢", description: "Coseno hiperbólico", level: "avanzado" },
  { name: "TANH", url: "dax/matematicas.html#trigonometria", category: "Matemáticas", categoryIcon: "🔢", description: "Tangente hiperbólica", level: "avanzado" },
  { name: "ACOT", url: "dax/matematicas.html#trigonometria", category: "Matemáticas", categoryIcon: "🔢", description: "Arcocotangente", level: "avanzado" },
  { name: "ACOSH", url: "dax/matematicas.html#trigonometria", category: "Matemáticas", categoryIcon: "🔢", description: "Arcoseno hiperbólico inverso", level: "avanzado" },
  { name: "ASINH", url: "dax/matematicas.html#trigonometria", category: "Matemáticas", categoryIcon: "🔢", description: "Arcoseno hiperbólico", level: "avanzado" },
  { name: "ATANH", url: "dax/matematicas.html#trigonometria", category: "Matemáticas", categoryIcon: "🔢", description: "Arctangente hiperbólica", level: "avanzado" },
  { name: "COTH", url: "dax/matematicas.html#trigonometria", category: "Matemáticas", categoryIcon: "🔢", description: "Cotangente hiperbólica", level: "avanzado" },

  // ─── ESTADÍSTICAS → dax/estadisticas.html ───
  { name: "MEDIAN", url: "dax/estadisticas.html#posicion", category: "Estadísticas", categoryIcon: "📈", description: "Valor central de una columna — robusto frente a outliers", level: "intermedio" },
  { name: "MEDIANX", url: "dax/estadisticas.html#posicion", category: "Estadísticas", categoryIcon: "📈", description: "Mediana de una expresión evaluada fila a fila", level: "avanzado" },
  { name: "PERCENTILE.INC", url: "dax/estadisticas.html#posicion", category: "Estadísticas", categoryIcon: "📈", description: "Percentil k de una columna (0-1 inclusivo)", level: "intermedio" },
  { name: "PERCENTILE.EXC", url: "dax/estadisticas.html#posicion", category: "Estadísticas", categoryIcon: "📈", description: "Percentil k excluyendo los extremos 0 y 1", level: "intermedio" },
  { name: "PERCENTILEX.INC", url: "dax/estadisticas.html#posicion", category: "Estadísticas", categoryIcon: "📈", description: "Percentil de una expresión evaluada fila a fila (inclusivo)", level: "avanzado" },
  { name: "PERCENTILEX.EXC", url: "dax/estadisticas.html#posicion", category: "Estadísticas", categoryIcon: "📈", description: "Percentil de una expresión evaluada fila a fila (exclusivo)", level: "avanzado" },
  { name: "STDEV.P", url: "dax/estadisticas.html#dispersion", category: "Estadísticas", categoryIcon: "📈", description: "Desviación estándar poblacional (tienes todos los datos)", level: "intermedio" },
  { name: "STDEV.S", url: "dax/estadisticas.html#dispersion", category: "Estadísticas", categoryIcon: "📈", description: "Desviación estándar muestral (tienes una muestra)", level: "intermedio" },
  { name: "STDEVX.P", url: "dax/estadisticas.html#dispersion", category: "Estadísticas", categoryIcon: "📈", description: "Desviación estándar poblacional de una expresión por fila", level: "avanzado" },
  { name: "STDEVX.S", url: "dax/estadisticas.html#dispersion", category: "Estadísticas", categoryIcon: "📈", description: "Desviación estándar muestral de una expresión por fila", level: "avanzado" },
  { name: "VAR.P", url: "dax/estadisticas.html#dispersion", category: "Estadísticas", categoryIcon: "📈", description: "Varianza poblacional", level: "avanzado" },
  { name: "VAR.S", url: "dax/estadisticas.html#dispersion", category: "Estadísticas", categoryIcon: "📈", description: "Varianza muestral", level: "avanzado" },
  { name: "VARX.P", url: "dax/estadisticas.html#dispersion", category: "Estadísticas", categoryIcon: "📈", description: "Varianza poblacional de una expresión por fila", level: "avanzado" },
  { name: "VARX.S", url: "dax/estadisticas.html#dispersion", category: "Estadísticas", categoryIcon: "📈", description: "Varianza muestral de una expresión por fila", level: "avanzado" },
  { name: "RANKX", url: "dax/estadisticas.html#ranking", category: "Estadísticas", categoryIcon: "📈", description: "Ranking dinámico de un valor dentro de una tabla — el más usado en Power BI", level: "intermedio" },
  { name: "RANK.EQ", url: "dax/estadisticas.html#ranking", category: "Estadísticas", categoryIcon: "📈", description: "Posición de un valor específico dentro de una columna", level: "avanzado" },
  { name: "SAMPLE", url: "dax/estadisticas.html#muestras", category: "Estadísticas", categoryIcon: "📈", description: "Devuelve una muestra de N filas distribuidas uniformemente", level: "avanzado" },
  { name: "GEOMEAN", url: "dax/estadisticas.html#muestras", category: "Estadísticas", categoryIcon: "📈", description: "Media geométrica — ideal para promediar tasas de crecimiento", level: "avanzado" },
  { name: "GEOMEANX", url: "dax/estadisticas.html#muestras", category: "Estadísticas", categoryIcon: "📈", description: "Media geométrica de una expresión evaluada fila a fila", level: "avanzado" },
  { name: "LINEST", url: "dax/estadisticas.html#regresion", category: "Estadísticas", categoryIcon: "📈", description: "Regresión lineal simple — calcula pendiente e intercepto", level: "avanzado" },
  { name: "LINESTX", url: "dax/estadisticas.html#regresion", category: "Estadísticas", categoryIcon: "📈", description: "Regresión lineal con expresiones evaluadas fila a fila", level: "avanzado" },
  { name: "NORM.DIST", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Distribución normal — probabilidades e intervalos de confianza", level: "avanzado" },
  { name: "NORM.INV", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Inversa de la distribución normal", level: "avanzado" },
  { name: "NORM.S.DIST", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Distribución normal estándar (media=0, σ=1)", level: "avanzado" },
  { name: "NORM.S.INV", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Inversa de la distribución normal estándar", level: "avanzado" },
  { name: "T.DIST", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Distribución t de Student (cola izquierda)", level: "avanzado" },
  { name: "T.DIST.2T", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Distribución t de Student (dos colas)", level: "avanzado" },
  { name: "T.DIST.RT", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Distribución t de Student (cola derecha)", level: "avanzado" },
  { name: "T.INV", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Inversa de la distribución t de Student", level: "avanzado" },
  { name: "T.INV.2T", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Inversa de dos colas de la distribución t", level: "avanzado" },
  { name: "CHISQ.DIST", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Distribución chi-cuadrado", level: "avanzado" },
  { name: "CHISQ.DIST.RT", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Distribución chi-cuadrado (cola derecha)", level: "avanzado" },
  { name: "CHISQ.INV", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Inversa de la distribución chi-cuadrado", level: "avanzado" },
  { name: "CHISQ.INV.RT", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Inversa chi-cuadrado (cola derecha)", level: "avanzado" },
  { name: "BETA.DIST", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Distribución Beta — ideal para modelar tasas de conversión y A/B tests", level: "avanzado" },
  { name: "BETA.INV", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Inversa de la distribución Beta", level: "avanzado" },
  { name: "EXPON.DIST", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Distribución exponencial — tiempos entre eventos", level: "avanzado" },
  { name: "POISSON.DIST", url: "dax/estadisticas.html#distribuciones", category: "Estadísticas", categoryIcon: "📈", description: "Distribución de Poisson — conteo de eventos en un intervalo", level: "avanzado" },

  // ─── TEXTO → dax/texto.html ───
  { name: "LEFT", url: "dax/texto.html#extraccion", category: "Texto", categoryIcon: "📝", description: "Extrae N caracteres desde el inicio de un texto", level: "principiante" },
  { name: "RIGHT", url: "dax/texto.html#extraccion", category: "Texto", categoryIcon: "📝", description: "Extrae N caracteres desde el final de un texto", level: "principiante" },
  { name: "MID", url: "dax/texto.html#extraccion", category: "Texto", categoryIcon: "📝", description: "Extrae N caracteres desde una posición específica", level: "principiante" },
  { name: "LEN", url: "dax/texto.html#extraccion", category: "Texto", categoryIcon: "📝", description: "Devuelve el número de caracteres de un texto", level: "principiante" },
  { name: "FIND", url: "dax/texto.html#busqueda", category: "Texto", categoryIcon: "📝", description: "Busca texto dentro de otro — case-SENSITIVE", level: "intermedio" },
  { name: "SEARCH", url: "dax/texto.html#busqueda", category: "Texto", categoryIcon: "📝", description: "Busca texto dentro de otro — case-INSENSITIVE y admite wildcards", level: "intermedio" },
  { name: "CONTAINSSTRING", url: "dax/texto.html#busqueda", category: "Texto", categoryIcon: "📝", description: "TRUE si el texto contiene la cadena buscada (sin distinción de mayúsculas)", level: "principiante" },
  { name: "CONTAINSSTRINGEXACT", url: "dax/texto.html#busqueda", category: "Texto", categoryIcon: "📝", description: "TRUE si el texto contiene la cadena buscada (con distinción de mayúsculas)", level: "intermedio" },
  { name: "EXACT", url: "dax/texto.html#busqueda", category: "Texto", categoryIcon: "📝", description: "Compara dos textos de forma exacta incluyendo mayúsculas (case-sensitive)", level: "intermedio" },
  { name: "UPPER", url: "dax/texto.html#transformacion", category: "Texto", categoryIcon: "📝", description: "Convierte todo el texto a mayúsculas", level: "principiante" },
  { name: "LOWER", url: "dax/texto.html#transformacion", category: "Texto", categoryIcon: "📝", description: "Convierte todo el texto a minúsculas", level: "principiante" },
  { name: "TRIM", url: "dax/texto.html#transformacion", category: "Texto", categoryIcon: "📝", description: "Elimina espacios del inicio y fin, y reduce espacios internos múltiples a uno", level: "principiante" },
  { name: "SUBSTITUTE", url: "dax/texto.html#transformacion", category: "Texto", categoryIcon: "📝", description: "Reemplaza todas las apariciones de un texto por otro (case-sensitive)", level: "principiante" },
  { name: "REPLACE", url: "dax/texto.html#transformacion", category: "Texto", categoryIcon: "📝", description: "Reemplaza N caracteres a partir de una posición específica", level: "intermedio" },
  { name: "REPT", url: "dax/texto.html#transformacion", category: "Texto", categoryIcon: "📝", description: "Repite un texto N veces — ideal para barras de progreso de texto", level: "principiante" },
  { name: "CONCATENATE", url: "dax/texto.html#construccion", category: "Texto", categoryIcon: "📝", description: "Une dos textos (el operador & es más flexible)", level: "principiante" },
  { name: "CONCATENATEX", url: "dax/texto.html#construccion", category: "Texto", categoryIcon: "📝", description: "Itera una tabla y une todos los valores con un delimitador — como STRING_AGG en SQL", level: "intermedio" },
  { name: "COMBINEVALUES", url: "dax/texto.html#construccion", category: "Texto", categoryIcon: "📝", description: "Une múltiples valores con delimitador — ideal para claves compuestas en DirectQuery", level: "intermedio" },
  { name: "FORMAT", url: "dax/texto.html#formato", category: "Texto", categoryIcon: "📝", description: "Convierte cualquier valor a texto con el formato especificado — la más poderosa de texto", level: "principiante" },
  { name: "FIXED", url: "dax/texto.html#formato", category: "Texto", categoryIcon: "📝", description: "Convierte un número a texto con decimales fijos", level: "principiante" },
  { name: "VALUE", url: "dax/texto.html#formato", category: "Texto", categoryIcon: "📝", description: "Convierte texto que representa un número en un número real", level: "principiante" },
  { name: "TEXT", url: "dax/texto.html#formato", category: "Texto", categoryIcon: "📝", description: "Convierte un número a texto con formato especificado (alias de FORMAT en algunos contextos)", level: "principiante" },
  { name: "UNICHAR", url: "dax/texto.html#unicode", category: "Texto", categoryIcon: "📝", description: "Devuelve el carácter Unicode del código indicado — para emojis e iconos especiales", level: "intermedio" },
  { name: "UNICODE", url: "dax/texto.html#unicode", category: "Texto", categoryIcon: "📝", description: "Devuelve el código Unicode del primer carácter de un texto", level: "intermedio" },
  { name: "TOCSV", url: "dax/texto.html#exportacion", category: "Texto", categoryIcon: "📝", description: "Convierte una tabla DAX a formato CSV como texto", level: "avanzado" },
  { name: "TOJSON", url: "dax/texto.html#exportacion", category: "Texto", categoryIcon: "📝", description: "Convierte una tabla DAX a formato JSON como texto", level: "avanzado" },

  // ─── TABLAS → dax/tablas.html ───
  { name: "DATATABLE", url: "dax/tablas.html#creacion", category: "Tablas", categoryIcon: "🗃️", description: "Crea una tabla estática con datos definidos directamente en DAX", level: "intermedio" },
  { name: "ROW", url: "dax/tablas.html#creacion", category: "Tablas", categoryIcon: "🗃️", description: "Crea una tabla de una sola fila con columnas y valores especificados", level: "intermedio" },
  { name: "GENERATESERIES", url: "dax/tablas.html#creacion", category: "Tablas", categoryIcon: "🗃️", description: "Genera una tabla con una serie numérica o de fechas", level: "intermedio" },
  { name: "ADDCOLUMNS", url: "dax/tablas.html#modificar", category: "Tablas", categoryIcon: "🗃️", description: "Añade columnas calculadas a una tabla existente", level: "intermedio" },
  { name: "SELECTCOLUMNS", url: "dax/tablas.html#modificar", category: "Tablas", categoryIcon: "🗃️", description: "Proyecta solo las columnas especificadas (renombrando si hace falta)", level: "intermedio" },
  { name: "ADDMISSINGITEMS", url: "dax/tablas.html#modificar", category: "Tablas", categoryIcon: "🗃️", description: "Añade filas para combinaciones de columnas sin datos", level: "avanzado" },
  { name: "SUMMARIZE", url: "dax/tablas.html#resumen", category: "Tablas", categoryIcon: "🗃️", description: "Agrupa una tabla por columnas — equivale al GROUP BY de SQL", level: "intermedio" },
  { name: "SUMMARIZECOLUMNS", url: "dax/tablas.html#resumen", category: "Tablas", categoryIcon: "🗃️", description: "Versión moderna y optimizada de SUMMARIZE — la preferida para queries DAX", level: "avanzado" },
  { name: "GROUPBY", url: "dax/tablas.html#resumen", category: "Tablas", categoryIcon: "🗃️", description: "Como SUMMARIZE pero diseñada para tablas con columnas calculadas usando CURRENTGROUP", level: "avanzado" },
  { name: "UNION", url: "dax/tablas.html#conjuntos", category: "Tablas", categoryIcon: "🗃️", description: "Une dos o más tablas apilándolas verticalmente (incluye duplicados)", level: "intermedio" },
  { name: "INTERSECT", url: "dax/tablas.html#conjuntos", category: "Tablas", categoryIcon: "🗃️", description: "Devuelve las filas que existen en ambas tablas (intersección)", level: "avanzado" },
  { name: "EXCEPT", url: "dax/tablas.html#conjuntos", category: "Tablas", categoryIcon: "🗃️", description: "Devuelve las filas de la primera tabla que NO están en la segunda", level: "avanzado" },
  { name: "NATURALINNERJOIN", url: "dax/tablas.html#joins", category: "Tablas", categoryIcon: "🗃️", description: "Combina tablas por columnas del mismo nombre — solo filas con match (INNER JOIN)", level: "avanzado" },
  { name: "NATURALLEFTOUTERJOIN", url: "dax/tablas.html#joins", category: "Tablas", categoryIcon: "🗃️", description: "Combina tablas manteniendo todas las filas de la izquierda (LEFT JOIN)", level: "avanzado" },
  { name: "CROSSJOIN", url: "dax/tablas.html#joins", category: "Tablas", categoryIcon: "🗃️", description: "Producto cartesiano — combina cada fila de una tabla con cada fila de la otra", level: "avanzado" },
  { name: "TOPN", url: "dax/tablas.html#filtrado", category: "Tablas", categoryIcon: "🗃️", description: "Devuelve las N filas superiores ordenadas por una expresión", level: "intermedio" },
  { name: "TOPNPERLEVEL", url: "dax/tablas.html#filtrado", category: "Tablas", categoryIcon: "🗃️", description: "Top N por nivel de jerarquía", level: "avanzado" },
  { name: "TOPNSKIP", url: "dax/tablas.html#filtrado", category: "Tablas", categoryIcon: "🗃️", description: "Top N saltando los primeros K registros (paginación)", level: "avanzado" },
  { name: "GENERATE", url: "dax/tablas.html#generate", category: "Tablas", categoryIcon: "🗃️", description: "Para cada fila de tabla1, genera filas de tabla2 dependientes — equivale a CROSS APPLY de SQL", level: "avanzado" },
  { name: "GENERATEALL", url: "dax/tablas.html#generate", category: "Tablas", categoryIcon: "🗃️", description: "Como GENERATE pero mantiene filas aunque tabla2 esté vacía (LEFT LATERAL JOIN)", level: "avanzado" },
  { name: "CURRENTGROUP", url: "dax/tablas.html#generate", category: "Tablas", categoryIcon: "🗃️", description: "Dentro de GROUPBY: devuelve el subconjunto de filas del grupo actual", level: "avanzado" },
  { name: "ROLLUP", url: "dax/tablas.html#rollup", category: "Tablas", categoryIcon: "🗃️", description: "Modificador de SUMMARIZE que añade filas de subtotal", level: "avanzado" },
  { name: "ROLLUPADDISSUBTOTAL", url: "dax/tablas.html#rollup", category: "Tablas", categoryIcon: "🗃️", description: "Como ROLLUP pero añade columna booleana indicando si es subtotal", level: "avanzado" },
  { name: "ISSUBTOTAL", url: "dax/tablas.html#rollup", category: "Tablas", categoryIcon: "🗃️", description: "TRUE si la fila actual es una fila de subtotal generada por ROLLUP", level: "avanzado" },
  { name: "IGNORE", url: "dax/tablas.html#rollup", category: "Tablas", categoryIcon: "🗃️", description: "En SUMMARIZECOLUMNS: ignora filtros vacíos de ciertas expresiones", level: "avanzado" },
  { name: "NONVISUAL", url: "dax/tablas.html#rollup", category: "Tablas", categoryIcon: "🗃️", description: "En SUMMARIZECOLUMNS: marca un filtro como no visual", level: "avanzado" },
  { name: "SUBSTITUTEWITHINDEX", url: "dax/tablas.html#treatas", category: "Tablas", categoryIcon: "🗃️", description: "Reemplaza columnas de agrupación con un índice numérico", level: "avanzado" },

  // ─── TIEMPO → dax/tiempo.html ───
  { name: "TOTALYTD", url: "dax/tiempo.html#acumulados", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Total acumulado desde el 1 de enero hasta la fecha del contexto (Year-to-Date)", level: "intermedio" },
  { name: "TOTALQTD", url: "dax/tiempo.html#acumulados", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Total acumulado desde el inicio del trimestre actual (Quarter-to-Date)", level: "intermedio" },
  { name: "TOTALMTD", url: "dax/tiempo.html#acumulados", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Total acumulado desde el inicio del mes actual (Month-to-Date)", level: "intermedio" },
  { name: "DATESYTD", url: "dax/tiempo.html#acumulados", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Fechas desde el 1 de enero hasta la fecha del contexto", level: "intermedio" },
  { name: "DATESQTD", url: "dax/tiempo.html#acumulados", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Fechas desde el inicio del trimestre hasta la fecha del contexto", level: "intermedio" },
  { name: "DATESMTD", url: "dax/tiempo.html#acumulados", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Fechas desde el inicio del mes hasta la fecha del contexto", level: "intermedio" },
  { name: "SAMEPERIODLASTYEAR", url: "dax/tiempo.html#anterior", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Las mismas fechas del contexto pero del año anterior — la más usada para YoY", level: "intermedio" },
  { name: "PREVIOUSMONTH", url: "dax/tiempo.html#anterior", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Las fechas del mes anterior completo", level: "intermedio" },
  { name: "PREVIOUSQUARTER", url: "dax/tiempo.html#anterior", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Las fechas del trimestre anterior completo", level: "intermedio" },
  { name: "PREVIOUSYEAR", url: "dax/tiempo.html#anterior", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Las fechas del año anterior completo", level: "intermedio" },
  { name: "PREVIOUSDAY", url: "dax/tiempo.html#anterior", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Las fechas del día anterior", level: "principiante" },
  { name: "NEXTMONTH", url: "dax/tiempo.html#siguiente", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Las fechas del mes siguiente completo", level: "intermedio" },
  { name: "NEXTQUARTER", url: "dax/tiempo.html#siguiente", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Las fechas del trimestre siguiente completo", level: "intermedio" },
  { name: "NEXTYEAR", url: "dax/tiempo.html#siguiente", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Las fechas del año siguiente completo", level: "intermedio" },
  { name: "NEXTDAY", url: "dax/tiempo.html#siguiente", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Las fechas del día siguiente", level: "principiante" },
  { name: "DATEADD", url: "dax/tiempo.html#dateadd", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Desplaza las fechas del contexto en N intervalos (DAY, MONTH, QUARTER, YEAR)", level: "intermedio" },
  { name: "PARALLELPERIOD", url: "dax/tiempo.html#dateadd", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Como DATEADD pero devuelve el período completo desplazado", level: "avanzado" },
  { name: "DATESBETWEEN", url: "dax/tiempo.html#dateadd", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Fechas entre dos fechas específicas (ambas inclusive)", level: "intermedio" },
  { name: "DATESINPERIOD", url: "dax/tiempo.html#dateadd", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Fechas para un período de N intervalos — ideal para ventanas móviles rolling", level: "intermedio" },
  { name: "OPENINGBALANCEMONTH", url: "dax/tiempo.html#openclose", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Evalúa una expresión en el último día del mes anterior (saldo de apertura)", level: "avanzado" },
  { name: "OPENINGBALANCEQUARTER", url: "dax/tiempo.html#openclose", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Evalúa una expresión en el último día del trimestre anterior (saldo de apertura)", level: "avanzado" },
  { name: "OPENINGBALANCEYEAR", url: "dax/tiempo.html#openclose", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Evalúa una expresión en el último día del año anterior (saldo de apertura)", level: "avanzado" },
  { name: "CLOSINGBALANCEMONTH", url: "dax/tiempo.html#openclose", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Evalúa una expresión en el último día del mes actual (saldo de cierre)", level: "avanzado" },
  { name: "CLOSINGBALANCEQUARTER", url: "dax/tiempo.html#openclose", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Evalúa una expresión en el último día del trimestre actual (saldo de cierre)", level: "avanzado" },
  { name: "CLOSINGBALANCEYEAR", url: "dax/tiempo.html#openclose", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Evalúa una expresión en el último día del año actual (saldo de cierre)", level: "avanzado" },
  { name: "FIRSTDATE", url: "dax/tiempo.html#firstlast", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Tabla con la primera fecha del contexto actual", level: "intermedio" },
  { name: "LASTDATE", url: "dax/tiempo.html#firstlast", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Tabla con la última fecha del contexto actual", level: "intermedio" },
  { name: "FIRSTNONBLANK", url: "dax/tiempo.html#firstlast", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Primera fecha donde la expresión devuelve algo distinto de BLANK", level: "avanzado" },
  { name: "LASTNONBLANK", url: "dax/tiempo.html#firstlast", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Última fecha donde la expresión devuelve algo distinto de BLANK", level: "avanzado" },
  { name: "FIRSTNONBLANKVALUE", url: "dax/tiempo.html#firstlast", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Valor de la expresión en la primera fecha no BLANK", level: "avanzado" },
  { name: "LASTNONBLANKVALUE", url: "dax/tiempo.html#firstlast", category: "Inteligencia de Tiempo", categoryIcon: "⏳", description: "Valor de la expresión en la última fecha no BLANK", level: "avanzado" },

  // ─── RELACIONES → dax/relaciones.html ───
  { name: "RELATED", url: "dax/relaciones.html#related", category: "Relaciones", categoryIcon: "🔗", description: "Navega de la tabla muchos a la tabla uno — como un VLOOKUP inteligente", level: "intermedio" },
  { name: "RELATEDTABLE", url: "dax/relaciones.html#relatedtable", category: "Relaciones", categoryIcon: "🔗", description: "Navega de la tabla uno a la tabla muchos — devuelve todas las filas relacionadas", level: "intermedio" },
  { name: "USERELATIONSHIP", url: "dax/relaciones.html#userelationship", category: "Relaciones", categoryIcon: "🔗", description: "Activa temporalmente una relación inactiva del modelo", level: "avanzado" },
  { name: "CROSSFILTER", url: "dax/relaciones.html#crossfilter", category: "Relaciones", categoryIcon: "🔗", description: "Cambia la dirección de filtrado de una relación (NONE, ONEWAY, BOTH)", level: "avanzado" },

  // ─── INFORMACIÓN → dax/informacion.html ───
  { name: "ISNUMBER", url: "dax/informacion.html#is-tipo", category: "Información", categoryIcon: "🔍", description: "TRUE si el valor es un número", level: "principiante" },
  { name: "ISTEXT", url: "dax/informacion.html#is-tipo", category: "Información", categoryIcon: "🔍", description: "TRUE si el valor es texto", level: "principiante" },
  { name: "ISLOGICAL", url: "dax/informacion.html#is-tipo", category: "Información", categoryIcon: "🔍", description: "TRUE si el valor es lógico (TRUE o FALSE)", level: "principiante" },
  { name: "ISDATE", url: "dax/informacion.html#is-tipo", category: "Información", categoryIcon: "🔍", description: "TRUE si el valor es una fecha", level: "principiante" },
  { name: "ISBLANK", url: "dax/informacion.html#is-valor", category: "Información", categoryIcon: "🔍", description: "TRUE si el valor es BLANK() — el valor nulo de DAX", level: "principiante" },
  { name: "ISEMPTY", url: "dax/informacion.html#is-valor", category: "Información", categoryIcon: "🔍", description: "TRUE si la tabla no tiene filas — imprescindible antes de operar con tablas filtradas", level: "intermedio" },
  { name: "ISONORAFTER", url: "dax/informacion.html#is-valor", category: "Información", categoryIcon: "🔍", description: "TRUE si los valores son posteriores o iguales a los de orden dado — para paginación", level: "avanzado" },
  { name: "HASONEFILTER", url: "dax/informacion.html#is-contexto", category: "Información", categoryIcon: "🔍", description: "TRUE si hay exactamente un filtro directo sobre la columna", level: "avanzado" },
  { name: "ISFILTERED", url: "dax/informacion.html#is-contexto", category: "Información", categoryIcon: "🔍", description: "TRUE si la columna tiene algún filtro directo en el contexto actual", level: "avanzado" },
  { name: "ISCROSSFILTERED", url: "dax/informacion.html#is-contexto", category: "Información", categoryIcon: "🔍", description: "TRUE si la columna tiene filtros directos O a través de relaciones", level: "avanzado" },
  { name: "ISINSCOPE", url: "dax/informacion.html#is-scope", category: "Información", categoryIcon: "🔍", description: "TRUE si la columna está en el nivel de agrupación actual del visual — clave para matrices", level: "avanzado" },
  { name: "ISATLEVEL", url: "dax/informacion.html#is-scope", category: "Información", categoryIcon: "🔍", description: "TRUE si la columna está en el nivel EXACTO de agrupación actual", level: "avanzado" },
  { name: "USERNAME", url: "dax/informacion.html#info-usuario", category: "Información", categoryIcon: "🔍", description: "Nombre del usuario actual en formato DOMINIO\\usuario", level: "intermedio" },
  { name: "USERPRINCIPALNAME", url: "dax/informacion.html#info-usuario", category: "Información", categoryIcon: "🔍", description: "Email del usuario en Power BI Service — imprescindible para RLS dinámica", level: "intermedio" },
  { name: "CUSTOMDATA", url: "dax/informacion.html#info-usuario", category: "Información", categoryIcon: "🔍", description: "Valor de la propiedad CustomData de la conexión — para Power BI Embedded", level: "avanzado" },
  { name: "CONTAINS", url: "dax/informacion.html#containsrow", category: "Información", categoryIcon: "🔍", description: "TRUE si existe una fila con los valores especificados en la tabla", level: "intermedio" },
  { name: "CONTAINSROW", url: "dax/informacion.html#containsrow", category: "Información", categoryIcon: "🔍", description: "TRUE si la fila especificada (como ROW) existe en la tabla", level: "avanzado" },
  { name: "INFO.VIEW.TABLES", url: "dax/informacion.html#info-view", category: "Información", categoryIcon: "🔍", description: "Devuelve información sobre todas las tablas del modelo: nombre, descripción, modo de almacenamiento y si está oculta", level: "intermedio", isNew: true },
  { name: "INFO.VIEW.COLUMNS", url: "dax/informacion.html#info-view", category: "Información", categoryIcon: "🔍", description: "Devuelve información sobre todas las columnas del modelo: nombre, tabla, tipo de dato, descripción y expresión DAX si es calculada", level: "intermedio", isNew: true },
  { name: "INFO.VIEW.MEASURES", url: "dax/informacion.html#info-view", category: "Información", categoryIcon: "🔍", description: "Devuelve información sobre todas las medidas del modelo: nombre, fórmula DAX, formato, descripción y estado de validación", level: "intermedio", isNew: true },
  { name: "INFO.VIEW.RELATIONSHIPS", url: "dax/informacion.html#info-view", category: "Información", categoryIcon: "🔍", description: "Devuelve información sobre todas las relaciones del modelo: tablas, columnas, cardinalidad, dirección de filtro y si está activa", level: "intermedio", isNew: true },
  { name: "INFO.MEASURES", url: "dax/informacion.html#info-vs-infoview", category: "Información", categoryIcon: "🔍", description: "Lista todas las medidas del modelo — versión avanzada solo para DAX Query View, usa IDs numéricos", level: "avanzado" },
  { name: "INFO.COLUMNS", url: "dax/informacion.html#info-vs-infoview", category: "Información", categoryIcon: "🔍", description: "Lista todas las columnas del modelo — versión avanzada solo para DAX Query View", level: "avanzado" },
  { name: "INFO.TABLES", url: "dax/informacion.html#info-vs-infoview", category: "Información", categoryIcon: "🔍", description: "Lista todas las tablas del modelo — versión avanzada solo para DAX Query View", level: "avanzado" },
  { name: "INFO.RELATIONSHIPS", url: "dax/informacion.html#info-vs-infoview", category: "Información", categoryIcon: "🔍", description: "Lista todas las relaciones del modelo — versión avanzada solo para DAX Query View", level: "avanzado" },
  { name: "INFO.PARTITIONS", url: "dax/informacion.html#info-vs-infoview", category: "Información", categoryIcon: "🔍", description: "Lista todas las particiones del modelo — solo DAX Query View", level: "avanzado" },
  { name: "INFO.HIERARCHIES", url: "dax/informacion.html#info-vs-infoview", category: "Información", categoryIcon: "🔍", description: "Lista todas las jerarquías del modelo — solo DAX Query View", level: "avanzado" },
  { name: "INFO.ROLES", url: "dax/informacion.html#info-vs-infoview", category: "Información", categoryIcon: "🔍", description: "Lista todos los roles de seguridad RLS del modelo — solo DAX Query View", level: "avanzado" },
  { name: "INFO.CALCULATIONGROUPS", url: "dax/informacion.html#info-vs-infoview", category: "Información", categoryIcon: "🔍", description: "Lista todos los grupos de cálculo del modelo — solo DAX Query View", level: "avanzado" },
  { name: "INFO.CALCULATIONITEMS", url: "dax/informacion.html#info-vs-infoview", category: "Información", categoryIcon: "🔍", description: "Lista todos los ítems de cálculo del modelo — solo DAX Query View", level: "avanzado" },
  { name: "INFO.KPIS", url: "dax/informacion.html#info-vs-infoview", category: "Información", categoryIcon: "🔍", description: "Lista todos los KPIs definidos en el modelo — solo DAX Query View", level: "avanzado" },
  { name: "INFO.FUNCTIONS", url: "dax/informacion.html#info-vs-infoview", category: "Información", categoryIcon: "🔍", description: "Devuelve información sobre todas las funciones DAX disponibles — solo DAX Query View", level: "avanzado" },

  // ─── FINANCIERAS → dax/financieras.html ───
  { name: "PV", url: "dax/financieras.html#basicas", category: "Financieras", categoryIcon: "💰", description: "Valor Presente de una serie de pagos futuros regulares", level: "avanzado" },
  { name: "FV", url: "dax/financieras.html#basicas", category: "Financieras", categoryIcon: "💰", description: "Valor Futuro de una inversión con pagos periódicos constantes", level: "avanzado" },
  { name: "NPV", url: "dax/financieras.html#basicas", category: "Financieras", categoryIcon: "💰", description: "Valor Presente Neto de flujos de caja en períodos regulares", level: "avanzado" },
  { name: "XNPV", url: "dax/financieras.html#basicas", category: "Financieras", categoryIcon: "💰", description: "VPN con flujos de caja en fechas irregulares — más realista que NPV", level: "avanzado" },
  { name: "RATE", url: "dax/financieras.html#tasas", category: "Financieras", categoryIcon: "💰", description: "Calcula la tasa de interés de un préstamo dadas sus condiciones", level: "avanzado" },
  { name: "IRR", url: "dax/financieras.html#tasas", category: "Financieras", categoryIcon: "💰", description: "Tasa Interna de Retorno para flujos en períodos regulares", level: "avanzado" },
  { name: "XIRR", url: "dax/financieras.html#tasas", category: "Financieras", categoryIcon: "💰", description: "TIR con flujos de caja en fechas irregulares", level: "avanzado" },
  { name: "YIELDDISC", url: "dax/financieras.html#tasas", category: "Financieras", categoryIcon: "💰", description: "Rendimiento de un bono con descuento (letra del tesoro)", level: "avanzado" },
  { name: "YIELDMAT", url: "dax/financieras.html#tasas", category: "Financieras", categoryIcon: "💰", description: "Rendimiento a vencimiento con interés pagado al vencimiento", level: "avanzado" },
  { name: "PMT", url: "dax/financieras.html#pagos", category: "Financieras", categoryIcon: "💰", description: "Cuota periódica de un préstamo (hipoteca, financiación)", level: "avanzado" },
  { name: "IPMT", url: "dax/financieras.html#pagos", category: "Financieras", categoryIcon: "💰", description: "Parte de interés de una cuota específica de un préstamo", level: "avanzado" },
  { name: "PPMT", url: "dax/financieras.html#pagos", category: "Financieras", categoryIcon: "💰", description: "Parte de capital (principal) de una cuota específica de un préstamo", level: "avanzado" },
  { name: "NPER", url: "dax/financieras.html#pagos", category: "Financieras", categoryIcon: "💰", description: "Número de períodos necesarios para pagar un préstamo", level: "avanzado" },
  { name: "CUMIPMT", url: "dax/financieras.html#pagos", category: "Financieras", categoryIcon: "💰", description: "Intereses acumulados entre dos períodos de un préstamo", level: "avanzado" },
  { name: "CUMPRINC", url: "dax/financieras.html#pagos", category: "Financieras", categoryIcon: "💰", description: "Principal amortizado acumulado entre dos períodos", level: "avanzado" },
  { name: "SLN", url: "dax/financieras.html#depreciacion", category: "Financieras", categoryIcon: "💰", description: "Depreciación en línea recta — el mismo importe cada período", level: "avanzado" },
  { name: "SYD", url: "dax/financieras.html#depreciacion", category: "Financieras", categoryIcon: "💰", description: "Depreciación por suma de dígitos — más amortización al inicio", level: "avanzado" },
  { name: "DB", url: "dax/financieras.html#depreciacion", category: "Financieras", categoryIcon: "💰", description: "Depreciación por saldo decreciente fijo", level: "avanzado" },
  { name: "DDB", url: "dax/financieras.html#depreciacion", category: "Financieras", categoryIcon: "💰", description: "Depreciación doble saldo decreciente", level: "avanzado" },
  { name: "VDB", url: "dax/financieras.html#depreciacion", category: "Financieras", categoryIcon: "💰", description: "Depreciación variable — el método más flexible y completo", level: "avanzado" },
  { name: "ACCRINT", url: "dax/financieras.html#bonos", category: "Financieras", categoryIcon: "💰", description: "Interés acumulado de un valor con pagos de interés periódicos", level: "avanzado" },
  { name: "ACCRINTM", url: "dax/financieras.html#bonos", category: "Financieras", categoryIcon: "💰", description: "Interés acumulado de un valor que paga interés al vencimiento", level: "avanzado" },
  { name: "RECEIVED", url: "dax/financieras.html#bonos", category: "Financieras", categoryIcon: "💰", description: "Importe recibido al vencimiento de un valor totalmente invertido", level: "avanzado" },
  { name: "DISC", url: "dax/financieras.html#bonos", category: "Financieras", categoryIcon: "💰", description: "Tasa de descuento de un valor", level: "avanzado" },
  { name: "INTRATE", url: "dax/financieras.html#bonos", category: "Financieras", categoryIcon: "💰", description: "Tipo de interés de un valor totalmente invertido", level: "avanzado" },
  { name: "COUPDAYBS", url: "dax/financieras.html#copon", category: "Financieras", categoryIcon: "💰", description: "Días desde el inicio del período de cupón hasta la liquidación", level: "avanzado" },
  { name: "COUPDAYS", url: "dax/financieras.html#copon", category: "Financieras", categoryIcon: "💰", description: "Días en el período del cupón actual", level: "avanzado" },
  { name: "COUPDAYSNC", url: "dax/financieras.html#copon", category: "Financieras", categoryIcon: "💰", description: "Días desde la liquidación hasta el próximo cupón", level: "avanzado" },
  { name: "COUPNCD", url: "dax/financieras.html#copon", category: "Financieras", categoryIcon: "💰", description: "Fecha del próximo cupón después de la liquidación", level: "avanzado" },
  { name: "COUPNUM", url: "dax/financieras.html#copon", category: "Financieras", categoryIcon: "💰", description: "Número de cupones pendientes entre liquidación y vencimiento", level: "avanzado" },
  { name: "COUPPCD", url: "dax/financieras.html#copon", category: "Financieras", categoryIcon: "💰", description: "Fecha del último cupón antes de la liquidación", level: "avanzado" },
  { name: "PRICE", url: "dax/financieras.html#precio-rendimiento", category: "Financieras", categoryIcon: "💰", description: "Precio de un bono con pagos periódicos de cupón", level: "avanzado" },
  { name: "PRICEDISC", url: "dax/financieras.html#precio-rendimiento", category: "Financieras", categoryIcon: "💰", description: "Precio de un valor con descuento (sin cupones)", level: "avanzado" },
  { name: "PRICEMAT", url: "dax/financieras.html#precio-rendimiento", category: "Financieras", categoryIcon: "💰", description: "Precio de un valor que paga interés al vencimiento", level: "avanzado" },
  { name: "YIELD", url: "dax/financieras.html#precio-rendimiento", category: "Financieras", categoryIcon: "💰", description: "Rendimiento de un bono con pagos periódicos", level: "avanzado" },
  { name: "EFFECT", url: "dax/financieras.html#conversiones", category: "Financieras", categoryIcon: "💰", description: "Convierte tasa nominal a tasa efectiva anual (TAE)", level: "avanzado" },
  { name: "NOMINAL", url: "dax/financieras.html#conversiones", category: "Financieras", categoryIcon: "💰", description: "Convierte tasa efectiva a tasa nominal", level: "avanzado" },
  { name: "DOLLARDE", url: "dax/financieras.html#conversiones", category: "Financieras", categoryIcon: "💰", description: "Convierte precio de bonos de formato fraccionario a decimal", level: "avanzado" },
  { name: "DOLLARFR", url: "dax/financieras.html#conversiones", category: "Financieras", categoryIcon: "💰", description: "Convierte precio de bonos de formato decimal a fraccionario", level: "avanzado" },

  // ─── PADRE-HIJO → dax/padre-hijo.html ───
  { name: "PATH", url: "dax/padre-hijo.html#path", category: "Padre-Hijo", categoryIcon: "🌳", description: "Genera la ruta completa desde la raíz hasta el nodo actual — base de las jerarquías irregulares", level: "avanzado" },
  { name: "PATHLENGTH", url: "dax/padre-hijo.html#pathlength", category: "Padre-Hijo", categoryIcon: "🌳", description: "Devuelve la profundidad del nodo en la jerarquía (raíz=1)", level: "avanzado" },
  { name: "PATHITEM", url: "dax/padre-hijo.html#pathitem", category: "Padre-Hijo", categoryIcon: "🌳", description: "Extrae el elemento en la posición indicada del path (desde la raíz)", level: "avanzado" },
  { name: "PATHITEMREVERSE", url: "dax/padre-hijo.html#pathitem", category: "Padre-Hijo", categoryIcon: "🌳", description: "Extrae el elemento en la posición indicada del path (desde el nodo actual)", level: "avanzado" },
  { name: "PATHCONTAINS", url: "dax/padre-hijo.html#pathcontains", category: "Padre-Hijo", categoryIcon: "🌳", description: "TRUE si el elemento está en el path — para filtrar descendientes", level: "avanzado" },

  // ─── VISUAL CALCULATIONS → dax/visual-calcs.html ───
  { name: "RUNNINGSUM", url: "dax/visual-calcs.html#runningsum", category: "Visual Calculations", categoryIcon: "✨", description: "Total acumulado dentro de un visual — sin necesidad de tabla de calendario", level: "intermedio", isNew: true },
  { name: "MOVINGAVERAGE", url: "dax/visual-calcs.html#movingaverage", category: "Visual Calculations", categoryIcon: "✨", description: "Media móvil dentro de un visual en una sola línea de código", level: "intermedio", isNew: true },
  { name: "FIRST", url: "dax/visual-calcs.html#firstlast", category: "Visual Calculations", categoryIcon: "✨", description: "Valor de la primera fila del visual — para variación vs inicio", level: "intermedio", isNew: true },
  { name: "LAST", url: "dax/visual-calcs.html#firstlast", category: "Visual Calculations", categoryIcon: "✨", description: "Valor de la última fila del visual", level: "intermedio", isNew: true },
  { name: "NEXT", url: "dax/visual-calcs.html#firstlast", category: "Visual Calculations", categoryIcon: "✨", description: "Valor de la fila siguiente en el visual", level: "intermedio", isNew: true },
  { name: "PREVIOUS", url: "dax/visual-calcs.html#firstlast", category: "Visual Calculations", categoryIcon: "✨", description: "Valor de la fila anterior en el visual — variación MoM sin tabla calendario", level: "intermedio", isNew: true },
  { name: "COLLAPSE", url: "dax/visual-calcs.html#collapse-expand", category: "Visual Calculations", categoryIcon: "✨", description: "Sube al nivel padre en una jerarquía de matriz visual", level: "avanzado", isNew: true },
  { name: "COLLAPSEALL", url: "dax/visual-calcs.html#collapse-expand", category: "Visual Calculations", categoryIcon: "✨", description: "Sube al nivel raíz de la jerarquía visual", level: "avanzado", isNew: true },
  { name: "EXPAND", url: "dax/visual-calcs.html#collapse-expand", category: "Visual Calculations", categoryIcon: "✨", description: "Baja al nivel hijo inmediato en la jerarquía visual", level: "avanzado", isNew: true },
  { name: "EXPANDALL", url: "dax/visual-calcs.html#collapse-expand", category: "Visual Calculations", categoryIcon: "✨", description: "Baja al nivel más bajo de la jerarquía visual", level: "avanzado", isNew: true },
  { name: "RANGE", url: "dax/visual-calcs.html#range", category: "Visual Calculations", categoryIcon: "✨", description: "Define ventanas relativas personalizadas dentro del visual", level: "avanzado", isNew: true },

  // ─── WINDOW FUNCTIONS → dax/window-functions.html ───
  { name: "WINDOW", url: "dax/window-functions.html#window", category: "Window Functions", categoryIcon: "🪟", description: "Función de ventana base — define un rango de filas para cálculos contextuales avanzados", level: "avanzado", isNew: true },
  { name: "OFFSET", url: "dax/window-functions.html#offset", category: "Window Functions", categoryIcon: "🪟", description: "Accede a una fila N posiciones antes o después — como LAG/LEAD en SQL", level: "avanzado", isNew: true },
  { name: "INDEX", url: "dax/window-functions.html#index", category: "Window Functions", categoryIcon: "🪟", description: "Accede a una fila en posición absoluta (INDEX(1)=primera, INDEX(-1)=última)", level: "avanzado", isNew: true },
  { name: "RANK", url: "dax/window-functions.html#rank-rownumber", category: "Window Functions", categoryIcon: "🪟", description: "Ranking eficiente en tablas calculadas — complementa a RANKX para medidas", level: "avanzado", isNew: true },
  { name: "ROWNUMBER", url: "dax/window-functions.html#rank-rownumber", category: "Window Functions", categoryIcon: "🪟", description: "Número de fila único y secuencial — útil como clave en tablas calculadas", level: "avanzado", isNew: true },
  { name: "ORDERBY", url: "dax/window-functions.html#auxiliares", category: "Window Functions", categoryIcon: "🪟", description: "Define el criterio de ordenación dentro de funciones de ventana", level: "avanzado", isNew: true },
  { name: "PARTITIONBY", url: "dax/window-functions.html#auxiliares", category: "Window Functions", categoryIcon: "🪟", description: "Divide los datos en grupos independientes — como PARTITION BY en SQL", level: "avanzado", isNew: true },
  { name: "MATCHBY", url: "dax/window-functions.html#auxiliares", category: "Window Functions", categoryIcon: "🪟", description: "Identifica de forma única la fila actual en funciones de ventana", level: "avanzado", isNew: true },

  // ─── GRUPOS DE CÁLCULO → dax/grupos-calculo.html ───
  { name: "SELECTEDMEASURE", url: "dax/grupos-calculo.html#selectedmeasure", category: "Grupos de Cálculo", categoryIcon: "⚗️", description: "Marcador de posición para la medida activa en un Grupo de Cálculo", level: "avanzado" },
  { name: "ISSELECTEDMEASURE", url: "dax/grupos-calculo.html#isselectedmeasure", category: "Grupos de Cálculo", categoryIcon: "⚗️", description: "TRUE si la medida activa es una de las indicadas — para lógica condicional en cálculo items", level: "avanzado" },
  { name: "SELECTEDMEASURENAME", url: "dax/grupos-calculo.html#selectedmeasurename", category: "Grupos de Cálculo", categoryIcon: "⚗️", description: "Nombre como texto de la medida activa en el Grupo de Cálculo", level: "avanzado" },
  { name: "SELECTEDMEASUREFORMATSTRING", url: "dax/grupos-calculo.html#selectedmeasureformatstring", category: "Grupos de Cálculo", categoryIcon: "⚗️", description: "Formato string de la medida activa — para heredar el formato en Calculation Items", level: "avanzado" },
  { name: "NAMEOF", url: "dax/grupos-calculo.html#nameof", category: "Grupos de Cálculo", categoryIcon: "⚗️", description: "Referencia segura a objetos del modelo — evita bugs si renombras columnas o medidas", level: "avanzado" }
];

// ─────────────────────────────────────────────────────
// PARTE B: Clase DaxSearch
// ─────────────────────────────────────────────────────

/**
 * Función auxiliar: normalizar texto para búsqueda
 * Elimina puntos, espacios, y convierte a minúsculas
 */
function normalizeText(text) {
  return text.toLowerCase().replace(/[.\s]/g, '');
}

/**
 * Función auxiliar: resalta la coincidencia con <mark>
 */
function highlightMatch(text, query) {
  if (!query) return text;

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

/**
 * Función auxiliar: genera el badge de nivel
 */
function getLevelBadge(level) {
  const badges = {
    principiante: '<span class="dax-level-badge dax-level-badge--beginner">🟢 Principiante</span>',
    intermedio: '<span class="dax-level-badge dax-level-badge--intermediate">🟡 Intermedio</span>',
    avanzado: '<span class="dax-level-badge dax-level-badge--advanced">🔴 Avanzado</span>'
  };
  return badges[level] || '';
}

/**
 * Función auxiliar: detecta la página actual
 */
function detectCurrentPage() {
  const path = window.location.pathname;

  if (path.includes('/dax/')) {
    return 'subpage'; // estamos en topics/dax/ALGO.html
  } else if (path.includes('/topics/dax.html')) {
    return 'hub'; // estamos en topics/dax.html
  } else {
    return 'other';
  }
}

/**
 * Clase principal del buscador DAX
 */
class DaxSearch {
  constructor(functions, options = {}) {
    this.functions = functions;
    this.maxResults = options.maxResults || 8;
    this.baseUrl = options.baseUrl || '';
    this.onNavigate = options.onNavigate || null;
    this.searchTimeout = null;
  }

  /**
   * Busca funciones según el query
   * Devuelve array de resultados ordenados por relevancia
   */
  search(query) {
    if (!query || query.trim().length === 0) {
      return [];
    }

    const normalizedQuery = normalizeText(query);
    const results = [];

    this.functions.forEach(func => {
      const normalizedName = normalizeText(func.name);
      const normalizedDesc = normalizeText(func.description);
      const normalizedCategory = normalizeText(func.category);

      let score = 0;
      let highlightedName = func.name;

      // 1. Coincidencia EXACTA con el nombre (score 100)
      if (normalizedName === normalizedQuery) {
        score = 100;
        highlightedName = `<mark>${func.name}</mark>`;
      }
      // 2. El nombre EMPIEZA por el query (score 80)
      else if (normalizedName.startsWith(normalizedQuery)) {
        score = 80;
        highlightedName = highlightMatch(func.name, query);
      }
      // 3. El nombre CONTIENE el query (score 60)
      else if (normalizedName.includes(normalizedQuery)) {
        score = 60;
        highlightedName = highlightMatch(func.name, query);
      }
      // 4. La descripción CONTIENE el query (score 40)
      else if (normalizedDesc.includes(normalizedQuery)) {
        score = 40;
        highlightedName = func.name;
      }
      // 5. La categoría CONTIENE el query (score 20)
      else if (normalizedCategory.includes(normalizedQuery)) {
        score = 20;
        highlightedName = func.name;
      }

      // Bonus: funciones nuevas obtienen +5 puntos
      if (func.isNew && score > 0) {
        score += 5;
      }

      if (score > 0) {
        results.push({
          ...func,
          score,
          highlightedName
        });
      }
    });

    // Ordenar por score (desc), luego alfabéticamente
    results.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.name.localeCompare(b.name);
    });

    // Limitar resultados
    return results.slice(0, this.maxResults);
  }

  /**
   * Navega a la URL de una función
   * Ajusta la URL relativa según la página actual
   */
  navigate(url) {
    const currentPage = detectCurrentPage();
    let finalUrl = url;

    if (currentPage === 'subpage') {
      // Estamos en topics/dax/ALGO.html
      // Las URLs del índice son relativas a topics/ (ej: "dax/agregacion.html#suma")
      // Necesitamos ir a "../dax/agregacion.html#suma"
      finalUrl = `../${url}`;
    } else if (currentPage === 'hub') {
      // Estamos en topics/dax.html
      // Las URLs ya son correctas (ej: "dax/agregacion.html#suma")
      finalUrl = url;
    }

    if (this.onNavigate) {
      this.onNavigate(finalUrl);
    } else {
      window.location.href = finalUrl;
    }
  }

  /**
   * Conecta la lógica de búsqueda a un input existente
   */
  bindToInput(inputEl, resultsEl, clearBtn, options = {}) {
    if (!inputEl || !resultsEl) return;

    let activeIndex = -1;
    const self = this;

    // Input event: búsqueda en tiempo real con debounce
    inputEl.addEventListener('input', function(e) {
      const query = e.target.value.trim();

      // Mostrar/ocultar botón de limpiar
      if (clearBtn) {
        clearBtn.hidden = query.length === 0;
      }

      // Debounce de 150ms
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

    // Keydown: navegación por teclado
    inputEl.addEventListener('keydown', function(e) {
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

    // Click en botón de limpiar
    if (clearBtn) {
      clearBtn.addEventListener('click', function() {
        inputEl.value = '';
        inputEl.focus();
        resultsEl.classList.remove('is-open');
        resultsEl.innerHTML = '';
        clearBtn.hidden = true;
        inputEl.setAttribute('aria-expanded', 'false');
      });
    }

    // Blur: cerrar dropdown (con delay para permitir clicks)
    inputEl.addEventListener('blur', function() {
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
            Prueba con el inicio del nombre, ej: "SUM" en vez de "SUMX completo"
          </p>
        </div>
      `;
      resultsEl.classList.add('is-open');
      return;
    }

    const itemsHtml = results.map((result, index) => {
      const newBadge = result.isNew ? '<span class="dax-search-new-badge">2024</span>' : '';

      return `
        <div class="dax-search-result-item" role="option" data-url="${this.escapeHtml(result.url)}" data-index="${index}">
          <span class="dax-search-result-icon">${result.categoryIcon}</span>
          <div class="dax-search-result-body">
            <div class="dax-search-result-name">
              ${result.highlightedName}
              ${newBadge}
            </div>
            <div class="dax-search-result-desc">${this.escapeHtml(result.description)}</div>
            <div class="dax-search-result-meta">
              <span class="dax-search-result-category">${result.categoryIcon} ${this.escapeHtml(result.category)}</span>
              ${getLevelBadge(result.level)}
            </div>
          </div>
        </div>
      `;
    }).join('');

    const hintHtml = `
      <div class="dax-search-hint">
        <span>↑↓ navegar · Enter abrir · Esc cerrar</span>
      </div>
    `;

    resultsEl.innerHTML = itemsHtml + hintHtml;
    resultsEl.classList.add('is-open');

    // Añadir event listeners a cada item
    const items = resultsEl.querySelectorAll('.dax-search-result-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const url = item.getAttribute('data-url');
        this.navigate(url);
      });
    });
  }

  /**
   * Actualiza el item activo en la navegación por teclado
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
   * Inicializa todos los widgets con data-dax-search="true"
   */
  initAll(options = {}) {
    const widgets = document.querySelectorAll('[data-dax-search="true"]');

    widgets.forEach(wrapper => {
      const input = wrapper.querySelector('.dax-search-input');
      const results = wrapper.querySelector('.dax-search-results');
      const clearBtn = wrapper.querySelector('.dax-search-clear');

      if (input && results) {
        this.bindToInput(input, results, clearBtn, options);
      }
    });
  }
}

// ─────────────────────────────────────────────────────
// Inicialización automática
// ─────────────────────────────────────────────────────

// Crear instancia global
window.daxSearch = new DaxSearch(DAX_FUNCTIONS, {
  maxResults: 8
});

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    window.daxSearch.initAll();
  });
} else {
  window.daxSearch.initAll();
}
