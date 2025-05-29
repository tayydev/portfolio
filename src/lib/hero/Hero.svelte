<script>
    import Palette from "$lib/Pallete.svelte";
    import hero from "./hero_reduced.webp"
    import Center from "$lib/Center.svelte";
    import HeroText from "$lib/hero/HeroText.svelte";
</script>

<main>
    <Center>
        <div class="hero-container">
            <Palette/>
            <HeroText>TAYLOR<br>SOUTH</HeroText>
            <img class="hero-img" src={hero} alt="taylor at a beach"/>
        </div>
    </Center>
    <HeroText/>
</main>

<style>
    :root {
        --image-start: 100px;
    }
    .hero-img {
        max-width: 768px;
        margin-left: var(--image-start);
    }
    .hero-container {
        display: block;
        font-family: "Anton", sans-serif;
        font-size: 144px;
        line-height: 1.2;
    }
</style>