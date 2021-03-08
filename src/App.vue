<template>
  <div>
    <router-view/>
    <hr/>

  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*::after,*::before{
  box-sizing: border-box;
}
ol,ul{
  list-style: none;
}
body{
  line-height: 1.5;
  font-size: 14px;
}
a{
  text-decoration: none;
  color: inherit;
  font: inherit;
}
</style>
