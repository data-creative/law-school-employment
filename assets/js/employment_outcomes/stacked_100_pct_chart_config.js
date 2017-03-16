'use strict';

//var chartSeries = [
//    {
//      name: 'Unemployed',
//      data: [
//        {name:'School A', y:5},
//        {name:'School B', y:3},
//        {name:'School C', y:4},
//        {name:'School D', y:7},
//        {name:'School E', y:2},
//      ]
//    },
//    {
//      name: 'Public Interest',
//      data: [
//        {name:'School A', y:2},
//        {name:'School B', y:2},
//        {name:'School C', y:3},
//        {name:'School D', y:2},
//        {name:'School E', y:1},
//      ]
//    },
//    {
//      name: 'Big Law',
//      data: [
//        {name:'School A', y:3},
//        {name:'School B', y:4},
//        {name:'School C', y:4},
//        {name:'School D', y:2},
//        {name:'School E', y:5},
//      ]
//    }
//]
//
//
// ... OR ...
//
//
// var chartCategories = ['School A', 'School B', 'School C', 'School D', 'School E']
//
// var chartSeries = [
//   {
//     name: 'Unemployed',
//     data: [5, 3, 4, 7, 2] // must be in same order as ['School A', 'School B', 'School C', 'School D', 'School E']
//   },
//   {
//     name: 'Public Interest',
//     data: [2, 2, 3, 2, 1] // must be in same order as ['School A', 'School B', 'School C', 'School D', 'School E']
//   },
//   {
//     name: 'Big Law',
//     data: [3, 4, 4, 2, 5] // must be in same order as ['School A', 'School B', 'School C', 'School D', 'School E']
//   }
// ]

class Stacked100PctChartConfig {
  constructor(reports) {
    this.reports = reports
  }

  //
  // CLASS METHODS
  //

  //
  // INSTANCE METHODS
  //

  // @return ['School A', 'School B', 'School C', 'School D', 'School E']
  get categories(){
    return this.reports.map(function(report){ return report.schoolShortName })
  }

  // @param [Object] grouping e.g. {group: 'Employed (Other)', color: colorbrewer.Greys[9][6], types: ["Education", "Employer Type Unknown"] }
  // @param [Object] grouping [String] group
  // @param [Object] grouping [String] color
  // @param [Object] grouping [Array] types
  // @return [5, 3, 4, 7, 2] (must be in same order as categories)
  groupingSeries(grouping){
    return this.reports.map(function(report){
      return report.sumOfTypeCounts(grouping.types)
    })
  }

}
