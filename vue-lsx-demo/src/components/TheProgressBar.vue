<template>
    <div class="progress-bar">
        <div class="progress" :style="{ width: `${fill}%`}"></div>
    </div>
</template>

<script>
export default {
    name: 'TheProgressBar',
    emits: ['send-fill-status'],
    data() {
        return {
            fill: 5,
            intervalId: null
        }
    },
    watch: {
        fill(newValue) {
            if(newValue > 100) {
                this.fill = 100;
                clearInterval(this.intervalId);
            }
        }
    },
    mounted() {
        this.updateFill();
    },
    methods: {
        updateFill() {
            this.intervalId = setInterval(() => { 
                this.fill < 100 ? this.fill += 15 : this.fill = 100;
                console.log(this.fill);
                this.$emit('send-fill-status', {
                    fill: this.fill
                });
            }, 1000);
        }

    },
    unmounted() {
        console.log("unmounted", this.intervalId);
        clearInterval(this.intervalId);
    }
}
</script>
<style lang="scss">
// .progress-bar {
//     width: 10rem;
//     border: 2px solid black;
//     height: 2rem;
//     overflow: hidden;
// }

// .progress {
//     width: 50%;
//     background-color: red;
//     height: 2rem;
// }

</style>

