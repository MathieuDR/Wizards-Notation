<script lang="ts">
  import Notation from "$lib/components/Notation.svelte";
  import Option from "$lib/components/Option.svelte";
  import { calculateGraph } from "$lib/calculations/graph";
  import type { SpellOptions } from "$lib/calculations/graph";
  import {
    levels,
    schools,
    duration,
    damage,
    aoe,
    range,
  } from "$lib/data/spell-data";

  let levelState = $state(0);
  let schoolState = $state(1);
  let damageState = $state(0);
  let aoeState = $state(1);
  let rangeState = $state(1);
  let durationState = $state(1);

  let spellOptions: SpellOptions = $derived({
    level: levelState,
    school: schoolState,
    damage: damageState,
    aoe: aoeState,
    range: rangeState,
    duration: durationState,
  });

  let shapeState = $state("circle");
  let lineState = $state("straight");
  let minimumDots = $state("8");

  let drawingOptions = $derived({
    shape: shapeState,
    line: lineState,
    dots: minimumDots,
  });

  let graph = $derived(calculateGraph(spellOptions));

  let notationOptions = $derived({
    graph: graph,
    drawing: drawingOptions,
  });
</script>

<div class="flex-1 flex">
  <div id="ctx" class="gap-8 flex flex-1">
    <div id="controls" class="flex-none w-1/3">
      <div id="spell" class="max-w-64">
        <fieldset
          class="fieldset bg-base-200 border-base-300 p-4 rounded-box border max-w-64"
        >
          <legend class="fieldset-legend">Spell info</legend>

          <Option
            name="Level"
            bind:value={levelState}
            startsAtZero
            values={levels}
          ></Option>
          <Option name="School" bind:value={schoolState} values={schools}
          ></Option>
          <Option
            name="Damage Type"
            bind:value={damageState}
            startsAtZero
            values={damage}
          ></Option>
          <Option name="Area of Effect" bind:value={aoeState} values={aoe}
          ></Option>
          <Option name="Range" bind:value={rangeState} values={range}></Option>
          <Option name="Duration" bind:value={durationState} values={duration}
          ></Option>
        </fieldset>
      </div>
      <div id="drawing">
        <fieldset
          class="fieldset bg-base-200 border-base-300 p-4 rounded-box border max-w-64"
        >
          <legend class="fieldset-legend">Drawing options</legend>

          <label for="shape">Shape</label>
          <select
            bind:value={shapeState}
            name="shape"
            class="select mb-4"
            id="shape"
          >
            <option selected value="circle">Circle</option>
            <option value="line">Line</option>
            <option value="spiral">Spiral</option>
          </select>

          <label for="line">Line type</label>
          <select
            bind:value={lineState}
            name="line"
            class="select mb-4"
            id="line"
          >
            <option selected value="straight">Straight</option>
            <option value="curved">Curved</option>
          </select>

          <label for="dots">Minimum dots</label>
          <div class="w-full max-w-xs mb-4">
            <input
              type="range"
              min="6"
              max="15"
              class="range range-primary"
              step="1"
              bind:value={minimumDots}
            />
            <div class="flex justify-between px-2.5 mt-2 text-xs">
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
              <span>|</span>
            </div>
            <div class="flex justify-between px-2.5 mt-2 text-xs">
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span>15</span>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
    <Notation extraClasses="flex-1" options={notationOptions}></Notation>
  </div>
</div>
