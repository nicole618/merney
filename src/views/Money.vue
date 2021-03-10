<template>
  <div>
    <Layout>
      <Types/>
      <Tags/>
      <NotesDate/>
      <NumberPad/>
    </Layout>
  </div>
</template>

<script lang="ts">

import Tags from '@/components/money/Tags.vue';
import Types from '@/components/money/Types.vue';
import NotesDate from '@/components/money/NotesDate.vue';
import NumberPad from '@/components/money/NumberPad.vue';
export default {
  name: 'Money.vue',
  components: {NumberPad, NotesDate, Types, Tags},

}
</script>

<style lang="scss" scoped>



</style>

