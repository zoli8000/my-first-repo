$("body").append("<h1>Hello World!</h1>")

$("#f1").text("Macrotis")
$("#f2").css("border", "1px solid purple")
$("h4,h5").css("background-color", "yellow")

let color = "purple"
let number = 10
let word = "cool"

if (color === "purple") {
    $("#f1").css("background-color", "purple")    
}

if (number > 100) {
    $("#f2").text("wow, de nagy szám")
} else {
    $("#f2").text("ez csak egy közönséges szám")
}

if (word === "cool") {
    $("h4").text("A DOM Ereje")
}

tomb = ["Zoli", "Név2", "Név3"]

$("body").append("<ul id='nev-lista'>Nevek</ul>")

tomb.forEach(element => {
    $("#nev-lista").append(`<li>${element}</li>`)
    
});

let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
  };

$("body").append(`<h1>${additionalBlock.title}</h1>`)
$("body").append(`<p>${additionalBlock.text}</p>`)

$("body").append("<button id='gomb1'>gomb</button>")
$("#gomb1").click(  () => {
    console.log("Igen, most rám kattintottál")
})

$("body").append("<button id='gomb2'>gomb2</button>")
$("#gomb2").click( () => {
    $("#gomb1").text("gomb új neve")
})

$("body").append("<button id='gomb3'>gomb3</button>")
$("#gomb3").click( () => {
    inputColor = $("input").val()
    $("button").css("background-color", inputColor)
    $("#gomb3").attr("disabled", true)
})