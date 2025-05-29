<script>
  import hero from "./hero/hero_reduced.webp"
</script>

<div class="image-text-container">
  <img src={hero} alt="Description" />
  <div class="split-text" style="--image-width: 500px;">
    Your text that crosses the image boundary
  </div>
</div>

<style>
  .image-text-container {
    position: relative;
    display: inline-block;
  }

  .image-text-container img {
    display: block;
    width: 500px; /* Set your desired width */
    height: auto;
  }

  .split-text {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    font-size: 3rem;
    font-weight: bold;
    white-space: nowrap;

    /* Create the split effect using background clip */
    background: linear-gradient(
      to right,
      white 0%,
      white var(--image-width),
      black var(--image-width),
      black 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>