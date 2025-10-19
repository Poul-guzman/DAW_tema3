class Libro {
    constructor(titulo, precio) {
        this.titulo = titulo;
        this.precio = precio;
    }
    mostrarInfo() {
        return `Título: ${this.titulo}\nPrecio: ${this.precio}`;
    }
}

function mostrardatos(boton) {
    const fila = boton.closest('tr');
    const titulo = fila.querySelector('td:nth-child(2)').textContent;
    const precio = fila.querySelector('td:nth-child(3)').textContent;
    // alert(`Título: ${titulo}\nPrecio: ${precio}`);
    const libro = new Libro(titulo, precio);
    alert(libro.mostrarInfo());
}