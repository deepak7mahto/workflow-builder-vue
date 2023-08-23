<template>
  <section class="hl_wrapper nav-shrink d-flex">

    <section class="hl_wrapper--inner workflow" id="workflow">

      <WorkFlowMain />

      <WorkFlowRightSideBar />

      <WorkFlowAutomationModal />

    </section>

  </section>
</template>

<script>
import WorkFlowMain from './WorkFlowMain.vue';
import WorkFlowRightSideBar from './WorkFlowRightSideBar.vue';
import WorkFlowAutomationModal from './WorkFlowAutomationModal';

export default {
  components: { WorkFlowMain, WorkFlowRightSideBar, WorkFlowAutomationModal }
}
</script>

<style scoped></style>