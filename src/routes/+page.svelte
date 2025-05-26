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

  let levelState = $state(1);
  let schoolState = $state(1);
  let damageState = $state(0);
  let aoeState = $state(0);
  let rangeState = $state(1);
  let durationState = $state(1);

  let levelEnabled = $state(false);
  let schoolEnabled = $state(false);
  let damageEnabled = $state(false);
  let aoeEnabled = $state(false);
  let rangeEnabled = $state(false);
  let durationEnabled = $state(false);

  let spellOptions: SpellOptions = $derived({
    level: levelEnabled ? levelState : 0,
    school: schoolEnabled ? schoolState : 0,
    damage: damageEnabled ? damageState : 0,
    aoe: aoeEnabled ? aoeState : 0,
    range: rangeEnabled ? rangeState : 0,
    duration: durationEnabled ? durationState : 0,
  });

  let shapeState = $state("circle");
  let lineState = $state("straight");
  let minimumDots = $state(3);
  let angleOffsetState = $state(-90);
  let flipState = $state(false);

  let drawingOptions = $derived({
    shape: shapeState,
    line: lineState,
    dots: minimumDots,
    offset: angleOffsetState,
    flipped: flipState,
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
            bind:enabled={levelEnabled}
            values={levels}
          ></Option>
          <Option
            name="School"
            bind:value={schoolState}
            bind:enabled={schoolEnabled}
            values={schools}
          ></Option>
          <Option
            name="Damage Type"
            startsAtZero
            bind:value={damageState}
            bind:enabled={damageEnabled}
            values={damage}
          ></Option>
          <Option
            name="Area of Effect"
            startsAtZero
            bind:value={aoeState}
            bind:enabled={aoeEnabled}
            values={aoe}
          ></Option>
          <Option
            name="Range"
            bind:value={rangeState}
            bind:enabled={rangeEnabled}
            values={range}
          ></Option>
          <Option
            name="Duration"
            bind:value={durationState}
            bind:enabled={durationEnabled}
            values={duration}
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

          <label for="dots">Extra dots</label>
          <div class="w-full max-w-xs mb-4">
            <input
              type="range"
              min="0"
              max="10"
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
              <span>0</span>
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
          </div>
          <label for="dots">Angle offset</label>
          <input
            type="range"
            min="-180"
            max="180"
            class="range range-primary mb-4"
            step="1"
            bind:value={angleOffsetState}
          />

          <label class="label">
            <input type="checkbox" bind:checked={flipState} class="toggle" />
            Flipped
          </label>
        </fieldset>
      </div>
    </div>
    <Notation extraClasses="flex-1" options={notationOptions}></Notation>
  </div>
</div>
