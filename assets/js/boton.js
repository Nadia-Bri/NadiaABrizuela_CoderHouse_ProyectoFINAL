const miBoton = document.getElementsByClassName('miBoton');
for(const item of miBoton){
    item.addEventListener('click', () => {
        window.location.href = 'compra.html';
    });
}
