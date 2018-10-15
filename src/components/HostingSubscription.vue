<template>
  <div>
    <check-step :step="steps[currentStep]">
      <tariff-selection slot="tariff"/>
      <advertisement slot="advertisement" />
      <card-info slot="card" />
      <confirmation slot="confirmation" />
    </check-step>
  </div>
</template>

<script>
import TariffSelection from './TariffSelection.vue'
import CheckStep from './CheckStep.vue'
import Advertisement from './Advertisement.vue'
import CardInfo from './CardInfo.vue'
import Confirmation from './Confirmation.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'HostingSubscription',
  components: {
    CheckStep,
    Advertisement,
    CardInfo,
    Confirmation,
    TariffSelection
  },
  computed: mapGetters(['currentStep', 'steps'])
}
</script>
