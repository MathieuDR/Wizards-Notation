<script>
  import Option from "$lib/components/Option.svelte";
  const levels = [
    "Cantrip",
    "Level 1",
    "Level 2",
    "Level 3",
    "Level 4",
    "Level 5",
    "Level 6",
    "Level 7",
    "Level 8",
    "Level 9",
  ];

  const schools = [
    "Abjuration",
    "Conjuration",
    "Divination",
    "Enchantment",
    "Evocation",
    "Illusion",
    "Necromancy",
    "Transmutation",
  ];

  const time = [
    "Action",
    "Bonus Action",
    "Reaction",
    "1 Minute",
    "10 Minute",
    "1 Hour",
    "8 Hours",
    "12 Hours",
    "24 Hours",
  ];

  const duration = [
    "Instantaneous",
    "Round",
    "1 Minute",
    "10 Minute",
    "1 Hour",
    "8 Hours",
    "12 Hours",
    "24 Hours",
    "Longer",
  ];

  const damage = [
    "None",
    "Acid",
    "Bludgeoning",
    "Cold",
    "Fire",
    "Force",
    "Lightning",
    "Necrotic",
    "Piercing",
    "Poison",
    "Psychic",
    "Radiant",
    "Slashing",
    "Thunder",
  ];
</script>

<div class="flex flex-col gap-8 flex-1">
  <div id="ctx" class="gap-8 flex flex-1">
    <div id="controls" class="flex-none w-1/3">
      <fieldset
        class="fieldset bg-base-200 border-base-300 p-4 rounded-box border"
      >
        <legend class="fieldset-legend">Spell info</legend>

        <Option name="Level" values={levels}></Option>
        <Option name="School" values={schools}></Option>
        <Option name="Time" values={time}></Option>
        <Option name="Duration" values={duration}></Option>
        <Option name="Damage Type" startsAtZero values={damage}></Option>
      </fieldset>
    </div>
    <div id="canvas" class="flex-1 w-2/3">CANVAS</div>
  </div>
  <div id="debug" class="h-auto min-h-40">BLABLA</div>
</div>
