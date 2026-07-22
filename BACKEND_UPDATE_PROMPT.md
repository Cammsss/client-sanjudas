# Prompt para Actualización del Backend - Nuevas Fichas de Perros

## Contexto del Proyecto
Soy desarrollador de ALOA, una plataforma de adopción de perros. Necesito actualizar el backend para soportar nuevas secciones educativas en las fichas de perros. El frontend ya está implementado con el componente `EnhancedDogDetailModal.jsx`, pero el backend necesita agregar los nuevos campos al esquema de datos.

## Tecnología del Backend
- Framework: [Especificar: Node.js/Express, Django, Spring Boot, etc.]
- Base de datos: [Especificar: MongoDB, PostgreSQL, MySQL, etc.]
- ORM/ODM: [Especificar: Mongoose, Sequelize, TypeORM, etc.]

## Campos a Agregar al Esquema de Perros

### 1. Alimentación
```javascript
alimentacion: {
    tipoComida: {
        value: { type: String, enum: ['cachorro', 'adulto', 'necesidades_especiales'] },
        label: String
    },
    porcionesDiarias: {
        cantidad: String,
        frecuencia: String
    },
    restriccionesMedicas: {
        tieneRestricciones: Boolean,
        detalles: String,
        alimentosEvitar: [String]
    },
    tooltip: String
}
```

### 2. Cuidados Básicos
```javascript
cuidadosBasicos: {
    cepillado: {
        frecuencia: String,
        tipoPelo: String,
        herramientasRecomendadas: [String]
    },
    ejercicio: {
        nivel: { type: String, enum: ['bajo', 'medio', 'alto'] },
        minutosDiarios: Number,
        tipoActividad: String
    },
    salud: {
        vacunasAlDia: Boolean,
        desparasitacionesAlDia: Boolean,
        proximaVacuna: String,
        proximaDesparasitacion: String
    },
    aseo: {
        banioFrecuencia: String,
        corteUñas: String,
        limpiezaOidos: String,
        cuidadoDental: String
    },
    tooltip: String
}
```

### 3. Comportamiento
```javascript
comportamiento: {
    convivenciaNinos: {
        compatible: Boolean,
        edadMinima: String,
        observaciones: String
    },
    relacionPerros: {
        compatible: Boolean,
        preferencias: String,
        observaciones: String
    },
    relacionGatos: {
        compatible: Boolean,
        observaciones: String
    },
    nivelEnergia: {
        valor: { type: String, enum: ['bajo', 'medio', 'alto'] },
        descripcion: String
    },
    toleranciaSoledad: {
        horasMaximas: Number,
        recomendaciones: String
    },
    tooltip: String
}
```

### 4. Juegos Favoritos
```javascript
juegosFavoritos: {
    actividadesPreferidas: [{
        nombre: String,
        descripcion: String,
        duracion: String
    }],
    juguetesRecomendados: [{
        tipo: String,
        razon: String,
        seguridad: String
    }],
    juegosEvitar: [String],
    tooltip: String
}
```

### 5. Recomendaciones Post-Adopción
```javascript
recomendacionesPostAdopcion: {
    primerosDias: {
        periodoAdaptacion: String,
        preparacionEspacio: [String],
        rutinasEstablecer: [String]
    },
    consejosSemana1: [String],
    consejosSemana2: [String],
    consejosSemana3: [String],
    senalesAdaptacion: [String],
    cuandoContactarVeterinario: String,
    tooltip: String
}
```

## Requerimientos Específicos

### 1. Compatibilidad con Datos Existentes
- Todos los nuevos campos deben ser **opcionales** para no romper perros existentes
- Establecer valores por defecto apropiados cuando no se proporcionen datos
- Mantener backward compatibility con el frontend actual

### 2. Validaciones
- Validar enums para campos con opciones específicas (nivel de energía, tipo de comida)
- Validar tipos de datos (arrays para listas, números para cantidades)
- Validar longitud de strings para campos de texto

### 3. Endpoints API
- **GET /api/dogs**: Debe incluir los nuevos campos en la respuesta
- **GET /api/dogs/:id**: Debe retornar el perfil completo del perro
- **POST /api/dogs**: Debe aceptar los nuevos campos en el body
- **PUT /api/dogs/:id**: Debe permitir actualizar los nuevos campos
- **PATCH /api/dogs/:id**: Debe permitir actualizaciones parciales

### 4. Migración de Datos
- Crear script de migración para agregar campos vacíos a perros existentes
- Opcional: Poblar algunos perros con datos de ejemplo para testing
- Considerar datos por defecto para perros sin información detallada

### 5. Documentación
- Actualizar Swagger/OpenAPI documentation con los nuevos campos
- Documentar los nuevos endpoints o parámetros
- Incluir ejemplos de request/response

## Ejemplo de Datos Completos

Referencia: `src/data/exampleDogProfile.json` en el frontend

```json
{
  "alimentacion": {
    "tipoComida": { "value": "adulto", "label": "Adulto" },
    "porcionesDiarias": { "cantidad": "2.5 tazas", "frecuencia": "2 veces al día" },
    "restriccionesMedicas": {
      "tieneRestricciones": false,
      "detalles": "",
      "alimentosEvitar": []
    },
    "tooltip": "Una alimentación adecuada es fundamental..."
  },
  "cuidadosBasicos": {
    "cepillado": {
      "frecuencia": "3-4 veces por semana",
      "tipoPelo": "Largo y denso",
      "herramientasRecomendadas": ["Cepillo de cerdas suaves", "Peine de dientes finos"]
    },
    "ejercicio": { "nivel": "alto", "minutosDiarios": 60, "tipoActividad": "Caminatas largas" },
    "salud": {
      "vacunasAlDia": true,
      "desparasitacionesAlDia": true,
      "proximaVacuna": "En 6 meses",
      "proximaDesparasitacion": "En 3 meses"
    },
    "aseo": {
      "banioFrecuencia": "Cada 6-8 semanas",
      "corteUñas": "Cada 3-4 semanas",
      "limpiezaOidos": "Semanal",
      "cuidadoDental": "Diario"
    },
    "tooltip": "Los cuidados regulares previenen enfermedades..."
  }
  // ... resto de las secciones
}
```

## Consideraciones Importantes

1. **Performance**: Los nuevos campos pueden aumentar el tamaño de los documentos. Considerar si es necesario optimizar queries.
2. **Seguridad**: Validar y sanitizar todos los inputs, especialmente los arrays de strings.
3. **Testing**: Crear tests unitarios para los nuevos endpoints y validaciones.
4. **Versionado**: Considerar versionado de API si los cambios son breaking.
5. **Frontend Integration**: El frontend espera esta estructura exacta, mantener consistencia.

## Deliverables Esperados

1. Esquema de base de datos actualizado con los nuevos campos
2. Endpoints API actualizados/creados
3. Script de migración para datos existentes
4. Tests para validar la implementación
5. Documentación actualizada
6. Ejemplo de request/response para los endpoints

## Archivos de Referencia en el Frontend

- `src/data/dogProfileSchema.json` - Estructura completa de datos
- `src/data/exampleDogProfile.json` - Ejemplo de datos completos
- `src/components/ui/EnhancedDogDetailModal.jsx` - Componente que consume estos datos
- `IMPLEMENTATION_GUIDE.md` - Guía de implementación general

---

**Nota**: Por favor adapta este prompt según tu tecnología específica (MongoDB/Mongoose, PostgreSQL/Sequelize, etc.) y proporciona el código correspondiente a tu stack tecnológico.
