<template>
  <div>
    <g-button icon="settings">默认按钮</g-button>
    <g-button :loading="true">默认按钮</g-button>
    <g-button disabled>默认按钮</g-button><br><br>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  export default {
    components: {
      'g-button': Button
    },
  }
</script>

