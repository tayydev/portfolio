<script>
    import gh from "./github_logo_tan.svg"
    import li from "./linkedin_logo_tan_smaller.svg"
</script>

<div class="external">
    <a href="https://github.com/tayydev">
        <img src={gh} alt="GitHub Logo" class="icon"/>
    </a>
    <a href="https://www.linkedin.com/in/southtaylor">
        <img src="{li}" alt="LinkedIn Logo" class="icon"/>
    </a>
</div>

<style>
    .external {
        position: relative;
        margin-top: 20px;
        display: flex;
        gap: 16px;
        justify-content: right;
        margin-right: 6px;
    }
    .icon {
        width: 50px;
        height: 50px;
        z-index: 2;
        margin-right: 0;
    }
</style>
