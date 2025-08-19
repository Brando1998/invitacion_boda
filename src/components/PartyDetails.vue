<script setup>
import cornerOrnamentImage2 from '@/assets/svg/corner-ornament-2.svg';
import musicImage from '@/assets/svg/music.svg';
import tagImage from '@/assets/svg/tag.svg';
import notesImage from '@/assets/svg/notes.svg';
import centerBottomOrnamentImage from '@/assets/svg/center-bottom-ornament-accent.svg';
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

const showMusicModal = ref(false);
const showDressModal = ref(false);
const showNotesModal = ref(false);
const showNotesModal_ = ref(false);
const playlistUrl = "https://open.spotify.com/embed/playlist/6KTjalpQoFxqM5nRgHxxOQ?utm_source=generator";
const articleUrl = "https://wol.jw.org/es/wol/d/r4/lp-s/1984285"
const cornerStyles = [
    { top: '-6px', left: '-6px', transform: "rotate(0deg)" },         // Esquina superior izquierda
    { top: '-6px', right: '-12px', transform: "rotate(90deg)" },       // Esquina superior derecha
    { bottom: '-6px', left: '-12px', transform: "rotate(-90deg)" },    // Esquina inferior izquierda
    { bottom: '-6px', right: '-6px', transform: "rotate(180deg)" },   // Esquina inferior derecha
];
</script>
<template>
    <h2>¡Fiesta!</h2>
    <div class="event-details three-columns">
        <div class="info-container">
            <img v-for="(style, index) in cornerStyles" :key="index" :src="cornerOrnamentImage2" :style="style"
                class="corner-ornament" alt="Decoración de esquina">
            <div class="shadow">
                <img class="ico" :src="musicImage" alt="music">
                <span class="title">Música</span>
                <img :src="centerBottomOrnamentImage" alt="center ornament" class="center-ornament">
                <span>Ve revisando nuestra playlist para que estes listo para este dia!</span>
                <button class="btn btn-secondary" @click="showMusicModal = true">Ver Playlist</button>
                <Modal v-model="showMusicModal" size="md">
                    <template #header>
                        Nuestra Playlist
                    </template>

                    <iframe style="border-radius:12px" :src="playlistUrl" width="100%" height="380" frameborder="0"
                        allowfullscreen
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
                    </iframe>

                    <template #footer>
                        <button class="btn btn-secondary" @click="showMusicModal = false">Cerrar</button>
                    </template>
                </Modal>
            </div>
        </div>
        <div class="info-container">
            <img v-for="(style, index) in cornerStyles" :key="index" :src="cornerOrnamentImage2" :style="style"
                class="corner-ornament" alt="Decoración de esquina">
            <div class="shadow">
                <img class="ico" :src="notesImage" alt="notes">
                <span class="title">Codigo de vestimenta</span>
                <img :src="centerBottomOrnamentImage" alt="center ornament" class="center-ornament">
                <span>Información adicional para tener en cuenta</span>
                <button class="btn btn-secondary" @click="showNotesModal = true">Ver</button>
                <Modal v-model="showNotesModal" size="md">
                    <template #header>
                        Codigo de vestimenta
                    </template>

                    <h2>¿Cómo hay que vestirse?</h2>
                    <p>No hay una norma específica sobre cómo hay que vestirse para asistir a una boda en un Salón del Reino. Pero los Testigos se esfuerzan por vestirse de forma digna y modesta, como aconseja la Biblia. Y, claro, agradecen que todos los asistentes hagan lo mismo (1 Timoteo 2:9). Eso también puede decirse de la ropa que los invitados decidan ponerse para la fiesta.</p>
                    <p>Para profundizar en este tema, puedes leer el artículo completo aquí:</p>
                    <a href="https://www.jw.org/es/testigos-de-jehov%C3%A1/preguntas-frecuentes/bodas-testigos-de-jehova/#link3" target="_blank" rel="noopener noreferrer">
                        ¿Cómo son las bodas de los testigos de Jehová?
                    </a>

                    <template #footer>
                        <button class="btn btn-secondary" @click="showNotesModal = false">Cerrar</button>
                    </template>
                </Modal>
            </div>
        </div>
        <div class="info-container">
            <img v-for="(style, index) in cornerStyles" :key="index" :src="cornerOrnamentImage2" :style="style"
                class="corner-ornament" alt="Decoración de esquina">
            <div class="shadow">
                <img class="ico" :src="notesImage" alt="notes">
                <span class="title">Tips y Notas</span>
                <img :src="centerBottomOrnamentImage" alt="center ornament" class="center-ornament">
                <span>Información adicional para tener en cuenta</span>
                <button class="btn btn-secondary" @click="showNotesModal_ = true">Ver</button>
                <Modal v-model="showNotesModal_" size="md">
                    <template #header>
                        Notas
                    </template>

                    <h2>Importancia de la moderación en las celebraciones</h2>
                    <p>El artículo señala que "la presión que ejerce el mundo para que lleguemos a ser 'amadores de
                        placeres' es
                        fuerte". Por ello, es esencial que los cristianos mantengan un enfoque equilibrado en las
                        celebraciones,
                        evitando comportamientos que puedan deshonrar a Dios.</p>
                    <p>Para profundizar en este tema, puedes leer el artículo completo aquí:</p>
                    <a href="https://wol.jw.org/es/wol/d/r4/lp-s/1984285" target="_blank" rel="noopener noreferrer">
                        Halle disfrute equilibrado en los banquetes de bodas
                    </a>

                    <template #footer>
                        <button class="btn btn-secondary" @click="showNotesModal_ = false">Cerrar</button>
                    </template>
                </Modal>
            </div>
        </div>
    </div>
</template>

<style scoped>
.event-details {
    color: var(--text-color);
    margin-top: var(--spacing-large);
    margin-bottom: var(--spacing-large);
    text-align: center;
}

h2 {
    text-align: center;
    font-size: var(--text-2xl);
    margin: var(--spacing-large);
    color: var(--text-color);
}

.shadow {
    -webkit-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
    margin: var(--spacing-medium);
    border-radius: 20px;
    padding: var(--spacing-medium);
}

.ico {
    width: 100px;
}

.info-container {
    border-bottom: 1px solid var(--accent-color);
    /* height: 100vh; */
    position: relative;
    border: 5px dotted var(--accent-color);
    border-radius: 20px;
}

.corner-ornament {
    position: absolute;
    width: 30px;
    height: auto;
}

.center-ornament {
    width: 100px;
}

.event-details span {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
}

span {
    font-family: "Cormorant Garamond", sans-serif;
}

.title {
    font-size: var(--text-2xl);
    word-break: break-all;
}

.subtitle {
    margin-top: var(--spacing-medium);
    font-size: var(--text-xl);
}
</style>
