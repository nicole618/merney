<template>
  <Layout>
    <header>
      <Icon name="left" @click="goBack"/>
      <p>{{ editAdd }}{{ typeName }}标签</p>
      <Icon name="right" class="rightIcon"/>
    </header>
    <div class="editAddContent">
      <Notes :value.sync="myTag.textValue" noteName="名称：" placeholder="请输入标签名" maxlength="4"/>
    </div>
    <ol class="tagIcon hideScroll">
      <li v-for="icon in icons" :key="icon" :class="icon===myTag.name?'selected':''" @click="select(icon)">
        <Icon :name="icon"/>
      </li>
    </ol>
    <div class="flexCenter">
      <Button @click="editOrAdd">{{ editAdd }}</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Notes from '@/components/money/Notes.vue';
import Button from '@/components/Button.vue';
import store from '@/store/index2';

@Component({
             components: {Button, Notes}
           })
export default class AddLabel extends Vue {
  myTag: Tag = {id: -1, name: '', textValue: '', type: ''};
  editAdd: string = '';
  typeName: string = '';
  icons: string[] = store.getIcon();

  created() {
    const route = this.$route.query;
    if (route !== null) {
      this.typeName = route.typeName as string;
      if (this.typeName === '收入') {
        this.myTag.type = '+';
      } else if (this.typeName === '支出') {
        this.myTag.type = '-';
      } else {
        return;
      }
    }
    const tagId = this.$route.params.id;
    if (tagId) {
      this.editAdd = '编辑';
      const findTag = store.findTag(parseInt(tagId.slice(1)));
      this.myTag.textValue = findTag.textValue;
      this.myTag.id = findTag.id;
      this.myTag.name = findTag.name;
      this.myTag.type = findTag.type;
    } else {
      this.editAdd = '新增';
    }
  }

  select(icon: string) {
    this.myTag.name = icon;
  }

  goBack() {
    this.$router.push({ name: '/labels', params: { addBeforeType: this.myTag.type }});
  }

  editOrAdd() {
    if (this.myTag.name === '' || this.myTag.textValue === '') {
      if(document.querySelectorAll('.el-message').length === 0) {
        this.$message({
                        duration:1000,
                        message:'标签名或标签图标不能为空',
                        type:'warning'
                      });
      }
      return;
    }
    if (this.editAdd === '编辑') {
      store.updateTag(this.myTag);
      if(document.querySelectorAll('.el-message').length === 0){
        this.$message({
                        duration:1000,
                        message:'编辑标签成功',
                        type:'success'
                      });
      }
      this.goBack();
    } else if (this.editAdd === '新增') {
      store.addTag(this.myTag);
      if(document.querySelectorAll('.el-message').length === 0){
        this.$message({
                        duration:1000,
                        message:'新增标签成功',
                        type:'success'
                      });
      }
      this.goBack();
    }

  }

}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";


header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  background: $color-lowLight;

  p {
    font-size: 20px;
  }

  .icon {
    width: 25px;
    height: 25px;

    &.rightIcon {
      visibility: hidden;
    }
  }
}

.editAddContent {
  padding: 16px 0;
}

.tagIcon {
  padding: 0 16px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;

  li {
    width: 22%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 1% 1.5%;
    border-radius: 8px;
    background: $color-Light;
    height: 40px;
    overflow: hidden;

    .icon {
      width: auto;
      height: 60%;
    }

    &.selected {
      background: $color-highLight;
      color: white;

      .icon {
        -webkit-animation: icon-bounce 0.5s alternate;
        -moz-animation: icon-bounce 0.5s alternate;
        -o-animation: icon-bounce 0.5s alternate;
        animation: icon-bounce 0.5s alternate;
      }
    }
  }
}

</style>