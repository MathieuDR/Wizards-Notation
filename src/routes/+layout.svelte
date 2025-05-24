<script>
  import ThemeToggle from "$lib/components/ThemeToggle.svelte";

  let { children } = $props();
  import "../app.css";
</script>

<div id="wrapper" class="flex flex-col min-h-screen justify-between h-full">
  <header class="h-10 navbar flex justify-between p-8 pb-0">
    <h1>Wizards Notation</h1>
    <ThemeToggle />
  </header>
  <div class="divider"></div>

  <main class="mb-auto flex-1 p-8 h-full flex">
    {@render children()}
  </main>

  <footer
    class="footer sm:mt-8 mt-0 sm:footer-horizontal bg-secondary text-secondary-content items-center p-8"
  >
    <aside class="grid-flow-col items-center">
      <span>Wizards Notation</span>
    </aside>
  </footer>
</div>

<style>
  header h1 {
    font-size: 2.25em;
  }

  footer span {
    font-size: 1.5em;
  }
</style>
