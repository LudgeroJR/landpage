<template>
    <div
        ref="mainContainer"
        class="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500"
    >
        <!-- Sessão Profissional -->
        <section
            ref="profSection"
            class="snap-start h-screen flex flex-col items-center justify-center relative"
        >
            <div
                class="relative w-full max-w-2xl bg-white/90 rounded-3xl shadow-2xl px-8 py-12 flex flex-col items-center mx-auto"
            >
                <img
                    :src="'/images/ludgero.jpg'"
                    alt="Foto de Ludgero Luiz Mendes Junior"
                    class="w-36 h-36 rounded-full border-4 border-blue-900 shadow-lg object-cover absolute -top-20 left-1/2 transform -translate-x-1/2"
                />
                <div class="mt-20 text-center w-full">
                    <h1
                        class="text-3xl md:text-4xl font-extrabold text-blue-900 mb-2"
                    >
                        Ludgero Luiz Mendes Junior
                    </h1>
                    <h2 class="text-xl font-semibold text-blue-700 mb-1">
                        Analista de Suporte Senior
                    </h2>
                    <h3 class="text-lg font-medium text-blue-500 mb-4">
                        Empresa Wyntech<br />
                        <span class="text-base font-normal text-blue-900">
                            A serviço do Tribunal Regional Eleitoral de Santa
                            Catarina
                        </span>
                    </h3>
                    <hr class="my-4 border-blue-200" />
                    <div class="space-y-1">
                        <p class="font-semibold text-blue-800">Contato</p>
                        <div class="text-base text-blue-800">
                            <div>
                                <span class="font-medium">Site: </span>
                                <a
                                    href="https://www.ludgerojunior.com.br"
                                    target="_blank"
                                    class="underline hover:text-blue-600"
                                    >www.ludgerojunior.com.br</a
                                >
                            </div>
                            <div>
                                <span class="font-medium">Email: </span>
                                <a
                                    href="mailto:junior@ludgerojunior.com.br"
                                    class="underline hover:text-blue-600"
                                    >junior@ludgerojunior.com.br</a
                                >
                            </div>
                            <!-- <div>
                                <span class="font-medium">Telefone:</span>
                                <a
                                    href="tel:+5548984449390"
                                    class="underline hover:text-blue-600"
                                    >(48) 98444-9390</a
                                >
                            </div> -->
                        </div>
                        <br />
                        <!-- Ícones sociais -->
                        <div
                            class="flex items-center justify-center space-x-4 mt-4"
                        >
                            <!-- Linkedin -->
                            <a
                                href="https://www.linkedin.com/in/ludgerojunior/"
                                target="_blank"
                                aria-label="LinkedIn"
                                class="text-blue-700 hover:text-blue-900 transition-colors"
                            >
                                <svg
                                    class="w-7 h-7"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11.75 20h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.783-1.75-1.75s.784-1.75 1.75-1.75c.967 0 1.75.783 1.75 1.75s-.783 1.75-1.75 1.75zm15.25 12.268h-3v-5.604c0-1.334-.025-3.053-1.861-3.053-1.861 0-2.146 1.452-2.146 2.951v5.706h-3v-11h2.881v1.501h.041c.401-.762 1.379-1.562 2.837-1.562 3.034 0 3.595 1.997 3.595 4.59v6.471z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Seta "Pessoal" -->
            <transition name="fade">
                <button
                    v-if="showDownArrow"
                    @click="scrollToPessoal"
                    class="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center group focus:outline-none"
                >
                    <span
                        class="text-base font-semibold text-blue-100 mb-1 group-hover:text-blue-300 transition-colors"
                        >Pessoal</span
                    >
                    <svg
                        class="w-8 h-8 text-blue-200 animate-bounce group-hover:text-blue-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M19 9l-7 7-7-7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </transition>
        </section>

        <!-- Sessão Gamer/Pessoal -->
        <section
            ref="pessoalSection"
            class="snap-start h-screen flex flex-col items-center justify-center relative"
        >
            <!-- Seta "Profissional" (no topo da sessão pessoal) -->
            <transition name="fade">
                <button
                    v-if="showUpArrow"
                    @click="scrollToProfissional"
                    class="absolute top-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center group focus:outline-none"
                >
                    <svg
                        class="w-8 h-8 text-blue-200 custom-bounce-up group-hover:text-blue-400 transition-colors"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2.5"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M19 9l-7 7-7-7"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <span
                        class="text-base font-semibold text-blue-100 mt-1 group-hover:text-blue-300 transition-colors"
                        >Profissional</span
                    >
                </button>
            </transition>

            <div
                class="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-slate-800 to-gray-700 p-6"
            >
                <br />
                <!-- Avatar e descrição -->

                <section
                    class="w-full max-w-xl flex flex-col items-center bg-white/90 rounded-3xl shadow-2xl px-8 py-10 mb-10"
                >
                    <img
                        :src="'/images/lud.png'"
                        alt="Avatar Ludgero Luiz Mendes Junior"
                        class="w-32 h-32 rounded-full border-4 border-blue-700 shadow-xl object-cover mb-4"
                    />
                    <h1 class="text-2xl font-bold text-gray-900 mb-2">
                        Ludgero Luiz Mendes Junior
                    </h1>
                    <p class="text-base text-gray-700 text-center mb-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam tristique sapien eu mi faucibus, at pulvinar magna
                        lacinia. Proin ac velit vel lorem facilisis euismod ac
                        nec erat. Mauris fermentum, justo a dictum dictum, velit
                        nisi sollicitudin velit, nec commodo velit ipsum nec
                        eros.
                    </p>
                    <!-- Ícones sociais pessoais -->
                    <div
                        class="flex items-center justify-center space-x-4 mt-4"
                    >
                        <!-- Instagram -->
                        <a
                            href="https://www.instagram.com/ludgerojr/"
                            target="_blank"
                            aria-label="Instagram"
                            class="text-pink-600 hover:text-pink-800 transition-colors"
                        >
                            <svg
                                class="w-7 h-7"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 2.25a4.25 4.25 0 1 1-8.5 0 4.25 4.25 0 0 1 8.5 0zm0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5zm6 1.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
                                />
                                <circle cx="12" cy="12" r="3.2" />
                                <circle cx="18.5" cy="5.5" r="1" />
                            </svg>
                        </a>
                    </div>
                </section>

                <!-- Área Guild ARKHAM -->
                <section class="w-full max-w-2xl relative mt-4">
                    <div class="rounded-3xl overflow-hidden shadow-lg relative">
                        <a
                            href="/arkham"
                            class="block rounded-3xl overflow-hidden shadow-lg relative mt-4 w-full max-w-2xl cursor-pointer group transition-transform duration-200 hover:scale-105"
                            style="text-decoration: none"
                        >
                            <!-- Imagem com filtro escurecido -->
                            <img
                                :src="'/images/guildarkham.jpeg'"
                                alt="Guild ARKHAM"
                                class="w-full h-64 object-cover filter brightness-75"
                            />
                            <!-- Conteúdo sobreposto -->
                            <div
                                class="absolute inset-0 flex flex-col items-center justify-center"
                            >
                                <h2
                                    class="text-3xl font-extrabold text-white drop-shadow-lg mb-2"
                                >
                                    Guild ARKHAM
                                </h2>
                                <p
                                    class="text-lg text-gray-200 drop-shadow text-center max-w-md"
                                >
                                    Orgulho de fazer parte da Guild ARKHAM, um
                                    grupo apaixonado por jogos, amizade e
                                    conquistas épicas!
                                </p>
                                <!-- <span
                                    class="mt-4 px-5 py-2 rounded-full bg-blue-700/90 text-white font-bold shadow-md group-hover:bg-blue-900 transition-colors"
                                >
                                    Acessar página da Guild
                                </span> -->
                            </div>
                        </a>
                    </div>
                </section>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const mainContainer = ref(null);
