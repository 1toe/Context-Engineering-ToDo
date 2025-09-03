# Moléculas: Combinando Prompts con Ejemplos

> "El todo es mayor que la suma de sus partes." — Aristóteles

## De Átomos a Moléculas

En la sección anterior, exploramos los **prompts atómicos** — instrucciones individuales que forman la unidad básica de interacción con un LLM (modelo de lenguaje grande). Ahora combinaremos estos átomos en **moléculas**: contextos estructurados que incluyen ejemplos y patrones para que el modelo los siga.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                             │
│  MOLÉCULA = [INSTRUCCIÓN] + [EJEMPLOS] + [CONTEXTO] + [NUEVA ENTRADA]       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

Este enfoque molecular aprovecha una capacidad poderosa de los LLM: el **few-shot learning** (aprendizaje con pocos ejemplos).

## Few-Shot Learning: Enseñando con Ejemplos

El few-shot learning ocurre cuando proporcionamos ejemplos del patrón de entrada-salida deseado, permitiendo que el modelo reconozca y continúe el patrón.

```
┌───────────────────────────────────────────────────────────────────────┐
│ Entrada: "París"                                                      │
│ Salida: "París es la capital de Francia."                             │
│                                                                       │
│ Entrada: "Tokio"                                                      │
│ Salida: "Tokio es la capital de Japón."                               │
│                                                                       │
│ Entrada: "Ottawa"                                                     │
│ Salida: ?                                                             │
└───────────────────────────────────────────────────────────────────────┘
```

El modelo reconoce el patrón y lo completa: "Ottawa es la capital de Canadá."

## La Ventaja Molecular: Mejoras Medibles

Comparemos los enfoques atómico y molecular para la misma tarea:

```
┌───────────────────────────────────────┬──────────────────────────────────────┐
│ ENFOQUE ATÓMICO                       │ ENFOQUE MOLECULAR                    │
├───────────────────────────────────────┼──────────────────────────────────────┤
│ "Clasifica esta reseña como positiva  │ "Clasifica el sentimiento de reseñas.│
│  o negativa:                          │                                      │
│                                       │ Reseña: '¡La comida fue increíble!'  │
│  'El servicio fue terrible y          │ Sentimiento: Positivo                │
│   la comida estaba fría.'"            │                                      │
│                                       │ Reseña: 'Esperé 30 minutos y         │
│                                       │  la comida estaba fría.'             │
│                                       │ Sentimiento: Negativo                │
│                                       │                                      │
│                                       │ Reseña: 'El servicio fue terrible    │
│                                       │  y la comida estaba fría.'"          │
│                                       │ Sentimiento:                         │
└───────────────────────────────────────┴──────────────────────────────────────┘
```

El enfoque molecular típicamente logra:
- Mayor precisión (10-30% de mejora en muchas tareas)
- Mayor consistencia (menor variabilidad en las salidas)
- Mejor adherencia al formato
- Manejo más claro de casos límite

## Diseñando Plantillas Moleculares Efectivas

La estructura de tu contexto molecular importa mucho. Aquí algunos patrones comunes:

```
┌─────────────────────────┐  ┌───────────────────┐  ┌───────────────────┐
│ PREFIJO-SUFIJO          │  │ PARES ENTRADA-SALIDA│  │ CADENA DE PENSAMIENTO │
├─────────────────────────┤  ├───────────────────┤  ├───────────────────┤
│ <instrucción>           │  │ <instrucción>     │  │ <instrucción>     │
│                         │  │                   │  │                   │
│ <ejemplo1> → <resultado1>│  │ Entrada: <ejemplo1>│  │ Entrada: <ejemplo1>│
│                         │  │ Salida: <resultado1>│  │ Pensando: <paso1> │
│ <ejemplo2> → <resultado2>│  │                   │  │           <paso2> │
│                         │  │ Entrada: <ejemplo2>│  │ Salida: <resultado1>│
│ <nueva_entrada> →       │  │ Salida: <resultado2>│  │                   │
└─────────────────────────┘  │                   │  │ Entrada: <ejemplo2>│
                             │ Entrada: <nueva_entrada>│  │ Pensando: <paso1> │
                             │ Salida:           │  │           <paso2> │
                             └───────────────────┘  │ Salida: <resultado2>│
                                                    │                   │
                                                    │ Entrada: <nueva_entrada>│
                                                    │ Pensando:         │
                                                    └───────────────────┘
```

