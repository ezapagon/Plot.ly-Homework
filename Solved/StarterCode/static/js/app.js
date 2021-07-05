
  //Get the Metadata infro from the JSON file 
 function Metadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata= data.metadata;
    var Endarray= metadata.filter(sampleobject => sampleobject.id == sample);
    var End = Endarray[0]
    var Index = d3.select("#sample-metadata");
    
    Index.html("");
    Object.entries(End).forEach(([key, value]) => {

      Index.append("h6").text(`${key}: ${value}`);
    });
  });
}

// Built the charts 
function Charts(sample) {

d3.json("samples.json").then((data) => {
  var samples= data.samples;
  var Endarray= samples.filter(sampleobject => sampleobject.id == sample);
  var End = Endarray[0]

  var ids = End.otu_ids;
  var labels = End.otu_labels;
  var values = End.sample_values;

  var barInfo =[
    {
      y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
      x:values.slice(0,10).reverse(),
      text:labels.slice(0,10).reverse(),
      type:"bar",
      orientation:"h"

    }
  ];

  var barTitle = {
    title: "The top 10 OTUs found in that individual",
    margin: { t: 50, l: 180 }
  };

  Plotly.newPlot("bar", barInfo, barTitle);
});
}