const profSection = ref(null);
const pessoalSection = ref(null);

const showDownArrow = ref(true);
const showUpArrow = ref(false);

let observerProf = null;
let observerPessoal = null;

// Função para scroll suave até sessão pessoal
function scrollToPessoal() {
    pessoalSection.value.scrollIntoView({ behavior: "smooth" });
}
// Função para scroll suave até sessão profissional
function scrollToProfissional() {
    profSection.value.scrollIntoView({ behavior: "smooth" });
}

onMounted(() => {
    // Quando a sessão profissional está majoritariamente visível, mostra seta para baixo
    observerProf = new window.IntersectionObserver(
        ([entry]) => {
            showDownArrow.value =
                entry.isIntersecting && entry.intersectionRatio > 0.5;
        },
        { threshold: [0.5] }
    );
    if (profSection.value) observerProf.observe(profSection.value);

    // Quando a sessão pessoal está majoritariamente visível, mostra seta para cima
    observerPessoal = new window.IntersectionObserver(
        ([entry]) => {
            showUpArrow.value =
                entry.isIntersecting && entry.intersectionRatio > 0.5;
        },
        { threshold: [0.5] }
    );
    if (pessoalSection.value) observerPessoal.observe(pessoalSection.value);
});

onUnmounted(() => {
    if (observerProf && profSection.value)
        observerProf.unobserve(profSection.value);
    if (observerPessoal && pessoalSection.value)
        observerPessoal.unobserve(pessoalSection.value);
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
@keyframes bounce-up {
    0%,
    100% {
        transform: rotate(180deg) translateY(0);
        animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
    }
    50% {
        transform: rotate(180deg) translateY(-25%);
        animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    }
}
.custom-bounce-up {
    animation: bounce-up 1s infinite;
}
</style>
