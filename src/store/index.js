import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const store = () => (
  new Vuex.Store({
    state: {
      steps: ['tariff', 'advertisement', 'card', 'confirmation'],
      lastStep: 0,
      currentStep: 0,
      tariffs: ['Базовый тариф', 'Универсальный тариф', 'Расширенный тариф'],
      hostingSubscription: {
        tariff: 'Базовый тариф',
        card: {
          number: '',
          name: '',
          date: '',
          cvc: '',
          email: ''
        }
      }
    },
    mutations: {
      nextStep(state) {
        state.lastStep = state.currentStep
        if (state.currentStep < state.steps.length) {
          state.currentStep += 1
        }
      },
      prevStep(state) {
        state.lastStep = state.currentStep
        if (state.currentStep > 0) {
          state.currentStep -= 1
        }
      },
      setTariff(state, tariff) {
        state.hostingSubscription.tariff = tariff
      },
      setCardInfo(state, card) {
        state.hostingSubscription.card = card
      }
    },
    actions: {
      async payHosting({ state }) {
        const data = state.hostingSubscription
        const headers = {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
        await axios.post('https://randomurl.io', data, { headers })
      }
    },
    getters: {
      steps: state => state.steps,
      lastStep: state => state.lastStep,
      currentStep: state => state.currentStep,
      tariffs: state => state.tariffs,
      selectedTariff: state => state.hostingSubscription.tariff,
      cardInfo: state => state.hostingSubscription.card
    }
  })
)

export default store
