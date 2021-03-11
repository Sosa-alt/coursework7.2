import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        lessons: null,
        cart: [],
        sortBy: 'subject',
        orderBy: 'ascending',
        lessonIndex: null,
    },
    getters: {

        cartCount(state) {
            return state.cart.length
        }
    },
    mutations: {
        findLesson(state, lesson) {
            return state.cart.findIndex((item) => (item.subject.toLowerCase() === lesson.subject.toLowerCase()) && (item.location.toLowerCase() === lesson.location.toLowerCase()))
        },
        setLessons(state, data) {
            state.lessons = data
        },
        addToCart(state, lesson) {
            // Check availability
            if (lesson.spaces > 0) {
                // Check if element is available
                state.lessonIndex = state.cart.findIndex((item) => (item.subject.toLowerCase() === lesson.subject.toLowerCase()) && (item.location.toLowerCase() === lesson.location.toLowerCase()))

                if (state.lessonIndex > -1) {
                    // If available: modify values
                    state.lessonIndex = state.cart.findIndex((item) => (item.subject.toLowerCase() === lesson.subject.toLowerCase()) && (item.location.toLowerCase() === lesson.location.toLowerCase()))

                    // Increase space
                    state.cart[state.lessonIndex].spaces++;

                    // Increase price
                    state.cart[state.lessonIndex].price = parseInt(lesson.price) * parseInt(state.cart[state.lessonIndex].spaces)
                } else {
                    // If not available: add new lesson
                    state.cart.push({
                        'subject': lesson.subject,
                        'location': lesson.location,
                        'price': lesson.price,
                        'spaces': 1,
                        'image': lesson.image
                    })
                }

                lesson.spaces--
                console.log(state.cart)

            } else {
                this.error = "Lesson Not Available"
                this.snackbar = true
            }
        },
        clearCart(state) {
            state.cart = []
        }
    },
    actions: {
        async getLessons({
            commit
        }) {
            let location = window.location.href;
            fetch(`${location}lessons.js`)
                .then(response => response.json())
                .then(data => commit('setLessons', data.data))
        },
        removeFromCart(context, lesson) {
            context.state.cart.splice(context.commit("findLesson", lesson), 1)
        },
        clearCart(context) {
            context.commit('clearCart')
        }
    },
    modules: {}
})