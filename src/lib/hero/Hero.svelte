<script>
    import Palette from "$lib/Pallete.svelte";
    import hero from "./hero_reduced.webp"
    import Center from "$lib/Center.svelte";
    import HeroText from "$lib/hero/HeroText.svelte";
    import HeroPolaroid from "$lib/hero/HeroPolaroid.svelte";
</script>

<main>
    <Center>
        <div class="hero-container">
            <HeroText>TAYLOR<br>SOUTH</HeroText>
            <HeroPolaroid/>
            <div class="palette-wrapper">
                <img class="hero-img" src={hero} alt="taylor at a beach"/>
                <Palette/>
            </div>
        </div>
    </Center>
    <HeroText/>
</main>

<style>
    :root {
        --image-start: 28px;
    }
    .hero-img {
        max-width: 900px;
        display: block;
    }
    .hero-container {
        display: block;
    }
    .palette-wrapper {
        position: relative;
        margin-left: var(--image-start);
        width: fit-content;
    }
</style>