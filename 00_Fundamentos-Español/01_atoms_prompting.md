# Átomos: La Unidad Fundamental del Prompting

> "Si deseas hacer una tarta de manzana desde cero, primero debes inventar el universo." — Carl Sagan

## El Átomo: Una Sola Instrucción

En nuestro recorrido por la ingeniería de contexto, comenzamos con la unidad más fundamental: el **átomo** — una sola instrucción independiente para un LLM (modelo de lenguaje grande).

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│  "Escribe un poema sobre el océano en 4 líneas."      │
│                                                      │
└──────────────────────────────────────────────────────┘
```

Esto es ingeniería de prompts en su forma más pura: una persona, una instrucción, una respuesta del modelo. Simple, directo, atómico.

## La Anatomía de un Prompt Atómico

Desglosemos qué hace efectivo a un prompt atómico:

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  PROMPT ATÓMICO = [TAREA] + [RESTRICCIONES] + [FORMATO DE SALIDA]  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

Por ejemplo:

```
┌─────────────────────┬────────────────────────┬────────────────────┐
│        TAREA        │      RESTRICCIONES     │   FORMATO DE SALIDA│
├─────────────────────┼────────────────────────┼────────────────────┤
│ "Escribe un poema   │ "sobre el océano       │ "en 4 líneas."     │
│  sobre el espacio." │  usando solo palabras  │                    │
│                     │  de 5 letras o menos." │                    │
└─────────────────────┴────────────────────────┴────────────────────┘
```

## Las Limitaciones de los Átomos

Aunque los prompts atómicos son los bloques de construcción de las interacciones con LLM, rápidamente revelan limitaciones fundamentales:

```
┌──────────────────────────────────────┐
│ LIMITACIONES DE LOS PROMPTS ATÓMICOS │
├──────────────────────────────────────┤
│ ✗ Sin memoria entre interacciones    │
│ ✗ Capacidad limitada de demostración │
│ ✗ Sin andamiaje de razonamiento      │
│ ✗ Propensos a la ambigüedad          │
│ ✗ Alta variabilidad en las salidas   │
└──────────────────────────────────────┘
```

Midámoslo empíricamente con un experimento simple:

```python
# Un prompt atómico básico
atomic_prompt = "Enumera 5 síntomas de la diabetes."

# Enviar al LLM varias veces
responses = [llm.generate(atomic_prompt) for _ in range(5)]

# Medir la variabilidad
unique_symptoms = set()
for response in responses:
    symptoms = extract_symptoms(response)
    unique_symptoms.update(symptoms)

print(f"Se encontraron {len(unique_symptoms)} síntomas únicos en 5 prompts idénticos")
# Normalmente muestra muchos más de solo 5 síntomas únicos
```

¿El problema? Los modelos tienen dificultades para ser consistentes cuando se les da un contexto mínimo.

## La Línea Base de un Solo Átomo: Útil Pero Limitada

A pesar de sus limitaciones, los prompts atómicos establecen nuestra línea base. Nos ayudan a:

1. Medir la eficiencia de tokens (mínima sobrecarga)
2. Evaluar la calidad de la respuesta
3. Establecer un control para experimentos

```
                     [Calidad de Respuesta]
                            ▲
                            │
                            │               ⭐ Context
                            │                 Engineering (Ingeniería de Contexto)
                            │               
                            │           ⭐ Advanced
                            │             Prompting (Prompting Avanzado)
                            │
                            │   ⭐ Basic Prompting (Prompting Básico)
                            │
                            │
                            └────────────────────────►
                                  [Complejidad]
```

## El Contexto No Expreso: Lo Que los Modelos Ya "Saben"

Incluso con prompts atómicos, los LLM aprovechan un contexto implícito masivo de su entrenamiento:

```
┌───────────────────────────────────────────────────────────────┐
│ CONTEXTO IMPLÍCITO EN LOS MODELOS                            │
├───────────────────────────────────────────────────────────────┤
│ ✓ Reglas y gramática del lenguaje                            │
│ ✓ Hechos de conocimiento común                               │
│ ✓ Convenciones de formato (listas, párrafos, etc.)           │
│ ✓ Conocimiento específico de dominio (varía por modelo)      │
│ ✓ Patrones de interacción aprendidos                         │
└───────────────────────────────────────────────────────────────┘
```

Este conocimiento implícito nos da una base, pero es poco confiable y varía entre modelos y versiones.

## La Ley de Potencia: Curva de Tokens-Calidad

Para muchas tareas, observamos una relación de ley de potencia entre los tokens de contexto y la calidad de la salida:

```
    Calidad
      ▲
      │    •
      │        •
      │            •
      │                •
      │                    •
      │                        •         •         •
      │                              
      └───────────────────────────────────────────► Tokens
                                      
          [Zona de Máximo ROI]       [Rendimientos Decrecientes]
