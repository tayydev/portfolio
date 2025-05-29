<script>
    import Palette from "$lib/Pallete.svelte";
    import hero from "./hero_reduced.webp"
    import Center from "$lib/Center.svelte";
    import Example from "$lib/Example.svelte";
</script>

<main>
    <Center>
        <div class="hero-container">
            TAYLOR <br> SOUTH
            <Palette/>
            <img class="hero-img" src={hero} alt="taylor at a beach"/>
        </div>
    </Center>
    <Example/>
</main>

<style>
    .hero-img {
        max-width: 768px;
    }
    .hero-container {
        display: block;
        font-family: "Anton", sans-serif;
        font-size: 144px;
        line-height: 1;
    }
</style>