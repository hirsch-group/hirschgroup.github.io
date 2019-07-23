$(function() {
    var a = cytoscape({
        container: document.getElementById("cy"),
        zoomingEnabled: !1,
        userPanningEnabled: !1,
        boxSelectionEnabled: !1,
        autounselectify: !0,
        autoungrabify: !1,
        style: cytoscape.stylesheet().selector("node").css({
            content: "data(id)",
            overflow: "hidden"
        }).selector("edge").css({
            // "target-arrow-shape": "triangle",
            width: 4,
            "line-color": "#ddd",
            "target-arrow-color": "#ddd",
            "curve-style": "bezier",
            "edge-text-rotation" : "autorotate"
        }).selector("#Evapco").css({
            "target-arrow-shape": "triangle",
            width: 150,
            height: 140,
            "shape": "hexagon",
            "padding" : '10px',
            "background-color" : 'white',
            'border-width': 2,
            'border-color': '#1d8ea3',
            "content": "",
            "background-image": "url(../common/img/company1-small.f6bd5b8d.png)",
            'background-width': '150',
            'background-height': '140'
        }).selector("#Armstrong").css({
            "target-arrow-shape": "triangle",
            width: 150,
            height: 140,
            "shape": "hexagon",
            "padding" : '10px',
            "background-color" : 'white',
            'border-width': 2,
            'border-color': '#1d8ea3',
            "content": "",
            "background-image": "url(../common/img/logos/armstrong.771c8ca5.jpg)",
            'background-width': '150',
            'background-height': '140'
        }).selector("#Delta-Controls").css({
            "target-arrow-shape": "triangle",
            width: 150,
            height: 140,
            "shape": "hexagon",
            "padding" : '10px',
            "background-color" : 'white',
            'border-width': 2,
            'border-color': '#1d8ea3',
            "content": "",
            "background-image": "url(../common/img/logos/delta.d6d60a6b.png)",
            'background-width': '150',
            'background-height': '140'
        }).selector("#Carel").css({
            "target-arrow-shape": "triangle",
            width: 150,
            height: 140,
            "shape": "hexagon",
            "padding" : '10px',
            "background-color" : 'red',
            'border-width': 2,
            'border-color': '#1d8ea3',
            "content": "",
            "background-image": "url(../common/img/company4-small.5c59517d.png)",
            'background-width': '150',
            'background-height': '140'
        }).selector("#Hirsch-Group").css({
            "target-arrow-shape": "triangle",
            width: 150,
            height: 140,
            "shape": "hexagon",
            "padding" : '10px',
            "background-color" : 'white',
            "content": "",
            "background-image": "url(../common/img/company5-small.b8ac60f8.png)",
            'border-width': 2,
            'border-color': '#1d8ea3',
            "transition-duration": "0.5s",
            'background-width': '150',
            'background-height': '140'
        }).selector("#Lennox-Polska").css({
            "target-arrow-shape": "triangle",
            width: 150,
            height: 140,
            "shape": "hexagon",
            "padding" : '10px',
            "background-color" : 'white',
            'border-width': 2,
            'border-color': '#1d8ea3',
            "content": "",
            "background-image": "url(../common/img/company6-small.2158789d.png)",
            'background-width': '150',
            'background-height': '140'
        }).selector("#Ipid").css({
            "target-arrow-shape": "triangle",
            width: 150,
            height: 140,
            "shape": "hexagon",
            "padding" : '10px',
            "background-color" : 'white',
            'border-width': 2,
            'border-color': '#1d8ea3',
            "content": "",
            "background-image": "url(../common/img/logos/ipid.132dad0f.png)",
            'background-width': '150',
            'background-height': '140'
        }).selector("#ETA-Controls").css({
            "target-arrow-shape": "triangle",
            width: 150,
            height: 140,
            "shape": "hexagon",
            "padding" : '10px',
            "background-color" : 'white',
            'border-width': 2,
            'border-color': '#1d8ea3',
            "content": "",
            "background-image": "url(../common/img/company8-small.a1f172d9.png)",
            'background-width': '150',
            'background-height': '140'
        }).selector(".highlighted").css({
            "background-color": "#61bffc",
            "line-color": "#61bffc",
            "target-arrow-color": "#61bffc",
            "transition-property": "background-color, line-color, target-arrow-color",
            'background-width': '150',
            'background-height': '140'
        }),
        elements: {
            nodes: [{
                data: {
                    id: "Evapco"
                }
            }, {
                data: {
                    id: "Armstrong"
                }
            }, {
                data: {
                    id: "Delta-Controls"
                }
            }, {
                data: {
                    id: "Carel"
                }
            }, {
                data: {
                    id: "Hirsch-Group"
                }
            }, {
                data: {
                    id: "Lennox-Polska"
                }
            }, {
                data: {
                    id: "Ipid"
                }
            }, {
                data: {
                    id: "ETA-Controls"
                }
            }]
        },
        layout: {
            name: "breadthfirst",
            directed: !0,
            roots: "#Evapco",
            padding: 10
        }
    });

function getBigger(node){
    for (var i = 0; i < 100; i++) {
    (function (i) {
        setTimeout(function () {
        node.css({
            'width': 150+i,
            'height': 140+i,
            'z-index': 100+i,
            'background-size': 10,
            'opacity': 1,
            'background-width': 150 +i,
            'background-height': 140 +i
        }, event);
    }, 2*i);
  })(i);};
}

function getSmaller(node){
    for (var i = 0; i < 100; i++) {
    (function (i) {
        setTimeout(function () {
        node.css({
            'width': 250 - i,
            'height': 240 - i,
            'z-index': 100-i,
            'background-width': 250 -i,
            'background-height': 240 -i
        }, event);
    }, 2*i);
  })(i);};
}


a.on('click', '#Evapco', function() {window.location.href="http://www.evapco.com";});
a.on('click', '#Armstrong', function() {window.location.href="http://armstrong-pompy.pl/";});
a.on('click', '#Delta-Controls', function() {window.location.href="http://www.deltacontrols.com/";});
a.on('click', '#Carel', function() {window.location.href="http://carel.com/";});
a.on('click', '#Lennox-Polska', function() {window.location.href="http://www.lennoxpolska.pl/";});
a.on('click', '#Ipid', function() {window.location.href="http://www.ipid.pl/";});
a.on('click', '#ETA-Controls', function() {window.location.href="http://www.etacontrols.com/";});


a.on('click', '#Evapco', function() {console.log('Evapco');console.log(a.$('#Evapco').position())});
a.on('mouseover', '#Evapco', function(event) {getBigger(event.cyTarget);});
a.on('mouseout', '#Evapco', function(event) {getSmaller(event.cyTarget);});

a.on('click', '#Armstrong', function() {console.log('Armstrong');console.log(a.$('#Armstrong').position())});
a.on('mouseover', '#Armstrong', function(event) {getBigger(event.cyTarget);});
a.on('mouseout', '#Armstrong', function(event) {getSmaller(event.cyTarget);});

a.on('click', '#Delta-Controls', function() {console.log('Delta-Controls');console.log(a.$('#Delta-Controls').position())});
a.on('mouseover', '#Delta-Controls', function(event) {getBigger(event.cyTarget);});
a.on('mouseout', '#Delta-Controls', function(event) {getSmaller(event.cyTarget);});

a.on('click', '#Carel', function() {console.log('Carel');console.log(a.$('#Carel').position())});
a.on('mouseover', '#Carel', function(event) {getBigger(event.cyTarget);});
a.on('mouseout', '#Carel', function(event) {getSmaller(event.cyTarget);});

a.on('click', '#Lennox-Polska', function() {console.log('Lennox-Polska');console.log(a.$('#Lennox-Polska').position())});
a.on('mouseover', '#Lennox-Polska', function(event) {getBigger(event.cyTarget);});
a.on('mouseout', '#Lennox-Polska', function(event) {getSmaller(event.cyTarget);});

a.on('click', '#Ipid', function() {console.log('Ipid');console.log(a.$('#Ipid').position())});
a.on('mouseover', '#Ipid', function(event) {getBigger(event.cyTarget);});
a.on('mouseout', '#Ipid', function(event) {getSmaller(event.cyTarget);});

a.on('click', '#ETA-Controls', function() {console.log('ETA-Controls');console.log(a.$('#ETA-Controls').position())});
a.on('mouseover', '#ETA-Controls', function(event) {getBigger(event.cyTarget);});
a.on('mouseout', '#ETA-Controls', function(event) {getSmaller(event.cyTarget);});

a.on('click', '#Hirsch-Group', function() {console.log('Hirsch');console.log(a.$('#Hirsch-Group').position())});
a.on('mouseover', '#Hirsch-Group', function(event) {getBigger(event.cyTarget);});
a.on('mouseout', '#Hirsch-Group', function(event) {getSmaller(event.cyTarget);});


$(window).width() > 290 && (a.$("#Evapco").position({
        x: 70,
        y: 70
    }), a.$("#Armstrong").position({
        x: 70,
        y: 190
    }), a.$("#Delta-Controls").position({
        x: 168,
        y: 590
    }), a.$("#Carel").position({
        x: 70,
        y: 650
    }), a.$("#Hirsch-Group").position({
        x: 90,
        y: 400
    }), a.$("#Lennox-Polska").position({
        x: 168,
        y: 130
    }), a.$("#Ipid").position({
        x: 225,
        y: 450
    }), a.$("#ETA-Controls").position({
        x: 200,
        y: 290
    }));
$(window).width() > 425 && (a.$("#Evapco").position({
        x: 250,
        y: 280
    }), a.$("#Armstrong").position({
        x: 250,
        y: 400
    }), a.$("#Delta-Controls").position({
        x: 168,
        y: 70
    }), a.$("#Carel").position({
        x: 70,
        y: 130
    }), a.$("#Hirsch-Group").position({
        x: 90,
        y: 400
    }), a.$("#Lennox-Polska").position({
        x: 348,
        y: 340
    }), a.$("#Ipid").position({
        x: 280,
        y: 550
    }), a.$("#ETA-Controls").position({
        x: 70,
        y: 590
    }));
$(window).width() > 545 && (a.$("#Evapco").position({
        x: 370,
        y: 180
    }), a.$("#Armstrong").position({
        x: 370,
        y: 300
    }), a.$("#Delta-Controls").position({
        x: 248,
        y: 70
    }), a.$("#Carel").position({
        x: 150,
        y: 130
    }), a.$("#Hirsch-Group").position({
        x: 90,
        y: 400
    }), a.$("#Lennox-Polska").position({
        x: 468,
        y: 240
    }), a.$("#Ipid").position({
        x: 280,
        y: 500
    }), a.$("#ETA-Controls").position({
        x: 170,
        y: 590
    }));
$(window).width() > 820 && (a.$("#Evapco").position({
        x: 70,
        y: 180
    }), a.$("#Armstrong").position({
        x: 70,
        y: 300
    }), a.$("#Delta-Controls").position({
        x: 748,
        y: 170
    }), a.$("#Carel").position({
        x: 650,
        y: 230
    }), a.$("#Hirsch-Group").position({
        x: 450,
        y: 100
    }), a.$("#Lennox-Polska").position({
        x: 168,
        y: 240
    }), a.$("#Ipid").position({
        x: 450,
        y: 400
    }), a.$("#ETA-Controls").position({
        x: 550,
        y: 550
    }));
$(window).width() > 1225 && (a.$("#Evapco").position({
        x: 70,
        y: 180
    }), a.$("#Armstrong").position({
        x: 70,
        y: 300
    }), a.$("#Delta-Controls").position({
        x: 948,
        y: 170
    }), a.$("#Carel").position({
        x: 850,
        y: 230
    }), a.$("#Hirsch-Group").position({
        x: 550,
        y: 150
    }), a.$("#Lennox-Polska").position({
        x: 168,
        y: 240
    }), a.$("#Ipid").position({
        x: 450,
        y: 400
    }), a.$("#ETA-Controls").position({
        x: 550,
        y: 550
    }));
$(window).width() > 1325 && (a.$("#Evapco").position({
        x: 628,
        y: 205
    }), a.$("#Armstrong").position({
        x: 628,
        y: 363
    }), a.$("#Delta-Controls").position({
        x: 883,
        y: 204
    }), a.$("#Carel").position({
        x: 1011,
        y: 123
    }), a.$("#Hirsch-Group").position({
        x: 756,
        y: 284
    }), a.$("#Lennox-Polska").position({
        x: 500,
        y: 284
    }), a.$("#Ipid").position({
        x: 883,
        y: 362
    }), a.$("#ETA-Controls").position({
        x: 1011,
        y: 283
    }));
    var i = a.elements().bfs("#x", function() {}, !0),
        r = 0,
        t = function() {
            r < i.path.length && (i.path[r].addClass("highlighted"), r++, setTimeout(t, 1e3))
        };
    t()
});

