let v11=0, v21=0, v31=0, v41=0, v51=0, v61=0, v71=0, v81=0, v91=0, v101=0, v111=0, v121=0, v131=0, v141=0, v151=0, v12=0, v22=0, v32=0, v42=0, v52=0, v62=0, v72=0, v82=0, v92=0, v102=0, v112=0, v122=0, v132=0, v142=0, v152=0, v13=0, v23=0, v33=0, v43=0, v53=0, v63=0, v73=0, v83=0, v93=0, v103=0, v113=0, v123=0, v133=0, v143=0, v153=0;

function calcularValorTotal() {
    let v1total = v11 + v21 + v51 + v61 + v71 - v81 - v91 + v11 + v12 + v13;
    alert('Si la gente consumiera recursos como usted, necesitaríamos ' + v1total + ' planetas');
}

document.getElementById('sel1').addEventListener('change', function() {
    const pre1 = document.getElementById('sel1').value;
    switch (pre1) {
        case 'res11':
            v11 = 0.3;
            v21 = 0.2;
            v31 = 0.1;
            break;
        case 'res12':
            v11 = 0.7;
            v21 = 0.5;
            v31 = 0.2;
            break; 
        case 'res13':
            v11 = 1.4;
            v21 = 0.8;
            v31 = 0.5;
            break;
        case 'res14':
            v11 = 2;
            v21 = 1.1;
            v31 = 0.8;
            break; 
        case 'res15':
            v11 = 2.7;
            v21 = 1.5;
            v31 = 1;
            break;  
    }
     
});

document.getElementById('sel2').addEventListener('change', function() {
    const pre2 = document.getElementById('sel2').value;
    switch (pre2) {
        case 'res21':
            v21 = 0.4;
            v22 = 0.4;
            v32 = 0.1;
            break;
        case 'res22':
            v21 = 1;
            v22 = 0.8;
            v32 = 0.2;
            break; 
        case 'res23':
            v21 = 2.1;
            v22 = 1.2;
            v32 = 0.5;
            break;
        case 'res24':
            v21 = 3.2;
            v22 = 1.6;
            v32 = 0.8;
            break; 
        case 'res25':
            v21 = 4.2;
            v22 = 2;
            v32 = 1;
            break;  
    }
     
});

/*document.getElementById('sel3').addEventListener('change', function() {
    const pre3 = document.getElementById('sel3').value;
    switch (pre3) {
        case 'res31':
            v21 = 0.4;
            v22 = 0.4;
            v32 = 0.1;
            break;
        case 'res32':
            v21 = 1;
            v22 = 0.8;
            v32 = 0.2;
            break; 
        case 'res33':
            v21 = 2.1;
            v22 = 1.2;
            v32 = 0.5;
            break;
        case 'res34':
            v21 = 3.2;
            v22 = 1.6;
            v32 = 0.8;
            break; 
        case 'res35':
            v21 = 4.2;
            v22 = 2;
            v32 = 1;
            break;  
    }
     
});*/

/*
document.getElementById('sel4').addEventListener('change', function() {
    const pre2 = document.getElementById('sel4').value;
    switch (pre2) {
        case 'res31':
            v21 = 0.4;
            v22 = 0.4;
            v32 = 0.1;
            break;
        case 'res32':
            v21 = 1;
            v22 = 0.8;
            v32 = 0.2;
            break; 
        case 'res33':
            v21 = 2.1;
            v22 = 1.2;
            v32 = 0.5;
            break;
        case 'res34':
            v21 = 3.2;
            v22 = 1.6;
            v32 = 0.8;
            break; 
        case 'res35':
            v21 = 4.2;
            v22 = 2;
            v32 = 1;
            break;  
    }
     
});*/

document.getElementById('sel5').addEventListener('change', function() {
    const pre5 = document.getElementById('sel5').value;
    switch (pre5) {
        case 'res51':
            v51 = 0.4;
            v52 = 0.4;
            v52 = 0.1;
            break;
        case 'res52':
            v51 = 1;
            v52 = 0.8;
            v52 = 0.2;
            break; 
        case 'res53':
            v51 = 2.1;
            v52 = 1.2;
            v52 = 0.5;
            break;
        case 'res54':
            v51 = 3.2;
            v52 = 1.6;
            v52 = 0.8;
            break; 
        case 'res55':
            v51 = 4.2;
            v52 = 2;
            v52 = 1;
            break;  
    }
     
});

