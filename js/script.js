function mostraBusca(){
    var x = document.getElementById("busca");
    if (x.style.display ==='none'){
      x.style.display = 'block';
    } else {
      x.style.display = 'none';
    }
  }


/* ============================================================================ */
/* ============================================================================ */
/* ============================================================================ */


$(document).ready(function(){
    $("#carrossel img:eq(0)").addClass("banner-ativo").show()

    setInterval(slide,5000)

    function slide(){

    if($(".banner-ativo").next().length){
           $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    }else{
        $(".banner-ativo").removeClass().hide()
        $("#carrossel img:eq(0)").addClass("banner-ativo").show()
        }
    }


    $("#barras").click(function () {
        $("#menu").toggleClass("menu-ativo")

        // if ($("#menu").hasClass("menu-ativo")) {
        //     $("#menu").removeClass("menu-ativo")
        // } else {
        //     $("#menu").addClass("menu-ativo")
        // }
    })
})

// $(document).ready(function(){
//     $("#barras").click(function(){
//         if($("#menu").hasClass("#menu-ativo")){
//             $("menu").removeClass("#menu-ativo")
//         }else{
//             $("menu").addClass("#menu-ativo")
//         }
//     })
// })


/* ============================================================================ */
/* ============================================================================ */
/* ============================================================================ */


// function mostrarPopup(){
//     window.alert("Novas skins disponíveis para Tetris!")
// }


/* ============================================================================ */
/* ============================================================================ */
/* ============================================================================ */


function enviarNewsletter(){
    let email = document.getElementById("campo-email");
    let emailDigitado = email.value;
    console.log(emailDigitado)
}


/* ============================================================================ */
/* ============================================================================ */
/* ============================================================================ */


// let listaNoticias = [
//     {
//         titulo: "Brasil leva 1 gol no início do jogo",
//         descricao: "Houve uma falha de defesa brasileira, que deixou o atacante adversário cara a cara com o goleiro brasileiro"
//     },
//     {
//         titulo: "O dólar está alto",
//         descrição: "O dólar está realmente muito alto, não to saindo pra lado nenhum"
//     }
// ]

let listaNoticias = [
    {
        data: "15/12/2021",
        descricao: "WoW - Acompanhe o desenvolvimento da nova classe!",
        link: "http://www.fantasycorp.com.br"
    },
    {
        data: "14/12/2021",
        descricao: "KalOnline - Nova area e nova raid em DeVah!",
        link:""
    },
    {
        data: "10/12/2021",
        descricao: "GW2 - Novas montarias a caminho!",
        link:""
    },
    {
        data: "10/12/2021",
        descricao: "Tetris - Quadradinhos e mais quadradinhos",
        link:""
    },
    {
        data: "10/12/2021",
        descricao: "DDO - Vencedor da screenshot da semana",
        link:""
    },
    {
        data: "09/12/2021",
        descricao: "Presença da Fantasy no E3!",
        link:""
    },
    {
        data: "09/12/2021",
        descricao: "Planejamento de lançamentos para o próximo trimestre",
        link:""
    }
]

function renderizarNoticias(){
    let espaco = document.getElementById("espaco-noticias")

    let template = "";

    for (let index = 0; index < listaNoticias.length; index++) {
        const noticias = listaNoticias[index];

        template += `<div class="cardnews">
        <p class="noticias"><a href=${noticias.link}></a></p>
        <p>${noticias.data + " - " + noticias.descricao} </p>

    </div>`
    }
    espaco.innerHTML = template;
}