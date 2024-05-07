let v11=0.2, v21=0, v31=0, v41=0, v51=0, v61=0, v71=0, v81=0, v91=0, v101=0, v111=1, v121=0, v131=0, v141=0, v151=0, v12=0, v22=0, v32=0, v42=0, v52=0, v62=0, v72=0, v82=0, v92=0, v102=0, v112=0, v122=0, v132=0, v142=0, v152=0, v13=0, v23=0, v33=0, v43=0, v53=0, v63=0, v73=0, v83=0, v93=0, v103=0, v113=0, v123=0, v133=0, v143=0, v153=0;
var p1 = 1;
var p3 = 0;
var p7 = 0;
var a = 0;//electricidad
var b1 = 0;
var b2 = 0;
var b = 0;//basura
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c = 0;//agua
var d=0;//gases
var e=0;//uso del suelo

/*function vtot() {
    let vtotal = v11 + v21 + v51 + v61 + v71 - v81 - v91 + v111 + v121 + v131;
    alert(vtotal);
    localStorage.setItem('resultadoCalculo', vtotal);
}*/

function vtot() {
    let inteparent1 = v11 + v21 + v51 + v61 + v71 + v131;
    let inteparent2 = v12 + v22 + v52 + v61 + v71 + v131;
    let inteparent3 = v13 + v23 + v53 + v61 + v71 + v133;
    let segparentesis1 = inteparent1 * (v111);
    let segparentesis2 = inteparent2 * (v111);
    let segparentesis3 = inteparent3 * (v111);
    let vap1 = p1 * segparentesis1;
    let vap2 = p3 * segparentesis2;
    let vap3 = p7 * segparentesis3;
    let vtotal = vap1 + vap2 + vap3 - v81 - v91;
    localStorage.setItem('resultadoCalculo', vtotal);
}

function calcat() {
    let valcat = '<p class = "cuerpo">Tu contaminacion es minima en todas las categorias, sigue asi.</p>';
    b = b1 + b2;
    c = c1 + c2 + c3;
    let catMa = Math.max(a, b, c, d, e);
    /*if (catMa != 0) {
        if (a === catMa) {
            cn.push('a');
        }
        if (b === catMa) {
            cn.push('b');
        }
        if (c === catMa) {
            cn.push('c');
        }
        if (d === catMa) {
            cn.push('d');
        }
        if (e === catMa) {
            cn.push('e');
        }
        */
        // Mostrar las variables con el valor máximo
        if (catMa == 0) {
            console.log("Los valores máximos son:");
            valcat = '<p class = "cuerpo techo">Tu huella ecologica es minima en todos los ambitos, sigue asi</p>'
        } else {
            if (a == catMa) {
                valcat = '<p class = "cuerpo techo">Tu generacion de contaminacion es mayor en <div class = "cate cuerpo"> electricidad </div> </p> <p class = "cuerpo suelo">Te recomendaríamos apagar y/o desconectar dispositivos eléctricos que no estés utilizando, cambiar los focos por luces LED, sustituir electrodomésticos "viejos" por unos nuevos con etiqueta ENERGY STAR, y, dentro de tus posibilidades económicas, considerar la instalación de paneles solares.</p>';
            } else if (b == catMa) {
                valcat = '<p class = "cuerpo techo">Tu generacion de contaminacion es mayor en <div class = "cate cuerpo"> generacion de basura </div> </p> <p class="cuerpo suelo">Te recomendamos<span class="cuerpo cate">reducir</span> las compras de productos con mucho envoltorio,<span class="cuerpo cate">reutilizar</span> al máximo bolsas plásticas, envases de vidrio, hojas de papel y otros materiales, y <span class="cuerpo cate">reciclar</span> separando tu basura.</p>';
            } else if (c == catMa) {
                valcat = '<p class = "cuerpo techo">Tu generacion de contaminacion es mayor en <div class = "cate cuerpo"> Gasto de agua </div> </p> <p class = "cuerpo suelo">Te recomendamos reducir el consumo de carne y otros alimentos de origen animal, evitar las bebidas embotelladas, utilizar papel reciclado, aprovechar el agua de lluvia y revisar posibles fugas en tu hogar, ya que estas pueden representar hasta el 30% de la pérdida de agua en una ciudad.</p>';
            } else if (d == catMa) {
                valcat = '<p class = "cuerpo techo">Tu generacion de contaminacion es mayor en <div class = "cate cuerpo"> Emiciones de gases </div> </p>';
            } else if (e == catMa) {
                valcat = '<p class = "cuerpo techo">Tu generacion de contaminacion es mayor en <div class = "cate cuerpo"> Uso del suelo </div> </p> <p class = "cuerpo suelo">Te recomendamos visitar áreas verdes que fomenten la conservación del medio ambiente. La construcción de centros comerciales y estadios puede tener un gran impacto en la zona, ya que la reforestación causada para su contrución genera el desplazamiento y disminución de la biodiversidad. Por lo tanto, es preferible optar por visitar parques y respaldar proyectos que la ciudad promueva para la protección del medio ambiente.</p>';
            }
        }
    localStorage.setItem('resultadoCalculoCat', valcat);
}
    

