<script>
    import Pallete from "$lib/Pallete.svelte";
    import Hero from "$lib/hero/Hero.svelte";
    import About from "$lib/about/About.svelte";
</script>

<div class="spacer"/>
<Hero/>
<div class="big-spacer"/>
<About/>

<style>
    .spacer {
        height: 32px;
    }
    .big-spacer {
        height: 48px;
    }
</style>