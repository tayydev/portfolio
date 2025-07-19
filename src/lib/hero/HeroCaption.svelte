<div class="image-text-container">
    <div class="bg">&nbsp;</div>
    <div class="caption">
        Software Engineer
    </div>
</div>

<style>
    :root {
        --caption-start: 7px;
    }

    .image-text-container {
        position: relative;
        margin-top: 20px;
    }

    .caption {
        margin-left: auto;
        width: fit-content;
        z-index: 1;
        text-align: right;
        margin-right: 16px;

        font-size: 24px;
        font-weight: bold;
    }

    .bg {
        position: absolute;
        transform: translate(165px, 0px);
        z-index: -1;

        font-size: 24px;

        margin-left: var(--caption-start);

        background: var(--color-pale-green);
        width: 800px;
    }
</style>