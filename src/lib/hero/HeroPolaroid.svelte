<script>
</script>

<main>
    <div class="polaroid">
        <div class="window">

        </div>
        <div class="description">
            <div class="flex">
                IMG_5895cr3 <div class="expand"/> ISO 1600 <div class="expand"/> F8 <div class="expand"/> 4 SeC
            </div>
        </div>
    </div>
</main>

<style>
    :root {
        --polaroid-width: 265px
    }
    .polaroid {
        position: absolute;
        transform: translate(572px, 55px);
        z-index: 1;
    }
    .window {
        border: solid 1px var(--color-snoot-green);
        border-bottom: none;
        height: var(--polaroid-width);
        width: var(--polaroid-width);
    }
    .description {
        border: solid 1px var(--color-snoot-green);
        width: var(--polaroid-width);
        background: var(--color-terminal-grey);
        color: var(--color-snoot-green);
        padding: 2px;

        font-family: '7Segment', monospace;
        font-size: 12px;
    }
    .flex {
        display: flex;
    }
    .expand {
        margin: auto;
    }
</style>
