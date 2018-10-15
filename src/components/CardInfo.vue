<template>
  <form @submit.prevent="submit">

    <h1>Оформление</h1>

    <validative-input
      v-validate.disable="'credit_card|required'"
      v-model="cardInfo.number"
      :value="cardInfo.number"
      :error="errors.first('card-number')"
      type="text"
      name="card-number"
      title="Номер карты" />

    <validative-input
      v-validate.disable="'required'"
      v-model="cardInfo.name"
      :value="cardInfo.name"
      :error="errors.first('card-name')"
      type="text"
      name="card-name"
      title="Имя" />

    <validative-input
      v-validate.disable="'date_format:MM/YY|required'"
      v-model="cardInfo.date"
      :value="cardInfo.date"
      :error="errors.first('date')"
      type="text"
      name="date"
      title="Дата" />

    <validative-input
      v-validate.disable="'digits:3|required'"
      v-model="cardInfo.cvc"
      :value="cardInfo.cvc"
      :error="errors.first('cvc')"
      type="password"
      name="cvc"
      title="CVC" />

    <validative-input
      v-validate.disable="'email|required'"
      v-model="cardInfo.email"
      :value="cardInfo.email"
      :error="errors.first('email')"
      type="text"
      name="email"
      title="Email" />

    <hr>
    <input
      type="button"
      value="Назад"
      @click="prevStep()" >
    <input
      type="submit"
      value="Далее" >
  </form>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import ValidativeInput from './ValidativeInput.vue'

export default {
  name: 'CardInfo',
  components: {
    ValidativeInput
  },
  computed: mapGetters(['cardInfo']),
  methods: {
    ...mapMutations(['nextStep', 'prevStep', 'setCardInfo']),
    submit() {
      this.$validator.validate().then(valid => {
        if (valid) {
          this.setCardInfo(this.cardInfo)
          this.nextStep()
        }
      })
    }
  }
}
</script>
