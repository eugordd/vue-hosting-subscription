<template>
  <div>
    <h1>Реклама</h1>
    Вы можете улучшить свой тариф c "Базового" до "Универсального"
    <br>
    <button @click="handleImproveTariff()">Улучшить</button>
    <hr>
    <button @click="prevStep()">Назад</button>
    <button @click="nextStep()">Далее</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Advertisement',
  computed: mapGetters(['selectedTariff', 'lastStep', 'steps']),
  created() {
    // Показ рекламы, только если выбран "Базовый тариф"
    if (this.selectedTariff !== 'Базовый тариф') {
      this.lastStep < this.steps.findIndex(step => step === 'advertisement') ? this.nextStep() : this.prevStep()
    }
  },
  methods: {
    ...mapMutations(['nextStep', 'prevStep', 'setTariff']),
    handleImproveTariff() {
      this.setTariff('Универсальный тариф')
      this.nextStep()
    }
  },
}
</script>
