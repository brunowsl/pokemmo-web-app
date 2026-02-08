<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const currentLocale = computed(() => {
    return locales.value.find(l => typeof l !== 'string' && l.code === locale.value)
})

const otherLocales = computed(() => {
    return locales.value.filter(l => typeof l !== 'string' && l.code !== locale.value)
})

function switchLang(code: string) {
    setLocale(code)
}
</script>

<template>
    <UDropdownMenu :items="otherLocales.map(l => ({
        label: typeof l !== 'string' ? l.name : l,
        onSelect: () => switchLang(typeof l !== 'string' ? l.code : l)
    }))">
        <UButton icon="i-lucide-languages"
            :label="currentLocale && typeof currentLocale !== 'string' ? currentLocale.code.toUpperCase() : ''"
            variant="ghost" size="sm" />
    </UDropdownMenu>
</template>
