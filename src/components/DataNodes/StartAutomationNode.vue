<template>
  <li>
    <div class="workflow_card --green --with-icon">
      <div class="bubble">
        <i class="fas fa-sync-alt"></i>
        <p>Start of Automation</p>
        <i class="icon-drag icon-resize-plus-2"></i>
      </div>
    </div>
  </li>
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