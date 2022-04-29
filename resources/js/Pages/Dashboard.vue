<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';
</script>

<template>
    <Head title="Dashboard" />

    <BreezeAuthenticatedLayout>
        <template #header>
            <h2 class="tw-font-semibold tw-text-xl tw-text-gray-800 tw-leading-tight">
                Dashboard Test
            </h2>
        </template>

        <div class="tw-py-12">
            <div class="tw-max-w-7xl tw-mx-auto sm:tw-px-6 lg:tw-px-8">
                <div class="tw-bg-white tw-overflow-hidden tw-shadow-sm sm:tw-rounded-lg">
                    <div class="tw-p-6 tw-bg-white tw-border-b tw-border-gray-200">
                        <v-card
                            class="tw-mx-auto"
                            max-width="344"
                        >
                            <v-card-text>
                                <div>Wor of the Day</div>
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
                                    <v-card-text class="tw-pb-0">
                                        <p class="text-h4 text--primary">
                                            Origin
                                        </p>
                                        <p>late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’ </p>
                                    </v-card-text>
                                    <v-card-actions class="tw-pt-0">
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
