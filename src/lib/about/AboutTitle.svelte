<script>
    import Pallete from "$lib/Pallete.svelte";
    import { browser } from '$app/environment';

    export let text = "ABOUT";
    //Sad pathetic deprecated javascript check so windows font rendering is
    // correctly offset
    const isWindows = browser && /Win/.test(navigator.platform);
</script>

<div class="about-container">
    <div class="title-text" class:windows={isWindows}>
        {text}
    </div>
    <div class="bg">
        &nbsp;
        <div class="expand"/>
        <div class="thin-mobile-hide">
            <Pallete/>
        </div>
    </div>
</div>

<style>
    :root {
        --about-title-start: 0px;
    }

    .title-text {
        position: absolute;
        top: 47.5%; /* Default to macOS behavior */
        transform: translateY(-50%);

        padding-left: 16px;

        font-family: "AntonCrop", sans-serif;
        line-height: 1.0;
        font-size: 57px; /* Two pixels taller than container */
        text-align: right;
        z-index: 2;
        color: var(--color-peach-parchment);
    }

    .title-text.windows {
        top: 45%;
    }

    .bg {
        background: var(--color-terminal-grey);
        height: 55px;
        width: calc(var(--content-width) - var(--about-title-start));
        display: flex;
    }

    .about-container {
        position: relative;
    }
    .expand {
        margin: auto;
    }

    @media (max-width: 375px) {
        .thin-mobile-hide {
            display: none;
        }
    }
</style>
