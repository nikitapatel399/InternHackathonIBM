import React, { Component } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
// import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
// import am4geodata_usaLow from "@amcharts/amcharts4-geodata/usaLow";
import am4geodata_region_usa_caLow from "@amcharts/amcharts4-geodata/region/usa/caLow";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);


class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {counties: [
          {
            "County": "ALAMEDA",
            "Hydrologic_Region": "San Francisco Bay",
            "Stage": 0,
            "color": "green",
            "Supplier_Name": "East Bay Municipal Utilities District",
            "Water Source Type": "Surface Water",
            "Population_Served": 1450000,
            "Production_Reported": 5449600000,
            "R_GPCD_Reported": 73,
            "id": "06001"
          },
          {
            "County": "SAN LUIS OBISPO",
            "Hydrologic_Region": "Central Coast",
            "Stage": 2,
            "Supplier_Name": "Morro Bay  City of",
            "Water Source Type": "Surface Water Purchased",
            "Population_Served": 10439,
            "Production_Reported": 27554380,
            "R_GPCD_Reported": 67.43,
            "id": "06079"
          },
          {
            "County": "ORANGE",
            "Hydrologic_Region": "South Coast",
            "Stage": 0,
            "Supplier_Name": "Yorba Linda Water District",
            "Water Source Type": "Surface Water Purchased",
            "Population_Served": 79367,
            "Production_Reported": 365272454,
            "R_GPCD_Reported": 105.15,
            "id": "06059"
          },
          {
            "County": "LOS ANGELES",
            "Hydrologic_Region": "South Coast",
            "Stage": 2,
            "Supplier_Name": "Long Beach  City of",
            "Water Source Type": "Surface Water Purchased",
            "Population_Served": 498712,
            "Production_Reported": 1423968870,
            "R_GPCD_Reported": 55,
            "id": "06037"
          },
          {
            "County": "MERCED",
            "Hydrologic_Region": "San Joaquin River",
            "Stage": 2,
            "Supplier_Name": "Los Banos, City of",
            "Water Source Type": "Groundwater",
            "Population_Served": 41923,
            "Production_Reported": 277365000,
            "R_GPCD_Reported": 108,
            "id": "06047"
          },
          {
            "County": "STANISLAUS",
            "Hydrologic_Region": "San Joaquin River",
            "Stage": 2,
            "Supplier_Name": "Turlock  City of",
            "Water Source Type": "Groundwater",
            "Population_Served": 74730,
            "Production_Reported": 466900000,
            "R_GPCD_Reported": 111.85,
            "id": "06099"
          },
          {
            "County": "RIVERSIDE",
            "Hydrologic_Region": "South Coast",
            "Stage": 2,
            "Supplier_Name": "Jurupa Community Service District",
            "Water Source Type": "Groundwater",
            "Population_Served": 140147,
            "Production_Reported": 426437619.3,
            "R_GPCD_Reported": 75,
            "id": "06065"
          },
          {
            "County": "SAN MATEO",
            "Hydrologic_Region": "San Francisco Bay",
            "Stage": 0,
            "Supplier_Name": "Coastside County Water District",
            "Water Source Type": "Surface Water",
            "Population_Served": 16848,
            "Production_Reported": 59600000,
            "R_GPCD_Reported": 63,
            "id": "06081"
          },
          {
            "County": "SACRAMENTO",
            "Hydrologic_Region": "Sacramento River",
            "Stage": 1,
            "Supplier_Name": "Citrus Heights Water District",
            "Water Source Type": "Surface Water Purchased",
            "Population_Served": 65093,
            "Production_Reported": 380919819,
            "R_GPCD_Reported": 170,
            "id": "06067"
          },
          {
            "County": "VENTURA",
            "Hydrologic_Region": "South Coast",
            "Stage": 0,
            "Supplier_Name": "Camrosa Water District",
            "Water Source Type": "Surface Water Purchased",
            "Population_Served": 35783,
            "Production_Reported": 248950164,
            "R_GPCD_Reported": 157,
            "id": "06111"
          },
          {
            "County": "EL DORADO",
            "Hydrologic_Region": "Sacramento River",
            "Stage": 0,
            "Supplier_Name": "El Dorado Irrigation District",
            "Water Source Type": "Surface Water",
            "Population_Served": 113255,
            "Production_Reported": 1007857143,
            "R_GPCD_Reported": 214,
            "id": "06017"
          },
          {
            "County": "IMPERIAL",
            "Hydrologic_Region": "Colorado River",
            "Stage": 1,
            "Supplier_Name": "El Centro  City of",
            "Water Source Type": "Surface Water Purchased",
            "Population_Served": 46364,
            "Production_Reported": 172090000,
            "R_GPCD_Reported": 87,
            "id": "06025"
          },
          {
            "County": "SANTA CLARA",
            "Hydrologic_Region": "San Francisco Bay",
            "Stage": 0,
            "Supplier_Name": "Milpitas  City of",
            "Water Source Type": "Surface Water Purchased",
            "Population_Served": 76817,
            "Production_Reported": 222296624,
            "R_GPCD_Reported": 53,
            "id": "06085"
          },
          {
            "County": "SONOMA",
            "Hydrologic_Region": "North Coast",
            "Stage": 1,
            "Supplier_Name": "Santa Rosa  City of",
            "Water Source Type": "Groundwater",
            "Population_Served": 173628,
            "Production_Reported": 498829516,
            "R_GPCD_Reported": 72,
            "id": "06097"
          },
          {
            "County": "SAN DIEGO",
            "Hydrologic_Region": "South Coast",
            "Stage": 1,
            "Supplier_Name": "Olivenhain Municipal Water District",
            "Water Source Type": "Surface Water",
            "Population_Served": 86478,
            "Production_Reported": 572096600.7,
            "R_GPCD_Reported": 139,
            "id": "06073"
          },
          {
            "County": "KERN",
            "Hydrologic_Region": "Tulare Lake",
            "Stage": 2,
            "Supplier_Name": "Delano  City of",
            "Water Source Type": "Groundwater",
            "Population_Served": 53764,
            "Production_Reported": 271987000,
            "R_GPCD_Reported": 77,
            "id": "06029"
          },
          {
            "County": "SAN BERNARDINO",
            "Hydrologic_Region": "South Coast",
            "Stage": "0",
            "Supplier_Name": "Monte Vista Water District",
            "Water Source Type": "Surface Water Purchased",
            "Population_Served": 57678,
            "Production_Reported": 250250309.5,
            "R_GPCD_Reported": 104,
            "id": "06071"
          },
          {
            "County": "CONTRA COSTA",
            "Hydrologic_Region": "San Francisco Bay",
            "Stage": 0,
            "Supplier_Name": "Contra Costa Water District",
            "Water Source Type": "Surface Water",
            "Population_Served": 205408,
            "Production_Reported": 559486167,
            "R_GPCD_Reported": 71,
            "id": "06013"
          },
          {
            "County": "SANTA CRUZ",
            "Hydrologic_Region": "Central Coast",
            "Stage": "4",
            "Supplier_Name": "Watsonville  City of",
            "Water Source Type": "Surface Water",
            "Population_Served": 65966,
            "Production_Reported": 210619335,
            "R_GPCD_Reported": 60,
            "id": "06087"
          },
          {
            "County": "TULARE",
            "Hydrologic_Region": "Tulare Lake",
            "Stage": 2,
            "Supplier_Name": "Dinuba  City of",
            "Water Source Type": "Groundwater",
            "Population_Served": 24657,
            "Production_Reported": 82340000,
            "R_GPCD_Reported": 77.41,
            "id": "06107"
          },
          {
            "County": "MONTEREY",
            "Hydrologic_Region": "Central Coast",
            "Stage": 3,
            "Supplier_Name": "Soledad, City of",
            "Water Source Type": "Groundwater",
            "Population_Served": 16729,
            "Production_Reported": 67081000,
            "R_GPCD_Reported": 97.41,
            "id": "06053"
          },
          {
            "County": "MARIN",
            "Hydrologic_Region": "San Francisco Bay",
            "Stage": 3,
            "Supplier_Name": "North Marin Water District",
            "Water Source Type": "Surface Water",
            "Population_Served": 61616,
            "Production_Reported": 217000000,
            "R_GPCD_Reported": 93,
            "id": "06041"
          },
          {
            "County": "SAN FRANCISCO",
            "Hydrologic_Region": "San Francisco Bay",
            "Stage": 0,
            "Supplier_Name": "San Francisco Public Utilities Commission",
            "Water Source Type": "Surface Water Purchased",
            "Population_Served": 859276,
            "Production_Reported": 1947410000,
            "R_GPCD_Reported": 44.94,
            "id": "06075"
          },
          {
            "County": "CALAVERAS",
            "Hydrologic_Region": "San Joaquin River",
            "Stage": 0,
            "Supplier_Name": "Calaveras County Water District",
            "Water Source Type": "Surface Water",
            "Population_Served": 20698,
            "Production_Reported": 81186000,
            "R_GPCD_Reported": 67.24,
            "id": "06009"
          },
          {
            "County": "HUMBOLDT",
            "Hydrologic_Region": "North Coast",
            "Stage": 1,
            "Supplier_Name": "Humboldt Bay Municipal Water District",
            "Water Source Type": "Groundwater",
            "Population_Served": 602,
            "Production_Reported": 5560000,
            "R_GPCD_Reported": 67.49,
            "id": "06023"
          },
          {
            "County": "SANTA BARBARA",
            "Hydrologic_Region": "Central Coast",
            "Stage": 1,
            "Supplier_Name": "Santa Maria  City of",
            "Water Source Type": "Surface Water Purchased",
            "Population_Served": 107407,
            "Production_Reported": 366031686.8,
            "R_GPCD_Reported": 87.11,
            "id": "06083"
          },
          {
            "County": "SUTTER",
            "Hydrologic_Region": "Sacramento River",
            "Stage": 2,
            "Supplier_Name": "Yuba City  City of",
            "Water Source Type": "Surface Water",
            "Population_Served": 73202,
            "Production_Reported": 423970000,
            "R_GPCD_Reported": 123,
            "id": "06101"
          },
          {
            "County": "PLACER",
            "Hydrologic_Region": "Sacramento River",
            "Stage": 0,
            "Supplier_Name": "Placer County Water Agency",
            "Water Source Type": "Surface Water",
            "Population_Served": 106640,
            "Production_Reported": 889119657,
            "R_GPCD_Reported": 168.9,
            "id": "06061"
          },
          {
            "County": "NAPA",
            "Hydrologic_Region": "San Francisco Bay",
            "Stage": 2,
            "Supplier_Name": "Napa  City of",
            "Water Source Type": "Surface Water",
            "Population_Served": 87134,
            "Production_Reported": 390043647,
            "R_GPCD_Reported": 94,
            "id": "06055"
          },
          {
            "County": "NEVADA",
            "Hydrologic_Region": "Sacramento River",
            "Stage": 0,
            "Supplier_Name": "Nevada Irrigation District",
            "Water Source Type": "Surface Water",
            "Population_Served": 44761,
            "Production_Reported": 282500000,
            "R_GPCD_Reported": 168.87,
            "id": "06057"
          },
          {
            "County": "AMADOR",
            "Hydrologic_Region": "San Joaquin River",
            "Stage": 0,
            "Supplier_Name": "Amador Water Agency",
            "Water Source Type": "Surface Water",
            "Population_Served": 22468,
            "Production_Reported": 79940000,
            "R_GPCD_Reported": 60.99,
            "id": "06005"
          },
          {
            "County": "BUTTE",
            "Hydrologic_Region": "Sacramento River",
            "Stage": 1,
            "Supplier_Name": "California Water Service Company Oroville",
            "Water Source Type": "Surface Water",
            "Population_Served": 11197,
            "Production_Reported": 65235370.2,
            "R_GPCD_Reported": 89.1,
            "id": "06007"
          },
          {
            "County": "TUOLUMNE",
            "Hydrologic_Region": "San Joaquin River",
            "Stage": 2,
            "Supplier_Name": "Tuolumne Utilities District",
            "Water Source Type": "Surface Water",
            "Population_Served": 31170,
            "Production_Reported": 130014549,
            "R_GPCD_Reported": 75,
            "id": "06109"
          },
          {
            "County": "SOLANO",
            "Hydrologic_Region": "Sacramento River",
            "Stage": 2,
            "Supplier_Name": "Rio Vista, city of",
            "Water Source Type": "Groundwater",
            "Population_Served": 9416,
            "Production_Reported": 85410000,
            "R_GPCD_Reported": 204,
            "id": "06095"
          },
          {
            "County": "FRESNO",
            "Hydrologic_Region": "Tulare Lake",
            "Stage": 1,
            "Supplier_Name": "California Water Service Company Selma",
            "Water Source Type": "Groundwater",
            "Population_Served": 26164,
            "Production_Reported": 151488129.9,
            "R_GPCD_Reported": 91.4,
            "id": "06019"
          },
          {
            "County": "KINGS",
            "Hydrologic_Region": "Tulare Lake",
            "Stage": 0,
            "Supplier_Name": "Hanford  City of",
            "Water Source Type": "Groundwater",
            "Population_Served": 59338,
            "Production_Reported": 406957076,
            "R_GPCD_Reported": 102.65,
            "id": "06031"
          },
          {
            "County": "YUBA",
            "Hydrologic_Region": "Sacramento River",
            "Stage": 1,
            "Supplier_Name": "California Water Service Company Marysville",
            "Water Source Type": "Groundwater",
            "Population_Served": 12284,
            "Production_Reported": 61129647.6,
            "R_GPCD_Reported": 110.1,
            "id": "06115"
          },
          {
            "County": "MADERA",
            "Hydrologic_Region": "San Joaquin River",
            "Stage": 0,
            "Supplier_Name": "Madera  City of",
            "Water Source Type": "Groundwater",
            "Population_Served": 66419,
            "Production_Reported": 286286000,
            "R_GPCD_Reported": 100,
            "id": "06039"
          },
          {
            "County": "LAKE",
            "Hydrologic_Region": "North Coast",
            "Stage": 1,
            "Supplier_Name": "California Water Service Company Redwood Valley",
            "Water Source Type": "Surface Water",
            "Population_Served": 3249,
            "Production_Reported": 10296891.6,
            "R_GPCD_Reported": 90.6,
            "id": "06033"
          },
          {
            "County": "SAN JOAQUIN",
            "Hydrologic_Region": "San Joaquin River",
            "Stage": 1,
            "Supplier_Name": "California Water Service Company Stockton",
            "Water Source Type": "Surface Water Purchased",
            "Population_Served": 173893,
            "Production_Reported": 758646298.2,
            "R_GPCD_Reported": 94.9,
            "id": "06077"
          },
          {
            "County": "GLENN",
            "Hydrologic_Region": "Sacramento River",
            "Stage": 1,
            "Supplier_Name": "California Water Service Company Willows",
            "Water Source Type": "Groundwater",
            "Population_Served": 7178,
            "Production_Reported": 37342524.6,
            "R_GPCD_Reported": 132.3,
            "id": "06021"
          },
          {
            "County": "YOLO",
            "Hydrologic_Region": "Sacramento River",
            "Stage": 0,
            "Supplier_Name": "Woodland  City of",
            "Water Source Type": "Surface Water Purchased",
            "Population_Served": 60742,
            "Production_Reported": 317346882,
            "R_GPCD_Reported": 95.91,
            "id": "06113"
          },
          {
            "County": "MONO",
            "Hydrologic_Region": "South Lahontan",
            "Stage": 0,
            "Supplier_Name": "Mammoth Community Water District",
            "Water Source Type": "Surface Water",
            "Population_Served": 16739,
            "Production_Reported": 54677000,
            "R_GPCD_Reported": 63,
            "id": "06051"
          },
          {
            "County": "SAN BENITO",
            "Hydrologic_Region": "Central Coast",
            "Stage": 2,
            "Supplier_Name": "Hollister  City of",
            "Water Source Type": "Surface Water Purchased",
            "Population_Served": 22007,
            "Production_Reported": 94847911,
            "R_GPCD_Reported": 93.18,
            "id": "06069"
          },
          {
            "County": "DEL NORTE",
            "Hydrologic_Region": "North Coast",
            "Stage": 1,
            "Supplier_Name": "Crescent City  City of",
            "Water Source Type": "Groundwater",
            "Population_Served": 18879,
            "Production_Reported": 66820000,
            "R_GPCD_Reported": 71.7,
            "id": "06015"
          },
          {
            "County": "SISKIYOU",
            "Hydrologic_Region": "North Coast",
            "Stage": 1,
            "Supplier_Name": "Yreka, City of",
            "Water Source Type": "Surface Water",
            "Population_Served": 7840,
            "Production_Reported": 68510000,
            "R_GPCD_Reported": 119,
            "id": "06093"
          },
          {
            "County": "MENDOCINO",
            "Hydrologic_Region": "North Coast",
            "Stage": 0,
            "Supplier_Name": "Ukiah  City of",
            "Water Source Type": "Surface Water",
            "Population_Served": 16075,
            "Production_Reported": 122750000,
            "R_GPCD_Reported": 145,
            "id": "06045"
          },
          {
            "County": "TEHAMA",
            "Hydrologic_Region": "Sacramento River",
            "Stage": 2,
            "Supplier_Name": "Red Bluff  City of",
            "Water Source Type": "Groundwater",
            "Population_Served": 14076,
            "Production_Reported": 114882258,
            "R_GPCD_Reported": 156,
            "id": "06103"
          },
          {
            "County": "SHASTA",
            "Hydrologic_Region": "Sacramento River",
            "Stage": 1,
            "Supplier_Name": "Anderson, City of",
            "Water Source Type": "Groundwater",
            "Population_Served": 11147,
            "Production_Reported": 76094000,
            "R_GPCD_Reported": 175.9,
            "id": "06089"
          }
        ],
          stages: [ 
            {
              name: "Stage 0",
              color: "green",
              data: []
            },
            {
              name: "Stage 1",
              color: "gold",
              data: []
            },
            {
              name: "Stage 2",
              color: "orange",
              data: []
            },
            {
              name: "Stage 3",
              color: "orangered",
              data: []
            },
            {
              name: "Stage 4",
              color: "red",
              data: []
            }
          ]
      };
    }

    componentDidMount() {
      var {stages, counties } = this.state;
      let chart = am4core.create("chartdiv", am4maps.MapChart);
  
      // Set map definition
      chart.geodata = am4geodata_region_usa_caLow;
      // chart.geodataSource.url = "../geoJson/Hydrologic_Regions.json";
  
      // Set projection
      chart.projection = new am4maps.projections.AlbersUsa();


      this.state.counties.forEach(function(county) {
        console.log(county);
        console.log(stages[0])
        console.log(stages[county.Stage].data);
        stages[county.Stage].data.push(county);
      })

        let excludedCountries = []

              // Create a series for each group, and populate the above array
        this.state.stages.forEach(function(group) {
          let series = chart.series.push(new am4maps.MapPolygonSeries());
          series.name = group.name;
          series.useGeodata = true;
          let includedCountries = [];
          group.data.forEach(function(country) {
            includedCountries.push(country.id);
            excludedCountries.push(country.id);
          });
          series.include = includedCountries;

          series.fill = am4core.color(group.color);

          // By creating a hover state and setting setStateOnChildren to true, when we
          // hover over the series itself, it will trigger the hover SpriteState of all
          // its countries (provided those countries have a hover SpriteState, too!).
          series.setStateOnChildren = true;
          series.calculateVisualCenter = true;

          // Country shape properties & behaviors
          let mapPolygonTemplate = series.mapPolygons.template;
          // Instead of our custom title, we could also use {name} which comes from geodata  
          mapPolygonTemplate.fill = am4core.color(group.color);
          mapPolygonTemplate.fillOpacity = 0.8;
          mapPolygonTemplate.nonScalingStroke = true;
          mapPolygonTemplate.tooltipPosition = "fixed"

          mapPolygonTemplate.events.on("over", function(event) {
            series.mapPolygons.each(function(mapPolygon) {
              mapPolygon.isHover = true;
            })
            event.target.isHover = false;
            event.target.isHover = true;
          })

          mapPolygonTemplate.events.on("out", function(event) {
            series.mapPolygons.each(function(mapPolygon) {
              mapPolygon.isHover = false;
            })
          })

          // States  
          let hoverState = mapPolygonTemplate.states.create("hover");
          hoverState.properties.fillOpacity = 0.3;

          
          mapPolygonTemplate.events.on("hit", function(ev) {
            var data = ev.target.dataItem.dataContext;
            var info = document.getElementById("info");
            info.innerHTML = "<h3>" + data.name + "</h3>";
            var result = counties.filter(county => county.County.toLowerCase() === data.name.toLowerCase());
            console.log(result);
            info.innerHTML += data.name + " belongs to hydrologic region " + data.Hydrologic_Region + ", ";
            info.innerHTML += "and its water is sourced from " + data.Supplier_Name + ". ";

            info.innerHTML += "The projected water production is " + data.Production_Reported + " gallons of water \n";
            info.innerHTML += "and each resident can consume " + data.R_GPCD_Reported + " gallons. ";
            info.innerHTML += data.name + " has a population of  " + data.Population_Served + ".";
            // if (data.description) {
              
            // }
            // else {
            //   info.innerHTML += "<i>No description provided.</i>"
            // }
          });

          // Tooltip
          mapPolygonTemplate.tooltipText = "Stage {Stage}: {County} is projected to produce {Production_Reported} gallons of water"; // enables tooltip
          // series.tooltip.getFillFromObject = false; // prevents default colorization, which would make all tooltips red on hover
          // series.tooltip.background.fill = am4core.color(group.color);

          // MapPolygonSeries will mutate the data assigned to it, 
          // we make and provide a copy of the original data array to leave it untouched.
          // (This method of copying works only for simple objects, e.g. it will not work
          //  as predictably for deep copying custom Classes.)
          series.data = JSON.parse(JSON.stringify(group.data));
        });

        // The rest of the world.
        let worldSeries = chart.series.push(new am4maps.MapPolygonSeries());
        let worldSeriesName = "world";
        worldSeries.name = worldSeriesName;
        worldSeries.useGeodata = true;
        worldSeries.exclude = excludedCountries;
        worldSeries.fillOpacity = 0.8;
        worldSeries.hiddenInLegend = true;
        worldSeries.mapPolygons.template.nonScalingStroke = true;

        // This auto-generates a legend according to each series' name and fill
        chart.legend = new am4maps.Legend();

        // Legend styles
        chart.legend.paddingLeft = 27;
        chart.legend.paddingRight = 0;
        chart.legend.marginBottom = 15;
        chart.legend.width = am4core.percent(20);
        chart.legend.width = am4core.percent(100)
        chart.legend.valign = "bottom";
        chart.legend.contentAlign = "right";

        // Legend items
        chart.legend.itemContainers.template.interactionsEnabled = false;

        









  
      // // Create map polygon series
      // let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  
      // //Set min/max fill color for each area
      // polygonSeries.heatRules.push({
      //   property: "fill",
      //   target: polygonSeries.mapPolygons.template,
      //   min: chart.colors.getIndex(1).brighten(1),
      //   max: chart.colors.getIndex(1).brighten(-0.3)
      // });
  
      // // Make map load polygon data (state shapes and names) from GeoJSON
      // polygonSeries.useGeodata = true;
      // // polygonSeries.color = am4core.color("#74B266");

      // //98FB98
  
      // // Set heatmap values for each state
      //   // Region name: blah
      //   // County name: 1
      //   // Current Water Consumption Rate: 10
      //   // Forecaste for next day/month : value
      // polygonSeries.data = this.state.initColours;
  
      // // Set up heat legend
      // let heatLegend = chart.createChild(am4maps.HeatLegend);
      // heatLegend.series = polygonSeries;
      // heatLegend.align = "right";
      // heatLegend.valign = "bottom";
      // heatLegend.width = am4core.percent(20);
      // heatLegend.marginRight = am4core.percent(4);
      // heatLegend.minValue = 0;
      // heatLegend.maxValue = 40000000;
      // heatLegend.minColor = am4core.color(defaultColour);
      // heatLegend.maxColor = am4core.color("#FF0000");
  
      // // Set up custom heat map legend labels using axis ranges
      // let minRange = heatLegend.valueAxis.axisRanges.create();
      // minRange.value = heatLegend.minValue;
      // minRange.label.text = "Plenty of water";
      // let maxRange = heatLegend.valueAxis.axisRanges.create();
      // maxRange.value = heatLegend.maxValue;
      // maxRange.label.text = "No water";
  
      // // Blank out internal heat legend value axis labels
      // heatLegend.valueAxis.renderer.labels.template.adapter.add("text", function(labelText) {
      //   return "";
      // });
  
      // // Configure series tooltip
      // let polygonTemplate = polygonSeries.mapPolygons.template;
      // polygonTemplate.tooltipText = "{name}: {value}";
      // polygonTemplate.nonScalingStroke = true;
      // polygonTemplate.strokeWidth = 0.5;
      // polygonTemplate.fill = am4core.color(defaultColour); // default colour green
  
      // // Create hover state and set alternative fill color
      // let hs = polygonTemplate.states.create("hover");
      // hs.properties.fill = am4core.color("#3c5bdc");

      // polygonTemplate.events.on("hit", function(ev) {
      //   var data = ev.target.dataItem.dataContext;
      //   var info = document.getElementById("info");
      //   info.innerHTML = "<h3>" + data.name + "</h3>";
      //   if (data.description) {
      //     info.innerHTML += data.description;
      //   }
      //   else {
      //     info.innerHTML += "<i>No description provided.</i>"
      //   }
      // });
  
      this.chart = chart;
    }
  
    componentWillUnmount() {
      if (this.chart) {
        this.chart.dispose();
      }
    }
  
    render () {
      return (
        <div>
          <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
          <div id="info"></div>
        </div>
      );
    }
  }
  
  export default Map;
