<script>
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";

  let { children } = $props();
  import "../app.css";
</script>

<ThemeToggle />
{@render children()}
