<main>
    <div class="polaroid">
        <div class="window">

        </div>
        <div class="description">
            <div class="flex">
                Cannon EOS R8 <div class="expand"/> RF24-105mm F4
            </div>
            <div class="flex">
                ISO 1600 <div class="expand"/> 61mm <div class="expand"/> f8 <div class="expand"/> 4.0s
            </div>
        </div>
    </div>
</main>

<style>
    :root {
        --polaroid-width: 300px
    }
    .polaroid {
        position: absolute;
        transform: translate(566px, 55px);
        z-index: 1;
    }
    .window {
        border: solid 1px var(--color-pale-tan);
        border-bottom: none;
        height: var(--polaroid-width);
        width: var(--polaroid-width);
    }
    .description {
        border: solid 1px var(--color-pale-tan);
        width: var(--polaroid-width);
        background: var(--color-terminal-grey);
        color: var(--color-pale-tan);
        padding-left: 2px;
        padding-right: 2px;
    }
    .flex {
        display: flex;
    }
    .expand {
        margin: auto;
    }
</style>