// For bundlers such as Vite and Webpack omit https://esm.sh/
import { json } from "https://esm.sh/d3-fetch";
import { select } from "https://esm.sh/d3-selection";
import { transition } from "https://esm.sh/d3-transition";

const data = await json("https://raw.githubusercontent.com/VictoriaBarrera/Animal_Shelter/refs/heads/main/animal_shelter_smaller.json");

const svg = select("svg");
const animals = data.slice(5657,5678);
svg.selectAll("circle")
  .data(animals)
  .enter()
  .append("circle")
  .attr("cx", (d, i) => 60 + i * 70)
  .attr("cy", 150)
  .attr("r", 20)
  .attr("fill", d =>
    d.animal_type === "Dog" ? "lightgreen" :
    d.animal_type === "Cat" ? "lightpink" :
    d.animal_type === "Bird" ? "yellow" :
    d.animal_type === "other" ? "gold" :
    "gray"
  )
  .attr("stroke", "black");

svg.selectAll(".outcome-text")
  .data(animals)
  .enter()
  .append("text")
  .attr("class", "outcome-text")
  .attr("x", (d, i) => 60 + i * 70)
  .attr("y", 135)
  .attr("text-anchor", "middle")
  .attr("font-size", "8px")
  .text(d => d.outcome_type)
  .on("mouseover", function() {
    select(this)
      .transition()
      .duration(300)
      .attr("font-size", "15px");
  })
  .on("mouseout", function() {
    select(this)
      .transition()
      .duration(300)
      .attr("font-size", "8px");
  });

// Animal type text (below circle)
svg.selectAll(".animal-text")
  .data(animals)
  .enter()
  .append("text")
  .attr("class", "animal-text")
  .attr("x", (d, i) => 60 + i * 70)
  .attr("y", 190)
  .attr("text-anchor", "middle")
  .attr("font-size", "10px")
  .text(d => d.animal_type)
  .on("mouseover", function() {
    select(this)
      .transition()
      .duration(300)
      .attr("font-size", "14px")
      .attr("fill", "blue");
  })
  .on("mouseout", function() {
    select(this)
      .transition()
      .duration(300)
      .attr("font-size", "10px")
      .attr("fill", "black");
  });
