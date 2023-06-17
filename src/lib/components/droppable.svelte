<script lang="ts">
    export let dropHandler: (event: DragEvent) => void | Promise<void>;
    let classNames = 'droppable';
    let isDragging = false;

    const handleDrop = async (event: DragEvent) => {
        if (dropHandler.constructor.name === 'AsyncFunction') {
            await dropHandler(event);
        } else {
            dropHandler(event);
        }
        classNames = 'droppable';
        isDragging = false;
    };

    const handleDragOver = (event: DragEvent) => {
        event.preventDefault();
        classNames = 'droppable dragover';
        isDragging = true;
    };

    const handleDragLeave = (event: DragEvent) => {
        event.preventDefault();
        classNames = 'droppable';
        isDragging = false;
    };

</script>

<div class={classNames} on:dragover={handleDragOver}>
    <slot />
        {#if isDragging}
            <div class="instructions" on:dragleave={handleDragLeave} on:drop={handleDrop}>
                <div class="inner">
                    <p>Drop it!</p>
                </div>
            </div>
        {/if}
</div>

<style>
    .droppable {
        height: 100vh;
        position: relative;
    }

    .droppable.dragover {
        background: rgba(125, 211, 252, 0.3);
        border: 8px dashed #1e40af;
        border-radius: 8px;
    }
    .inner {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: bold;
        color: #1e40af;
    }
</style>
