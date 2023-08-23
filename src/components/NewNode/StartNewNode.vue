<template>
    <li @dragover="onDragOver($event)" @drop="onDrop($event)">
        <div class="workflow_card--add --start">
            <a href="#"><i class='icon icon-plus'></i></a>
        </div>
    </li>
</template>

<script>
export default {
    methods: {
        onDragOver(event) {
            event.preventDefault();
        },
        onDrop(event) {
            event.preventDefault();
            let data = event.dataTransfer.getData("text");
            console.log({ data });
        }
    }
}
</script>

<style scoped></style>