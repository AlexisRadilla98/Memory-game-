const uno=new Pokemon(1,"https://th.bing.com/th/id/R.fd721f81cf12ebf7b3234c2c665b584c?rik=VX6HpLVptUIOMQ&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fpokemon-symbol-logo-png-31.png&ehk=aSt1644QEFHVKT7thXmBsOPsr2lNpCODH4hF6OqUS5M%3d&risl=&pid=ImgRaw&r=0",false,false)
const dos=new Pokemon(2,"https://th.bing.com/th/id/R.fd721f81cf12ebf7b3234c2c665b584c?rik=VX6HpLVptUIOMQ&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fpokemon-symbol-logo-png-31.png&ehk=aSt1644QEFHVKT7thXmBsOPsr2lNpCODH4hF6OqUS5M%3d&risl=&pid=ImgRaw&r=0",false,false)
const tres=new Pokemon(3,"https://th.bing.com/th/id/R.fd721f81cf12ebf7b3234c2c665b584c?rik=VX6HpLVptUIOMQ&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fpokemon-symbol-logo-png-31.png&ehk=aSt1644QEFHVKT7thXmBsOPsr2lNpCODH4hF6OqUS5M%3d&risl=&pid=ImgRaw&r=0",false,false)
const cuatro=new Pokemon(4,"https://th.bing.com/th/id/R.fd721f81cf12ebf7b3234c2c665b584c?rik=VX6HpLVptUIOMQ&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fpokemon-symbol-logo-png-31.png&ehk=aSt1644QEFHVKT7thXmBsOPsr2lNpCODH4hF6OqUS5M%3d&risl=&pid=ImgRaw&r=0",false,false)
const cinco=new Pokemon(5,"https://th.bing.com/th/id/R.fd721f81cf12ebf7b3234c2c665b584c?rik=VX6HpLVptUIOMQ&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fpokemon-symbol-logo-png-31.png&ehk=aSt1644QEFHVKT7thXmBsOPsr2lNpCODH4hF6OqUS5M%3d&risl=&pid=ImgRaw&r=0",false,false)
const seis=new Pokemon(6,"https://th.bing.com/th/id/R.fd721f81cf12ebf7b3234c2c665b584c?rik=VX6HpLVptUIOMQ&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fpokemon-symbol-logo-png-31.png&ehk=aSt1644QEFHVKT7thXmBsOPsr2lNpCODH4hF6OqUS5M%3d&risl=&pid=ImgRaw&r=0",false,false)
const siete=new Pokemon(7,"https://th.bing.com/th/id/R.fd721f81cf12ebf7b3234c2c665b584c?rik=VX6HpLVptUIOMQ&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fpokemon-symbol-logo-png-31.png&ehk=aSt1644QEFHVKT7thXmBsOPsr2lNpCODH4hF6OqUS5M%3d&risl=&pid=ImgRaw&r=0",false,false)
const ocho=new Pokemon(8,"https://th.bing.com/th/id/R.fd721f81cf12ebf7b3234c2c665b584c?rik=VX6HpLVptUIOMQ&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fpokemon-symbol-logo-png-31.png&ehk=aSt1644QEFHVKT7thXmBsOPsr2lNpCODH4hF6OqUS5M%3d&risl=&pid=ImgRaw&r=0",false,false)
const nueve=new Pokemon(9,"https://th.bing.com/th/id/R.fd721f81cf12ebf7b3234c2c665b584c?rik=VX6HpLVptUIOMQ&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fpokemon-symbol-logo-png-31.png&ehk=aSt1644QEFHVKT7thXmBsOPsr2lNpCODH4hF6OqUS5M%3d&risl=&pid=ImgRaw&r=0",false,false)
const cero=new Pokemon(0,"https://th.bing.com/th/id/R.fd721f81cf12ebf7b3234c2c665b584c?rik=VX6HpLVptUIOMQ&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fpokemon-symbol-logo-png-31.png&ehk=aSt1644QEFHVKT7thXmBsOPsr2lNpCODH4hF6OqUS5M%3d&risl=&pid=ImgRaw&r=0",false,false)
const mazo=[1,2,3,4,5,1,2,3,4,5];
let nombre=document.getElementById("yo");
let div=document.querySelectorAll(".carta")
let imageCarts=document.querySelectorAll("pokebola")
let ButtonsC=document.querySelectorAll("button");
let pokemon=null
let id=null
let start=false;
let loaded=false
const intento=[0,0,0,0,0];
let i=0;
let pk;
let digito1;
let digito2;
let mach=false;
let conde=0;
let count=0;
let moves=0;
let win=0;
let c1;
let c2;
let nid1;
let nid2;
//                     constructo
/*let numberButtons=document.querySelectorAll(".number");
let operationButtons=document.querySelectorAll(".operator");
let equal=document.querySelectorAll(".double-width");
let screen=document.getElementById("screen");*/
function Pokemon(num, link, bool, bool2) {
    this.numero = num;
    this.link = link;
    this.show = bool;
    this.show2 = bool2;
    this.bola="https://th.bing.com/th/id/R.fd721f81cf12ebf7b3234c2c665b584c?rik=VX6HpLVptUIOMQ&riu=http%3a%2f%2fwww.freepnglogos.com%2fuploads%2fpokemon-symbol-logo-png-31.png&ehk=aSt1644QEFHVKT7thXmBsOPsr2lNpCODH4hF6OqUS5M%3d&risl=&pid=ImgRaw&r=0";
    this.par=false; this.par2=false;
}
//                     pokedex
const pokemonImage=document.getElementById("pokemon-image")
const pokemonName=document.getElementById("pokemon-name")
const pokemonInfo=document.getElementById("pokemon-info")
const searchBox=document.getElementById("searchBox")
const auto=document.getElementById("Auto")
const button=document.getElementById("submit")
const save=document.getElementById("guardar")
console.log("alexis")
auto.addEventListener("click",(e)=>{
    console.log("i am calling eevee")
    // console.log(intento)
    
        for (let i = 0; i <5; i++) {
                fetch(`https://pokeapi.co/api/v2/pokemon/${eve[i]}/`,{
                method:"GET"//,headers:{"content-type": "application/json; charset=utf-8"}
                }).then((res)=>res.json().then(data=>{
                    pokemon=data
                    pokemonImage.setAttribute("src", pokemon.sprites.front_default)
                    pokemonName.innerText=pokemon.name
                    pokemonInfo.innerHTML=`<span id="height">Height: ${pokemon.height}</span>              <span id="weight">Weight: ${pokemon.weight}</span>`
                     
            const pk=new Pokemon((i+1),pokemonImage.src,false,false)
            const pk2=new Pokemon((i+6),pokemonImage.src,false,false)
            intento[i+1]=pk.link;
            // console.log(intento)
            switch(i+1) {
                case 1:
                  uno.link=pk.link
                  seis.link=pk2.link
                  break;
                case 2:
                    dos.link=pk.link
                    siete.link=pk2.link
                  break;
                case 3:
                    tres.link=pk.link
                    ocho.link=pk2.link
                  break;
                case 4:
                    cuatro.link=pk.link
                    nueve.link=pk2.link
                  break;
                case 5:
                    cinco.link=pk.link
                    cero.link=pk2.link
                  break;
                  // code block
              } 
            } ))

             
        }
        setTimeout(() => {
            mix(mazo)
            // console.log(intento)
            changeL()
            loaded=true
            nombre.innerText="ready"
            displayimg()
            
        }, 2000);
})
button.addEventListener("click",(e)=>{
    id=searchBox.value
    
    console.log("i am calling pokemon API")
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`,{
        method:"GET"//,headers:{"content-type": "application/json; charset=utf-8"}
    }).then((res)=>res.json().then(data=>{
        pokemon=data
        pokemonImage.setAttribute("src", pokemon.sprites.front_default)
        pk=pokemon.name
        pokemonName.innerText=pokemon.name
        pokemonInfo.innerHTML=`<span id="height">Height: ${pokemon.height}</span>              <span id="weight">Weight: ${pokemon.weight}</span>`
        
     } ))
})
save.addEventListener("click",(e)=>{
    
    if(i==0){ 
        mix(mazo)
        console.log(mazo)
    }
    if(i<5){
        const pk=new Pokemon((i+1),pokemonImage.src,false,false)
        const pk2=new Pokemon((i+6),pokemonImage.src,false,false)
        i++;
        nombre.innerText="'"+pk.numero+"'";
        intento[i]=pk.link;
        switch(i) {
            case 1:
              uno.link=pk.link
              seis.link=pk2.link
              break;
            case 2:
                dos.link=pk.link
                siete.link=pk2.link
              break;
            case 3:
                tres.link=pk.link
                ocho.link=pk2.link
              break;
            case 4:
                cuatro.link=pk.link
                nueve.link=pk2.link
              break;
            case 5:
                cinco.link=pk.link
                cero.link=pk2.link
              break;
              // code block
          }
    }
    if(i>=5){
        changeL()
        loaded=true
        nombre.innerText="ready"
        displayimg()
    }
        
})
//                        Objetos
/*const pik=new Pokemon(4,pokemonImage.src,false)
const char=new Pokemon(2,"https://th.bing.com/th/id/OIP.WlpbmlwjRjYr0xHzV3H1DwHaIE?pid=ImgDet&rs=1",false)
const bol=new Pokemon(3,"https://th.bing.com/th/id/OIP._HOBAQ8jVH2hWXrS9qLbeAHaG1?pid=ImgDet&rs=1",false)
const squ=new Pokemon(1,"https://th.bing.com/th/id/R.05b022151915f49132ff49a22f078d4c?rik=d6FmLtIRoR3vgA&pid=ImgRaw&r=0",false)
const evee=new Pokemon(5,"https://th.bing.com/th/id/OIP.iYJ8u-RplUXhFQaijMiDrgHaIY?pid=ImgDet&rs=1",false)*/
//"https://th.bing.com/th/id/OIP.DcJPj0UW6AidTujvtE3GqQHaHI?pid=ImgDet&rs=1"
let num=[1,2,3,4,5];

function displayimg(){
    setTimeout(Elegir,500)
        function Elegir(){
            if(uno.show==true){
                document.getElementById('1').src=uno.link;
            }else{
                document.getElementById('1').src=uno.bola;
            }
            if(dos.show==true){
                document.getElementById('2').src=dos.link;
            }else{
                document.getElementById('2').src=dos.bola;
            }
            if(tres.show==true){
                document.getElementById('3').src=tres.link;
            }else{
                document.getElementById('3').src=tres.bola;
            }
            if(cuatro.show==true){
                document.getElementById('4').src=cuatro.link;
            }else{
                document.getElementById('4').src=cuatro.bola;
            }
            if(cinco.show==true){
                document.getElementById('5').src=cinco.link;
            }else{
                document.getElementById('5').src=cinco.bola;
            }
            if(seis.show==true){
                document.getElementById('6').src=seis.link;
            }else{
                document.getElementById('6').src=seis.bola;
            }
            if(siete.show==true){
                document.getElementById('7').src=siete.link;
            }else{
                document.getElementById('7').src=siete.bola;
            }
            if(ocho.show==true){
                document.getElementById('8').src=ocho.link;
            }else{
                document.getElementById('8').src=ocho.bola;
            }
            if(nueve.show==true){
                document.getElementById('9').src=nueve.link;
            }else{
                document.getElementById('9').src=nueve.bola;
            }
            if(cero.show==true){
                document.getElementById('0').src=cero.link;
            }else{
                document.getElementById('0').src=cero.bola;
            }
        }
    
}div.forEach((number)=>{
    number.addEventListener("click",()=>{
        number.classList.add("class1")
        nid1=number.id;
        number.innerText
        switch (number.id) {
            case "carta1":
                if(uno.show){
                    uno.show=false
                }
                else{
                    uno.show=true
                    digito1=uno;
                }
                //if((uno.show) && (uno.show2)==true){mach=true}
                break;
                
            case "carta3":
                if(tres.show){tres.show=false}else{tres.show=true;digito1=tres}
                break;
            case "carta2":
                    if(dos.show){dos.show=false}else{dos.show=true;digito1=dos}
                break;
            case "carta4":
                    if(cuatro.show){cuatro.show=false}else{cuatro.show=true;digito1=cuatro}
                break;
            case "carta5":
                    if(cinco.show){cinco.show=false}else{cinco.show=true;digito1=cinco}
                break;
            case "carta6":
                    if(seis.show){seis.show=false}else{seis.show=true;digito1=seis}
                break;
            case "carta7":
                    if(siete.show){siete.show=false}else{siete.show=true;digito1=siete}
                break;
            case "carta8":
                if(ocho.show){ocho.show=false}else{ocho.show=true;digito1=ocho}
                break;
            case "carta9":
                if(nueve.show){nueve.show=false}else{nueve.show=true;digito1=nueve}
                break;
            case "carta10":
                if(cero.show){cero.show=false}else{cero.show=true;digito1=cero}
                break;
            default:
                break;
        }
        console.log(digito1.link)
        displayimg();
        conde ++;
        if(conde==1){digito2=digito1;nid2=nid1}
        if(conde==2){
            moves++;
            if((digito1.link==digito2.link) && (nid1!=nid2)){
                setTimeout(Pareja,1000)
                function Pareja(){
                document.getElementById(nid1).hidden=true
                document.getElementById(nid2).hidden=true
                win ++;}
                
            }else{
                number.classList.add("class1")
                document.getElementById(nid2).classList.add("class1")
                setTimeout(reset,1000)
                function reset(){
                    uno.show=false;
                    dos.show=false;
                    tres.show=false;
                    cuatro.show=false;
                    cinco.show=false;
                    seis.show=false;
                    siete.show=false;
                    ocho.show=false;
                    nueve.show=false;
                    cero.show=false;
                    displayimg()
                }
                
            }
            conde=0;
            digito1="";
            digito2="";
        }
        if(win==5){
            setTimeout(ganaste,800)
            function ganaste(){
                alert("ganaste en "+moves+" movimientos")
            }
        }
    })
    
})
function mix(array) {
    for (var i = 0; i < 10; i++) {
        var j = Math.floor(Math.random()*9);
        //console.log(j+"j")
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
       // console.log(array[i])
    }
}
function changeL(){
    uno.link=intento[mazo[1]]
    dos.link=intento[mazo[2]]
    tres.link=intento[mazo[3]]
    cuatro.link=intento[mazo[4]]
    cinco.link=intento[mazo[5]]
    seis.link=intento[mazo[6]]
    siete.link=intento[mazo[7]]
    ocho.link=intento[mazo[8]]
    nueve.link=intento[mazo[9]]
    cero.link=intento[mazo[0]]
}


function game(){
    if(start){
        if(par){
            count ++;
            ////drop(par)
        }
        else{
           // hide(par)
        }
        if(count=5)
        {//finish(moves); moves=0
        }
    }
}

/*let nombre=document.getElementById("yo");
nombre.innerHTML+="<span>Alexis Radilla</span>"

let span=document.querySelector("span")
span.style.color="red"
span.style.fontSize = "20px"
span.style.backgroundColor="Cyan"
span.style.border="1px solid black"
span.style.outline="1px dashed orange"
span.style.margin="20px"*/

//we will call pokemon API



/*Promise(console.log("Hi"))
.then(()=>console.log("Waiting for Her"))
.catch(()=>console.log("send someone else"))
div.forEach((number)=>{
    
    number.addEventListener("click",()=>{
        number.classList.add("class1")
        if(start=true)
        {
            moves++
            console.log("kk")
           // par()
        }
        //displayimg();
        //document.getElementById("1").src=intento[mazo[1]];
        //start=true;
    })
    
})*/
imageCarts.forEach((carta)=>{
    carta.addEventListener("click",()=>{
        //carta.setAttribute("src",none)
        //displayimg();
        start=true;
    })
})
/*div.addEventListener("click",()=>{
    div.classList.add("class1")
})*/
/*span.addEventListener("click",()=>{
    span.classList.add("class1")
})*/

