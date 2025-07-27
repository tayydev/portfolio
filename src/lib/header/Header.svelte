<script>
    import { page } from '$app/state';
</script>

<div class="header">
    <a href="/" class:active={page.url.pathname === '/'}>about</a>
    •
    <a href="/portfolio" class:active={page.url.pathname === '/portfolio'}>portfolio</a>
    •
    <a href="/blog" class:active={page.url.pathname === '/blog'}>blog</a>
</div>

<style lang="css">
    .header {
        display: flex;
        justify-content: center;
        gap: 4px;
        padding: 4px;
    }
    a {
        color: var(--color-terminal-grey) !important;
        text-decoration: none;
        padding: 1px;
        background: none;
        font-weight: bold;
    }
    a.active {
        text-decoration: underline;
    }
</style>
