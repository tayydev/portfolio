<script>
    import Palette from "$lib/Pallete.svelte";
    import hero from "./hero_reduced.webp"
    import Center from "$lib/Center.svelte";
    import HeroText from "$lib/hero/HeroText.svelte";
    import HeroPolaroid from "$lib/hero/HeroPolaroid.svelte";
    import HeroCaption from "$lib/hero/HeroCaption.svelte";
</script>

<main>
    <Center>
        <div class="hero-container">
            <HeroText>TAYLOR<br>SOUTH</HeroText>
            <HeroPolaroid/>
            <HeroCaption/>
            <div class="palette-wrapper">
                <img class="hero-img" src={hero} alt="taylor at a beach"/>
                <Palette/>
            </div>
        </div>
    </Center>
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