// Store objects from data.js
var tableData = data;

// Store tbody in a variable using D3
var tbody = d3.select("tbody");

// Console.log the ufo sightings from data.js to confirm response
console.log(tableData);

// Loop Through the ufo sighting data and console.log every entry
tableData.forEach(function (ufoSighting) {
  console.log(ufoSighting);

  // Create a variable for table row and append to table      
  var row = tbody.append("tr");

  // Use object.entries to pull each key-value pairs from the data.js objects
  Object.entries(ufoSighting).forEach(function ([key, value]) {
    console.log(key, value);

    // Create a variable for table cell and append to table  
    var cell = tbody.append("td");

    // Insert text of each associated value for all related  keys columns for every object
    cell.text(value);
  });
});

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function () {

  // Prevent the page from refreshing on click
  d3.event.preventDefault();

  // Select and log table
  var table = d3.select("table");
  console.log(table);

  // Delete Old tbody
  d3.select("tbody").remove();
  console.log(table);

  // Create a New tbody
  var table = d3.select("table");
  table.append("tbody");
  console.log(table);

  // Select the input element
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element and display in console
  var inputValue = inputElement.property("value");
  console.log(inputValue);

  // Filter Results Based on Entered Datetime
  var filteredData = tableData.filter(date => date.datetime === inputValue);
  console.log(filteredData);

  // Select New tbody
  var tbody = d3.select("tbody");

  // Create a New Table With Filtered Results
  filteredData.forEach((filteredUfoSighting) => {
    var row = tbody.append("tr");
    Object.entries(filteredUfoSighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});