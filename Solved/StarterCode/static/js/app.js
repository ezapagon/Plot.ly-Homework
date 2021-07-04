
const path = "/data/samples.json"

const dataPromise = d3.json(path);

console.log(dataPromise);




//function init() {
    // Select the dropdown element
    // var selector = d3.select("#selDataset");
    
    // Populate the dropdown with subject ID's from the list of sample Names
      // d3.json("/data/samples.json").then((data) => {
        // var subjectIds = data.names;
        // subjectIds.forEach((id) => {
          // selector
          // .append("option")
          // .text(id)
          // .property("value", id);
        // });
      
      // Use the first subject ID from the names to build initial plots
      // const firstSubject = subjectIds[0];
      // updateCharts(firstSubject);
      // updateMetadata(firstSubject);
    // });
  //}