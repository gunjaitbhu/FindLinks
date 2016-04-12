var async = require("async"); 
var https = require("https");
var cheerio = require("cheerio");
var csv = require('ya-csv');

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

var q = async.queue(download, 5); 
 
q.push(["https://www.rentomojo.com/"
    ,"https://www.rentomojo.com/"
    ,"https://www.rentomojo.com/"
    ,"https://www.rentomojo.com/"
    ,"https://www.rentomojo.com/"], function(data) {
      if (data != null){ 
        var $ = cheerio.load(data);        
        var links= $("link");    
        var imgs = $("img");
        var writer = new csv.createCsvFileWriter("C:/Links_Async.csv");

        writer.writeRecord(["HEADER ---- HREF's"]);
        $(links).each(function(i, link){
          //console.log('\n  ' + $(link).attr('href'));
          writer.writeRecord([$(link).attr('href')]);
        });

        $(imgs).each(function(i, img){
          //console.log('\n  ' + $(img).attr('src'));
          writer.writeRecord([$(img).attr('src')]);
        });
      }
      else{
        console.log("Unable to Scrap Site");
      }
    }
); 

q.drain = function () { 
    console.log("Scraping Complete"); 
};
