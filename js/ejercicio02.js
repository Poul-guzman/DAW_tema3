let i = 0; // era 1
let misImagenes = 
['https://www.crisol.com.pe/media/wysiwyg/campania-home-d/bnd_home_25_planeta_oceano-urano-11-10.jpg',
 'https://www.crisol.com.pe/media/wysiwyg/campania-home-d/bnd_home_rompecabezas_11-10.jpg',
 './img/banner1.jpg',
 './img/banner2.jpg',
 './img/banner3.jpg',
 'https://www.crisol.com.pe/media/wysiwyg/campania-home-d/bnd_home_zefiro-2026.jpg',
 './img/banner4.jpg',
 './img/banner5.jpg',
 'https://www.crisol.com.pe/media/wysiwyg/campania-home-d/bnd_home_novedades-11-10.jpg',

];
function carrusel() {
    // document.getElementById('banner').src = `./img/banner${i}.jpg`;
    document.getElementById('banner').src = misImagenes[i];
    i += 1;
    if (i > misImagenes.length - 1) {
        i = 0;
    }
    setTimeout(carrusel, 1000);
}
carrusel();