<main>
    <div class="polaroid">
        <div class="window">

        </div>
        <div class="description">
            <div class="flex">
                Cannon R8 <div class="expand"/> RF24-105mm F4
            </div>
            <div class="flex">
                ISO 1600 <div class="expand"/> 61mm <div class="expand"/> f8 <div class="expand"/> 4.0s
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
        transform: translate(600px, 55px);
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
        color: var(--color-film-orange);
        padding-left: 2px;
        padding-right: 2px;

        font-size: 12px;
    }
    .flex {
        display: flex;
    }
    .expand {
        margin: auto;
    }
</style>