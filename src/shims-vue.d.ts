declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare module 'vue-hash-calendar' {
  const content: any
  export = content
}

