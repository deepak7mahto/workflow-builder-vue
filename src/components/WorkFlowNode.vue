<template>
    <li v-if="node.name === 'start_automation'">
        <StartAutomationNode :node="node" :parent="parent" />
    </li>
    <li v-if="node.name === 'send_mail'" data-popover="popover" v-bind:data-content="dataContent">
        <SendMailNode :node="node" :parent="parent" />
    </li>
    <li v-if="node.name === 'wait'" data-popover="popover" v-bind:data-content="dataContent">
        <WaitNode :node="node" :parent="parent" />
    </li>

    <li v-if="node.name === 'if-else'" data-popover="popover" v-bind:data-content="dataContent">
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

    <li v-else-if="node.name === 'split'">
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


    <ul v-else class="flow_inner">
        <TwoSideNewNode v-if="showTwoSideNode" :node="node" :parent="parent" :nodeIndex="nodeIndex" />
        <WorkFlowNode v-for="(child, index) in node.children" :key="child.id" :node="child" :depth="depth + 1"
            :parent="node" :nodeIndex="index" />
    </ul>
</template>

<script>
import { useWorkFlowStore } from '../store/index';
import NoNode from './DataNodes/NoNode.vue';
import SendMailNode from './DataNodes/SendMailNode.vue';
import SplitLeftNode from './DataNodes/SplitLeftNode.vue';
import SplitRightNode from './DataNodes/SplitRightNode.vue';
import StartAutomationNode from './DataNodes/StartAutomationNode.vue';
import WaitNode from './DataNodes/WaitNode.vue';
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
            useWorkFlowStore().removeNode(this.node, this.parent);
        }
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
    components: { StartAutomationNode, SendMailNode, TwoSideNewNode, YesNode, NoNode, SplitLeftNode, SplitRightNode, WaitNode }
}
</script>

<style scoped></style>