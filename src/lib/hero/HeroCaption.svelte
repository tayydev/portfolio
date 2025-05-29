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
    }

    .caption {
        position: absolute;
        transform: translate(174px, 360px);
        z-index: 1;

        font-size: 24px;
        font-weight: bold;


        /* Split effect: black before image starts, white over image */
        background: linear-gradient(
                to right,
                var(--color-pale-tan) 0%,
                var(--color-pale-tan) var(--caption-start),
                var(--color-terminal-grey) var(--caption-start),
                var(--color-terminal-grey) 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .bg {
        position: absolute;
        transform: translate(174px, 360px);
        z-index: 1;

        font-size: 24px;

        margin-left: var(--caption-start);

        background: var(--color-pale-green);
        width: 800px;
    }
</style>