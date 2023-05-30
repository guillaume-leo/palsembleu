import{_ as e}from"./_plugin-vue_export-helper.c27b6911.js";import{a as t,o as a,b as i}from"./entry.a51a3b8e.js";const s={},o={class:"content"},n=i('<p data-v-3706488f>I&#39;ve always been fascinated by particles simulations inspired by nature, how they can create complex behaviours with simple rules.</p><p data-v-3706488f>In this simulation I get inspired by an incredible <a target="_blank" href="https://cargocollective.com/sagejenson/physarum" data-v-3706488f>project of Sage Jenson</a></p><p data-v-3706488f>In this project, he&#39;s trying to simulate how grow a slime mold (Physarum polycephalum), a strange organism shaped in a network of interlaced tubes, with simple rules that are applied on each particles. This is a 2D particle simulation</p><h3 data-v-3706488f>the rules for each particles by frame</h3><ul data-v-3706488f><li data-v-3706488f> The particle leave an invisible trace behind it (deposit) that will diffuse in space, and disappear over time </li><li data-v-3706488f> The particle have 3 sensors in front of it, one on the left, another in front of it and the last one on the right. These sensors detects the amount of deposit leaved by others particles </li><li data-v-3706488f> The particle will move in the direction of the sensor that have detected the biggest quantity of deposit </li></ul><h3 data-v-3706488f>in addition to these rules I wanted to add :</h3><ul data-v-3706488f><li data-v-3706488f> infected/attracting zones (2D vector fields), to force particles to be concentrated in specific zones </li><li data-v-3706488f> these vector fields are purely procedural, that means that they are created by the GPU itself, and I can control parameters on them. </li><li data-v-3706488f> this vector field can also change other properties of each particles like speed, color, sensors position. </li></ul>',7),r=[n];function l(c,d){return a(),t("div",o,r)}const f=e(s,[["render",l],["__scopeId","data-v-3706488f"]]);export{f as default};
