
const url = 'https://pizzaallapala.p.rapidapi.com/productos';
const display = document.getElementById('data')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '280d64f1dcmshc71c4daaa8c826fp113ca8jsna5daede997fe',
        'X-RapidAPI-Host': 'pizzaallapala.p.rapidapi.com'
    }
};

const getData = async () => {
    const response = await fetch(url, options);
    const result = await response.text();
    return result
}

const displayData = async () => {
    const payLoad = await getData();
    const data = JSON.parse(payLoad)
    console.log("=============", JSON.parse(payLoad))

    display.innerHTML = data.productos.map((object) => {
        // console.log('object====>>>>', object)
        const { nombre, precio, linkImagen } = object;

        // 
        return `<div class="container" style="height:400px;width:400px;display:flex;justify-content:center;align-items:center;flex-direction:column;">
        <img class="myDIV" src='${linkImagen}' style="height:200px;width:200px;border-radius:50%;cursor:pointer">
        <p style="color:orange;font-weight:900">${nombre}</p>
        <p style="color:orange;font-weight:900">$ ${precio}</p>
        <div style="height:100px;width:100%;display:flex;justify-content:space-evenly;align-items:center;flex-direction:row">
        <button  style="height:60px;width:100px;background-color:orange;border-style:none" onclick="window.location.href='addtocart.html'"><p style="font-size:2vh;font-weight:600;color:white">Add to Cart</p></button>
        <button id="myBtn" onclick="myFunction()" style="height:60px;width:100px;background-color:off-white;border-style:none"><p style="font-size:2vh;font-weight:600;color:orange">Quick View</p></button>
        <dialog id="myDialog" >
        <div style="display:flex;flex-direction:row">
        <div style="height:50vh;width:50vh;display:flex;justify-content:center;align-items:center;flex-direction: row;">
        <img src='${linkImagen}' style="height:100%;width:100%"/>
        </div>
        <div style="height:50vh;width:50vh;display:flex;justify-content:flex-start;align-items:flex-start;padding-left:10px;flex-direction: column;">
        <button class="close" onclick="window.location.href='index.html'" style="margin-left:48vh">&times;</button>

        <p style="color:orange;font-weight:900;margin:0">${nombre}</p>
        <p style="color:orange;font-weight:900;margin:0">$ ${precio}</p>
        <p style="color:black;font-weight:900;margin:0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate quas reiciendis, nobis deserunt fugit rerum corporis debitis sapiente maxime repellendus asperiores dolorum rem atque, minima tempore voluptatem, libero recusandae adipisci!
        </p>
        <p style="color:blue;font-weight:900">Nutritional Value per Gram</p>
        <p style="color:green;font-weight:900;margin:0">Calories..................................................................800kcal</p>
        <p style="color:green;font-weight:900;margin:0">Calories..................................................................800kcal</p>
        <p style="color:green;font-weight:900;margin:0">Calories..................................................................800kcal</p>
        <button  style="height:40px;margin-top:20px;width:100px;background-color:orange;border-style:none" onclick="window.location.href='addtocart.html'"><p style="font-size:2vh;font-weight:600;color:white">Add to Cart</p></button>

        </div>
</div>
        </dialog>
        
        </div>
        </div>
        `
    });

}
displayData();

function myFunction() {
    document.getElementById("myDialog").showModal();
}

