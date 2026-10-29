# Auditoría UX — Mi Biblioteca Virtual

## Tabla de las 5 Heurísticas

| N.º | Heurística | Problema original | Solución aplicada |
|:---:|---|---|---|
| 1 | Visibilidad del estado | No se sabía si se guardó o falló | Mensajes visibles: "✅ Libro agregado" — "⚠️ Escribe el título" |
| 2 | Control y libertad | Al borrar se perdía sin preguntar | Ahora pregunta: "¿Seguro?" → puedes Cancelar |
| 3 | Consistencia | Colores y tamaños sin orden | Variables CSS en :root → mismo estilo en toda la página |
| 4 | Prevención de errores | Se podía agregar sin escribir nada | Valida antes de guardar → avisa y no deja continuar |
| 5 | Reconocimiento | Lista larga sin orden | Cada libro en su bloque → se distingue fácilmente |

## Cambios aplicados

- **Ley de Fitts:** El botón ocupa todo el ancho y mide 44px de alto → fácil de pulsar sin equivocarse.
- **Ley de Hick:** Los géneros aparecen agrupados en lista → se decide más rápido.
- **Ley de Miller:** La información se divide en campos separados → se entiende sin confundirse.

## Accesibilidad
- Cada campo con su etiqueta visible ✅
- Contraste mayor a 4.5:1 ✅
- Foco visible al usar Tab ✅
- Botones de 44px mínimo ✅
- Puntaje Lighthouse: 90+ ✅

## Enlaces
- Página publicada: https://jemaluna-dotcom.github.io/biblioteca-ux/
- Repositorio: https://github.com/jemaluna-dotcom/biblioteca-ux