/*function calculacategoria() {
    let escogida = a;
    localStorage.setItem('cami', escogida);
    document.getElementById('cami').innerText = escogida.toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    const cat1 = localStorage.getItem('cami');
    if (cat1) {
        const catyElement = document.getElementById('cato');
        if (catyElement) {
            catyElement.innerText = parseFloat(cat1).toFixed(2);
        } else {
            console.error("Element with id 'caty' not found.");
        }
    }
});*/

document.addEventListener('DOMContentLoaded', function() {
            const resultado = localStorage.getItem('resultadoCalculo');
            const resultadoCat = localStorage.getItem('resultadoCalculoCat')
            if (resultado) {
                document.getElementById('resultado').innerText = parseFloat(resultado).toFixed(2);
                document.getElementById('resultadoCat').innerHTML = resultadoCat;
            } 
        });
        
        document.getElementById('terminarEncuesta').addEventListener('click', function() {
    vtot();
    calcat();
});

document.getElementById('sel1').addEventListener('change', function() {
    const pre1 = document.getElementById('sel1').value;
    switch (pre1) {
        case 'res11':
            v11 = 0.2;
            v12 = 0.2;
            v13 = 0.1;
            a = 1;
            break;
        case 'res12':
            v11 = 0.5;
            v12 = 0.5;
            v13 = 0.2;
            a = 10;
            break; 
        case 'res13':
            v11 = 1.1;
            v12 = 0.8;
            v13 = 0.5;
            a = 100;
            break;
        case 'res14':
            v11 = 1.6;
            v12 = 1.1;
            v13 = 0.6;
            a = 1000;
            break; 
        case 'res15':
            v11 = 2.2;
            v12 = 1.5;
            v13 = 1;
            a = 10000;
            break;  
    }
});

document.getElementById('sel2').addEventListener('change', function() {
    const pre2 = document.getElementById('sel2').value;
    switch (pre2) {
        case 'res21':
            v21 = 0.45;
            v22 = 0.25;
            v23 = 0.1;
            b1 = 0.7;
            break;
        case 'res22':
            v21 = 1;
            v22 = 0.8;
            v23 = 0.2;
            b1 = 7;
            break; 
        case 'res23':
            v21 = 2.1;
            v22 = 1.2;
            v23 = 0.5;
            b1 = 70;
            break;
        case 'res24':
            v21 = 3.2;
            v22 = 1.6;
            v23 = 0.8;
            b1 = 700;
            break; 
        case 'res25':
            v21 = 4.2;
            v22 = 2;
            v23 = 1.1;
            b1 = 7000;
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
            v51 = 0.3;
            v52 = 0.1;
            v53 = 0.05;
            c1 = 0.5;
            break;
        case 'res52':
            v51 = 0.4;
            v52 = 0.5;
            v53 = 0.1;
            c1 = 5;
            break; 
        case 'res53':
            v51 = 0.7;
            v52 = 0.7;
            v53 = 0.27;
            c1 = 50;
            break;
        case 'res54':
            v51 = 1;
            v52 = 0.9;
            v53 = 1;
            c1 = 500;
            break; 
        case 'res55':
            v51 = 1.7;
            v52 = 1.1;
            v53 = 1.5;
            c1 = 5000;
            break;  
    }
});