Cada plantilla tiene fortalezas para diferentes tareas:
- **Prefijo-Sufijo**: Más simple, funciona bien para tareas directas
- **Pares Entrada-Salida**: Demarcación clara, bueno para datos estructurados
- **Cadena de Pensamiento**: Expone pasos de razonamiento, ideal para tareas complejas

## La Ciencia de la Selección de Ejemplos

No todos los ejemplos son iguales. Al elegir ejemplos para tu contexto molecular:

```
┌──────────────────────────────────────────────────────────────┐
│ ESTRATEGIAS DE SELECCIÓN DE EJEMPLOS                         │
├──────────────────────────────────────────────────────────────┤
│ ✓ Cubrir casos diversos para mostrar rango                   │
│ ✓ Incluir casos límite que aclaren los límites               │
│ ✓ Ordenar de simple a complejo cuando sea posible            │
│ ✓ Usar ejemplos recientes o comunes (sesgo de recencia y frecuencia) │
│ ✓ Incluir casos cercanos para establecer límites precisos    │
└──────────────────────────────────────────────────────────────┘
```

## Midiendo la Eficiencia Molecular

A medida que crece el tamaño del contexto, también lo hace el conteo de tokens. Midamos empíricamente la relación:

```
                   [Precisión]
                       ▲
                       │                                    ● 4-ejemplos
                       │                           ● 3-ejemplos
                       │                              
                       │                   ● 2-ejemplos
                       │              
                       │           
                       │           ● 1-ejemplo
                       │      
                       │
                       │  
                       │   ● 0-ejemplo
                       └─────────────────────────────────────────────────►
                                [Tokens]
```

La clave: **rendimientos decrecientes**. Cada ejemplo adicional cuesta tokens pero aporta menos mejora que el anterior.

## Encontrando el Punto Óptimo Molecular

Para la mayoría de tareas, hay un número óptimo de ejemplos que equilibra calidad y eficiencia de tokens:

```
┌─────────────────────────────────────────────────────────────────┐
│ HEURÍSTICAS DE CANTIDAD DE EJEMPLOS POR TIPO DE TAREA           │
├───────────────────────────┬─────────────────────────────────────┤
│ Clasificación             │ 1-3 ejemplos por clase              │
├───────────────────────────┼─────────────────────────────────────┤
│ Generación                │ 2-5 ejemplos                        │
├───────────────────────────┼─────────────────────────────────────┤
│ Extracción Estructurada   │ 2-4 ejemplos cubriendo todos los campos │
├───────────────────────────┼─────────────────────────────────────┤
│ Razonamiento              │ 2-3 ejemplos con pasos de pensamiento │
├───────────────────────────┼─────────────────────────────────────┤
│ Traducción                │ 3-5 ejemplos con distinta complejidad │
└───────────────────────────┴─────────────────────────────────────┘
```

## Construcción Dinámica de Moléculas

La ingeniería de contexto avanzada implica seleccionar dinámicamente los ejemplos más relevantes para cada entrada:

```
┌───────────────────────────────────────────────────────────────────┐
│                                                                   │
│   Consulta del Usuario                                            │
│       │                                                           │
│       ▼                                                           │
│  ┌─────────────┐      ┌─────────────────┐                         │
│  │ Análisis de │      │                 │                         │
│  │ Consulta    │─────▶│ Base de Ejemplos│                         │
│  │             │      │                 │                         │
│  └─────────────┘      └─────────────────┘                         │
│                              │                                    │
│                              │ Recuperar los                      │
│                              │ ejemplos más similares             │
│                              ▼                                    │
│                       ┌─────────────────┐                         │
│                       │ Molécula        │                         │
│                       │ Dinámica        │                         │
│                       │ de Contexto     │                         │
│                       └─────────────────┘                         │
│                              │                                    │
│                              │                                    │
│                              ▼                                    │
│                       ┌─────────────────┐                         │
│                       │                 │                         │
│                       │ LLM             │                         │
│                       │                 │                         │
│                       └─────────────────┘                         │
│                                                                   │
└───────────────────────────────────────────────────────────────────┘
```

