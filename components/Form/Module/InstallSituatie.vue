<template>
        <FormTextArea
            label="Omschrijving taak"
            class="col-span-12"
            v-model="formStore.omschrijving"
        />
        <FormSelect
            label="Catsap"
            :options="catsapStore.options"
            class="col-span-4"
            v-model="formStore.catsap"
        />

        <FormSelect
            label="Filter"
            :options="filterStore.options"
            class="col-span-4"
            v-model="formStore.filter"
        />
        <FormInput
            label="Streetping"
            class="col-span-4"
            v-model="formStore.streetping"
        />
</template>
<script setup>
const filterStore = useFilterStore()
const catsapStore = useCatsapStore()
const formStore = useFormStore()
</script>
