<script lang="ts">
  let { value = $bindable(), ...props } = $props();
  let offset = props.startsAtZero ? 0 : 1;

  // This needs some work as it's just boring 1111's with nothing in between. We need a better function!
  let calcValue = function (i: number): number {
    let sum = 0;
    for (let index = 0; index < i; index++) {
      sum += Math.pow(2, index);
    }
    return sum;
  };
</script>

<label for={props.name.toLowerCase()} class="label">{props.name}</label>
<select id={props.name.toLowerCase()} bind:value class="select mb-4">
  {#each props.values as value, i}
    <option value={calcValue(i + offset)}> {value} </option>
  {/each}
</select>
