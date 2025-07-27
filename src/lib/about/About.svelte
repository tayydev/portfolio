<script>
    import Center from "$lib/Center.svelte";
    import AboutTitle from "$lib/about/AboutTitle.svelte";
</script>

<div>
    <Center>
        <AboutTitle/>
        <div class="content">
            Hello, my name is Taylor (she/her). I'm a software engineer based in Washington, DC. I work across the full stack, but have a particular affinity for <a href="https://www.rust-lang.org/">Rust</a> and <a href="https://kotlinlang.org/">Kotlin</a>. In my free time you'll find me sport climbing, taking pictures, and wandering the world after dark.
            <br><br>
            If you need to reach me consider reaching out via
        </div>
    </Center>
</div>

<style>
    :root {
        --about-width: 600px
    }
    .content {
        display: block;
        max-width: var(--about-width);
        margin-top: 10px;
    }
</style>
