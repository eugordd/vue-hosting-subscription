<template>
  <div
    :class="{ 'validative-input_invalid': !!error }"
    class="validative-input">
    <label
      :for="name"
      class="validative-input__label">
      {{ title }}
    </label>
    <br>
    <input
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :id="name"
      class="validative-input__input"
      @input="handleInput($event.target.value)" >
    <br>
    <div class="validative-input__error">{{ error }}</div>
  </div>
</template>

<script>
export default {
  name: 'ValidativeInput',
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: ''
    },
    error: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    validations: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    handleInput(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="sass" scoped>
.validative-input
  &_invalid
    input
      border-color: red
  &__error
    color: red

</style>
