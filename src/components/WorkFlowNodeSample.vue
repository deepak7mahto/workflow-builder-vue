<template>
    <li>
        <ul class="flow_inner">

            <StartAutomationNode />

            <TwoSideNewNode />

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

                    <TwoSideNewNode />

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

                                    <TwoSideNewNode />

                                    <WaitNode />

                                    <TwoSideNewNode />

                                    <EndAutomationNode />

                                </ul>
                            </li>
                            <li>
                                <SplitRightNode />

                                <ul class="flow_inner">
                                    <NoNode />

                                    <TwoSideNewNode />

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
</template>

<script>
import AddDealNode from './DataNodes/AddDealNode.vue';
import EndAutomationNode from './DataNodes/EndAutomationNode.vue';
import NoNode from './DataNodes/NoNode.vue';
import SendMailNode from './DataNodes/SendMailNode.vue';
import SplitLeftNode from './DataNodes/SplitLeftNode.vue';
import SplitRightNode from './DataNodes/SplitRightNode.vue';
import StartAutomationNode from './DataNodes/StartAutomationNode.vue';
import SubscribeNode from './DataNodes/SubscribeNode.vue';
import WaitNode from './DataNodes/WaitNode.vue';
import YesNode from './DataNodes/YesNode.vue';
import EndNewNode from './NewNode/EndNewNode.vue';
import TwoSideNewNode from './NewNode/TwoSideNewNode.vue';

export default {
    name: 'WorkFlowNodeSample',
    props: {
    },
    computed: {
    },
    components: { StartAutomationNode, SendMailNode, TwoSideNewNode, YesNode, NoNode, SplitLeftNode, SplitRightNode, EndNewNode, AddDealNode, SubscribeNode, WaitNode, EndAutomationNode }
}
</script>

<style scoped></style>