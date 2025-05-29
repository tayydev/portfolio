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
    transform: translateY(10px);
    z-index: 1;

    font-family: "Anton", sans-serif;
    font-size: 144px;
    line-height: 1.2;
    letter-spacing: 9px;
    text-align: right;

    /* Split effect: black before image starts, white over image */
    background: linear-gradient(
            to right,
            var(--color-terminal-grey) 0%,
            var(--color-terminal-grey) var(--image-start),
            var(--color-pale-tan) var(--image-start),
            var(--color-pale-tan) 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>