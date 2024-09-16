function envioCarro(){
    const Marca = document.getElementById('Marca').value
    const Modelo = document.getElementById('Modelo').value
    
    let Carro = {
        marca: Marca,
        modelo: Modelo
    }

    localStorage.setItem('InfoCarro', JSON.stringify(Carro))
    console.log(Marca)
    console.log(Modelo)
}