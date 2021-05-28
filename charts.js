Highcharts.chart('container', {

  chart: {
    type: 'bubble',
    plotBorderWidth: 1,
    zoomType: 'xy'
  },

  legend: {
    enabled: false
  },

  title: {
    text: 'Covid_19 Vaccination Outlook Per Country'
  },

  subtitle: {
    text: 'Source: <a href="https://github.com/owid/covid-19-data/tree/master/public/data">Johns Hopkins University (JHU)</a>'
  },

  accessibility: {
    point: {
      valueDescriptionFormat: '{index}. {point.name}, vaccination: {point.x}m, positive cases: {point.y}m, population: {point.z} m.'
    }
  },

  xAxis: {
    gridLineWidth: 1,
    title: {
      text: 'Total Number of Vaccination'
    },
    labels: {
      format: '{value} m'
    },
    accessibility: {
      rangeDescription: 'Range: 0 to 1000 m .'
    }
  },

  yAxis: {
    startOnTick: false,
    endOnTick: false,
    title: {
      text: 'Total Number of Confirmed Cases'
    },
    labels: {
      format: '{value} m'
    },
    accessibility: {
      rangeDescription: 'Range: 0 to 5000m.'
    }
  },

  tooltip: {
    useHTML: true,
    headerFormat: '<table>',
    pointFormat: '<tr><th colspan="2"><h3>{point.country}</h3></th></tr>' +
      '<tr><th>Fat intake:</th><td>{point.x}g</td></tr>' +
      '<tr><th>Sugar intake:</th><td>{point.y}g</td></tr>' +
      '<tr><th>Obesity (adults):</th><td>{point.z}%</td></tr>',
    footerFormat: '</table>',
    followPointer: true
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }
  },
  series: [{
      data: [{
          x: 466833,
          y: 12006,
          z: 926702,
          name: 'AFG',
          country: 'Afghanistan'
        },
        {
          x: 24599777,
          y: 18343,
          z: 1147802194,
          name: 'AFR',
          country: 'Africa'
        },
        {
          x: 661161,
          y: 229737,
          z: 18178915,
          name: 'ALB',
          country: 'Albania'
        },
        {
          x: 69070,
          y: 1568,
          z: 75030,
          name: 'DzA',
          country: 'Algeria'
        },
        {
          x: 30078,
          y: 389285,
          z: 217053,
          name: 'AND',
          country: 'Andorra'
        },
        {
          x: 656680,
          y: 19989,
          z: 2859831,
          name: 'AGO',
          country: 'Angola'
        },
        {
          x: 12901,
          y: 859944,
          z: 49048,
          name: 'AIA',
          country: 'Anguilla'
        },
        {
          x: 35542,
          y: 362933,
          z: 341320,
          name: 'ATG',
          country: 'Antigua and Barbuda'
        },
        {
          x: 9982227,
          y: 220870,
          z: 445755742,
          name: 'ARG',
          country: 'Argentina'
        },
        {
          x: 15830,
          y: 5339,
          z: 30541,
          name: 'ARM',
          country: 'Armenia'
        },
        {
          x: 68378,
          y: 640449,
          z: 2442469,
          name: 'ABW',
          country: 'Aruba'
        },
        {
          x: 740199442,
          y: 159526,
          z: 31736456196,
          name: 'OWID_ASI',
          country: 'Asia'
        },
        {
          x: 3016762,
          y: 118309,
          z: 98234253,
          name: 'AUS',
          country: 'Australia'
        },
        {
          x: 4026201,
          y: 447034,
          z: 191950886,
          name: 'AUT',
          country: 'Austria'
        },
        {
          x: 1809099,
          y: 178433,
          z: 69811930,
          name: 'AzE',
          country: 'Azerbaijan'
        },
        {
          x: 33875,
          y: 86141,
          z: 117209,
          name: 'BHS',
          country: 'Bahamas'
        },
        {
          x: 1456279,
          y: 855824,
          z: 74655052,
          name: 'BHR',
          country: 'Bahrain'
        },
        {
          x: 9530192,
          y: 57872,
          z: 330468962,
          name: 'BGD',
          country: 'Bangladesh'
        },
        {
          x: 121406,
          y: 422469,
          z: 5368279,
          name: 'BRB',
          country: 'Barbados'
        },
        {
          x: 425196,
          y: 45005,
          z: 1015106,
          name: 'BLR',
          country: 'Belarus'
        },
        {
          x: 5224053,
          y: 450753,
          z: 236452265,
          name: 'BEL',
          country: 'Belgium'
        },
        {
          x: 54728,
          y: 137640,
          z: 1039883,
          name: 'BLz',
          country: 'Belize'
        },
        {
          x: 65849,
          y: 1057427,
          z: 638953,
          name: 'BMU',
          country: 'Bermuda'
        },
        {
          x: 742954,
          y: 962858,
          z: 23201151,
          name: 'BTN',
          country: 'Bhutan'
        },
        {
          x: 1090342,
          y: 93404,
          z: 34993237,
          name: 'BOL',
          country: 'Bolivia'
        },
        {
          x: 133378,
          y: 40656,
          z: 258429,
          name: 'BIH',
          country: 'Bosnia and Herzegovina'
        },
        {
          x: 66067,
          y: 28094,
          z: 460486,
          name: 'BWA',
          country: 'Botswana'
        },
        {
          x: 53000829,
          y: 249350,
          z: 2152959396,
          name: 'BRA',
          country: 'Brazil'
        },
        {
          x: 16061,
          y: 36707,
          z: 29283,
          name: 'BRN',
          country: 'Brunei'
        },
        {
          x: 1131263,
          y: 197046,
          z: 51834878,
          name: 'BGR',
          country: 'Bulgaria'
        },
        {
          x: 3294476,
          y: 18343,
          z: 109783429,
          name: 'KHM',
          country: 'Cambodia'
        },
        {
          x: 47463,
          y: 229737,
          z: 103279,
          name: 'CMR',
          country: 'Cameroon'
        },
        {
          x: 18417555,
          y: 1568,
          z: 755296893,
          name: 'CAN',
          country: 'Canada'
        },
        {
          x: 22997,
          y: 389285,
          z: 46033,
          name: 'CPV',
          country: 'Cape Verde'
        },
        {
          x: 75142,
          y: 19989,
          z: 1540484,
          name: 'CyM',
          country: 'Cayman Islands'
        },
        {
          x: 16588565,
          y: 859944,
          z: 950155311,
          name: 'CHL',
          country: 'Chile'
        },
        {
          x: 406870930,
          y: 362933,
          z: 13476861700,
          name: 'CHN',
          country: 'China'
        },
        {
          x: 7343980,
          y: 220870,
          z: 197200411,
          name: 'COL',
          country: 'Colombia'
        },
        {
          x: 35233,
          y: 5339,
          z: 102143,
          name: 'COM',
          country: 'Comoros'
        },
        {
          x: 26469,
          y: 640449,
          z: 90716,
          name: 'COG',
          country: 'Congo'
        },
        {
          x: 1184866,
          y: 159526,
          z: 8432899,
          name: 'CRI',
          country: 'Costa Rica'
        },
        {
          x: 322733,
          y: 118309,
          z: 7263472,
          name: 'CIV',
          country: 'Cote dIvoire'
        },
        {
          x: 1352782,
          y: 447034,
          z: 44629929,
          name: 'HRV',
          country: 'Croatia'
        },
        {
          x: 669998,
          y: 178433,
          z: 810000,
          name: 'CUB',
          country: 'Cuba'
        },
        {
          x: 106677,
          y: 86141,
          z: 3576727,
          name: 'CUW',
          country: 'Curacao'
        },
        {
          x: 427923,
          y: 855824,
          z: 5729678,
          name: 'CyP',
          country: 'Cyprus'
        },
        {
          x: 4187521,
          y: 57872,
          z: 197949729,
          name: 'CzE',
          country: 'Czechia'
        },
        {
          x: 10533,
          y: 422469,
          z: 21301,
          name: 'COD',
          country: 'Democratic Republic of Congo'
        },
        {
          x: 2683103,
          y: 45005,
          z: 132943276,
          name: 'DNK',
          country: 'Denmark'
        },
        {
          x: 2794,
          y: 450753,
          z: 23288,
          name: 'DJI',
          country: 'Djibouti'
        },
        {
          x: 34005,
          y: 137640,
          z: 355085,
          name: 'DMA',
          country: 'Dominica'
        },
        {
          x: 3097561,
          y: 1057427,
          z: 61593272,
          name: 'DOM',
          country: 'Dominican Republic'
        },
        {
          x: 1482750,
          y: 962858,
          z: 35274101,
          name: 'ECU',
          country: 'Ecuador'
        },
        {
          x: 1272704,
          y: 93404,
          z: 3498037,
          name: 'EGy',
          country: 'Egypt'
        },
        {
          x: 1382145,
          y: 1795,
          z: 23775903,
          name: 'SLV',
          country: 'El Salvador'
        },
        {
          x: 46714201,
          y: 487986,
          z: 3095703012,
          name: 'OWID_ENG',
          country: 'England'
        },
        {
          x: 156176,
          y: 41345,
          z: 418212,
          name: 'GNQ',
          country: 'Equatorial Guinea'
        },
        {
          x: 584242,
          y: 1143353,
          z: 29733062,
          name: 'EST',
          country: 'Estonia'
        },
        {
          x: 45299,
          y: 867778,
          z: 249602,
          name: 'SWz',
          country: 'Eswatini'
        },
        {
          x: 1127370,
          y: 282673,
          z: 28969771,
          name: 'ETH',
          country: 'Ethiopia'
        },
        {
          x: 293045106,
          y: 144339,
          z: 14770213803,
          name: 'OWID_EUR',
          country: 'Europe'
        },
        {
          x: 199103604,
          y: 40512,
          z: 9203988408,
          name: 'OWID_EUN ',
          country:'European Union '
        }, {
            x: 22286,
            y: 4786,
            z: 482919,
            name: 'FRO',
            country: 'Faeroe Islands'
          },
          {
            x: 4933,
            y: 232598,
            z: 14163,
            name: 'FLK',
            country: 'Falkland Islands'
          },
          {
            x: 88427,
            y: 12231,
            z: 238983,
            name: 'FJI',
            country: 'Fiji'
          },
          {
            x: 2397226,
            y: 329528,
            z: 90580970,
            name: 'FIN',
            country: 'Finland'
          },
          {
            x: 28849157,
            y: 59150,
            z: 1323014607,
            name: 'FRA',
            country: 'France'
          },
          {
            x: 82218,
            y: 650071,
            z: 562466,
            name: 'PyF',
            country: 'French Polynesia'
          },
          {
            x: 11458,
            y: 488564,
            z: 58588,
            name: 'GAB',
            country: 'Gabon'
          },
          {
            x: 26071,
            y: 391031,
            z: 131556,
            name: 'GMB',
            country: 'Gambia'
          },
          {
            x: 98415,
            y: 116,
            z: 1628041,
            name: 'GEO',
            country: 'Georgia'
          },
          {
            x: 39898031,
            y: 463226,
            z: 1755540035,
            name: 'DEU',
            country: 'Germany'
          },
          {
            x: 937648,
            y: 2827,
            z: 8942441,
            name: 'GHA',
            country: 'Ghana'
          },
          {
            x: 77346,
            y: 472356,
            z: 3802445,
            name: 'GIB',
            country: 'Gibraltar'
          },
          {
            x: 4350155,
            y: 285536,
            z: 176409183,
            name: 'GRC',
            country: 'Greece'
          }]
      }]

});