Este enfoque:
1. Analiza la consulta del usuario
2. Recupera los ejemplos más relevantes
3. Construye un contexto molecular a medida
4. Envía el contexto optimizado al LLM

## Llevándolo a la Práctica: Una Implementación Simple

Aquí tienes una función en Python que construye un contexto molecular a partir de ejemplos:

```python
def crear_contexto_molecular(instruccion, ejemplos, nueva_entrada, 
                            tipo_formato="entrada-salida"):
    """
    Construye un contexto molecular a partir de ejemplos.
    
    Args:
        instruccion (str): La instrucción de la tarea
        ejemplos (List[Dict]): Lista de pares ejemplo/resultado
        nueva_entrada (str): La nueva entrada a procesar
        tipo_formato (str): Tipo de plantilla (entrada-salida, cadena de pensamiento)
    
    Returns:
        str: El contexto molecular completo
    """
    contexto = f"{instruccion}\n\n"
    
    # Agregar ejemplos según el tipo de formato
    if tipo_formato == "entrada-salida":
        for ejemplo in ejemplos:
            contexto += f"Entrada: {ejemplo['input']}\n"
            contexto += f"Salida: {ejemplo['output']}\n\n"
    elif tipo_formato == "cadena de pensamiento":
        for ejemplo in ejemplos:
            contexto += f"Entrada: {ejemplo['input']}\n"
            contexto += f"Pensando: {ejemplo['thinking']}\n"
            contexto += f"Salida: {ejemplo['output']}\n\n"
    
    # Agregar la nueva entrada
    contexto += f"Entrada: {nueva_entrada}\nSalida:"
    
    return contexto
```

## Puntos Clave

1. **Los contextos moleculares** combinan instrucciones con ejemplos para mejorar el desempeño de los LLM
2. **Few-shot learning** permite a los modelos reconocer y continuar patrones
3. **La estructura de la plantilla** importa; diferentes formatos funcionan mejor para distintas tareas
4. **La selección de ejemplos** es una ciencia; diversidad, casos límite y orden son relevantes
5. **Existen rendimientos decrecientes**; cada ejemplo adicional cuesta tokens con menor beneficio
6. **La construcción dinámica** puede optimizar el contexto para cada entrada específica

## Ejercicios para Practicar

1. Toma una tarea de clasificación simple y mide el desempeño con 0, 1, 3 y 5 ejemplos
2. Compara diferentes estructuras de plantilla en la misma tarea
3. Implementa selección dinámica de ejemplos basada en similitud con la nueva entrada
4. Encuentra la "molécula mínima viable" para una tarea que te interese

## Próximos Pasos

En la siguiente sección, exploraremos las **células** — estructuras de contexto que mantienen memoria y estado a lo largo de múltiples interacciones.

[Continuar a 03_cells_memory.md →](03_cells_memory.md)

---

## Profundizando: Prompt Engineering vs. Context Engineering

El prompt engineering (ingeniería de prompts) se enfoca en crear la instrucción perfecta. La context engineering (ingeniería de contexto) abarca eso y más:

```
┌─────────────────────────────────────────────────────────────────────┐
│ CAPAS DE LA INGENIERÍA DE CONTEXTO                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌─────────────────┐                                               │
│   │ Estado y Memoria│  Historial de conversación, variables persistentes │
│   └─────────────────┘                                               │
│           ▲                                                         │
│           │                                                         │
│   ┌─────────────────┐                                               │
│   │ Datos Recuperados│  RAG, salidas de herramientas, conocimiento externo │
│   └─────────────────┘                                               │
│           ▲                                                         │
│           │                                                         │
│   ┌─────────────────┐                                               │
│   │ Ejemplos        │  Few-shot learning, demostraciones            │
│   └─────────────────┘                                               │
│           ▲                                                         │
│           │                                                         │
│   ┌─────────────────┐                                               │
│   │ Instrucciones   │  Prompts, mensajes de sistema, restricciones  │
│   └─────────────────┘                                               │
│           ▲                                                         │
│           │                                                         │
│   ┌─────────────────┐                                               │
│   │ Comportamiento  │  Datos de entrenamiento, alineamientos,       │
│   │ del Modelo      │  capacidades                                  │
│   └─────────────────┘                                               │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

La ingeniería de contexto te da control sobre más de estas capas, permitiendo aplicaciones más poderosas.
