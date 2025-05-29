<script>
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
        margin-left: var(--image-start);
    }
    .hero-container {
        display: block;
    }
</style>