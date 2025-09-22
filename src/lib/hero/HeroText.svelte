<script>
</script>

<div class="image-text-container">
  <div class="split-text">
    <slot/>
  </div>
</div>

<style>
  .image-text-container {
    position: relative;
    font-family: "Anton", sans-serif;
    font-size: 144px;
    line-height: 1.125;
    text-align: right;

    color: var(--color-peach-parchment)
  }

  /* Mobile responsive styles */
  @media (max-width: 1024px) {
    .image-text-container {
      text-align: center;
      line-height: 1.0;
      width: var(--content-width);
      background: var(--color-terminal-grey);
    }
  }

  @media (max-width: 640px) {
    .image-text-container {
      font-size: 121px;
    }
  }

  @media (max-width: 375px) {
    .image-text-container {
      font-size: 100px;
    }
  }
</style>
