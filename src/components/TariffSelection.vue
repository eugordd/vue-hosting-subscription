<template>
  <form @submit.prevent="nextStep">
    <h1>Выбор тарифа</h1>

    <select
      :value="selectedTariff"
      @change="setTariff($event.target.value)">
      <option
        v-for="(tariff, i) in tariffs"
        :key="i"
        :value="tariff">
        {{ tariff }}
      </option>
    </select>

    <hr>
    <input
      type="submit"
      value="Далее">

  </form>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'TariffSelection',
  computed: mapGetters(['tariffs', 'selectedTariff']),
  methods: mapMutations(['setTariff', 'nextStep', 'prevStep'])
}
</script>
