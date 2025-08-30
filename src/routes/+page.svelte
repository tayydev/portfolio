<script>
    import Hero from "$lib/hero/Hero.svelte";
    import About from "$lib/about/About.svelte";
    import Center from "$lib/Center.svelte";
</script>

<svelte:head>
    <title>Taylor South - about</title>
</svelte:head>

<main>
    <Hero/>
    <div class="little-spacer"></div>
    <div class="little-spacer mobile-hide"></div>
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

    .little-spacer {
        height: 12px;
    }

    @media (max-width: 1024px) {
        .mobile-hide {
            display: none;
        }
    }
</style>
