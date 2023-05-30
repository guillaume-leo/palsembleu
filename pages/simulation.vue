<template>
  <div class="content">
    <p>I've always been fascinated by particles simulations inspired by nature, how they can create complex behaviours
      with simple rules.</p>
    <p>In this simulation I get inspired by an incredible <a target="_blank"
        href="https://cargocollective.com/sagejenson/physarum">project of Sage Jenson</a></p>
    <p>In this project, he's trying to simulate how grow a slime mold (Physarum polycephalum), a strange organism shaped
      in a network of
      interlaced tubes, with simple rules that are applied on each particles. This is a 2D particle simulation</p>
    <h3>the rules for each particles by frame</h3>
    <ul>
      <li>
        The particle leave an invisible trace behind it (deposit) that will diffuse in space, and disappear over time
      </li>
      <li>
        The particle have 3 sensors in front of it, one on the left, another in front of it and the last one on the right
        that detects the amount of deposit leaved by others particles
      </li>
      <li>
        The particle will move in the direction of the sensor that have detected the biggest quantity of deposit
      </li>
    </ul>
    <h3>in addition to these rules I wanted to add :</h3>
    <ul>
      <li>
        infected/attracting zones (2D vector fields), to force particles to be concentrated in specific zones
      </li>
      <li>
        these vector fields are purely procedural, that means that they are created by the GPU itself, and I can control
        parameters on them.
      </li>
      <li>
        this vector field can also change other properties of each particles like speed, color, sensors position.
      </li>
    </ul>
  </div>
</template>

<style scoped>
h3 {
  font-variant: small-caps;
}

.content {
  color: white;
  font-family: Saira;
}

a {
  color: white;
}
</style>