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

export default {
    data: function () {
        return {
            tree: {
                name: 'root',
                id: 1, children: [
                    { name: 'start_automation', id: 2, children: [] },
                    { name: 'send_mail', id: 3, children: [] },
                    {
                        name: 'if-else', id: 4, children: [
                            {
                                name: 'yes', id: 5, children: [
                                    { name: 'send_mail', id: 6, children: [] },
                                    { name: 'send_mail', id: 7, children: [] },
                                ]
                            },
                            {
                                name: 'no', id: 8, children: [
                                    { name: 'send_mail', id: 3, children: [] },

                                    {
                                        name: 'split', id: 9, children: [
                                            {
                                                name: 'split_left', id: 10, children: [
                                                    { name: 'send_mail', id: 11, children: [] },
                                                ]
                                            },
                                            {
                                                name: 'split_right', id: 12, children: [
                                                    { name: 'send_mail', id: 13, children: [] },
                                                ]
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ],
            }
        };
    },
    components: {
        WorkFlowNode,
    }
}
</script>

<style scoped></style>