var request = require('request');
var parseString = require('xml2js').parseString;

exports.dartStations = function(req, res) {
	url = "http://api.irishrail.ie/realtime/realtime.asmx/getAllStationsXML_WithStationType?StationType=D";
	request(url, function (error, response, body) {
  	if (!error && response.statusCode == 200) {
    	parseString(body, function (err, result) {
        var stationsXML = result.ArrayOfObjStation.objStation;
        var stations = [];
        for ( i = 0; i < stationsXML.length; i++){

          station = {
            name:stationsXML[i].StationDesc,
            latitude:stationsXML[i].StationLatitude,
            longitude:stationsXML[i].StationLongitude,
            stationCode:stationsXML[i].StationCode
          }

          stations.push(station);
        }
    		res.json(stations);
			});
  	}
	})
};
 
exports.dartStation = function(req, res) {
  url = "http://api.irishrail.ie/realtime/realtime.asmx/getStationDataByCodeXML_WithNumMins?NumMins=20&StationCode="+req.params.id;
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      parseString(body, function (err, result) {
        var train = result.ArrayOfObjStationData.objStationData;
        res.json(train);
      });
    }
  })
};