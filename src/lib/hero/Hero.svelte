<script>
    import hero from "./hero_reduced_patched.webp"
    import Center from "$lib/Center.svelte";
    import HeroText from "$lib/hero/HeroText.svelte";
    import HeroPolaroid from "$lib/hero/HeroPolaroid.svelte";
    import HeroCaption from "$lib/hero/HeroCaption.svelte";
    import HeroExternal from "$lib/hero/HeroExternal.svelte";
    import MobileHeroPolaroid from "$lib/hero/mobile/MobileHeroPolaroid.svelte";
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

        <!-- Mobile layout -->
        <div class="hero-mobile">
            <div class="mobile-image-container">
                <img class="hero-img-mobile" src={hero} alt="taylor at a beach"/>
                <MobileHeroPolaroid/>
            </div>
            <div class="mobile-text-container">
                <HeroText>TAYLOR SOUTH</HeroText>
                <HeroCaption/>
                <HeroExternal/>
            </div>
        </div>
    </Center>
</main>

<style>
    /* Desktop layout */
    .hero-img {
        width: 900px;
        height: 506px;
        display: block;
        background-color: var(--color-ocean-blue);
    }
    .hero-container {
        display: block;
    }
    .hero-overlay-container {
        position: absolute;
        transform: translate(15px, 20px);
        z-index: 1;
    }

    /* Hide mobile layout on desktop */
    .hero-mobile {
        display: none;
    }

    .mobile-text-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        margin-top: 8px;
        width: 100%;
    }

    .hero-mobile {
        flex-direction: column;
        align-items: center;
        gap: 20px;
        width: 100%;
        max-width: var(--content-width);
    }

    .mobile-image-container {
        position: relative;
    }

    .hero-img-mobile {
        object-fit: cover;
        object-position: center;
        display: block;
        background-color: var(--color-ocean-blue);
    }

    /* Mobile layout */
    @media (max-width: 1024px) {
        /* Hide desktop layout */
        .hero-container {
            display: none;
        }

        /* Show mobile layout */
        .hero-mobile {
            display: flex;
        }

        .mobile-image-container {
            width: var(--content-width);
            height: var(--content-width);
        }

        .hero-img-mobile {
            width: var(--content-width);
            height: var(--content-width);
        }
    }

</style>
