<template>
    <div
        class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-950 px-4"
    >
        <div
            class="bg-gray-900/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center max-w-lg w-full border border-blue-950"
        >
            <img
                :src="'/images/guildarkham.jpeg'"
                alt="Guild Arkham"
                class="w-36 h-36 rounded-2xl object-cover border-4 border-blue-900 shadow-lg mb-6 grayscale"
            />
            <h1 class="text-4xl font-extrabold text-gray-100 mb-2 drop-shadow">
                ARKHAM
            </h1>
            <h2 class="text-xl font-semibold text-blue-300 mb-6 tracking-wide">
                Página em Construção
            </h2>
            <p class="text-center text-gray-300 text-lg mb-4">
                Estamos preparando uma área exclusiva da Guild ARKHAM.<br />
                Em breve você encontrará informações sobre membros e jogos onde
                atuamos!
            </p>
            <div class="flex items-center space-x-2 mt-2">
                <svg
                    class="w-8 h-8 animate-spin text-blue-800"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                    />
                    <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                </svg>
                <span class="text-blue-400 font-semibold"
                    >Aguarde novidades!</span
                >
            </div>
            <router-link
                to="/"
                class="mt-8 inline-block px-6 py-2 rounded-full bg-blue-900 text-white font-bold shadow-md hover:bg-blue-950 transition-colors"
            >
                Voltar à Página Inicial
            </router-link>
        </div>
    </div>
</template>
