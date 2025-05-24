<script lang="ts">
  let { extraClasses, options } = $props();
</script>

<div class="flex flex-1 flex-col gap-4">
  <div class="bg-base-200 p-4 rounded-box {extraClasses}">
    <canvas class="h-full w-full bg-accent rounded-xl"></canvas>
  </div>
</div>