```

El punto clave: hay una "zona de máximo ROI" donde agregar solo unos pocos tokens produce mejoras dramáticas en la calidad, así como "rendimientos decrecientes", donde agregar más tokens en realidad degrada el rendimiento.

## [Leer más sobre Context Rot](https://research.trychroma.com/context-rot)

## De Átomos a Moléculas: La Necesidad de Más Contexto

Las limitaciones de los átomos nos llevan naturalmente al siguiente paso: **moléculas**, o prompts multiparte que combinan instrucciones con ejemplos, contexto adicional y formatos estructurados.

Aquí está la transición fundamental:

```
┌──────────────────────────┐         ┌──────────────────────────┐
│                          │         │ "Aquí tienes un ejemplo:│
│ "Escribe una limerick    │    →    │  Había una vez un...    │
│  sobre un programador."  │         │                          │
│                          │         │  Ahora escribe una      │
└──────────────────────────┘         │  limerick sobre un       │
                                     │  programador."           │
                                     └──────────────────────────┘
    [Prompt Atómico]                       [Prompt Molecular]
```

Al agregar ejemplos y estructura, comenzamos a moldear deliberadamente la ventana de contexto—el primer paso hacia la ingeniería de contexto.

## Midiendo la Eficiencia del Átomo: Tu Primera Tarea

Antes de avanzar, prueba este ejercicio sencillo:

1. Toma una tarea básica que le darías a un LLM
2. Crea tres versiones diferentes de prompts atómicos
3. Mide los tokens usados y la calidad subjetiva
4. Grafica la frontera de eficiencia

```
┌─────────────────────────────────────────────────────────────┐
│ Tarea: Resumir un artículo de noticias                      │
├─────────┬───────────────────────────────┬────────┬──────────┤
│ Versión │ Prompt                        │ Tokens │ Calidad  │
├─────────┼───────────────────────────────┼────────┼──────────┤
│ A       │ "Resume este artículo."       │ 4      │ 2/10     │
├─────────┼───────────────────────────────┼────────┼──────────┤
│ B       │ "Proporciona un resumen       │ 14     │ 6/10     │
│         │  conciso de este artículo     │        │          │
│         │  en 3 oraciones."             │        │          │
├─────────┼───────────────────────────────┼────────┼──────────┤
│ C       │ "Escribe un resumen de los    │ 27     │ 8/10     │
│         │  puntos clave de este         │        │          │
│         │  artículo, destacando las     │        │          │
│         │  personas y eventos           │        │          │
│         │  principales."                │        │          │
└─────────┴───────────────────────────────┴────────┴──────────┘
```

## Puntos Clave

1. **Prompts atómicos** son la unidad fundamental de interacción con LLM
2. Siguen una estructura básica: tarea + restricciones + formato de salida
3. Tienen limitaciones inherentes: sin memoria, ejemplos ni andamiaje de razonamiento
4. Incluso los prompts atómicos simples aprovechan el conocimiento implícito del modelo
5. Existe una relación de ley de potencia entre tokens de contexto y calidad
6. Ir más allá de los átomos es el primer paso hacia la ingeniería de contexto

## Próximos Pasos

En la siguiente sección, exploraremos cómo combinar átomos en **moléculas** — patrones de few-shot learning (aprendizaje con pocos ejemplos) que mejoran drásticamente la confiabilidad y el control.

[Continuar a 02_molecules_context.md →](02_molecules_context.md)

---

## Profundizando: Plantillas de Prompts

Para quienes deseen experimentar más con prompts atómicos, aquí hay algunas plantillas para probar:

```
# Instrucción básica
{tarea}

# Basado en persona
Como {persona}, {tarea}

# Específico de formato
{tarea}
Formato: {especificación_de_formato}

# Basado en restricciones
{tarea}
Restricciones:
- {restricción_1}
- {restricción_2}
- {restricción_3}

# Guiado paso a paso
{tarea}
Por favor, sigue estos pasos:
1. {paso_1}
2. {paso_2}
3. {paso_3}
```

¡Prueba medir la cantidad de tokens y la calidad para cada plantilla aplicada a la misma tarea!