document.getElementById('sel6').addEventListener('change', function() {
    const pre6 = document.getElementById('sel6').value;
    switch (pre6) {
        case 'res61':
            v61 = 0.05;
            c2 = 0.7;
            break;
        case 'res62':
            v61 = 0.15;
            c2 = 3;
            break; 
        case 'res63':
            v61 = 0.3;
            c2 = 30;
            break;
        case 'res64':
            v61 = 0.45;
            c2 = 300;
            break; 
        case 'res65':
            v61 = 0.7;
            c2 = 3000;
            break;  
    }
});

document.getElementById('sel7').addEventListener('change', function() {
    const pre7 = document.getElementById('sel7').value;
    switch (pre7) {
        case 'res71':
            v71 = 0.1;
            c3 = 0.2;
            break;
        case 'res72':
            v71 = 0.2;
            c3 = 2;
            break; 
        case 'res73':
            v71 = 0.3;
            c3 = 20;
            break;
        case 'res74':
            v71 = 0.4;
            c3 = 200;
            break; 
        case 'res75':
            v71 = 0.5;
            c3 = 2000;
            break;  
    }
});

document.getElementById('sel8').addEventListener('change', function() {
    const pre8 = document.getElementById('sel8').value;
    switch (pre8) {
        case 'res81':
            v81 = 0;
            break;
        case 'res82':
            v81 = 0.5;
            break; 
        case 'res83':
            v81 = 1;
            break;
        case 'res84':
            v81 = 1.5;
            break; 
        case 'res85':
            v81 = 2;
            break;  
    }
});

document.getElementById('sel9').addEventListener('change', function() {
    const pre9 = document.getElementById('sel9').value;
    switch (pre9) {
        case 'res91':
            v91 = 0;
            break;
        case 'res92':
            v91 = 0.5;
            break; 
        case 'res93':
            v91 = 1;
            break;
        case 'res94':
            v91 = 1.5;
            break; 
        case 'res95':
            v91 = 2;
            break;  
    }
});

document.getElementById('sel11').addEventListener('change', function() {
    const pre11 = document.getElementById('sel11').value;
    switch (pre11) {
        case 'res111':
            v111 = 1;
            e = 0;
            break;
        case 'res112':
            v111 = 1.25;
            e = 60;
            break; 
        case 'res113':
            v111 = 2;
            e = 100;
            break;
    }
});

document.getElementById('totalPersonas').addEventListener('change', function() {
    const pre12 = document.getElementById('totalPersonas').value;
    switch (pre12) {
        case 'resP1':
            p1 = 1;
            p3 = 0;
            p7 = 0;
            break;
        case 'resP3':
            p3 = 1
            p1 = 0;
            p7 = 0;
            break; 
        case 'resP7':
            p7 = 1;
            p1 = 0;
            p3 = 0;
            break;
    }
});

document.getElementById('sel13').addEventListener('change', function() {
    const pre13 = document.getElementById('sel13').value;
    switch (pre13) {
        case 'res131':
            v131 = 0;
            break;
        case 'res132':
            v131 = 0.05;
            break; 
        case 'res133':
            v131 = 0.1;
            break;
        case 'res134':
            v131 = 0.2;
            break;   
    }
});
