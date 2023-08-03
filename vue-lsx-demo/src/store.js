import { createStore } from 'vuex'

// Create a new store instance.
export default createStore({
    // state () {
    //   return {
    //     sliderShow: true
    //   }
    // },
    state: {
        sliderShow: true
    },
    getters: {
        sliderShowStatus () {
            return state.sliderShow;
        }
    },
    actions: {
        updateSliderShow (context) {
            context.commit('sliderShowUpdate');
        }
    },
    mutations: {
        sliderShowUpdate (state) {
            state.sliderShow = !state.sliderShow;
        }
    }
});