<template>
    <Button class="btn-search" @click="toggleSearch">
        <font-awesome-icon :icon="['fas', 'search']" />
    </Button>
</template>

<script>
import Button from './Button.vue';
export default {
    name: 'SearchButton',
    components: {
        Button
    }
}
</script>