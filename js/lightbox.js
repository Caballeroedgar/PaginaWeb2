const imagenes = document.querySelector('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburguer')



  
imagenes.forEach(imagen => {
    imagen.addEventlistener('click',()=>{
        alert("auch me dolio")
    })
})
