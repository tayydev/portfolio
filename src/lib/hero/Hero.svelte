<script>
    import hero from "./hero_reduced.webp"
    import Center from "$lib/Center.svelte";
    import HeroText from "$lib/hero/HeroText.svelte";
    import HeroPolaroid from "$lib/hero/HeroPolaroid.svelte";
    import HeroCaption from "$lib/hero/HeroCaption.svelte";
    import HeroExternal from "$lib/hero/HeroExternal.svelte";
</script>

<main>
    <Center>
        <div class="hero-container">
            <div class="hero-overlay-container">
                <HeroText>TAYLOR<br>SOUTH</HeroText>
                <HeroCaption/>
                <HeroExternal/>
            </div>
            <HeroPolaroid/>
            <img class="hero-img" src={hero} alt="taylor at a beach"/>
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
    .hero-overlay-container {
        position: absolute;
        transform: translate(-28px, 20px);
        z-index: 1;
    }
</style>