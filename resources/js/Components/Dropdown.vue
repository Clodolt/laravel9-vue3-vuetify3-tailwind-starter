<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue';

const props = defineProps({
    align: {
        default: 'right'
    },
    width: {
        default: '48'
    },
    contentClasses: {
        default: () => ['tw-py-1', 'tw-bg-white']
    }
});

const closeOnEscape = (e) => {
    if (open.value && e.key === 'Escape') {
        open.value = false;
    }
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));
onUnmounted(() => document.removeEventListener('keydown', closeOnEscape));

const widthClass = computed(() => {
    return {
        '48': 'tw-w-48',
    }[props.width.toString()];
});

const alignmentClasses = computed(() => {
    if (props.align === 'left') {
        return 'tw-origin-top-left tw-left-0';
    } else if (props.align === 'right') {
        return 'tw-origin-top-right tw-right-0';
    } else {
        return 'tw-origin-top';
    }
});

const open = ref(false);
</script>

<template>
    <div class="tw-relative">
        <div @click="open = ! open">
            <slot name="trigger" />
        </div>

        <!-- Full Screen Dropdown Overlay -->
        <div v-show="open" class="tw-fixed tw-inset-0 tw-z-40" @click="open = false"></div>

        <transition
            enter-active-class="tw-transition tw-ease-out tw-duration-200"
            enter-from-class="tw-transform tw-opacity-0 tw-scale-95"
            enter-to-class="tw-transform tw-opacity-100 tw-scale-100"
            leave-active-class="tw-transition tw-ease-in tw-duration-75"
            leave-from-class="tw-transform tw-opacity-100 tw-scale-100"
            leave-to-class="tw-transform tw-opacity-0 tw-scale-95">
            <div v-show="open"
                 class="tw-absolute tw-z-50 tw-mt-2 tw-rounded-md tw-shadow-lg"
                 :class="[widthClass, alignmentClasses]"
                 style="display: none;"
                 @click="open = false">
                <div class="tw-rounded-md tw-ring-1 tw-ring-black tw-ring-opacity-5" :class="contentClasses">
                    <slot name="content" />
                </div>
            </div>
        </transition>
    </div>
</template>
