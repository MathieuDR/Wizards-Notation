<script lang="ts">
  import { onMount } from "svelte";
  let { extraClasses, options } = $props();
  import { Canvas, Circle, Line } from "fabric";

  interface pathOptions {
    radius: number;
    dots: number;
    offset: number;
    x: number;
    y: number;
  }

  let canvasElement: HTMLCanvasElement;
  let canvas: Canvas;

  function renderNotation() {
    if (!canvas) return;

    canvas.clear();

    const path: pathOptions = {
      radius: 160,
      dots: 10 + options.drawing.dots,
      offset: options.drawing.offset,
      x: canvasElement.offsetWidth / 2,
      y: canvasElement.offsetHeight / 2,
    };

    drawGraph(options.graph, path);

    for (let i = 0; i < path.dots; i++) {
      const { x, y } = circleCoords(i, path);
      const circle = new Circle({
        radius: 10,
        left: x,
        top: y,
        fill: i === 0 ? "#f5e0dc" : "#1e1e2e",
        stroke: i === 0 ? "#1e1e2e" : undefined,
        strokeWidth: i === 0 ? 3 : 0,
        selectable: false,
        evented: false,
      });

      canvas.add(circle);
    }

    canvas.renderAll();
  }

  function drawGraph(graph: Map<number, number[]>, path: pathOptions) {
    graph.forEach((value: number[], key: number) => {
      console.log(`Key: ${key}, values: ${value.join(", ")}`);
      let a = options.drawing.flipped ? path.dots - key : key;
      const { x: ax, y: ay } = circleCoords(a, path);
      value.forEach((dest) => {
        let b = options.drawing.flipped ? path.dots - dest : dest;
        const { x: bx, y: by } = circleCoords(b, path);
        const linePoints = [ax + 10, ay + 10, bx + 10, by + 10];

        const line = new Line(linePoints, {
          fill: "#1e1e2e",
          selectable: false,
          evented: false,
          stroke: "#1e1e2e",
          strokeWidth: 3,
        });

        canvas.add(line);
      });
    });
  }

  function circleCoords(i: number, path: pathOptions) {
    const angle = (i * 360) / path.dots + path.offset - 90;
    const angleInRadians = (angle * Math.PI) / 180;

    const x = path.radius * Math.cos(angleInRadians) + path.x;
    const y = path.radius * Math.sin(angleInRadians) + path.y;

    return { x, y };
  }

  onMount(() => {
    canvas = new Canvas(canvasElement, {
      width: canvasElement.offsetWidth,
      height: canvasElement.offsetHeight,
    });

    renderNotation();

    return () => {
      canvas.dispose();
    };
  });

  $effect(() => {
    if (options) {
      renderNotation();
    }
  });
</script>

<div class="flex flex-1 flex-col gap-4">
  <div class="bg-base-200 p-4 rounded-box {extraClasses}">
    <div class="bg-accent rounded-xl h-full w-full">
      <canvas
        bind:this={canvasElement}
        width="100"
        height="60"
        class="h-full w-full"
      ></canvas>
    </div>
  </div>
</div>
