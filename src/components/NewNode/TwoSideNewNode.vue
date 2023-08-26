<template>
    <li>
        <div @dragover="onDragOver($event)" @dragleave="onDragLeave($event)" @drop="onDrop($event)"
            class="workflow_card--add">
            <a v-if="!showDropArea" href="#"><i class='icon icon-plus'></i></a>
            <div v-else class="drop-area"></div>
        </div>
    </li>
</template>

<script>

import { useWorkFlowStore } from '../../store/index';


export default {
    props: {
        node: Object,
        parent: Object,
        nodeIndex: Number
    },
    data: function () {
        return {
            showDropArea: false
        }
    },
    methods: {
        onDragOver: function (event) {
            event.preventDefault();
            this.showDropArea = true;
        },
        onDragLeave: function (event) {
            event.preventDefault();
            this.showDropArea = false;
        },
        onDrop: function (event) {
            const store = useWorkFlowStore();
            this.showDropArea = false;
            const data = event.dataTransfer.getData("text");
            store.addNode(this.parent, this.nodeIndex, data);
        }
    }
}
</script>

<style scoped>
.drop-area {
    border-radius: 10px;
    width: 150px;
    height: 40px;
    background-color: lightgray;
}
</style>