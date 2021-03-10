<template>
  <div>
    <Layout>
      <Types/>
      <Tags :date-source="tags"/>
      <NotesDate/>
      <NumberPad/>
    </Layout>
  </div>
</template>

<script lang="js">

import Tags from '@/components/money/Tags.vue'
import Types from '@/components/money/Types.vue'
import NotesDate from '@/components/money/NotesDate.vue'
import NumberPad from '@/components/money/NumberPad.vue'

export default {
  name: 'Money.vue',
  components: {NumberPad, NotesDate, Types, Tags},
  data() {
    return {
      tags: [
        {
          id: '1',
          name: 'clothing',
          type: '-',
          value:'衣'
        },
        {
          id: '2',
          name: 'food',
          type: '-',
          value:'食'
        },
        {
          id: '3',
          name: 'live',
          type: '-',
          value:'住'
        },
        {
          id: '4',
          name: 'travel',
          type: '-',
          value:'行'
        }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>


</style>

