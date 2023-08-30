<template>
    <StartAutomationNode v-if="node.name === 'start_automation'" :node="node" />
    <SendMailNode v-if="node.name === 'send_mail'" :node="node" />

    <template v-if="node.name === 'if-else'">
        <li>
            <ul class="flow_split">
                <li v-if="node.children[0].name === 'yes'">
                    <SplitLeftNode />
                    <ul class="flow_inner">
                        <YesNode />
                        <template v-if="node.children.length > 0">
                            <TwoSideNewNode :node="node" :parent="node.children[0]" :nodeIndex="nodeIndex" />
                            <WorkFlowNode v-for="(child, index) in node.children[0].children" :key="child.id" :node="child"
                                :depth="depth + 1" :parent="node.children[0]" :nodeIndex="index" />
                        </template>
                    </ul>
                </li>
                <li v-if="node.children[1].name === 'no'">
                    <SplitRightNode />
                    <ul class="flow_inner">
                        <NoNode />
                        <TwoSideNewNode :node="node" :parent="node.children[1]" :nodeIndex="nodeIndex" />
                        <template v-if="node.children.length > 0">
                            <WorkFlowNode v-for="(child, index) in node.children[1].children" :key="child.id" :node="child"
                                :depth="depth + 1" :parent="node.children[1]" :nodeIndex="index" />
                        </template>
                    </ul>

                </li>
            </ul>
        </li>
    </template>
    <template v-else-if="node.name === 'split'">
        <li>
            <ul class="flow_split">
                <li>
                    <SplitLeftNode />
                    <ul class="flow_inner">
                        <TwoSideNewNode :node="node" :parent="node.children[0]" :nodeIndex="nodeIndex" />
                        <template v-if="node.children.length > 0 && node.children[0].name === 'split_left'">
                            <WorkFlowNode v-for="(child, index) in node.children[0].children" :key="child.id" :node="child"
                                :depth="depth + 1" :parent="node.children[0]" :nodeIndex="index" />
                        </template>
                    </ul>
                </li>
                <li>
                    <SplitRightNode />
                    <ul class="flow_inner">
                        <TwoSideNewNode :node="node" :parent="node.children[1]" :nodeIndex="nodeIndex" />
                        <template v-if="node.children.length > 0 && node.children[1].name === 'split_right'">
                            <WorkFlowNode v-for="(child, index) in node.children[1].children" :key="child.id" :node="child"
                                :depth="depth + 1" :parent="node.children[1]" :nodeIndex="index" />
                        </template>
                    </ul>

                </li>
            </ul>
        </li>
    </template>
    <template v-else>
        <ul class="flow_inner">
            <TwoSideNewNode v-if="showTwoSideNode" :node="node" :parent="parent" :nodeIndex="nodeIndex" />
            <WorkFlowNode v-for="(child, index) in node.children" :key="child.id" :node="child" :depth="depth + 1"
                :parent="node" :nodeIndex="index" />
        </ul>
    </template>
</template>

<script>
import NoNode from './DataNodes/NoNode.vue';
import SendMailNode from './DataNodes/SendMailNode.vue';
import SplitLeftNode from './DataNodes/SplitLeftNode.vue';
import SplitRightNode from './DataNodes/SplitRightNode.vue';
import StartAutomationNode from './DataNodes/StartAutomationNode.vue';
import YesNode from './DataNodes/YesNode.vue';
import TwoSideNewNode from './NewNode/TwoSideNewNode.vue';


export default {
    name: 'WorkFlowNode',
    props: {
        parent: Object,
        node: Object,
        depth: {
            type: Number,
            default: 0
        },
        nodeIndex: Number
    },
    computed: {
        showStartNode() {
            return this.depth === 0;
        },
        showTwoSideNode() {
            return this.depth > 0 && this.node.name !== 'split' && this.node.name !== 'if-else';
        },
        showEndNewNode() {
            return this.node.name === 'split' || this.node.name === 'if-else';
        }
    },
    components: { StartAutomationNode, SendMailNode, TwoSideNewNode, YesNode, NoNode, SplitLeftNode, SplitRightNode }
}
</script>

<style scoped></style>