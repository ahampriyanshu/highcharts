QUnit.test('Test algorithm on data updates.', function (assert) {
    var chart = Highcharts.stockChart('container', {
        series: [
            {
                id: 'main',
                type: 'candlestick',
                dataGrouping: {
                    enabled: false
                },
                data: [
                    [1285891200000, 40.88, 40.94, 40.19, 40.36, 112101444],
                    [1286150400000, 40.23, 40.41, 39.68, 39.81, 108824968],
                    [1286236800000, 40.29, 41.35, 40.26, 41.28, 125491450],
                    [1286323200000, 41.37, 41.71, 40.75, 41.31, 167716514],
                    [1286409600000, 41.48, 41.5, 40.99, 41.32, 102099277],
                    [1286496000000, 41.67, 42.07, 41.43, 42.01, 164600814],
                    [1286755200000, 42.11, 42.46, 42.09, 42.19, 106937733],
                    [1286841600000, 42.2, 42.79, 41.78, 42.65, 139634663],
                    [1286928000000, 42.89, 43.14, 42.83, 42.88, 157522589],
                    [1287014400000, 43.1, 43.21, 42.91, 43.19, 108823925],
                    [1287100800000, 43.92, 45.0, 43.56, 44.96, 230548444],
                    [1287360000000, 45.5, 45.57, 44.9, 45.43, 276114391],
                    [1287446400000, 43.34, 44.82, 42.86, 44.21, 308189833],
                    [1287532800000, 44.14, 44.89, 43.84, 44.36, 180406030],
                    [1287619200000, 44.62, 44.96, 43.83, 44.22, 137864321],
                    [1287705600000, 44.15, 44.29, 43.76, 43.92, 93193856],
                    [1287964800000, 44.16, 44.51, 44.06, 44.12, 98107996],
                    [1288051200000, 43.84, 44.25, 43.66, 44.01, 98232337],
                    [1288137600000, 43.95, 44.27, 43.66, 43.98, 99750070],
                    [1288224000000, 43.99, 44.0, 42.99, 43.61, 137761540],
                    [1288310400000, 43.46, 43.7, 42.98, 43.0, 107627128],
                    /* Nov 2010 */
                    [1288569600000, 43.17, 43.66, 43.17, 43.45, 105972251],
                    [1288656000000, 43.86, 44.31, 43.86, 44.19, 108482437],
                    [1288742400000, 44.48, 44.7, 44.08, 44.69, 127086848],
                    [1288828800000, 45.06, 45.74, 45.0, 45.47, 160621979],
                    [1288915200000, 45.43, 45.65, 45.25, 45.3, 90313265],
                    [1289174400000, 45.31, 45.68, 45.25, 45.52, 70433307],
                    [1289260800000, 45.86, 45.9, 44.93, 45.15, 95928805],
                    [1289347200000, 45.23, 45.54, 44.79, 45.43, 96056373],
                    [1289433600000, 45.0, 45.49, 44.89, 45.24, 90320433],
                    [1289520000000, 45.14, 45.21, 43.38, 44.0, 198961462],
                    [1289779200000, 44.07, 44.36, 43.75, 43.86, 100900954],
                    [1289865600000, 43.67, 43.94, 42.76, 43.08, 164737342],
                    [1289952000000, 43.03, 43.43, 42.54, 42.93, 119862407],
                    [1290038400000, 43.6, 44.24, 43.53, 44.06, 123622443],
                    [1290124800000, 44.0, 44.06, 43.61, 43.82, 96210793],
                    [1290384000000, 43.81, 44.77, 43.7, 44.77, 98268492],
                    [1290470400000, 44.35, 44.54, 43.79, 44.1, 129861284],
                    [1290556800000, 44.57, 45.06, 44.54, 44.97, 103568136],
                    [1290729600000, 44.82, 45.39, 44.71, 45.0, 59436237],
                    [1290988800000, 45.07, 45.35, 44.48, 45.27, 111439895],
                    [1291075200000, 44.79, 44.91, 44.41, 44.45, 125463303],
                    /* Dec 2010 */
                    [1291161600000, 45.04, 45.39, 45.0, 45.2, 115437672],
                    [1291248000000, 45.36, 45.57, 44.98, 45.45, 115912916],
                    [1291334400000, 45.29, 45.52, 45.19, 45.35, 85592283],
                    [1291593600000, 45.52, 46.05, 45.49, 45.74, 112120127],
                    [1291680000000, 46.26, 46.28, 45.45, 45.46, 97863465],
                    [1291766400000, 45.66, 45.86, 45.3, 45.86, 80483501],
                    [1291852800000, 46.02, 46.07, 45.57, 45.68, 73536526],
                    [1291939200000, 45.66, 45.86, 45.51, 45.79, 65644243],
                    [1292198400000, 46.34, 46.44, 45.86, 45.95, 109953333],
                    [1292284800000, 45.96, 46.08, 45.57, 45.76, 87891762],
                    [1292371200000, 45.71, 46.14, 45.6, 45.77, 104327314],
                    [1292457600000, 45.87, 46.09, 45.73, 45.89, 80507098],
                    [1292544000000, 45.95, 45.97, 45.75, 45.8, 96787068],
                    [1292803200000, 45.94, 46.18, 45.46, 46.03, 96402194],
                    [1292889600000, 46.14, 46.34, 46.01, 46.32, 64087884],
                    [1292976000000, 46.34, 46.53, 46.22, 46.45, 66536029],
                    [1293062400000, 46.43, 46.45, 46.17, 46.23, 55875176],
                    [1293408000000, 46.12, 46.49, 45.93, 46.38, 62453699],
                    [1293494400000, 46.56, 46.67, 46.44, 46.5, 43980797],
                    [1293580800000, 46.6, 46.64, 46.44, 46.47, 40817672],
                    [1293667200000, 46.5, 46.5, 46.15, 46.24, 39414991],
                    [1293753600000, 46.14, 46.21, 45.9, 46.08, 48413827],
                    /* Jan 2011 */
                    [1294012800000, 46.52, 47.18, 46.41, 47.08, 111280407],
                    [1294099200000, 47.49, 47.5, 46.88, 47.33, 77337001],
                    [1294185600000, 47.08, 47.76, 47.07, 47.71, 63879193],
                    [1294272000000, 47.82, 47.89, 47.56, 47.68, 75106626],
                    [1294358400000, 47.71, 48.05, 47.41, 48.02, 77982212],
                    [1294617600000, 48.4, 49.03, 48.17, 48.92, 112139482],
                    [1294704000000, 49.27, 49.28, 48.5, 48.81, 111019993],
                    [1294790400000, 49.04, 49.2, 48.86, 49.2, 75644310],
                    [1294876800000, 49.31, 49.52, 49.12, 49.38, 74536182],
                    [1294963200000, 49.41, 49.78, 49.21, 49.78, 77209748],
                    [1295308800000, 47.07, 49.25, 46.57, 48.66, 470246700],
                    [1295395200000, 49.76, 49.8, 48.13, 48.41, 283902199],
                    [1295481600000, 48.06, 48.33, 47.16, 47.53, 191197293],
                    [1295568000000, 47.68, 47.84, 46.66, 46.67, 188599712],
                    [1295827200000, 46.7, 48.21, 46.67, 48.21, 143670548],
                    [1295913600000, 48.05, 48.78, 47.8, 48.77, 136716650],
                    [1296000000000, 48.99, 49.37, 48.79, 49.12, 126716779],
                    [1296086400000, 49.11, 49.24, 48.98, 49.03, 71255961],
                    [1296172800000, 49.17, 49.2, 47.65, 48.01, 148014146],
                    [1296432000000, 47.97, 48.58, 47.76, 48.47, 94311602],
                    /* Feb 2011 */
                    [1296518400000, 48.76, 49.38, 48.71, 49.29, 106657943],
                    [1296604800000, 49.21, 49.32, 49.08, 49.19, 64738807],
                    [1296691200000, 49.11, 49.18, 48.36, 49.06, 98449148],
                    [1296777600000, 49.09, 49.53, 49.07, 49.5, 80459575],
                    [1297036800000, 49.7, 50.46, 49.66, 50.27, 121254910],
                    [1297123200000, 50.53, 50.79, 50.31, 50.74, 95259906],
                    [1297209600000, 50.74, 51.29, 50.7, 51.17, 120686090],
                    [1297296000000, 51.06, 51.43, 49.71, 50.65, 232137360],
                    [1297382400000, 50.68, 51.11, 50.51, 50.98, 91892948],
                    [1297641600000, 50.97, 51.35, 50.96, 51.31, 77603491],
                    [1297728000000, 51.31, 51.42, 51.08, 51.41, 71043441],
                    [1297814400000, 51.54, 52.13, 51.5, 51.88, 120288833],
                    [1297900800000, 51.04, 51.47, 50.93, 51.19, 132643504],
                    [1297987200000, 51.24, 51.36, 49.93, 50.08, 204011724],
                    [1298332800000, 48.88, 49.34, 48.25, 48.37, 218135561],
                    [1298419200000, 48.4, 49.23, 48.37, 48.95, 167962942],
                    [1298505600000, 49.15, 49.31, 48.34, 48.98, 124974514],
                    [1298592000000, 49.32, 49.78, 49.26, 49.74, 95004483],
                    [1298851200000, 50.18, 50.72, 50.16, 50.46, 100768479],
                    /* Mar 2011 */
                    [1298937600000, 50.78, 50.82, 49.67, 49.9, 114032163],
                    [1299024000000, 49.99, 50.62, 49.77, 50.3, 150647189],
                    [1299110400000, 51.03, 51.4, 50.85, 51.37, 125196764],
                    [1299196800000, 51.44, 51.47, 51.11, 51.43, 113316483],
                    [1299456000000, 51.63, 51.67, 50.19, 50.77, 136530149],
                    [1299542400000, 50.7, 51.06, 50.32, 50.82, 89078955],
                    [1299628800000, 50.67, 50.68, 50.09, 50.35, 113349033],
                    [1299715200000, 49.87, 49.97, 49.27, 49.52, 126972055],
                    [1299801600000, 49.33, 50.33, 49.29, 50.28, 117770016],
                    [1300060800000, 50.45, 50.93, 50.19, 50.51, 109113690],
                    [1300147200000, 48.87, 49.69, 48.59, 49.35, 180262334],
                    [1300233600000, 48.86, 49.0, 46.61, 47.14, 289187626],
                    [1300320000000, 48.12, 48.52, 47.24, 47.81, 164854977],
                    [1300406400000, 48.16, 48.31, 47.14, 47.24, 188302604],
                    [1300665600000, 48.0, 48.53, 47.89, 48.47, 102347560],
                    [1300752000000, 48.94, 48.95, 48.45, 48.74, 81558162],
                    [1300838400000, 48.47, 48.6, 47.99, 48.46, 93248498],
                    [1300924800000, 48.84, 49.43, 48.41, 49.28, 101177720],
                    [1301011200000, 49.72, 50.29, 49.57, 50.22, 112292796],
                    [1301270400000, 50.45, 50.62, 50.06, 50.06, 77337407],
                    [1301356800000, 49.67, 50.14, 49.44, 50.14, 88224955],
                    [1301443200000, 50.09, 50.13, 49.63, 49.8, 82351269],
                    [1301529600000, 49.48, 49.97, 49.44, 49.79, 68592006],
                    /* Apr 2011 */
                    [1301616000000, 50.16, 50.23, 49.04, 49.22, 104665400],
                    [1301875200000, 49.19, 49.23, 48.34, 48.74, 115020542],
                    [1301961600000, 48.14, 48.89, 48.0, 48.41, 120740809],
                    [1302048000000, 48.75, 49.13, 48.16, 48.29, 100634681],
                    [1302134400000, 48.3, 48.63, 48.0, 48.3, 93361520],
                    [1302220800000, 48.56, 48.59, 47.71, 47.87, 94383317],
                    [1302480000000, 47.72, 47.95, 47.15, 47.26, 99787618],
                    [1302566400000, 47.21, 47.68, 47.17, 47.49, 106627080],
                    [1302652800000, 47.86, 48.02, 47.5, 48.02, 86608963],
                    [1302739200000, 47.83, 48.0, 47.44, 47.49, 75497401],
                    [1302825600000, 47.61, 47.66, 46.69, 46.78, 113458247],
                    [1303084800000, 46.59, 47.46, 45.74, 47.41, 152474427],
                    [1303171200000, 47.59, 48.28, 47.39, 48.27, 104844243],
                    [1303257600000, 49.07, 49.39, 48.79, 48.92, 175163842],
                    [1303344000000, 50.71, 50.73, 49.79, 50.1, 188449618],
                    [1303689600000, 50.05, 50.54, 50.04, 50.43, 66636290],
                    [1303776000000, 50.52, 50.71, 49.91, 50.06, 84400645],
                    [1303862400000, 50.32, 50.34, 49.59, 50.02, 89052887],
                    [1303948800000, 49.46, 49.96, 49.36, 49.54, 90297123],
                    [1304035200000, 49.54, 50.56, 49.52, 50.02, 251585929],
                    /* May 2011 */
                    [1304294400000, 49.96, 50.07, 49.36, 49.47, 110678246],
                    [1304380800000, 49.71, 49.98, 49.37, 49.74, 78390249],
                    [1304467200000, 49.75, 50.26, 49.55, 49.94, 97312229],
                    [1304553600000, 49.77, 50.14, 49.44, 49.54, 84065352],
                    [1304640000000, 49.96, 50.0, 49.46, 49.52, 70061285],
                    [1304899200000, 49.69, 49.89, 49.5, 49.66, 51188151],
                    [1304985600000, 49.84, 49.96, 49.52, 49.92, 70521969],
                    [1305072000000, 49.86, 50.0, 49.32, 49.6, 84018683],
                    [1305158400000, 49.45, 49.59, 48.9, 49.51, 80239593],
                    [1305244800000, 49.38, 49.46, 48.62, 48.64, 81547956],
                    [1305504000000, 48.46, 48.75, 47.51, 47.61, 112535374],
                    [1305590400000, 47.43, 48.02, 47.25, 48.02, 113196657],
                    [1305676800000, 48.07, 48.72, 48.0, 48.55, 83693267],
                    [1305763200000, 48.87, 48.92, 48.38, 48.65, 65291310],
                    [1305849600000, 48.51, 48.71, 47.86, 47.89, 84547708],
                    [1306108800000, 47.14, 48.0, 47.06, 47.77, 95627217],
                    [1306195200000, 47.93, 47.99, 47.33, 47.46, 80520650],
                    [1306281600000, 47.63, 48.37, 47.55, 48.11, 73555433],
                    [1306368000000, 48.0, 48.13, 47.78, 47.86, 55673751],
                    [1306454400000, 47.83, 48.23, 47.76, 48.2, 50912897],
                    [1306800000000, 48.73, 49.69, 48.71, 49.69, 104434134],
                    /* Jun 2011 */
                    [1306886400000, 49.84, 50.3, 49.24, 49.36, 138670602],
                    [1306972800000, 49.5, 49.71, 49.19, 49.44, 84721112],
                    [1307059200000, 49.03, 49.33, 48.86, 49.06, 78360765],
                    [1307318400000, 49.42, 49.58, 48.26, 48.29, 115484677],
                    [1307404800000, 48.31, 48.32, 47.41, 47.43, 132493060],
                    [1307491200000, 47.4, 47.83, 47.24, 47.46, 83471577],
                    [1307577600000, 47.61, 47.67, 47.25, 47.36, 68841199],
                    [1307664000000, 47.22, 47.38, 46.5, 46.56, 108529400],
                    [1307923200000, 46.74, 46.9, 46.44, 46.66, 82414108],
                    [1308009600000, 47.14, 47.61, 47.04, 47.49, 83641901],
                    [1308096000000, 47.11, 47.19, 46.41, 46.68, 99851885],
                    [1308182400000, 46.7, 46.95, 45.48, 46.45, 127647338],
                    [1308268800000, 47.0, 47.04, 45.62, 45.75, 153872649],
                    [1308528000000, 45.34, 45.39, 44.36, 45.05, 160161274],
                    [1308614400000, 45.24, 46.54, 45.03, 46.47, 123343514],
                    [1308700800000, 46.45, 46.99, 46.05, 46.09, 97645436],
                    [1308787200000, 45.56, 47.38, 45.45, 47.32, 139939254],
                    [1308873600000, 47.34, 47.59, 46.44, 46.62, 109981312],
                    [1309132800000, 46.8, 47.7, 46.75, 47.43, 84989933],
                    [1309219200000, 47.66, 48.1, 47.63, 47.89, 73574907],
                    [1309305600000, 48.01, 48.05, 47.41, 47.72, 88179070],
                    [1309392000000, 47.81, 48.02, 47.55, 47.95, 80807391],
                    /* Jul 2011 */
                    [1309478400000, 47.99, 49.07, 47.74, 49.04, 108828209],
                    [1309824000000, 49.0, 49.98, 48.93, 49.92, 88818618],
                    [1309910400000, 49.85, 50.59, 49.53, 50.25, 111156241],
                    [1309996800000, 50.67, 51.14, 50.57, 51.03, 99915319],
                    [1310083200000, 50.48, 51.43, 50.31, 51.39, 122481639],
                    [1310342400000, 50.91, 51.4, 50.4, 50.57, 110713974],
                    [1310428800000, 50.5, 51.1, 49.8, 50.54, 112901691],
                    [1310515200000, 51.19, 51.43, 50.91, 51.15, 97909518],
                    [1310601600000, 51.57, 51.66, 50.91, 51.11, 107633155],
                    [1310688000000, 51.6, 52.14, 51.31, 52.13, 121116338],
                    [1310947200000, 52.2, 53.52, 52.18, 53.4, 143157623],
                    [1311033600000, 54.0, 54.09, 53.33, 53.84, 204786344],
                    [1311120000000, 56.59, 56.61, 55.14, 55.27, 235331712],
                    [1311206400000, 55.28, 55.72, 54.84, 55.33, 131629036],
                    [1311292800000, 55.47, 56.44, 55.39, 56.19, 129181885],
                    [1311552000000, 55.76, 57.14, 55.66, 56.93, 147451094],
                    [1311638400000, 57.14, 57.79, 57.1, 57.63, 119145026],
                    [1311724800000, 57.23, 57.52, 56.02, 56.08, 164830470],
                    [1311811200000, 55.95, 56.71, 55.45, 55.97, 148506092],
                    [1311897600000, 55.38, 56.45, 54.86, 55.78, 158145890],
                    /* Aug 2011 */
                    [1312156800000, 56.83, 57.07, 56.05, 56.68, 153207957],
                    [1312243200000, 56.81, 56.13, 54.61, 55.46, 250968788],
                    [1312329600000, 55.46, 56.22, 54.61, 56.08, 183125796],
                    [1312416000000, 55.63, 55.9, 53.91, 53.91, 217851424],
                    [1312502400000, 54.35, 54.79, 51.8, 53.37, 301140350],
                    [1312761600000, 51.67, 52.54, 50.43, 50.46, 285951204],
                    [1312848000000, 51.61, 53.52, 50.71, 53.43, 270645704],
                    [1312934400000, 53.02, 53.52, 51.79, 51.96, 219662296],
                    [1313020800000, 52.93, 53.64, 52.1, 53.39, 185491110],
                    [1313107200000, 54.0, 54.23, 53.46, 53.86, 132243405],
                    [1313366400000, 54.23, 55.0, 54.01, 54.77, 115135468],
                    [1313452800000, 54.5, 54.77, 53.72, 54.35, 124722122],
                    [1313539200000, 54.62, 54.93, 54.0, 54.35, 110514943],
                    [1313625600000, 52.98, 53.24, 51.62, 52.29, 212858289],
                    [1313712000000, 51.74, 52.43, 50.86, 50.86, 193970546],
                    [1313971200000, 52.07, 52.13, 50.73, 50.92, 133826210],
                    [1314057600000, 51.47, 53.38, 51.0, 53.37, 164208576],
                    [1314144000000, 53.35, 54.14, 52.94, 53.74, 156566907],
                    [1314230400000, 52.15, 53.64, 52.14, 53.39, 217825076],
                    [1314316800000, 53.02, 54.83, 52.97, 54.8, 160368761],
                    [1314576000000, 55.45, 55.93, 55.43, 55.71, 101313149],
                    [1314662400000, 55.46, 55.98, 55.17, 55.71, 104480264],
                    [1314748800000, 55.8, 56.01, 54.55, 54.98, 130688894],
                    /* Sep 2011 */
                    [1314835200000, 55.12, 55.33, 54.39, 54.43, 85930705],
                    [1314921600000, 53.53, 54.0, 53.12, 53.44, 109791514],
                    [1315267200000, 52.48, 54.33, 52.35, 54.25, 127424129],
                    [1315353600000, 55.08, 55.09, 54.57, 54.85, 87643794],
                    [1315440000000, 54.63, 55.52, 54.62, 54.88, 104039460],
                    [1315526400000, 54.85, 55.14, 53.57, 53.93, 141269408],
                    [1315785600000, 53.29, 54.41, 53.13, 54.28, 116957988],
                    [1315872000000, 54.59, 55.17, 54.32, 54.95, 110184487],
                    [1315958400000, 55.29, 56.03, 55.11, 55.61, 133680848],
                    [1316044800000, 55.92, 56.24, 55.7, 56.14, 104454581],
                    [1316131200000, 56.51, 57.22, 56.43, 57.21, 174622161],
                    [1316390400000, 56.71, 59.03, 56.46, 58.8, 205964780],
                    [1316476800000, 59.32, 60.41, 58.74, 59.06, 193937289],
                    [1316563200000, 59.95, 60.23, 58.86, 58.88, 151493755],
                    [1316649600000, 57.29, 58.55, 56.67, 57.4, 242120137],
                    [1316736000000, 57.18, 58.11, 57.12, 57.76, 136620610],
                    [1316995200000, 57.12, 57.71, 55.9, 57.6, 203218862],
                    [1317081600000, 58.39, 58.46, 56.87, 57.04, 158124372],
                    [1317168000000, 57.17, 57.68, 56.64, 56.72, 107463181],
                    [1317254400000, 57.42, 57.46, 55.17, 55.8, 162841147],
                    [1317340800000, 55.3, 55.56, 54.45, 54.47, 137059223],
                    /* Oct 2011 */
                    [1317600000000, 54.34, 54.66, 53.31, 53.51, 167269011],
                    [1317686400000, 53.51, 54.54, 50.61, 53.21, 308418887],
                    [1317772800000, 52.55, 54.26, 51.47, 54.04, 196617358],
                    [1317859200000, 53.33, 54.97, 53.11, 53.91, 203145054],
                    [1317945600000, 53.68, 53.96, 52.64, 52.83, 133904162],
                    [1318204800000, 54.16, 55.54, 54.03, 55.54, 110628287],
                    [1318291200000, 56.08, 57.6, 55.93, 57.18, 151420465],
                    [1318377600000, 58.19, 58.46, 57.16, 57.46, 155570982],
                    [1318464000000, 57.85, 58.35, 57.55, 58.35, 106545775],
                    [1318550400000, 59.55, 60.29, 59.32, 60.29, 143341730],
                    [1318809600000, 60.25, 60.96, 59.42, 60.0, 171510696],
                    [1318896000000, 60.25, 60.69, 59.43, 60.32, 220400096],
                    [1318982400000, 57.34, 58.35, 56.83, 56.95, 275998093],
                    [1319068800000, 57.14, 57.19, 56.32, 56.47, 137382294],
                    [1319155200000, 56.87, 57.02, 55.82, 56.12, 155310512],
                    [1319414400000, 56.6, 58.07, 56.49, 57.97, 125589044],
                    [1319500800000, 57.86, 58.08, 56.77, 56.82, 107650200],
                    [1319587200000, 57.39, 57.51, 56.16, 57.23, 114074982],
                    [1319673600000, 58.22, 58.43, 57.41, 57.81, 123713317],
                    [1319760000000, 57.57, 58.05, 57.5, 57.85, 80709748],
                    [1320019200000, 57.49, 58.48, 57.29, 57.83, 96406303]
                ]
            },
            {
                type: 'ikh',
                linkedTo: 'main',
                dataGrouping: {
                    enabled: false
                }
            }
        ]
    });

    const colorBefore = chart.series[1].graphchikouLine.attr('stroke');
    chart.redraw();
    assert.strictEqual(
        chart.series[1].graphchikouLine.attr('stroke'),
        colorBefore,
        '#15042: Line color should not change on redraw'
    );

    assert.strictEqual(
        chart.series[0].points.length,
        chart.series[1].points.length -
            chart.series[1].options.params.periodSenkouSpanB + 2,
        'Initial number of Ichimoku points is correct'
    );

    chart.series[0].addPoint([
        1320105600000,
        56.77,
        57.07,
        56.17,
        56.64,
        132946877
    ]);

    assert.strictEqual(
        chart.series[0].points.length,
        chart.series[1].points.length -
            chart.series[1].options.params.periodSenkouSpanB + 2,
        'After addPoint number of Ichimoku points is correct'
    );

    chart.series[1].update({
        tenkanLine: {
            styles: {
                lineColor: 'red'
            }
        },
        kijunLine: {
            styles: {
                lineColor: 'orange'
            }
        },
        chikouLine: {
            styles: {
                lineColor: 'green'
            }
        },
        senkouSpanA: {
            styles: {
                lineColor: 'violet'
            }
        },
        senkouSpanB: {
            styles: {
                lineColor: 'black'
            }
        },
        senkouSpan: {
            styles: {
                fill: 'blue'
            }
        }
    });

    assert.strictEqual(
        chart.series[1].graphchikouLine.attr('stroke'),
        'green',
        'Line color changed'
    );

    assert.strictEqual(
        chart.series[1].graphkijunLine.attr('stroke'),
        'orange',
        'Line color changed'
    );

    assert.strictEqual(
        chart.series[1].graphsenkouSpan.attr('fill'),
        'blue',
        'Line color changed'
    );

    chart.series[1].update({
        senkouSpan: {
            color: 'black',
            styles: {
                fill: 'purple'
            }
        }
    });

    assert.strictEqual(
        chart.series[1].graphsenkouSpan.attr('fill'),
        'black',
        'Line color changed'
    );

    chart.series[1].update({
        senkouSpan: {
            color: null,
            negativeColor: 'cyan',
            styles: {
                fill: 'yellow'
            }
        }
    });

    assert.strictEqual(
        chart.series[1].graphsenkouSpanColor.attr('fill'),
        'yellow',
        'Line intersection color changed'
    );

    assert.strictEqual(
        chart.series[1].graphsenkouSpanNegativeColor.attr('fill'),
        'cyan',
        'Line intersection color changed'
    );

    chart.series[1].update({
        senkouSpan: {
            color: 'tomato',
            negativeColor: 'olive',
            styles: {
                fill: 'orange'
            }
        }
    });

    assert.strictEqual(
        chart.series[1].graphsenkouSpanColor.attr('fill'),
        'tomato',
        'Line intersection color changed'
    );

    assert.strictEqual(
        chart.series[1].graphsenkouSpanNegativeColor.attr('fill'),
        'olive',
        'Line intersection color changed'
    );

    assert.strictEqual(
        chart.series[1].graphsenkouSpanA.attr('stroke'),
        'violet',
        'Line color changed'
    );

    assert.strictEqual(
        chart.series[1].graphsenkouSpanB.attr('stroke'),
        'black',
        'Line color changed'
    );

    assert.strictEqual(
        chart.series[1].graphtenkanLine.attr('stroke'),
        'red',
        'Line color changed'
    );

    const dataPoints = chart.series[0].points;

    dataPoints[dataPoints.length - 1].remove();

    assert.strictEqual(
        dataPoints.length,
        chart.series[1].yData.length -
            chart.series[1].options.params.periodSenkouSpanB + 2,
        'After removePoint number of Ichimoku points is correct'
    );

    chart.series[0].update({
        id: 'main',
        data: []
    });

    chart.series[1].update({
        type: 'ikh',
        linkedTo: 'main'
    });

    // Issue #13992
    assert.ok(
        true,
        'No errors when created chart without series data (#13992)'
    );
});
