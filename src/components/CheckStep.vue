<template>
  <div>
    <slot :name="step" />
  </div>
</template>

<script>
export default {
  name: 'CheckStep',
  props: {
    step: {
      type: String,
      default: 'tariff',
      required: true
    }
  }
}
</script>
