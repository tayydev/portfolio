<script>
    import Hero from "$lib/hero/Hero.svelte";
    import About from "$lib/about/About.svelte";
    import Center from "$lib/Center.svelte";
</script>

<main>
    <Hero/>
    <div class="big-spacer"></div>
    <About/>
    <div class="big-spacer"></div>
    <Center>
        Copyright © 2025 Taylor South
    </Center>
    <div class="big-spacer"></div>
</main>

<style>
    .big-spacer {
        height: 48px;
    }
</style>