var data = [{
    id: '0.0',
    parent: '',
    name: 'The World'
}, {
    id: '1.3',
    parent: '0.0',
    name: 'Asia'
}, {
    id: '1.1',
    parent: '0.0',
    name: 'Africa'
}, {
    id: '1.2',
    parent: '0.0',
    name: 'America'
}, {
    id: '1.4',
    parent: '0.0',
    name: 'Europe'
}, {
    id: '1.5',
    parent: '0.0',
    name: 'Oceanic'
},

/* Africa */
{
    id: '2.1',
    parent: '1.1',
    name: 'Eastern Africa'
},

{
    id: '3.1',
    parent: '2.1',
    name: 'Ethiopia',
    value: 104957438
}, {
    id: '3.2',
    parent: '2.1',
    name: 'Tanzania',
    value: 57310019
}, {
    id: '3.3',
    parent: '2.1',
    name: 'Kenya',
    value: 49699862
}, {
    id: '3.4',
    parent: '2.1',
    name: 'Uganda',
    value: 42862958
}, {
    id: '3.5',
    parent: '2.1',
    name: 'Mozambique',
    value: 29668834
}, {
    id: '3.6',
    parent: '2.1',
    name: 'Madagascar',
    value: 25570895
}, {
    id: '3.7',
    parent: '2.1',
    name: 'Malawi',
    value: 18622104
}, {
    id: '3.8',
    parent: '2.1',
    name: 'Zambia',
    value: 17094130
}, {
    id: '3.9',
    parent: '2.1',
    name: 'Zimbabwe',
    value: 16529904
}, {
    id: '3.10',
    parent: '2.1',
    name: 'Somalia',
    value: 14742523
}, {
    id: '3.11',
    parent: '2.1',
    name: 'South Sudan',
    value: 12575714
}, {
    id: '3.12',
    parent: '2.1',
    name: 'Rwanda',
    value: 12208407
}, {
    id: '3.13',
    parent: '2.1',
    name: 'Burundi',
    value: 10864245
}, {
    id: '3.14',
    parent: '2.1',
    name: 'Eritrea',
    value: 5068831
}, {
    id: '3.15',
    parent: '2.1',
    name: 'Mauritius',
    value: 1265138
}, {
    id: '3.16',
    parent: '2.1',
    name: 'Djibouti',
    value: 956985
}, {
    id: '3.17',
    parent: '2.1',
    name: 'Réunion',
    value: 876562
}, {
    id: '3.18',
    parent: '2.1',
    name: 'Comoros',
    value: 813912
}, {
    id: '3.19',
    parent: '2.1',
    name: 'Mayotte',
    value: 253045
}, {
    id: '3.20',
    parent: '2.1',
    name: 'Seychelles',
    value: 94737
},

{
    id: '2.5',
    parent: '1.1',
    name: 'Western Africa'
},

{
    id: '3.42',
    parent: '2.5',
    name: 'Nigeria',
    value: 190886311
}, {
    id: '3.43',
    parent: '2.5',
    name: 'Ghana',
    value: 28833629
}, {
    id: '3.44',
    parent: '2.5',
    name: 'Côte Ivoire',
    value: 24294750
}, {
    id: '3.45',
    parent: '2.5',
    name: 'Niger',
    value: 21477348
}, {
    id: '3.46',
    parent: '2.5',
    name: 'Burkina Faso',
    value: 19193382
}, {
    id: '3.47',
    parent: '2.5',
    name: 'Mali',
    value: 18541980
}, {
    id: '3.48',
    parent: '2.5',
    name: 'Senegal',
    value: 15850567
}, {
    id: '3.49',
    parent: '2.5',
    name: 'Guinea',
    value: 12717176
}, {
    id: '3.50',
    parent: '2.5',
    name: 'Benin',
    value: 11175692
}, {
    id: '3.51',
    parent: '2.5',
    name: 'Togo',
    value: 7797694
}, {
    id: '3.52',
    parent: '2.5',
    name: 'Sierra Leone',
    value: 7557212
}, {
    id: '3.53',
    parent: '2.5',
    name: 'Liberia',
    value: 4731906
}, {
    id: '3.54',
    parent: '2.5',
    name: 'Mauritania',
    value: 4420184
}, {
    id: '3.55',
    parent: '2.5',
    name: 'The Gambia',
    value: 2100568
}, {
    id: '3.56',
    parent: '2.5',
    name: 'Guinea-Bissau',
    value: 1861283
}, {
    id: '3.57',
    parent: '2.5',
    name: 'Cabo Verde',
    value: 546388
}, {
    id: '3.58',
    parent: '2.5',
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    value: 4049
},

{
    id: '2.3',
    parent: '1.1',
    name: 'North Africa'
},

{
    id: '3.30',
    parent: '2.3',
    name: 'Egypt',
    value: 97553151
}, {
    id: '3.31',
    parent: '2.3',
    name: 'Algeria',
    value: 41318142
}, {
    id: '3.32',
    parent: '2.3',
    name: 'Sudan',
    value: 40533330
}, {
    id: '3.33',
    parent: '2.3',
    name: 'Morocco',
    value: 35739580
}, {
    id: '3.34',
    parent: '2.3',
    name: 'Tunisia',
    value: 11532127
}, {
    id: '3.35',
    parent: '2.3',
    name: 'Libya',
    value: 6374616
}, {
    id: '3.36',
    parent: '2.3',
    name: 'Western Sahara',
    value: 552628
},

{
    id: '2.2',
    parent: '1.1',
    name: 'Central Africa'
},

{
    id: '3.21',
    parent: '2.2',
    name: 'Democratic Republic of the Congo',
    value: 81339988
}, {
    id: '3.22',
    parent: '2.2',
    name: 'Angola',
    value: 29784193
}, {
    id: '3.23',
    parent: '2.2',
    name: 'Cameroon',
    value: 24053727
}, {
    id: '3.24',
    parent: '2.2',
    name: 'Chad',
    value: 14899994
}, {
    id: '3.25',
    parent: '2.2',
    name: 'Congo',
    value: 5260750
}, {
    id: '3.26',
    parent: '2.2',
    name: 'Central African Republic',
    value: 4659080
}, {
    id: '3.27',
    parent: '2.2',
    name: 'Gabon',
    value: 2025137
}, {
    id: '3.28',
    parent: '2.2',
    name: 'Equatorial Guinea',
    value: 1267689
}, {
    id: '3.29',
    parent: '2.2',
    name: 'Sao Tome and Principe',
    value: 204327
},

{
    id: '2.4',
    parent: '1.1',
    name: 'South America'
},

{
    id: '3.37',
    parent: '2.4',
    name: 'South Africa',
    value: 56717156
}, {
    id: '3.38',
    parent: '2.4',
    name: 'Namibia',
    value: 2533794
}, {
    id: '3.39',
    parent: '2.4',
    name: 'Botswana',
    value: 2291661
}, {
    id: '3.40',
    parent: '2.4',
    name: 'Lesotho',
    value: 2233339
}, {
    id: '3.41',
    parent: '2.4',
    name: 'Swaziland',
    value: 1367254
},

/***********/

/* America */
{
    id: '2.9',
    parent: '1.2',
    name: 'South America'
},

{
    id: '3.98',
    parent: '2.9',
    name: 'Brazil',
    value: 209288278
}, {
    id: '3.99',
    parent: '2.9',
    name: 'Colombia',
    value: 49065615
}, {
    id: '3.100',
    parent: '2.9',
    name: 'Argentina',
    value: 44271041
}, {
    id: '3.101',
    parent: '2.9',
    name: 'Peru',
    value: 32165485
}, {
    id: '3.102',
    parent: '2.9',
    name: 'Venezuela',
    value: 31977065
}, {
    id: '3.103',
    parent: '2.9',
    name: 'Chile',
    value: 18054726
}, {
    id: '3.104',
    parent: '2.9',
    name: 'Ecuador',
    value: 16624858
}, {
    id: '3.105',
    parent: '2.9',
    name: 'Bolivia',
    value: 11051600
}, {
    id: '3.106',
    parent: '2.9',
    name: 'Paraguay',
    value: 6811297
}, {
    id: '3.107',
    parent: '2.9',
    name: 'Uruguay',
    value: 3456750
}, {
    id: '3.108',
    parent: '2.9',
    name: 'Guyana',
    value: 777859
}, {
    id: '3.109',
    parent: '2.9',
    name: 'Suriname',
    value: 563402
}, {
    id: '3.110',
    parent: '2.9',
    name: 'French Guiana',
    value: 282731
}, {
    id: '3.111',
    parent: '2.9',
    name: 'Falkland Islands',
    value: 2910
},

{
    id: '2.8',
    parent: '1.2',
    name: 'Northern America'
},

{
    id: '3.93',
    parent: '2.8',
    name: 'United States',
    value: 324459463
}, {
    id: '3.94',
    parent: '2.8',
    name: 'Canada',
    value: 36624199
}, {
    id: '3.95',
    parent: '2.8',
    name: 'Bermuda',
    value: 61349
}, {
    id: '3.96',
    parent: '2.8',
    name: 'Greenland',
    value: 56480
}, {
    id: '3.97',
    parent: '2.8',
    name: 'Saint Pierre and Miquelon',
    value: 6320
},

{
    id: '2.7',
    parent: '1.2',
    name: 'Central America'
},

{
    id: '3.85',
    parent: '2.7',
    name: 'Mexico',
    value: 129163276
}, {
    id: '3.86',
    parent: '2.7',
    name: 'Guatemala',
    value: 16913503
}, {
    id: '3.87',
    parent: '2.7',
    name: 'Honduras',
    value: 9265067
}, {
    id: '3.88',
    parent: '2.7',
    name: 'El Salvador',
    value: 6377853
}, {
    id: '3.89',
    parent: '2.7',
    name: 'Nicaragua',
    value: 6217581
}, {
    id: '3.90',
    parent: '2.7',
    name: 'Costa Rica',
    value: 4905769
}, {
    id: '3.91',
    parent: '2.7',
    name: 'Panama',
    value: 4098587
}, {
    id: '3.92',
    parent: '2.7',
    name: 'Belize',
    value: 374681
},

{
    id: '2.6',
    parent: '1.2',
    name: 'Caribbean'
},

{
    id: '3.59',
    parent: '2.6',
    name: 'Cuba',
    value: 11484636
}, {
    id: '3.60',
    parent: '2.6',
    name: 'Haiti',
    value: 10981229
}, {
    id: '3.61',
    parent: '2.6',
    name: 'Dominican Republic',
    value: 10766998
}, {
    id: '3.62',
    parent: '2.6',
    name: 'Puerto Rico',
    value: 3663131
}, {
    id: '3.63',
    parent: '2.6',
    name: 'Jamaica',
    value: 2890299
}, {
    id: '3.64',
    parent: '2.6',
    name: 'Trinidad and Tobago',
    value: 1369125
}, {
    id: '3.65',
    parent: '2.6',
    name: 'Guadeloupe',
    value: 449568
}, {
    id: '3.66',
    parent: '2.6',
    name: 'Bahamas',
    value: 395361
}, {
    id: '3.67',
    parent: '2.6',
    name: 'Martinique',
    value: 384896
}, {
    id: '3.68',
    parent: '2.6',
    name: 'Barbados',
    value: 285719
}, {
    id: '3.69',
    parent: '2.6',
    name: 'Saint Lucia',
    value: 178844
}, {
    id: '3.70',
    parent: '2.6',
    name: 'Curaçao',
    value: 160539
}, {
    id: '3.71',
    parent: '2.6',
    name: 'Saint Vincent and the Grenadines',
    value: 109897
}, {
    id: '3.72',
    parent: '2.6',
    name: 'Grenada',
    value: 107825
}, {
    id: '3.73',
    parent: '2.6',
    name: 'Aruba',
    value: 105264
}, {
    id: '3.74',
    parent: '2.6',
    name: 'United States Virgin Islands',
    value: 104901
}, {
    id: '3.75',
    parent: '2.6',
    name: 'Antigua and Barbuda',
    value: 102012
}, {
    id: '3.76',
    parent: '2.6',
    name: 'Dominica',
    value: 73925
}, {
    id: '3.77',
    parent: '2.6',
    name: 'Cayman Islands',
    value: 61559
}, {
    id: '3.78',
    parent: '2.6',
    name: 'Saint Kitts and Nevis',
    value: 55345
}, {
    id: '3.79',
    parent: '2.6',
    name: 'Sint Maarten',
    value: 40120
}, {
    id: '3.80',
    parent: '2.6',
    name: 'Turks and Caicos Islands',
    value: 35446
}, {
    id: '3.81',
    parent: '2.6',
    name: 'British Virgin Islands',
    value: 31196
}, {
    id: '3.82',
    parent: '2.6',
    name: 'Caribbean Netherlands',
    value: 25398
}, {
    id: '3.83',
    parent: '2.6',
    name: 'Anguilla',
    value: 14909
}, {
    id: '3.84',
    parent: '2.6',
    name: 'Montserrat',
    value: 5177
},
/***********/

/* Asia */
{
    id: '2.13',
    parent: '1.3',
    name: 'Southern Asia'
},

{
    id: '3.136',
    parent: '2.13',
    name: 'India',
    value: 1339180127
}, {
    id: '3.137',
    parent: '2.13',
    name: 'Pakistan',
    value: 197015955
}, {
    id: '3.138',
    parent: '2.13',
    name: 'Bangladesh',
    value: 164669751
}, {
    id: '3.139',
    parent: '2.13',
    name: 'Iran',
    value: 81162788
}, {
    id: '3.140',
    parent: '2.13',
    name: 'Afghanistan',
    value: 35530081
}, {
    id: '3.141',
    parent: '2.13',
    name: 'Nepal',
    value: 29304998
}, {
    id: '3.142',
    parent: '2.13',
    name: 'Sri Lanka',
    value: 20876917
}, {
    id: '3.143',
    parent: '2.13',
    name: 'Bhutan',
    value: 807610
}, {
    id: '3.144',
    parent: '2.13',
    name: 'Maldives',
    value: 436330
},

{
    id: '2.11',
    parent: '1.3',
    name: 'Eastern Asia'
},

{
    id: '3.117',
    parent: '2.11',
    name: 'China',
    value: 1409517397
}, {
    id: '3.118',
    parent: '2.11',
    name: 'Japan',
    value: 127484450
}, {
    id: '3.119',
    parent: '2.11',
    name: 'South Korea',
    value: 50982212
}, {
    id: '3.120',
    parent: '2.11',
    name: 'North Korea',
    value: 25490965
}, {
    id: '3.121',
    parent: '2.11',
    name: 'Taiwan',
    value: 23626456
}, {
    id: '3.122',
    parent: '2.11',
    name: 'Hong Kong',
    value: 7364883
}, {
    id: '3.123',
    parent: '2.11',
    name: 'Mongolia',
    value: 3075647
}, {
    id: '3.124',
    parent: '2.11',
    name: 'Macau',
    value: 622567
},

{
    id: '2.12',
    parent: '1.3',
    name: 'South-Eastern Asia'
},

{
    id: '3.125',
    parent: '2.12',
    name: 'Indonesia',
    value: 263991379
}, {
    id: '3.126',
    parent: '2.12',
    name: 'Philippines',
    value: 104918090
}, {
    id: '3.127',
    parent: '2.12',
    name: 'Vietnam',
    value: 95540800
}, {
    id: '3.128',
    parent: '2.12',
    name: 'Thailand',
    value: 69037513
}, {
    id: '3.129',
    parent: '2.12',
    name: 'Myanmar',
    value: 53370609
}, {
    id: '3.130',
    parent: '2.12',
    name: 'Malaysia',
    value: 31624264
}, {
    id: '3.131',
    parent: '2.12',
    name: 'Cambodia',
    value: 16005373
}, {
    id: '3.132',
    parent: '2.12',
    name: 'Laos',
    value: 6858160
}, {
    id: '3.133',
    parent: '2.12',
    name: 'Singapore',
    value: 5708844
}, {
    id: '3.134',
    parent: '2.12',
    name: 'Timor-Leste',
    value: 1296311
}, {
    id: '3.135',
    parent: '2.12',
    name: 'Brunei',
    value: 428697
    // 'color': ''
},

{
    id: '2.14',
    parent: '1.3',
    name: 'Western Asia'
},

{
    id: '3.145',
    parent: '2.14',
    name: 'Turkey',
    value: 80745020
}, {
    id: '3.146',
    parent: '2.14',
    name: 'Iraq',
    value: 38274618
}, {
    id: '3.147',
    parent: '2.14',
    name: 'Saudi Arabia',
    value: 32938213
}, {
    id: '3.148',
    parent: '2.14',
    name: 'Yemen',
    value: 28250420
}, {
    id: '3.149',
    parent: '2.14',
    name: 'Syria',
    value: 18269868
}, {
    id: '3.150',
    parent: '2.14',
    name: 'Azerbaijan',
    value: 9827589
}, {
    id: '3.151',
    parent: '2.14',
    name: 'Jordan',
    value: 9702353
}, {
    id: '3.152',
    parent: '2.14',
    name: 'United Arab Emirates',
    value: 9400145
}, {
    id: '3.153',
    parent: '2.14',
    name: 'Israel',
    value: 8321570
}, {
    id: '3.154',
    parent: '2.14',
    name: 'Lebanon',
    value: 6082357
}, {
    id: '3.155',
    parent: '2.14',
    name: 'Palestine',
    value: 4920724
}, {
    id: '3.156',
    parent: '2.14',
    name: 'Oman',
    value: 4636262
}, {
    id: '3.157',
    parent: '2.14',
    name: 'Kuwait',
    value: 4136528
}, {
    id: '3.158',
    parent: '2.14',
    name: 'Georgia',
    value: 3912061
}, {
    id: '3.159',
    parent: '2.14',
    name: 'Armenia',
    value: 2930450
}, {
    id: '3.160',
    parent: '2.14',
    name: 'Qatar',
    value: 2639211
}, {
    id: '3.161',
    parent: '2.14',
    name: 'Bahrain',
    value: 1492584
},

{
    id: '2.10',
    parent: '1.3',
    name: 'Central Asia'
},

{
    id: '3.112',
    parent: '2.10',
    name: 'Uzbekistan',
    value: 31910641
}, {
    id: '3.113',
    parent: '2.10',
    name: 'Kazakhstan',
    value: 18204499
}, {
    id: '3.114',
    parent: '2.10',
    name: 'Tajikistan',
    value: 8921343
}, {
    id: '3.115',
    parent: '2.10',
    name: 'Kyrgyzstan',
    value: 6045117
}, {
    id: '3.116',
    parent: '2.10',
    name: 'Turkmenistan',
    value: 5758075
},
/***********/

/* Europe */
{
    id: '2.15',
    parent: '1.4',
    name: 'Eastern Europe'
},

{
    id: '3.162',
    parent: '2.15',
    name: 'Russia',
    value: 143989754
}, {
    id: '3.163',
    parent: '2.15',
    name: 'Ukraine',
    value: 44222947
}, {
    id: '3.164',
    parent: '2.15',
    name: 'Poland',
    value: 38170712
}, {
    id: '3.165',
    parent: '2.15',
    name: 'Romania',
    value: 19679306
}, {
    id: '3.166',
    parent: '2.15',
    name: 'Czechia',
    value: 10618303
}, {
    id: '3.167',
    parent: '2.15',
    name: 'Hungary',
    value: 9721559
}, {
    id: '3.168',
    parent: '2.15',
    name: 'Belarus',
    value: 9468338
}, {
    id: '3.169',
    parent: '2.15',
    name: 'Bulgaria',
    value: 7084571
}, {
    id: '3.170',
    parent: '2.15',
    name: 'Slovakia',
    value: 5447662
}, {
    id: '3.171',
    parent: '2.15',
    name: 'Moldova',
    value: 4051212
}, {
    id: '3.172',
    parent: '2.15',
    name: 'Cyprus',
    value: 1179551
},

{
    id: '2.16',
    parent: '1.4',
    name: 'Northern Europe'
},

{
    id: '3.173',
    parent: '2.16',
    name: 'United Kingdom',
    value: 66181585
}, {
    id: '3.174',
    parent: '2.16',
    name: 'Sweden',
    value: 9910701
}, {
    id: '3.175',
    parent: '2.16',
    name: 'Denmark',
    value: 5733551
}, {
    id: '3.176',
    parent: '2.16',
    name: 'Finland',
    value: 5523231
}, {
    id: '3.177',
    parent: '2.16',
    name: 'Norway',
    value: 5305383
}, {
    id: '3.178',
    parent: '2.16',
    name: 'Ireland',
    value: 4761657
}, {
    id: '3.179',
    parent: '2.16',
    name: 'Lithuania',
    value: 2890297
}, {
    id: '3.180',
    parent: '2.16',
    name: 'Latvia',
    value: 1949670
}, {
    id: '3.181',
    parent: '2.16',
    name: 'Estonia',
    value: 1309632
}, {
    id: '3.182',
    parent: '2.16',
    name: 'Iceland',
    value: 335025
}, {
    id: '3.183',
    parent: '2.16',
    name: 'Guernsey and  Jersey',
    value: 165314
}, {
    id: '3.184',
    parent: '2.16',
    name: 'Isle of Man',
    value: 84287
}, {
    id: '3.185',
    parent: '2.16',
    name: 'Faroe Islands',
    value: 49290
},

{
    id: '2.17',
    parent: '1.4',
    name: 'Southern Europe'
},

{
    id: '3.186',
    parent: '2.17',
    name: 'Italy',
    value: 59359900
}, {
    id: '3.187',
    parent: '2.17',
    name: 'Spain',
    value: 46354321
}, {
    id: '3.188',
    parent: '2.17',
    name: 'Greece',
    value: 11159773
}, {
    id: '3.189',
    parent: '2.17',
    name: 'Portugal',
    value: 10329506
}, {
    id: '3.190',
    parent: '2.17',
    name: 'Serbia',
    value: 8790574
}, {
    id: '3.191',
    parent: '2.17',
    name: 'Croatia',
    value: 4189353
}, {
    id: '3.192',
    parent: '2.17',
    name: 'Bosnia and Herzegovina',
    value: 3507017
}, {
    id: '3.193',
    parent: '2.17',
    name: 'Albania',
    value: 2930187
}, {
    id: '3.194',
    parent: '2.17',
    name: 'Republic of Macedonia',
    value: 2083160
}, {
    id: '3.195',
    parent: '2.17',
    name: 'Slovenia',
    value: 2079976
}, {
    id: '3.196',
    parent: '2.17',
    name: 'Montenegro',
    value: 628960
}, {
    id: '3.197',
    parent: '2.17',
    name: 'Malta',
    value: 430835
}, {
    id: '3.198',
    parent: '2.17',
    name: 'Andorra',
    value: 76965
}, {
    id: '3.199',
    parent: '2.17',
    name: 'Gibraltar',
    value: 34571
}, {
    id: '3.200',
    parent: '2.17',
    name: 'San Marino',
    value: 33400
}, {
    id: '3.201',
    parent: '2.17',
    name: 'Vatican City',
    value: 792
},

{
    id: '2.18',
    parent: '1.4',
    name: 'Western Europe'
},

{
    id: '3.202',
    parent: '2.18',
    name: 'Germany',
    value: 82114224
}, {
    id: '3.203',
    parent: '2.18',
    name: 'France',
    value: 64979548
}, {
    id: '3.204',
    parent: '2.18',
    name: 'Netherlands',
    value: 17035938
}, {
    id: '3.205',
    parent: '2.18',
    name: 'Belgium',
    value: 11429336
}, {
    id: '3.206',
    parent: '2.18',
    name: 'Austria',
    value: 8735453
}, {
    id: '3.207',
    parent: '2.18',
    name: 'Switzerland',
    value: 8476005
}, {
    id: '3.208',
    parent: '2.18',
    name: 'Luxembourg',
    value: 583455
}, {
    id: '3.209',
    parent: '2.18',
    name: 'Monaco',
    value: 38695
}, {
    id: '3.210',
    parent: '2.18',
    name: 'Liechtenstein',
    value: 37922
},
/***********/

/* Oceania */
{
    id: '2.19',
    parent: '1.5',
    name: 'Australia and New Zealand'
},

{
    id: '3.211',
    parent: '2.19',
    name: 'Australia',
    value: 24450561
}, {
    id: '3.212',
    parent: '2.19',
    name: 'New Zealand',
    value: 4705818
},

{
    id: '2.20',
    parent: '1.5',
    name: 'Melanesia'
},

{
    id: '3.213',
    parent: '2.20',
    name: 'Papua New Guinea'
}, {
    id: '3.214',
    parent: '2.20',
    name: 'Fiji',
    value: 905502
}, {
    id: '3.215',
    parent: '2.20',
    name: 'Solomon Islands',
    value: 611343
}, {
    id: '3.216',
    parent: '2.20',
    name: 'New Caledonia',
    value: 276255
}, {
    id: '3.217',
    parent: '2.20',
    name: 'Vanuatu',
    value: 276244
},

{
    id: '2.21',
    parent: '1.5',
    name: 'Micronesia'
},

{
    id: '3.218',
    parent: '2.21',
    name: 'Guam',
    value: 164229
}, {
    id: '3.219',
    parent: '2.21',
    name: 'Kiribati',
    value: 116398
}, {
    id: '3.220',
    parent: '2.21',
    name: 'Federated States of Micronesia',
    value: 105544
}, {
    id: '3.221',
    parent: '2.21',
    name: 'Northern Mariana Islands',
    value: 55144
}, {
    id: '3.222',
    parent: '2.21',
    name: 'Marshall Islands',
    value: 53127
}, {
    id: '3.223',
    parent: '2.21',
    name: 'Palau',
    value: 21729
}, {
    id: '3.224',
    parent: '2.21',
    name: 'Nauru',
    value: 11359
},

{
    id: '2.22',
    parent: '1.5',
    name: 'Polynesia'
},

{
    id: '3.225',
    parent: '2.22',
    name: 'French Polynesia',
    value: 283007
}, {
    id: '3.226',
    parent: '2.22',
    name: 'Samoa',
    value: 196440
}, {
    id: '3.227',
    parent: '2.22',
    name: 'Tonga',
    value: 108020
}, {
    id: '3.228',
    parent: '2.22',
    name: 'American Samoa',
    value: 55641
}, {
    id: '3.229',
    parent: '2.22',
    name: 'Cook Islands',
    value: 17380
}, {
    id: '3.230',
    parent: '2.22',
    name: 'Wallis and Futuna',
    value: 11773
}, {
    id: '3.231',
    parent: '2.22',
    name: 'Tuvalu',
    value: 11192
}, {
    id: '3.232',
    parent: '2.22',
    name: 'Niue',
    value: 1618
}, {
    id: '3.233',
    parent: '2.22',
    name: 'Tokelau',
    value: 1300
}];
series: [{
      data: [{
          x: 466833,
          y: 12006,
          z: 926702,
          name: 'AFG',
          country: 'Afghanistan'
        },
        {
          x: 24599777,
          y: 18343,
          z: 1147802194,
          name: 'AFR',
          country: 'Africa'
        },
        {
          x: 661161,
          y: 229737,
          z: 18178915,
          name: 'ALB',
          country: 'Albania'
        },
        {
          x: 69070,
          y: 1568,
          z: 75030,
          name: 'DzA',
          country: 'Algeria'
        },
        {
          x: 30078,
          y: 389285,
          z: 217053,
          name: 'AND',
          country: 'Andorra'
        },
        {
          x: 656680,
          y: 19989,
          z: 2859831,
          name: 'AGO',
          country: 'Angola'
        },
        {
          x: 12901,
          y: 859944,
          z: 49048,
          name: 'AIA',
          country: 'Anguilla'
        },
        {
          x: 35542,
          y: 362933,
          z: 341320,
          name: 'ATG',
          country: 'Antigua and Barbuda'
        },
        {
          x: 9982227,
          y: 220870,
          z: 445755742,
          name: 'ARG',
          country: 'Argentina'
        },
        {
          x: 15830,
          y: 5339,
          z: 30541,
          name: 'ARM',
          country: 'Armenia'
        },
        {
          x: 68378,
          y: 640449,
          z: 2442469,
          name: 'ABW',
          country: 'Aruba'
        },
        {
          x: 740199442,
          y: 159526,
          z: 31736456196,
          name: 'OWID_ASI',
          country: 'Asia'
        },
        {
          x: 3016762,
          y: 118309,
          z: 98234253,
          name: 'AUS',
          country: 'Australia'
        },
        {
          x: 4026201,
          y: 447034,
          z: 191950886,
          name: 'AUT',
          country: 'Austria'
        },
        {
          x: 1809099,
          y: 178433,
          z: 69811930,
          name: 'AzE',
          country: 'Azerbaijan'
        },
        {
          x: 33875,
          y: 86141,
          z: 117209,
          name: 'BHS',
          country: 'Bahamas'
        },
        {
          x: 1456279,
          y: 855824,
          z: 74655052,
          name: 'BHR',
          country: 'Bahrain'
        },
        {
          x: 9530192,
          y: 57872,
          z: 330468962,
          name: 'BGD',
          country: 'Bangladesh'
        },
        {
          x: 121406,
          y: 422469,
          z: 5368279,
          name: 'BRB',
          country: 'Barbados'
        },
        {
          x: 425196,
          y: 45005,
          z: 1015106,
          name: 'BLR',
          country: 'Belarus'
        },
        {
          x: 5224053,
          y: 450753,
          z: 236452265,
          name: 'BEL',
          country: 'Belgium'
        },
        {
          x: 54728,
          y: 137640,
          z: 1039883,
          name: 'BLz',
          country: 'Belize'
        },
        {
          x: 65849,
          y: 1057427,
          z: 638953,
          name: 'BMU',
          country: 'Bermuda'
        },
        {
          x: 742954,
          y: 962858,
          z: 23201151,
          name: 'BTN',
          country: 'Bhutan'
        },
        {
          x: 1090342,
          y: 93404,
          z: 34993237,
          name: 'BOL',
          country: 'Bolivia'
        },
        {
          x: 133378,
          y: 40656,
          z: 258429,
          name: 'BIH',
          country: 'Bosnia and Herzegovina'
        },
        {
          x: 66067,
          y: 28094,
          z: 460486,
          name: 'BWA',
          country: 'Botswana'
        },
        {
          x: 53000829,
          y: 249350,
          z: 2152959396,
          name: 'BRA',
          country: 'Brazil'
        },
        {
          x: 16061,
          y: 36707,
          z: 29283,
          name: 'BRN',
          country: 'Brunei'
        },
        {
          x: 1131263,
          y: 197046,
          z: 51834878,
          name: 'BGR',
          country: 'Bulgaria'
        },
        {
          x: 3294476,
          y: 18343,
          z: 109783429,
          name: 'KHM',
          country: 'Cambodia'
        },
        {
          x: 47463,
          y: 229737,
          z: 103279,
          name: 'CMR',
          country: 'Cameroon'
        },
        {
          x: 18417555,
          y: 1568,
          z: 755296893,
          name: 'CAN',
          country: 'Canada'
        },
        {
          x: 22997,
          y: 389285,
          z: 46033,
          name: 'CPV',
          country: 'Cape Verde'
        },
        {
          x: 75142,
          y: 19989,
          z: 1540484,
          name: 'CyM',
          country: 'Cayman Islands'
        },
        {
          x: 16588565,
          y: 859944,
          z: 950155311,
          name: 'CHL',
          country: 'Chile'
        },
        {
          x: 406870930,
          y: 362933,
          z: 13476861700,
          name: 'CHN',
          country: 'China'
        },
        {
          x: 7343980,
          y: 220870,
          z: 197200411,
          name: 'COL',
          country: 'Colombia'
        },
        {
          x: 35233,
          y: 5339,
          z: 102143,
          name: 'COM',
          country: 'Comoros'
        },
        {
          x: 26469,
          y: 640449,
          z: 90716,
          name: 'COG',
          country: 'Congo'
        },
        {
          x: 1184866,
          y: 159526,
          z: 8432899,
          name: 'CRI',
          country: 'Costa Rica'
        },
        {
          x: 322733,
          y: 118309,
          z: 7263472,
          name: 'CIV',
          country: 'Cote dIvoire'
        },
        {
          x: 1352782,
          y: 447034,
          z: 44629929,
          name: 'HRV',
          country: 'Croatia'
        },
        {
          x: 669998,
          y: 178433,
          z: 810000,
          name: 'CUB',
          country: 'Cuba'
        },
        {
          x: 106677,
          y: 86141,
          z: 3576727,
          name: 'CUW',
          country: 'Curacao'
        },
        {
          x: 427923,
          y: 855824,
          z: 5729678,
          name: 'CyP',
          country: 'Cyprus'
        },
        {
          x: 4187521,
          y: 57872,
          z: 197949729,
          name: 'CzE',
          country: 'Czechia'
        },
        {
          x: 10533,
          y: 422469,
          z: 21301,
          name: 'COD',
          country: 'Democratic Republic of Congo'
        },
        {
          x: 2683103,
          y: 45005,
          z: 132943276,
          name: 'DNK',
          country: 'Denmark'
        },
        {
          x: 2794,
          y: 450753,
          z: 23288,
          name: 'DJI',
          country: 'Djibouti'
        },
        {
          x: 34005,
          y: 137640,
          z: 355085,
          name: 'DMA',
          country: 'Dominica'
        },
        {
          x: 3097561,
          y: 1057427,
          z: 61593272,
          name: 'DOM',
          country: 'Dominican Republic'
        },
        {
          x: 1482750,
          y: 962858,
          z: 35274101,
          name: 'ECU',
          country: 'Ecuador'
        },
        {
          x: 1272704,
          y: 93404,
          z: 3498037,
          name: 'EGy',
          country: 'Egypt'
        },
        {
          x: 1382145,
          y: 1795,
          z: 23775903,
          name: 'SLV',
          country: 'El Salvador'
        },
        {
          x: 46714201,
          y: 487986,
          z: 3095703012,
          name: 'OWID_ENG',
          country: 'England'
        },
        {
          x: 156176,
          y: 41345,
          z: 418212,
          name: 'GNQ',
          country: 'Equatorial Guinea'
        },
        {
          x: 584242,
          y: 1143353,
          z: 29733062,
          name: 'EST',
          country: 'Estonia'
        },
        {
          x: 45299,
          y: 867778,
          z: 249602,
          name: 'SWz',
          country: 'Eswatini'
        },
        {
          x: 1127370,
          y: 282673,
          z: 28969771,
          name: 'ETH',
          country: 'Ethiopia'
        },
        {
          x: 293045106,
          y: 144339,
          z: 14770213803,
          name: 'OWID_EUR',
          country: 'Europe'
        },
        {
          x: 199103604,
          y: 40512,
          z: 9203988408,
          name: 'OWID_EUN ',
          country:'European Union '
        }, {
            x: 22286,
            y: 4786,
            z: 482919,
            name: 'FRO',
            country: 'Faeroe Islands'
          },
          {
            x: 4933,
            y: 232598,
            z: 14163,
            name: 'FLK',
            country: 'Falkland Islands'
          },
          {
            x: 88427,
            y: 12231,
            z: 238983,
            name: 'FJI',
            country: 'Fiji'
          },
          {
            x: 2397226,
            y: 329528,
            z: 90580970,
            name: 'FIN',
            country: 'Finland'
          },
          {
            x: 28849157,
            y: 59150,
            z: 1323014607,
            name: 'FRA',
            country: 'France'
          },
          {
            x: 82218,
            y: 650071,
            z: 562466,
            name: 'PyF',
            country: 'French Polynesia'
          },
          {
            x: 11458,
            y: 488564,
            z: 58588,
            name: 'GAB',
            country: 'Gabon'
          },
          {
            x: 26071,
            y: 391031,
            z: 131556,
            name: 'GMB',
            country: 'Gambia'
          },
          {
            x: 98415,
            y: 116,
            z: 1628041,
            name: 'GEO',
            country: 'Georgia'
          },
          {
            x: 39898031,
            y: 463226,
            z: 1755540035,
            name: 'DEU',
            country: 'Germany'
          },
          {
            x: 937648,
            y: 2827,
            z: 8942441,
            name: 'GHA',
            country: 'Ghana'
          },
          {
            x: 77346,
            y: 472356,
            z: 3802445,
            name: 'GIB',
            country: 'Gibraltar'
          },
          {
            x: 4350155,
            y: 285536,
            z: 176409183,
            name: 'GRC',
            country: 'Greece'
          }]
      }]



