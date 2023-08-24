<template>
    <StartAutomationNode v-if="node.id === 'start_automation'" />
    <SendMailNode v-if="node.id === 'send_mail'" />

    <template v-if="node.id === 'if-else'">
        <li>
            <ul class="flow_split">
                <li v-if="node.children[0].id === 'yes'">
                    <SplitLeftNode />
                    <ul class="flow_inner">
                        <YesNode />
                        <template v-if="node.children.length > 0">
                            <TwoSideNewNode />
                            <WorkFlowNode v-for="child in node.children[0].children" :key="child.key" :node="child"
                                :depth="depth + 1" />
                        </template>
                    </ul>
                </li>
                <li v-if="node.children[1].id === 'no'">
                    <SplitRightNode />
                    <ul class="flow_inner">
                        <NoNode />
                        <TwoSideNewNode />
                        <template v-if="node.children.length > 0">
                            <WorkFlowNode v-for="child in node.children[1].children" :key="child.key" :node="child"
                                :depth="depth + 1" />
                        </template>
                    </ul>

                </li>
            </ul>
        </li>
    </template>
    <template v-else-if="node.id === 'split'">
        <li>
            <ul class="flow_split">
                <li>
                    <SplitLeftNode />
                    <ul class="flow_inner">
                        <TwoSideNewNode />
                        <template v-if="node.children.length > 0 && node.children[0].id === 'split_left'">
                            <WorkFlowNode v-for="child in node.children[0].children" :key="child.key" :node="child"
                                :depth="depth + 1" />
                        </template>
                    </ul>
                </li>
                <li v-if="node.children[1].id === 'split_right'">
                    <SplitRightNode />
                    <ul class="flow_inner">
                        <TwoSideNewNode />
                        <template v-if="node.children.length > 0">
                            <WorkFlowNode v-for="child in node.children[1].children" :key="child.key" :node="child"
                                :depth="depth + 1" />
                        </template>
                    </ul>

                </li>
            </ul>
        </li>
    </template>
    <template v-else>
        <!-- <StartNewNode v-if="showStartNode" />
        <EndNewNode v-if="showEndNewNode" /> -->
        <ul class="flow_inner">
            <TwoSideNewNode v-if="showTwoSideNode" />
            <WorkFlowNode v-for="child in node.children" :key="child.key" :node="child" :depth="depth + 1" />
        </ul>
    </template>

    <!-- <li>
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
    </li> -->
</template>

<script>
import NoNode from './DataNodes/NoNode.vue';
import SendMailNode from './DataNodes/SendMailNode.vue';
import SplitLeftNode from './DataNodes/SplitLeftNode.vue';
import SplitRightNode from './DataNodes/SplitRightNode.vue';
import StartAutomationNode from './DataNodes/StartAutomationNode.vue';
import YesNode from './DataNodes/YesNode.vue';
// import EndNewNode from './NewNode/EndNewNode.vue';
// import StartNewNode from './NewNode/StartNewNode.vue';
import TwoSideNewNode from './NewNode/TwoSideNewNode.vue';

export default {
    name: 'WorkFlowNode',
    props: {
        node: Object,
        depth: {
            type: Number,
            default: 0
        },
    },
    computed: {
        showStartNode() {
            return this.depth === 0;
        },
        showTwoSideNode() {
            return this.depth > 0 && this.node.id !== 'split' && this.node.id !== 'if-else';
        },
        showEndNewNode() {
            return this.node.id === 'split' || this.node.id === 'if-else';
        }
    },
    components: { StartAutomationNode, SendMailNode, TwoSideNewNode, YesNode, NoNode, SplitLeftNode, SplitRightNode }
}
</script>

<style scoped></style>