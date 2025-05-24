<script lang="ts">
  let { options, ...props } = $props();
</script>

<div class="overflow-x-auto">
  <table class="table">
    <!-- head -->
    <thead>
      <tr>
        <th>Option</th>
        <th>Value</th>
        <th>K Value (hardcoded)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Level</th>
        <td>{options.level}</td>
        <td>1</td>
      </tr>
      <tr>
        <th>School</th>
        <td>{options.school}</td>
        <td>2</td>
      </tr>
      <tr>
        <th>Damage Type</th>
        <td>{options.damage}</td>
        <td>3</td>
      </tr>
      <tr>
        <th>Area of Effect</th>
        <td>{options.aoe}</td>
        <td>4</td>
      </tr>
      <tr>
        <th>Range</th>
        <td>{options.range}</td>
        <td>5</td>
      </tr>
      <tr>
        <th>Duration</th>
        <td>{options.duration}</td>
        <td>6</td>
      </tr>
    </tbody>
  </table>
</div>
