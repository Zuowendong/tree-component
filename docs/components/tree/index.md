# tree

:::demo 使用`data`定义`tree`数据

```vue
<template>
  <WdTree :data="treeData"/>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
 setup () {
  let treeData = ref([
    {
      label: '中国菜',
      children: [{ label: '淮扬菜' }]
    }
  ])
  return {
    treeData
  }
 }
})
</script>
```

:::
