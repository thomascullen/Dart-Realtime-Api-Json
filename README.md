#Dart JSON api

A small node server to convert the dart xml api to json, made for testing in an app but thought I would throw it up on github.

#### install
```
npm install
node server.js
```

####/dart/stations

```json
{
name: [
"Malahide"
],
latitude: [
"53.4509"
],
longitude: [
"-6.15649"
],
stationCode: [
"MHIDE"
]
}
```

####/dart/stations/MHIDE

pass the station code to get the realtime info on a specific station

```json
{
Servertime: [
"2014-02-01T19:35:40.473"
],
Traincode: [
"E826 "
],
Stationfullname: [
"Malahide"
],
Stationcode: [
"MHIDE"
],
Querytime: [
"19:35:40"
],
Traindate: [
"01 Feb 2014"
],
Origin: [
"Bray"
],
Destination: [
"Malahide"
],
Origintime: [
"18:25"
],
Destinationtime: [
"19:32"
],
Status: [
"En Route"
],
Lastlocation: [
"Departed Portmarnock"
],
Duein: [
"2"
],
Late: [
"5"
],
Exparrival: [
"19:37"
],
Expdepart: [
"00:00"
],
Scharrival: [
"19:32"
],
Schdepart: [
"00:00"
],
Direction: [
"Northbound"
],
Traintype: [
"DART"
],
Locationtype: [
"D"
]
}
```