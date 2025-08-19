<script setup>
import { defineEmits } from 'vue';

const props = defineProps({
    modelValue: Boolean, // Para controlar si el modal está abierto o cerrado
    size: {
        type: String,
        default: "md", // Puede ser 'sm', 'md', 'lg'
    }
});

const emit = defineEmits(["update:modelValue"]);

// Función para cerrar el modal
const closeModal = () => {
    emit("update:modelValue", false);
};

// Clases de tamaño dinámico
const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
};
</script>

<template>
    <div v-if="modelValue" class="modal-overlay" @click.self="closeModal">
        <div class="modal-container" :class="sizeClasses[size]">
            <!-- Botón para cerrar -->
            <button class="modal-close" @click="closeModal">✖</button>

            <!-- Slot para el título -->
            <header v-if="$slots.header" class="modal-header">
                <slot name="header"></slot>
            </header>

            <!-- Contenido dinámico -->
            <div class="modal-body">
                <slot></slot>
            </div>

            <!-- Slot para el footer -->
            <footer v-if="$slots.footer" class="modal-footer">
                <slot name="footer"></slot>
            </footer>
        </div>
    </div>
</template>

<style scoped>
/* Fondo oscuro al abrir el modal */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

/* Contenedor del modal */
.modal-container {
    background: var(--background-color);
    border-radius: 10px;
    padding: 20px;
    position: relative;
    width: 90%;
    max-width: 500px;
    animation: fadeIn 0.3s ease-in-out;
    overflow-y: scroll;
    max-height: 98vh;
}

/* Botón de cerrar */
.modal-close {
    position: absolute;
    top: 10px;
    right: 15px;
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
}

/* Estilos adicionales */
.modal-header {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
}

.modal-body {
    padding: 10px 0;
}

.modal-footer {
    margin-top: 15px;
    text-align: right;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}
</style>
