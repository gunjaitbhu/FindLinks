var cheerio = require('cheerio');
var csv = require('ya-csv');
var https = require("https");

var url = "https://www.rentomojo.com/?_escaped_fragment_=";

function download(url, callback) {
  https.get(url, function(res) {
    var data = "";
    res.on('data', function (chunk) {
      data += chunk;
    });
    res.on("end", function() {
      callback(data);
    });
  }).on("error", function() {
    callback(null);
  });
}

download(url, function(data) {
  if (data != null){ 
    var $ = cheerio.load(data);
    var links= $("link");    
    var imgs = $("img");
    var writer = new csv.createCsvFileWriter("C:/Links.csv");

    writer.writeRecord(["HEADER ---- HREF's"]);
    $(links).each(function(i, link){
      //console.log('\n  ' + $(link).attr('href'));
      writer.writeRecord([$(link).attr('href')]);
    });

    $(imgs).each(function(i, img){
      //console.log('\n  ' + $(img).attr('src'));
      writer.writeRecord([$(img).attr('src')]);
    });
    console.log("Scraping Complete");
  }
  else{
    console.log("Unable to Scrap Site");
  }
});