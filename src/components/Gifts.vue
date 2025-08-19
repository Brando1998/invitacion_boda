<script>
export default {
    data() {
        return {
            gifts: [
                { id: 1, name: "Cafetera", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/445547/w=1036,h=832,f=webp,fit=contain,q=85" },
                { id: 2, name: "Portaretratos", image: "https://http2.mlstatic.com/D_NQ_NP_834443-MCO76807121396_062024-O.webp" },
                { id: 3, name: "Edredón verde oliva", image: "https://http2.mlstatic.com/D_NQ_NP_745411-CBT72258087296_102023-O.webp" },
                { id: 4, name: "Planta interior", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacCO/264910/w=1036,h=832,f=webp,fit=contain,q=85" }
            ]
        };
    }
};
</script>

<template>
    <div class="gifts-container border-pattern">
        <h2>Regalos</h2>
        <p class="gift-message">
            Tu presencia es el mejor regalo, pero si deseas hacernos un obsequio, aquí tienes algunas ideas que nos encantarían. 
            ¡Elige lo que más te guste o sorpréndenos con algo especial!
        </p>

        <div class="gift-grid">
            <div class="gift-item" v-for="gift in gifts" :key="gift.id">
                <img :src="gift.image" :alt="gift.name" />
                <p>{{ gift.name }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Contenedor principal */
.gifts-container {
    text-align: center;
    padding: var(--spacing-medium);
    margin: var(--spacing-large) calc(-2rem - 2vw);
    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
}

/* Mensaje amigable */
.gift-message {
    font-size: 1.2rem;
    margin-bottom: var(--spacing-medium);
    color: var(--text-color-light);
    font-style: italic;
}

/* Grid de regalos */
.gift-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: var(--spacing-medium);
    margin-bottom: var(--spacing-large);
}

/* Tarjeta de regalo */
.gift-item {
    background: white;
    padding: var(--spacing-small);
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    transition: transform 0.3s ease;
}

.gift-item img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 8px;
}

.gift-item:hover {
    transform: scale(1.05);
}
</style>
