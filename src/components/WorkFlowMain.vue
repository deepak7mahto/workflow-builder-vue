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

                    <StartAutomation />

                    <TwoSideNode />

                    <SendMailNode />

                    <EndNewNode />

                </ul>
            </li>
            <li>
                <ul class="flow_split">
                    <li>
                        <SplitLeftNode />
                        <ul class="flow_inner">
                            <AddDealNode />

                            <TwoSideNode />

                            <SubscribeNode />

                            <EndNewNode />
                        </ul>
                    </li>
                    <li>
                        <SplitRightNode />
                        <ul class="flow_inner">

                            <WaitNode />

                            <EndNewNode />

                            <li>
                                <ul class="flow_split">
                                    <li>
                                        <SplitLeftNode />

                                        <ul class="flow_inner">
                                            <YesNode />

                                            <TwoSideNode />

                                            <WaitNode />

                                            <TwoSideNode />

                                            <EndAutomationNode />

                                        </ul>
                                    </li>
                                    <li>
                                        <SplitRightNode />

                                        <ul class="flow_inner">
                                            <NoNode />

                                            <TwoSideNode />

                                            <WaitNode />

                                            <EndNewNode />

                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>

        </ul>

    </section>
</template>

<script>
import EndNewNode from './NewNode/EndNewNode.vue';
import SendMailNode from './DataNodes/SendMailNode.vue';
import TwoSideNode from './NewNode/TwoSideNewNode.vue';
import WaitNode from './DataNodes/WaitNode.vue';
import EndAutomationNode from './DataNodes/EndAutomationNode.vue';
import YesNode from './DataNodes/YesNode.vue';
import NoNode from './DataNodes/NoNode.vue';
import SubscribeNode from './DataNodes/SubscribeNode.vue';
import AddDealNode from './DataNodes/AddDealNode.vue';
import StartAutomation from './DataNodes/StartAutomationNode.vue';
import SplitLeftNode from './DataNodes/SplitLeftNode.vue';
import SplitRightNode from './DataNodes/SplitRightNode.vue';


export default {
    components: {
        EndNewNode,
        SendMailNode,
        TwoSideNode,
        WaitNode,
        EndAutomationNode,
        YesNode,
        NoNode,
        SubscribeNode,
        AddDealNode,
        StartAutomation,
        SplitLeftNode,
        SplitRightNode
    }
}
</script>

<style scoped></style>