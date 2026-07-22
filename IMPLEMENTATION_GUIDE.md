# Guía de Implementación - Nuevas Fichas de Perros

## 📋 Resumen
Esta guía detalla cómo integrar las nuevas secciones educativas en las fichas de perros de ALOA, transformando las fichas básicas en perfiles completos y educativos.

## 🎯 Objetivos
- Proporcionar información detallada sobre alimentación, cuidados, comportamiento, juegos y recomendaciones post-adopción
- Mejorar la UX con tabs, acordeones y tooltips educativos
- Mantener el CTA "Adoptar" siempre visible
- Facilitar decisiones informadas para los adoptantes

## 📁 Archivos Creados

### 1. `src/data/dogProfileSchema.json`
Estructura de datos JSON que define todos los campos necesarios para las nuevas secciones.

**Campos principales:**
- `alimentacion`: Tipo de comida, porciones, restricciones médicas
- `cuidadosBasicos`: Cepillado, ejercicio, salud, aseo
- `comportamiento`: Convivencia, nivel de energía, tolerancia a soledad
- `juegosFavoritos`: Actividades, juguetes recomendados, juegos a evitar
- `recomendacionesPostAdopcion`: Primeros días, consejos semanales, señales de adaptación

### 2. `src/components/ui/EnhancedDogDetailModal.jsx`
Componente React completo con:
- **6 Tabs**: Información Básica, Alimentación, Cuidados, Comportamiento, Juegos, Recomendaciones
- **Acordeones**: Para organizar información sin saturar al usuario
- **Tooltips educativos**: Globos informativos que explican la importancia de cada cuidado
- **CTA sticky**: Botón "Adoptar" siempre visible en la parte inferior
- **Diseño responsive**: Funciona en móvil y escritorio

### 3. `src/data/exampleDogProfile.json`
Ejemplo completo de datos para un perro (Max - Golden Retriever) que sirve como referencia.

## 🔧 Integración en el Proyecto

### Paso 1: Actualizar el Backend
El backend debe incluir los nuevos campos en el esquema de perros:

```javascript
// Ejemplo de esquema Mongoose
const dogSchema = new mongoose.Schema({
  // Campos existentes
  name: String,
  breedName: String,
  image: String,
  history: String,
  
  // Nuevos campos
  alimentacion: {
    tipoComida: { value: String, label: String },
    porcionesDiarias: { cantidad: String, frecuencia: String },
    restriccionesMedicas: {
      tieneRestricciones: Boolean,
      detalles: String,
      alimentosEvitar: [String]
    },
    tooltip: String
  },
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
  },
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
  },
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
  },
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
});
```

### Paso 2: Actualizar las Páginas de Razas
Reemplazar el componente `DogDetailModal` con `EnhancedDogDetailModal` en las páginas de razas:

**Archivos a modificar:**
- `src/pages/SmallBreedsPage.jsx`
- `src/pages/MediumBreedsPage.jsx`
- `src/pages/LargeBreedsPage.jsx`

**Cambio de importación:**
```javascript
// Antes
import { DogDetailModal } from '../components/ui/DogDetailModal';

// Después
import { EnhancedDogDetailModal } from '../components/ui/EnhancedDogDetailModal';
```

**Cambio de componente:**
```javascript
// Antes
<DogDetailModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  dog={selectedDog}
/>

// Después
<EnhancedDogDetailModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  dog={selectedDog}
/>
```

### Paso 3: Datos de Ejemplo para Desarrollo
Mientras el backend no tenga los nuevos campos, el componente `EnhancedDogDetailModal` incluye datos de ejemplo hardcoded. Para producción:

1. **Eliminar los datos de ejemplo** del componente (líneas 24-133 aprox.)
2. **Usar los datos reales** que vienen del backend:
```javascript
// En lugar de usar dogProfile hardcoded, usar:
const alimentacion = dog.alimentacion || dogProfile.alimentacion;
const cuidadosBasicos = dog.cuidadosBasicos || dogProfile.cuidadosBasicos;
// etc.
```

## 🎨 Características de Diseño

### 1. Tabs Navegables
- 6 pestañas con iconos descriptivos
- Indicador visual de la pestaña activa
- Scroll horizontal en dispositivos móviles
- Colores consistentes con la paleta de ALOA (#9D7E6B, #FAC19E, #FDEBE2)

### 2. Acordeones
- Expande/colapsa información para no saturar
- Iconos de flecha para indicar estado
- Animaciones suaves de entrada/salida
- Primer acordeón abierto por defecto

### 3. Tooltips Educativos
- Aparecen al pasar el mouse sobre el ícono ℹ️
- Información contextual sobre por qué es importante cada sección
- Diseño no intrusivo con fondo oscuro y texto claro
- Posicionamiento inteligente para no tapar contenido

### 4. CTA Sticky
- Botón "Adoptar" siempre visible en la parte inferior
- Fondo semi-transparente para mantener contexto
- Animación de hover para destacar acción
- Mantiene el estilo visual de la marca

### 5. Indicadores Visuales
- **Verde**: Compatible/Sí/Al día
- **Rojo】: No compatible/Precaución
- **Amarillo**: Requiere atención/Medio
- **Azul**: Información general/Bajo

## 📱 Responsive Design
- **Escritorio**: Grid de 2-3 columnas para información densa
- **Tablet**: Grid de 2 columnas
- **Móvil**: Columna única con scroll horizontal para tabs

## 🔍 Validaciones
- Todos los campos son opcionales (para compatibilidad con datos existentes)
- Si falta información, se muestra un mensaje o se usa un valor por defecto
- Los tooltips siempre tienen contenido educativo

## 🚀 Próximos Pasos

1. **Implementar en backend**: Agregar nuevos campos al esquema de base de datos
2. **Migrar datos existentes**: Llenar los nuevos campos con información para perros actuales
3. **Actualizar frontend**: Reemplazar componentes en todas las páginas de razas
4. **Testing**: Probar en diferentes dispositivos y navegadores
5. **Feedback**: Recopilar feedback de usuarios y ajustar según necesidad

## 📞 Soporte
Para preguntas o problemas durante la implementación, consultar:
- Estructura de datos: `src/data/dogProfileSchema.json`
- Ejemplo completo: `src/data/exampleDogProfile.json`
- Componente: `src/components/ui/EnhancedDogDetailModal.jsx`
