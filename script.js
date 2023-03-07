/* preciso de uma function que será acionada pelo botão verificar, com nome function verificar(){}
 a funtcion deve verificar o ano de nascimento com o ano atual, calcular a idade e exibir os itens
 se for mulher, mostrar uma imagem de um meme de mulher conforme a idade
 se for homem, mostrar uma imagem de um meme de homem conforme a idade

*/


function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = window.document.getElementById('nasc')
    var anoNasc = Number(nasc.value)
    var idade = (ano - anoNasc)

    // ano nascimento recebeu nenhum valor ou ano nascimento maior que ano atual exibe 'ano inválido'
    if(anoNasc == 0 || anoNasc > ano){
        window.alert('Ano inválido ')

    } else{
        var res = window.document.getElementById('res')
        var sexo = window.document.getElementsByName('sexo')//o radio sexo [0] é o masc, o [1] é o fem
        var genero = ''
        var img = window.document.createElement('img')
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 5){
                //Criança
                img.setAttribute('src', './images/criancaMenino.jpeg')
            }else if(idade < 15){
                //pequeno  jovem
                img.setAttribute('src', './images/pequenoJovemMenino.jpeg')
            }else if(idade < 30){
                //jovem
                img.setAttribute('src', './images/jovemMenino.png')
            }else if(idade < 40){
                // adulto
                img.setAttribute('src','./images/adultoHomem.jpeg')
            }
            else{
                // idoso
                img.setAttribute('src','./images/idosoHomem.webp')
            }
            
        }else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 5){
                //Criança
                img.setAttribute('src', './images/criancaMenina.webp')
            }else if(idade < 15){
                //pequena  jovem
                img.setAttribute('src', './images/pequenaJovemMenina.jpeg')
            }else if(idade < 30){
                //jovem
                img.setAttribute('src', './images/JovemMenina.jpeg')
            }else if(idade < 40){
                // adulto
                img.setAttribute('src', './images/mulherAdulta.jpeg')
            }
            else{
                // idosa
                img.setAttribute('src', './images/idosaMulher.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Para um(a) ${genero} com ${idade} anos seu meme é esse: kkkk <br>`
        //adiconando o elemento img na div res
        res.appendChild(img)
    }
    
}

