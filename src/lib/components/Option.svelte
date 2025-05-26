<script lang="ts">
  let { value = $bindable(), ...props } = $props();

  let calcValue = function (i: number): number {
    return (i << 1) | 1;
  };
</script>

<label for={props.name.toLowerCase()} class="label">{props.name}</label>
<select id={props.name.toLowerCase()} bind:value class="select mb-4">
  {#each props.values as value, i}
    <option value={calcValue(i)}> {value} </option>
  {/each}
</select>
