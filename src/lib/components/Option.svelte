<script lang="ts">
  let { value = $bindable(), enabled = $bindable(), ...props } = $props();

  let calcValue = function (i: number): number {
    if (props.startsAtZero && i == 0) return 0;
    if (props.startsAtZero && i != 0) return ((i - 1) << 1) | 1;
    return (i << 1) | 1;
  };
</script>

<label for={props.name.toLowerCase()} class="label">{props.name}</label>
<div class="flex gap-4 mb-4 items-center">
  <select id={props.name.toLowerCase()} bind:value class="select">
    {#each props.values as value, i}
      <option value={calcValue(i)}> {value} </option>
    {/each}
  </select>
  <input type="checkbox" bind:checked={enabled} class="toggle toggle-xs" />
</div>
