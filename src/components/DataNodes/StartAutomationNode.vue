<template>
  <li>
    <div class="workflow_card --green --with-icon">
      <div class="bubble" data-popover="popover" v-bind:data-content="dataContent">
        <i class="fas fa-sync-alt"></i>
        <p>Start of Automation</p>
        <i class="icon-drag icon-resize-plus-2"></i>
      </div>
    </div>
  </li>
</template>

<script>

import { useWorkFlowStore } from '../../store/index';

export default {
  props: {
    node: Object
  },
  data() {
    return {
      dataContent: `<div class='workflow_actions'>
                        <ul class='list-inline'>
                          <li><a href='#' class='workflow-action' data-tooltip='tooltip' data-placement='top' title='Share'><i class='icon icon-share-2'></i></a></li>
                          <li><a href='#' class='workflow-action' data-tooltip='tooltip' data-placement='top' title='View'><i class='icon icon-document-text'></i></a></li>
                          <li><a href='#' class='workflow-action workflow-action-delete' data-tooltip='tooltip' data-placement='top' title='Delete'><i class='icon icon-trash ${this.node.id}'></i></a></li>
                        </ul>
                      </div>`
    }
  },
  mounted() {
    const myThis = this;
    window.addEventListener('click', function (event) {
      if (event.target.className === `icon icon-trash ${myThis.node.id}`) {
        myThis.handleDeleteButtonClicked();
      }
    });
  },
  methods: {
    handleDeleteButtonClicked() {
      useWorkFlowStore().removeNode(this.node);
    }
  }
}
</script>

<style scoped></style>