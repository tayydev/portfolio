<script>
    import Pallete from "$lib/Pallete.svelte";
</script>

<div class="about-container">
    <div class="title-text">
        ABOUT
    </div>
    <div class="bg">
        &nbsp;
        <div class="expand"/>
        <Pallete/>
    </div>
</div>

<style>
    :root {
        --about-title-start: 15.4px;
    }

    .title-text {
        position: absolute;
        transform: translate(calc(-0 * var(--about-title-start)), -4px);

        font-family: "Anton", sans-serif;
        line-height: 1.0;
        letter-spacing: 0;
        font-size: 64px;
        margin: 0;
        padding-top: 0;

        background: linear-gradient(
                to right,
                var(--color-terminal-grey) 0%,
                var(--color-terminal-grey) var(--about-title-start),
                var(--color-pale-tan) var(--about-title-start),
                var(--color-pale-tan) 100%
        );
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
        text-align: right;
        z-index: 2;
    }

    .bg {
        background: var(--color-terminal-grey);
        height: 55px;
        width: calc(var(--about-width) - var(--about-title-start));
        margin-left: var(--about-title-start);
        /*margin: 0;*/
        display: flex;
    }
    
    .about-container {
        position: relative;
    }
    .expand {
        margin: auto;
    }
</style>