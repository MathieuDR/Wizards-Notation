<script lang="ts">
  let props = $props();
  let offset = props.startsAtZero ? 0 : 1;
</script>

<label for={props.name.toLowerCase()} class="label">{props.name}</label>
<select id={props.name.toLowerCase()} class="select mb-4">
  {#each props.values as value, i}
    <option value={i + offset}> {value} </option>
  {/each}
</select>
