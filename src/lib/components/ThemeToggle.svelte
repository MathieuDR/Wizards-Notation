<script lang="ts">
  import { onMount } from "svelte";

  let prefersDark: boolean = false;
  let lightRadio: HTMLInputElement;
  let darkRadio: HTMLInputElement;

  onMount(() => {
    prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Set the correct radio button as checked based on browser preference
    if (prefersDark) {
      darkRadio.checked = true;
    } else {
      lightRadio.checked = true;
    }
  });

  function toggleTheme(): void {
    // Toggle between the two radio buttons
    if (lightRadio.checked) {
      darkRadio.checked = true;
    } else {
      lightRadio.checked = true;
    }
  }
</script>

<!-- Hidden radio buttons that DaisyUI will use for theme switching -->
<input
  bind:this={lightRadio}
  type="radio"
  name="theme-radios"
  class="radio radio-sm theme-controller hidden"
  value="latte"
/>
<input
  bind:this={darkRadio}
  type="radio"
  name="theme-radios"
  class="radio radio-sm theme-controller hidden"
  value="mocha"
/>

<!-- Visible toggle UI -->
<button
  type="button"
  class="flex cursor-pointer gap-2 items-center bg-transparent border-none p-0"
  on:click={toggleTheme}
  aria-label="Toggle theme"
>
  <!-- Sun icon (light mode) -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
    />
  </svg>

  <input
    type="checkbox"
    class="toggle"
    checked={prefersDark}
    readonly
    tabindex="-1"
  />

  <!-- Moon icon (dark mode) -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</button>
