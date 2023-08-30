<template>
  <div class="workflow_card --blue --with-icon">
    <div class="bubble">
      <i class="far fa-envelope"></i>
      <p>Send Email</p>
      <i class="icon-drag icon-resize-plus-2"></i>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    node: Object,
    parent: Object
  },
}
</script>

<style scoped></style>