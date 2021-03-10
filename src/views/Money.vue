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

import Tags from '@/components/Tags.vue';
import Types from '@/components/Types.vue';
import NotesDate from '@/components/NotesDate.vue';
import NumberPad from '@/components/NumberPad.vue';
export default {
  name: 'Money.vue',
  components: {NumberPad, NotesDate, Types, Tags},

}
</script>

<style lang="scss" scoped>



</style>

