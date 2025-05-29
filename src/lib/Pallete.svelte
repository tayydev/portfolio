<main>
    <div class="reset">
        <div class="square" style="background: var(--color-pale-tan)"></div>
        <div class="square" style="background: var(--color-pale-green)"></div>
        <div class="square" style="background: var(--color-link-green)"></div>
    </div>
</main>

<style>
    .reset {
        background: var(--color-terminal-grey);
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        padding: 4px;
        z-index: 1;

        position: absolute;
        bottom: 4px;
        right: 0;
    }
    .square {
        width: 20px;
        height: 20px;
    }
</style>