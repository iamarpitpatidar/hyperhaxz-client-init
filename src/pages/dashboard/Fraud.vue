<template>
  <Dashboard>
    <div class="container mx-auto">
      <stats>
        <stat-item>
          Status
          Undetected
        </stat-item>
        <stat-item>
          Version
          2
        </stat-item>
        <stat-item>
          Reports
          2
        </stat-item>
      </stats>
    </div>
  </Dashboard>
</template>

<script>
import Stats from '~/components/Stats'
import StatItem from '~/components/StatItem'

export default {
  metaInfo: {
    title: 'Fraud'
  },
  components: {
    Stats,
    StatItem
  }
}
</script>
