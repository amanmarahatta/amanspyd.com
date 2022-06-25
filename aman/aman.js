
function calculateInterest(){
    let p = document.getElementById('p').value;
    let t = document.getElementById('t').value;
    let r = document.getElementById('r').value;
    let si = p * t * r / 100;
    document.getElementById('info').innerHTML = si.toFixed(2);
}

function calculateArea(){
    let l = document.getElementById('l').value;
    let b = document.getElementById('b').value;
    let ar = l * b;
    document.getElementById('ans').innerHTML = ar.toFixed(2);
}

function circleArea(){
    const pi = 3.14;
    let radius = document.getElementById('radius').value;
    let cr = pi * radius * radius; 
    document.getElementById('circle').innerHTML = cr.toFixed(2);
}

function squareArea(){
    let sql = document.getElementById('sql').value;
    let sqar = sql * sql;
    document.getElementById('square').innerHTML = sqar.toFixed(2);
}

function volumeCube(){
let cul = document.getElementById('cul').value;
let cuv = cul * cul * cul;
document.getElementById('vcube').innerHTML = cuv.toFixed(2);
}

function volumeCuboid(){
    let cbdl = document.getElementById('cbdl').value;
    let cbdb = document.getElementById('cbdb').value;
    let cbdh = document.getElementById('cbdh').value;
    let cbdv = cbdl*cbdb*cbdh;
    document.getElementById('vcuboid').innerHTML = cbdv.toFixed(2);
}

function volumeSphere(){
    const pi = 3.14;
    let sphr = document.getElementById('sphr').value;
    let sphv = 4 * pi * sphr * sphr * sphr / 3;
    document.getElementById('vsphere').innerHTML = sphv.toFixed(2);
}

function volumeCylinder(){
    const pi = 3.14;
    let cldr = document.getElementById('cldr').value;
    let cldh = document.getElementById('cldh').value;
    let cldv = pi * cldr * cldr * cldh;
    document.getElementById('vcylinder').innerHTML = cldv.toFixed(2);
}