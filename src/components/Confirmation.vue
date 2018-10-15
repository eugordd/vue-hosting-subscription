<template>
  <div>
    <h1>Подтверждение</h1>
    Вы выбрали <br>
    Тариф: {{ selectedTariff }} <br><br>
    Карта: {{ cardInfo.number }} {{ cardInfo.date }} <br>
    Владелец карты: {{ cardInfo.name }} <br>
    <br>
    Email: {{ cardInfo.email }} <br>
    <hr>
    <button @click="prevStep()">Назад</button>
    <button @click="payHosting()">Подтвердить</button>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'Confirmation',
  computed: mapGetters(['selectedTariff', 'cardInfo']),
  methods: {
    ...mapMutations(['prevStep']),
    ...mapActions(['payHosting'])
  }
}
</script>
