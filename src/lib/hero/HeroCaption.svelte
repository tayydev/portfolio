<script>
</script>

<div class="image-text-container">
    <div class="bg">&nbsp;</div>
    <div class="caption">
        Software Engineer
        <div class="external">
            <a href="https://github.com/tayydev">github</a>
            •
            <a href="https://www.linkedin.com/in/southtaylor/">linkedin</a>
        </div>
    </div>
</div>

<style>

    .image-text-container {
        position: relative;
        margin-top: 3px;
    }

    .caption {
        margin-left: auto;
        width: fit-content;
        z-index: 1;
        text-align: right;
        margin-right: 8px;

        color: var(--color-terminal-grey);
        font-size: 24px;
        font-weight: bold;
    }

    .bg {
        position: absolute;
        transform: translate(124px, 0px);
        z-index: -1;

        font-size: 24px;

        background: var(--color-sprout-green);
        width: 825px;
    }

    .external {
        display: none;
    }

    /* Mobile responsive styles */
    @media (max-width: 1024px) {
        .image-text-container {
            width: 100%;
            max-width: var(--content-width);
            background: var(--color-sprout-green);
        }

        .caption {
            margin: 0;
            text-align: center;
            font-size: 36px;
            padding: 4px;
            position: relative;
            z-index: 1;
            width: 100%;
        }

        .bg {
            display: none;
        }

        .external {
            display: flex;
            gap: 4px;
            font-size: 24px;
            font-weight: normal;
            padding: 8px;

            justify-content: center;
            align-items: center;
        }
    }

</style>
