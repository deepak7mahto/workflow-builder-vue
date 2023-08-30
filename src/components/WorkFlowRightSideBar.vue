<template>
    <aside class="hl_workflow--sidebar">
        <a href="#" class="hide-sidebar" id="hide-sidebar"><i class="icon icon-arrow-right-1"></i></a>
        <div class="hl_workflow--sidebar-header">
            <h2>Actions</h2>
            <div class="search-form">
                <i class="icon icon-loupe"></i>
                <input type="text" class="form-control form-light" placeholder="Search Actions">
            </div>
        </div>
        <div class="hl_workflow--sidebar-inner">
            <div class="accordion" id="workflow-action-collapse">
                <div class="actions-set">
                    <a class="collapsed" data-toggle="collapse" href="#actions-set1" role="button" aria-expanded="false"
                        aria-controls="actions-set1">
                        <span>Sending Options</span>
                        <i class="caret icon-arrow-down-1"></i>
                    </a>
                    <div class="collapse" id="actions-set1" data-parent="#workflow-action-collapse">
                        <ul class="actions-list">
                            <li draggable="true" @dragstart="onDragStart($event, 'send_mail')"><span>Send email</span> <i
                                    class="icon icon-resize-plus-2"></i>
                            </li>
                            <li draggable="true"><span>Send a site message</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li draggable="true"><span>Send SMS</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li draggable="true"><span>Notify Someone</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="actions-set">
                    <a class="collapsed" data-toggle="collapse" href="#actions-set2" role="button" aria-expanded="false"
                        aria-controls="actions-set2">
                        <span>Conditions and workflow</span>
                        <i class="caret icon-arrow-down-1"></i>
                    </a>
                    <div class="collapse" id="actions-set2" data-parent="#workflow-action-collapse">
                        <ul class="actions-list">
                            <li draggable="true"><span>Wait</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li draggable="true" @dragstart="onDragStart($event, 'if-else')"><span>If / Else</span> <i
                                    class="icon icon-resize-plus-2"></i>
                            </li>
                            <li draggable="true"><span>Split</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li draggable="true"><span>Go to</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li draggable="true"><span>Goal</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li draggable="true" @dragstart="onDragStart($event, 'start_automation')"><span>Start an
                                    automation</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li draggable="true"><span>End this automation</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li draggable="true"><span>End other automation</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li draggable="true"><span>Webhook</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="actions-set">
                    <a class="collapsed" data-toggle="collapse" href="#actions-set3" role="button" aria-expanded="false"
                        aria-controls="actions-set3">
                        <span>Contacts</span>
                        <i class="caret icon-arrow-down-1"></i>
                    </a>
                    <div class="collapse" id="actions-set3" data-parent="#workflow-action-collapse">
                        <ul class="actions-list">
                            <li><span>Subscribe</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Unsubscribe</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Convert</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Update contact</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Add tag</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Remove tag</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Add note</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Add to Facebook Custom Audience</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Remove from Facebook Custom Audience</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Adjust score</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="actions-set">
                    <a class="collapsed" data-toggle="collapse" href="#actions-set4" role="button" aria-expanded="false"
                        aria-controls="actions-set4">
                        <span>CRM</span>
                        <i class="caret icon-arrow-down-1"></i>
                    </a>
                    <div class="collapse" id="actions-set4" data-parent="#workflow-action-collapse">
                        <ul class="actions-list">
                            <li><span>Add deal</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Update title</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Update status</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Update owner</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Update value</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Update stage</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Update custom field</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Add task</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Add note</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Complete task</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                            <li><span>Adjust score</span> <i class="icon icon-resize-plus-2"></i>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </aside>
    <!-- END of .hl_workflow--sidebar -->
</template>

<script>
export default {
    methods: {
        onDragStart(event, name) {
            event.dataTransfer.setData("text", name);
        }
    }
}
</script>

<style scoped></style>