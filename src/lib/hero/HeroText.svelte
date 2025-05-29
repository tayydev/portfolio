<div class="image-text-container">
  <div class="split-text">
    <slot/>
  </div>
</div>

<style>
  .image-text-container {
    position: relative;
  }

  .split-text {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(10px);
    z-index: 1;

    /* Split effect: black before image starts, white over image */
    background: linear-gradient(
            to right,
            black 0%,
            black var(--image-start),
            white var(--image-start),
            white 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>