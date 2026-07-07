# Portafolio Personal - Edwin Noé Sánchez Chávez

**Instituto Tecnológico Nacional de México - Instituto Tecnológico de Oaxaca**
**Carrera:** Ingeniería en Sistemas Computacionales
**Materia:** Programación Web - Unidad 2
**Docente:** Adelina Martínez Nieto
**Alumno:** Sánchez Chávez Edwin Noé
**Hora:** 10:00 - 1:00
**Fecha de entrega:** 07 de julio del 2026

---

## Descripción del Proyecto

Este es un portafolio personal construido con **HTML5, CSS3 y JavaScript**, utilizando **Bootstrap 5.2.3** como framework CSS base. La plantilla utilizada es **StartBootstrap Personal**, descargada desde el siguiente enlace:

📥 [Descargar plantilla StartBootstrap Personal](https://github.com/StartBootstrap/startbootstrap-personal)

### Secciones del Portafolio

El portafolio está compuesto por las siguientes secciones y páginas:

| Página | Descripción |
|--------|-------------|
| **Inicio (index.html)** | Página principal con presentación personal, foto de perfil y botones de navegación rápida. Incluye un breve resumen sobre mí y links a redes sociales. |
| **Resume (resume.html)** | Hoja de vida con secciones de experiencia, educación, habilidades profesionales y tecnologías que estoy aprendiendo actualmente. |
| **Proyectos (projects.html)** | Galería de proyectos desarrollados, incluyendo proyectos de inteligencia artificial y algoritmos. |
| **Contacto (contact.html)** | Formulario de contacto para que los visitantes puedan comunicarse conmigo. |

### Estructura del Repositorio

```
portfolio/
├── README.md              # Documentación del proyecto
├── index.html             # Página principal
├── resume.html            # Hoja de vida
├── projects.html          # Proyectos
├── contact.html           # Contacto
├── css/
│   └── portafolio.css     # Estilos personalizados (Bootstrap + estilos propios)
├── js/
│   └── portafolio.js      # Funcionalidad JavaScript
└── img/
    ├── profile.png        # Foto de perfil
    └── favicon.ico        # Icono del sitio
```

---

## Proceso de Creación

### Paso 1: Descarga de la Plantilla
Se descargó la plantilla **StartBootstrap Personal** desde GitHub. Esta plantilla está construida con Bootstrap 5 y incluye 4 páginas HTML predefinidas con un diseño moderno y responsive.

### Paso 2: Análisis de la Estructura Original
La plantilla original venía con una estructura de carpetas para desarrollo (src/, scripts/, dist/) que incluía herramientas de compilación como Pug y Sass. Para simplificar el proyecto y cumplir con los requisitos de la tarea, se decidió trabajar directamente con los archivos compilados.

### Paso 3: Reestructuración de Archivos
Se reorganizó la estructura para cumplir con los requisitos de entrega:
- Se renombró `styles.css` a `portafolio.css`
- Se renombró `scripts.js` a `portafolio.js`
- Se movieron las imágenes de `assets/` a `img/`
- Se eliminaron las herramientas de compilación que no eran necesarias

### Paso 4: Personalización del Contenido
Se modificó el contenido de todas las páginas para reflejar mi información personal:
- Se reemplazó el nombre genérico por mi nombre real
- Se actualizaron las secciones de habilidades con tecnologías que conozco y estoy aprendiendo
- Se agregaron mis proyectos reales de inteligencia artificial y programación
- Se actualizó la información de educación y experiencia

### Paso 5: Ajustes Técnicos
- Se corrigieron todas las rutas de archivos CSS, JavaScript e imágenes
- Se eliminó la dependencia del servicio SB Forms en el formulario de contacto
- Se actualizó el copyright y textos en español

### Paso 6: Personalización de Habilidades
Las habilidades se dividieron en dos categorías:
1. **Habilidades que ya domino:** HTML, CSS, JavaScript, Python, Java
2. **Habilidades que estoy aprendiendo:** RAG, bases de datos vectoriales, LangGraph, LangChain, diseño de software, infraestructura, DevOps

### Paso 7: Documentación
Se creó este archivo README con toda la información requerida, incluyendo la descripción del proyecto, el proceso de creación y los links de referencia.

---

## Tecnologías Utilizadas

- **HTML5** - Estructura del portafolio
- **CSS3** - Estilos y diseño visual
- **Bootstrap 5.2.3** - Framework CSS para diseño responsive
- **JavaScript** - Funcionalidad interactiva

---

## Habilidades

### Tecnologías que domino
- HTML5, CSS3, JavaScript
- Python
- Java
- Git / GitHub

### Tecnologías que estoy aprendiendo
- RAG (Retrieval-Augmented Generation)
- Bases de datos vectoriales
- LangGraph y LangChain
- Diseño de software
- Infraestructura y DevOps

---

## Proyectos

### 1. Tars (En desarrollo)
Aplicación inmersiva para aprender chino que combina flashcards SRS, roleplay con voz impulsado por IA y ejercicios de shadowing con análisis de audio.

**Tech Stack:** React Native, FastAPI, SQLite, OpenAI (GPT-4o-mini), Groq Whisper, Edge-TTS

### 2. Heredity (CS50AI)
Modelo probabilístico bayesiano para inferir la probabilidad de rasgos genéticos en una familia, considerando herencia dominante/recesiva y mutaciones.

### 3. PageRank (CS50AI)
Implementación del algoritmo PageRank para analizar la importancia de páginas web mediante muestreo y métodos iterativos.

### 4. Minesweeper AI (CS50AI)
Solver de Minesweeper que utiliza inferencia lógica y una base de conocimiento para deducir celdas seguras y minas.

### 5. Tic Tac Toe AI (CS50AI)
Juego de Tic Tac Toe con IA invencible usando el algoritmo Minimax con memorización.

---

## Cómo Ejecutar

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/noeEdwin/portfolio.git
   ```

2. Abrir `index.html` en un navegador web.

---

## GitHub Pages

[Ver portafolio en vivo](https://noeEdwin.github.io/portfolio/)

---

## Licencia

MIT