document.getElementById('sel6').addEventListener('change', function() {
    const pre6 = document.getElementById('sel6').value;
    switch (pre6) {
        case 'res61':
            v61 = 0.4;
            v62 = 0.4;
            v62 = 0.1;
            break;
        case 'res62':
            v61 = 1;
            v62 = 0.8;
            v62 = 0.2;
            break; 
        case 'res63':
            v61 = 2.1;
            v62 = 1.2;
            v62 = 0.5;
            break;
        case 'res64':
            v61 = 3.2;
            v62 = 1.6;
            v62 = 0.8;
            break; 
        case 'res65':
            v61 = 4.2;
            v62 = 2;
            v62 = 1;
            break;  
    }
     
});

document.getElementById('sel7').addEventListener('change', function() {
    const pre7 = document.getElementById('sel7').value;
    switch (pre7) {
        case 'res71':
            v71 = 0.4;
            v72 = 0.4;
            v72 = 0.1;
            break;
        case 'res72':
            v71 = 1;
            v72 = 0.8;
            v72 = 0.2;
            break; 
        case 'res73':
            v71 = 2.1;
            v72 = 1.2;
            v72 = 0.5;
            break;
        case 'res74':
            v71 = 3.2;
            v72 = 1.6;
            v72 = 0.8;
            break; 
        case 'res75':
            v71 = 4.2;
            v72 = 2;
            v72 = 1;
            break;  
    }
     
});

document.getElementById('sel8').addEventListener('change', function() {
    const pre8 = document.getElementById('sel8').value;
    switch (pre8) {
        case 'res81':
            v81 = 0.4;
            v82 = 0.4;
            v82 = 0.1;
            break;
        case 'res82':
            v81 = 1;
            v82 = 0.8;
            v82 = 0.2;
            break; 
        case 'res83':
            v81 = 2.1;
            v82 = 1.2;
            v82 = 0.5;
            break;
        case 'res84':
            v81 = 3.2;
            v82 = 1.6;
            v82 = 0.8;
            break; 
        case 'res85':
            v81 = 4.2;
            v82 = 2;
            v82 = 1;
            break;  
    }
     
});

document.getElementById('sel9').addEventListener('change', function() {
    const pre9 = document.getElementById('sel9').value;
    switch (pre9) {
        case 'res91':
            v91 = 0.4;
            v92 = 0.4;
            v92 = 0.1;
            break;
        case 'res92':
            v91 = 1;
            v92 = 0.8;
            v92 = 0.2;
            break; 
        case 'res93':
            v91 = 2.1;
            v92 = 1.2;
            v92 = 0.5;
            break;
        case 'res94':
            v91 = 3.2;
            v92 = 1.6;
            v92 = 0.8;
            break; 
        case 'res95':
            v91 = 4.2;
            v92 = 2;
            v92 = 1;
            break;  
    }
     
});

document.getElementById('sel11').addEventListener('change', function() {
    const pre11 = document.getElementById('sel11').value;
    switch (pre11) {
        case 'res111':
            v111 = 0.4;
            v112 = 0.4;
            v113 = 0.1;
            break;
        case 'res112':
            v111 = 1;
            v112 = 0.8;
            v113 = 0.2;
            break; 
        case 'res113':
            v111 = 2.1;
            v112 = 1.2;
            v113 = 0.5;
            break;
    }
     
});

document.getElementById('sel12').addEventListener('change', function() {
    const pre12 = document.getElementById('sel12').value;
    switch (pre12) {
        case 'res121':
            v121 = 0.4;
            v122 = 0.4;
            v122 = 0.1;
            break;
        case 'res122':
            v121 = 1;
            v122 = 0.8;
            v122 = 0.2;
            break; 
        case 'res123':
            v121 = 2.1;
            v122 = 1.2;
            v122 = 0.5;
            break;
        case 'res124':
            v121 = 3.2;
            v122 = 1.6;
            v122 = 0.8;
            break; 
        case 'res125':
            v121 = 4.2;
            v122 = 2;
            v122 = 1;
            break;  
    }
     
});

document.getElementById('sel13').addEventListener('change', function() {
    const pre13 = document.getElementById('sel13').value;
    switch (pre13) {
        case 'res131':
            v131 = 0.4;
            v132 = 0.4;
            v132 = 0.1;
            break;
        case 'res132':
            v131 = 1;
            v132 = 0.8;
            v132 = 0.2;
            break; 
        case 'res133':
            v131 = 2.1;
            v132 = 1.2;
            v132 = 0.5;
            break;
        case 'res134':
            v131 = 3.2;
            v132 = 1.6;
            v132 = 0.8;
            break; 
        case 'res135':
            v131 = 4.2;
            v132 = 2;
            v132 = 1;
            break;  
    }
    calcularValorTotal();
});