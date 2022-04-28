<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';
</script>

<template>
    <Head title="Dashboard" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                Dashboard Test
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6 bg-white border-b border-gray-200">
                        <v-card
                            class="mx-auto"
                            max-width="344"
                        >
                            <v-card-text>
                                <div>Word of the Day</div>
                                <p class="text-h4 text--primary">
                                    el·ee·mos·y·nar·y
                                </p>
                                <p>adjective</p>
                                <div class="text--primary">
                                    relating to or dependent on charity; charitable.<br>
                                    "an eleemosynary educational institution."
                                </div>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn
                                    text
                                    color="teal accent-4"
                                    @click="reveal = true"
                                >
                                    Learn More
                                </v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <v-card
                                    v-if="reveal"
                                    class="transition-fast-in-fast-out v-card--reveal"
                                    style="height: 100%;"
                                >
                                    <v-card-text class="pb-0">
                                        <p class="text-h4 text--primary">
                                            Origin
                                        </p>
                                        <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
                                    </v-card-text>
                                    <v-card-actions class="pt-0">
                                        <v-btn
                                            text
                                            color="teal accent-4"
                                            @click="reveal = false"
                                        >
                                            Close
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-expand-transition>
                        </v-card>
                    </div>
                </div>
            </div>
        </div>
    </BreezeAuthenticatedLayout>
</template>
