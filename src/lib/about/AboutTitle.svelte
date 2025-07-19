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
        --about-title-start: 0px;
    }

    .title-text {
        position: absolute;
        transform: translate(0px, -1.5px);

        padding-left: 16px;

        font-family: "AntonCrop", sans-serif;
        line-height: 1.0;
        font-size: 57px; /* Two pixels taller than container */
        text-align: right;
        z-index: 2;
        color: var(--color-peach-parchment);
    }

    .bg {
        background: var(--color-terminal-grey);
        height: 55px;
        width: calc(var(--about-width) - var(--about-title-start));
        display: flex;
    }

    .about-container {
        position: relative;
    }
    .expand {
        margin: auto;
    }
</style>