Highcharts.chart('test', {
    chart: {
        height: '100%'
    },

    // Let the center circle be transparent
    colors: ['transparent'].concat(Highcharts.getOptions().colors),

    title: {
        text: 'World population 2017'
    },

    subtitle: {
        text: 'Source <a href="https://en.wikipedia.org/wiki/List_of_countries_by_population_(United_Nations)">Wikipedia</a>'
    },

    series: [{
        type: 'sunburst',
        data: data,
        allowDrillToNode: true,
        cursor: 'pointer',
        dataLabels: {
            format: '{point.name}',
            filter: {
                property: 'innerArcLength',
                operator: '>',
                value: 16
            },
            rotationMode: 'circular'
        },
        levels: [{
            level: 1,
            levelIsConstant: false,
            dataLabels: {
                filter: {
                    property: 'outerArcLength',
                    operator: '>',
                    value: 64
                }
            }
        }, {
            level: 2,
            colorByPoint: true
        },
        {
            level: 3,
            colorVariation: {
                key: 'brightness',
                to: -0.5
            }
        }, {
            level: 4,
            colorVariation: {
                key: 'brightness',
                to: 0.5
            }
        }]

    }],

    tooltip: {
        headerFormat: '',
        pointFormat: 'The population of <b>{point.name}</b> is <b>{point.value}</b>'
    }
  });