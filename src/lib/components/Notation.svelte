<script lang="ts">
  let { extraClasses, options } = $props();
</script>

<div class="flex flex-1 flex-col gap-4">
  <div class="bg-base-200 p-4 rounded-box {extraClasses}">
    <canvas class="h-full w-full bg-accent rounded-xl"></canvas>
  </div>
  <p>Dots are {options.drawing.dots}</p>
  <p>Graph stuff: {options.graph.aoe}</p>
  <!-- <div id="debug" class="h-auto min-h-40"> -->
  <!--   <Debug {options}></Debug> -->
  <!-- </div> -->
</div>
