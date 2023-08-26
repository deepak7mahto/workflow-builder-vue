<template>
    <section class="hl_workflow--main">

        <ul class="flow_main">
            <li>
                <ul class="flow_start">
                    <li>
                        <div class="workflow_card">
                            <div class="bubble" data-popover="popover" data-content="
                      <div class='workflow_actions'>
                        <ul class='list-inline'>
                          <li><a href='#' class='workflow-action' data-tooltip='tooltip' data-placement='top' title='Share'><i class='icon icon-share-2'></i></a></li>
                          <li><a href='#' class='workflow-action' data-tooltip='tooltip' data-placement='top' title='View'><i class='icon icon-document-text'></i></a></li>
                          <li><a href='#' class='workflow-action' data-tooltip='tooltip' data-placement='top' title='Delete'><i class='icon icon-trash'></i></a></li>
                        </ul>
                      </div>
                      ">
                                <p><strong>RSS feed http://www.activecampaign.com/blog/ is</strong> updated and contact has
                                    tag Blog
                                    subscriber</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a class="workflow_card--new" data-toggle="tooltip" data-placement="bottom"
                            title="Add new way to start this automation.">
                            <div class="bubble" data-toggle="modal" data-target="#new-automation-modal">
                                <p>Add new trigger</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </li>

            <li>
                <ul class="flow_inner">
                    <WorkFlowNode :node="tree" />
                </ul>
            </li>

            <!-- <WorkFlowNodeSample /> -->

        </ul>

    </section>
</template>

<script>

import WorkFlowNode from './WorkFlowNode.vue';
import { useWorkFlowStore } from '../store/index';
import { mapState } from 'pinia';

export default {
    computed: {
        ...mapState(useWorkFlowStore, { tree: 'tree' })
    },
    components: {
        WorkFlowNode,
    }
}
</script>

<style scoped></style>