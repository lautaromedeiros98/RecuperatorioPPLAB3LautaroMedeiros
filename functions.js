class Vehiculo{
    id;
    modelo;
    anoFabricacion;
    velocidadMaxima;
    constructor(id, modelo, anoFabricacion, velocidadMaxima){
        this.id=id;
        this.modelo=modelo;
        this.anoFabricacion=anoFabricacion;
        this.velocidadMaxima=velocidadMaxima;
    }
    toString(){
        return "";
    }
    toStringRow(){
        return '<td class="id">'+this.id+'</td><td class="modelo">'+this.modelo+'</td><td class="anoFabricacion">'+this.anoFabricacion+'</td><td class="velocidadMaxima">'+this.velocidadMaxima+'</td>';
    }
}
class Aereo extends Vehiculo{
    alturaMaxima;
    autonomia;
    constructor(id,modelo,anoFabricacion,velocidadMaxima,alturaMaxima,autonomia){
        super(id,modelo,anoFabricacion,velocidadMaxima,alturaMaxima,autonomia);
        this.alturaMaxima=alturaMaxima;
        this.autonomia=autonomia;

    }
    toString(){
        return "";
    }
    toStringRow(){
        return '<tr>'+super.toStringRow()+'<td class="alturaMaxima">'+this.alturaMaxima+'</td><td class="autonomia">'+this.autonomia+'</td><td class="cantidadPuertas">-</td><td class="cantidadRuedas">-</td></tr>';
    }
}
class Terrestre extends Vehiculo{
    cantidadPuertas;
    cantidadRuedas;
    constructor(id,modelo,anoFabricacion,velocidadMaxima,cantidadPuertas,cantidadRuedas){
        super(id,modelo,anoFabricacion,velocidadMaxima);
        this.cantidadPuertas=cantidadPuertas;
        this.cantidadRuedas=cantidadRuedas;
    }
    toString(){
        return '';
    }
    toStringRow(){
        return '<tr>'+super.toStringRow()+'<td class="alturaMaxima">'+'-'+'</td><td class="autonomia">'+'-'+'</td><td class="cantidadPuertas">'+this.cantidadPuertas+'</td><td class="cantidadRuedas">'+this.cantidadRuedas+'</td></tr>';
    }
}
const datos=JSON.parse('[{"id":14, "modelo":"Ferrari F100", "anoFab":1998, "velMax":400, "cantPue":2, "cantRue":4},{"id":51, "modelo":"DodgeViper", "anoFab":1991, "velMax":266, "cantPue":2, "cantRue":4},{"id":67, "modelo":"Boeing CH-47 Chinook","anoFab":1962, "velMax":302, "altMax":6, "autonomia":1200},{"id":666, "modelo":"Aprilia RSV 1000 R","anoFab":2004, "velMax":280, "cantPue":0, "cantRue":2},{"id":872, "modelo":"Boeing 747-400", "anoFab":1989,"velMax":988, "altMax":13, "autonomia":13450},{"id":742, "modelo":"Cessna CH-1 SkyhookR", "anoFab":1953,"velMax":174, "altMax":3, "autonomia":870}]');

let datosCargados=new Array();
for(let i=0;i<datos.length;i++){
    if(datos[i].altMax != undefined && datos[i].autonomia != undefined && datos[i].cantRue == undefined && datos[i].cantPue == undefined){
        let nuevo=new Aereo(datos[i].id, datos[i].modelo,datos[i].anoFab,datos[i].velMax, datos[i].altMax,datos[i].autonomia);
        datosCargados.push(nuevo);
    }
    else{
        let nuevo=new Terrestre(datos[i].id, datos[i].modelo,datos[i].anoFab,datos[i].velMax, datos[i].cantRue,datos[i].cantPue);
        datosCargados.push(nuevo);
    }
}
console.log(datosCargados);

const tabla=document.getElementById('tablaMain');
console.log(tabla);
function CargarAereo(){
for(let i=0;i<datosCargados.length;i++)
{
    if(datosCargados[i] instanceof Aereo)
    {
        tabla.insertRow(-1).innerHTML = datosCargados[i].toStringRow();
    }
}
};
function CargarTerrestres(){
for(let i=0;i<datosCargados.length;i++)
{
    if(datosCargados[i] instanceof Terrestre )
    {
        tabla.insertRow(-1).innerHTML = datosCargados[i].toStringRow();
    }
}
};
function CargarTodo(){
for(let i=0;i<datosCargados.length;i++){
    tabla.insertRow(-1).innerHTML = datosCargados[i].toStringRow();
}
};
function limpiarTabla(){
var table = document.getElementById('tablaMain');
var rowCount = table.rows.length;
for(let i=rowCount;i>1;i--){
    table.deleteRow(i -1);
}
}

CargarTodo();

function CargarSegunSeleccionActual(){
if(filtro.options[filtro.selectedIndex].value=='Aereo'){
    limpiarTabla();
    CargarAereo();
}
else if(filtro.options[filtro.selectedIndex].value=='Terrestre'){
    limpiarTabla();
    CargarTerrestres();
}
else{
   limpiarTabla();
   CargarTodo();
}
}
const filtro=document.getElementById('filtrarX');
filtro.addEventListener('change',CargarSegunSeleccionActual);
function ordenarx(nroParametro){
switch(nroParametro){
    case 1:
    datosCargados.sort((a,b)=>{
    let r=0;
    if(a._id>b._id){
        r=1
    }
    else if (a._id<b._id){
        r=-1;
    }
    return r;
     });
        break;
    case 2:
    datosCargados.sort((a,b)=>{
    let r=0;
    if(a.modelo>b.modelo){
        r=1
    }
    else if (a.modelo<b.modelo){
        r=-1;
    }
    return r;
     });
        break;
    case 3:
    datosCargados.sort((a,b)=>{
    let r=0;
    if(a.anoFabricacion>b.anoFabricacion){
        r=1
    }
    else if (a.anoFabricacion<b.anoFabricacion){
        r=-1;
    }
    return r;
     });
        break;
    case 4:
    datosCargados.sort((a,b)=>{
    let r=0;
    if(a.velocidadMaxima>b.velocidadMaxima){
        r=1
    }
    else if (a.velocidadMaxima<b.velocidadMaxima){
        r=-1;
    }
    return r;
     });
        break;
    case 5:
    datosCargados.sort((a,b)=>{
    let r=0;
    if(a.alturaMaxima>b.alturaMaxima){
        r=1
    }
    else if (a.alturaMaxima<b.alturaMaxima){
        r=-1;
    }
    return r;
     });
        break;
    case 6: 
    datosCargados.sort((a,b)=>{
    let r=0;
    if(a.autonomia>b.autonomia){
        r=1
    }
    else if (a.autonomia<b.autonomia){
        r=-1;
    }
    return r;
     });
        break;
    case 7:
    datosCargados.sort((a,b)=>{
    let r=0;
    if(a.cantidadPuertas>b.cantidadPuertas){
        r=1
    }
    else if (a.cantidadPuertas<b.cantidadPuertas){
        r=-1;
    }
    return r;
     });
        break;
    case 8:
    datosCargados.sort((a,b)=>{
    let r=0;
    if(a.cantidadRuedas>b.cantidadRuedas){
        r=1
    }
    else if (a.cantidadRuedas<b.cantidadRuedas){
        r=-1;
    }
    return r;
     });
        break;        
}
}


document.getElementById('calcularPromedio').addEventListener('click',(e)=>{
e.preventDefault();
const test =document.querySelector('section#promedios input');
console.log(test);
let resultado;
let unidades=0;
if(filtro.options[filtro.selectedIndex].value=='Aereo'){
    resultado=datosCargados.reduce((buffer,elemento)=>{
        let aux=0;
        if(elemento instanceof Aereo ){
            aux=elemento.velocidadMaxima;
        }
        return buffer+aux;
    },0);
    unidades=datosCargados.reduce((buffer,elemento)=>{
        let aux=0;
        if(elemento instanceof Aereo ){
             aux=1;
        }
        return buffer+aux;
    },0);
}
else if(filtro.options[filtro.selectedIndex].value=='Terrestre'){
resultado=datosCargados.reduce((buffer,elemento)=>{
    let aux=0;
    if(elemento instanceof Terrestre ){
            aux= elemento.velocidadMaxima;
    }
    return buffer+aux;
},0);
unidades=datosCargados.reduce((buffer,elemento)=>{
    let aux=0;
        if(elemento instanceof Terrestre ){
            aux=1;
        }
        return buffer+aux;
},0);

}
else{
resultado=datosCargados.reduce((buffer,elemento)=> buffer+elemento.velocidadMaxima,0);
unidades=datosCargados.length;
}

test.value=resultado/unidades;
});
function OcultarColumna(SelectorDeCheckbox, ClaseAControlar)
{
document.querySelector(SelectorDeCheckbox).addEventListener('change',()=>{
let estoySelecionado=document.querySelector(SelectorDeCheckbox).checked;

const todos=document.querySelectorAll(ClaseAControlar);
console.log(todos);
if(!estoySelecionado){
    
    for(let i=0;i<todos.length;i++){
        todos[i].className+=' invisible';
    }
}
else{
    for(let i=0;i<todos.length;i++){
        todos[i].classList.remove('invisible');
    }
}
});
}
OcultarColumna('#ckId','.id');
OcultarColumna('#ckmodelo','.modelo');
OcultarColumna('#ckanoFabriacion','.anoFabricacion');
OcultarColumna('#ckvelocidadMaxima',".velocidadMaxima");
OcultarColumna('#ckalturaMaxima','.alturaMaxima');
OcultarColumna('#ckautonomia','.autonomia');
OcultarColumna('#ckcantidadPuertas','.cantidadPuertas');
OcultarColumna('#ckcantidadRuedas','.cantidadRuedas');


document.querySelector('button#agregar').addEventListener('click',e=>{
e.preventDefault();
OcultarUMostarFormulario();
});

function CargarFormularioSegunTypoUsuario(){
const myform=document.forms['fAgregar'];

var input = document.createElement("input");
var input2=document.createElement("input");

input.id="myInputD1";
input2.id="myInputD2";

let i1=document.getElementById("myInputD1");
let i2=document.getElementById("myInputD2");

if(i1!=undefined && i2!=undefined && i3!=undefined){
    myform.removeChild(i1);
    myform.removeChild(i2);

}
let filtro=document.querySelector('form select#tipox');
if(filtro.options[filtro.selectedIndex].value == "Aereo"){
    input.name="alturaMaxima";
    input.placeholder="Altura maxima";
    
    input2.name= "autonomia";
    input2.placeholder="Autonomia";
}
else{
    input.name="cantidadPuertas";
    input.placeholder="Cantidad de puertas";
    
    input2.name= "canitdadRuedas";
    input2.placeholder="Cantidad de ruedas";
}
myform.appendChild(input);
myform.appendChild(input2);

}
CargarFormularioSegunTypoUsuario();
document.querySelector('form select#tipox').addEventListener('change',CargarFormularioSegunTypoUsuario);
function AltaVehiculo(){
const myform=document.forms['fAgregar'];
var nuevo;
if(window.sessionStorage.getItem('unId')==undefined){
    window.sessionStorage.setItem('unId',1000);
}
let idRecuperado=window.sessionStorage.getItem('unId');
idRecuperado++;
if(myform.tipo.options[myform.tipo.selectedIndex].value=="Aereo"){
    nuevo= new Aereo(idRecuperado, myform.modelo.value, myform.anoFabricacion.value, myform.velocidadMaxima.value, myform.alturaMaxima.value, myform.autonomia.value);    
}
else{
    nuevo= new Terrestre(idRecuperado, myform.modelo.value, myform.anoFabricacion.value, myform.velocidadMaxima.value, myform.cantidadPuertas.value, myform.cantidadRuedas.value);    
}
window.sessionStorage.setItem('unId',idRecuperado);
datosCargados.push(nuevo); 
}
document.getElementById('alta').addEventListener('click',(e)=>{
e.preventDefault();
let error=false;

const myform=document.forms['fAgregar'];
if(myform.nombre.value=="") {
        error=true;
        myform.nombre.style.borderColor= 'black';
}else {
    myform.nombre.style.borderColor= 'inherit';
}
if(myform.apellido.value=="") {
        error=true;
        myform.apellido.style.borderColor= 'black';
}else {
    myform.apellido.style.borderColor= 'inherit';
}
if(myform.edad.value=="") {
        error=true;
        edad.velMax.style.borderColor= 'black';
}else {
    myform.edad.style.borderColor= 'inherit';
}
if(myform.tipo.options[myform.tipo.selectedIndex].value=="Vehiculo"){
    if(myform.modelo.value=="") {
        error=true;
        myform.modelo.style.borderColor= 'black';
    }else {
        myform.modelo.style.borderColor= 'inherit';
    }
    if(myform.anoFabricacion.value=="") {
        error=true;
        myform.anoFabricacion.style.borderColor= 'black';
    }else {
        myform.anoFabricacion.style.borderColor= 'inherit';
    }
    if(myform.velocidadMaxima.value=="") {
        error=true;
        myform.velocidadMaxima.style.borderColor= 'black';
    }else {
        myform.velocidadMaxima.style.borderColor= 'inherit';
    }
}
else{
    if(myform.titulo.value=="") {
        error=true;
        myform.titulo.style.borderColor= 'black';
    }else {
        myform.titulo.style.borderColor= 'inherit';
    }
    if(myform.facultad.value=="") {
        error=true;
        myform.facultad.style.borderColor= 'black';
    }else {
        myform.facultad.style.borderColor= 'inherit';
    }
    if(myform.anoGraduacion.value=="") {
        error=true;
        myform.anoGraduacion.style.borderColor= 'black';
    }else {
        myform.anoGraduacion.style.borderColor= 'inherit';
    }
}

if(!error){
    AltaVehiculo();
    CargarSegunSeleccionActual();
    mostrarFilaSeleccionada();
    limpiarFormulario();
    OcultarUMostarFormulario();
}
});
function limpiarFormulario(){
const myform=document.forms['fAgregar'];
myform.id.value="";
myform.nombre.value="";
myform.apellido.value="";
myform.edad.value="";

if(myform.tipo.options[myform.tipo.selectedIndex].value=="Vehiculo"){
    myform.modelo.value='';
    myform.anoFabricacion.value="";
    myform.velocidadMaxima.value="";
}
else{
    myform.titulo.value="";
    myform.facultad.value="";
    myform.anoGraduacion="";
}
}
function mostrarFilaSeleccionada(){
var table = document.getElementById('tablaMain');
for(let i=1;i<table.rows.length;i++){
    table.rows[i].addEventListener('click',(e)=>{
        const boton=document.querySelector('button#agregar');

        const desplegable=document.querySelector("section#desplegable");
        console.log(boton);
        if(boton.innerHTML=="AGREGAR"){
            desplegable.style.display="flex";
            boton.innerHTML="Cancelar";
        }
        const myform=document.forms['fAgregar'];
        myform.id.value=table.rows[i].cells[0].innerHTML;
        myform.nombre.value=table.rows[i].cells[1].innerHTML;
        myform.apellido.value=table.rows[i].cells[2].innerHTML;
        myform.edad.value=table.rows[i].cells[3].innerHTML;
        if(table.rows[i].cells[4].innerHTML=="-"){
            myform.tipo.selectedIndex=1;
        }
        else{
            myform.tipo.selectedIndex=0;
        }
        CargarFormularioSegunTypoUsuario();
        if(myform.tipo.options[myform.tipo.selectedIndex].value=="Aereo"){
            myform.modelo.value=table.rows[i].cells[4].innerHTML;
            myform.anoFabricacion.value=table.rows[i].cells[5].innerHTML;
            myform.velocidadMaxima.value=table.rows[i].cells[6].innerHTML;
        }
        else if(myform.tipo.options[myform.tipo.selectedIndex].value=="Terrestre"){
            myform.titulo.value= table.rows[i].cells[7].innerHTML;
            myform.facultad.value= table.rows[i].cells[8].innerHTML;
            myform.anoGraduacion.value= table.rows[i].cells[8].innerHTML;

        }
        
    })
}
}
mostrarFilaSeleccionada();


function saveChanges(){
const myform=document.forms['fAgregar'];

if(myform.id.value!=""){

    for(let i=0;i<datosCargados.length;i++){
        if(datosCargados[i].id==myform.id.value){
           
            datosCargados[i].nombre = myform.nombre.value;
            datosCargados[i].apellido = myform.apellido.value;
            datosCargados[i].edad=myform.edad.value;
            if(myform.tipo.options[myform.tipo.selectedIndex].value=="Vehiculo"){
           
                datosCargados[i].modelo=myform.modelo.value;
                datosCargados[i].anoFabricacion=myform.anoFabricacion.value;
                datosCargados[i].velocidadMaxima=myform.velocidadMaxima.value;
            }
            else{
                datosCargados[i].titulo=myform.titulo.value;
                datosCargados[i].facultad=myform.facultad.value;
                datosCargados[i].anoGraduacion=myform.anoGraduacion.value;
            }
            break;
        }
    }     
}
}
document.getElementById('editar').addEventListener('click',e=>{
e.preventDefault();
const myform=document.forms['fAgregar'];
saveChanges();
CargarSegunSeleccionActual();
mostrarFilaSeleccionada();
alert("Guardado");
limpiarFormulario();
OcultarUMostarFormulario();

});
function OcultarUMostarFormulario(){
const boton=document.querySelector('button#agregar');
const desplegable=document.querySelector("section#desplegable");
        console.log(boton);
        if(boton.innerHTML=="AGREGAR"){
            desplegable.style.display="flex";
            boton.innerHTML="Cancelar";
            limpiarFormulario();
        }
        else{
            boton.innerHTML="AGREGAR";
            desplegable.style.display="none";
            limpiarFormulario();
        }
}
function EliminarVehiculo(){
const myform=document.forms['fAgregar'];

if(myform.id.value!=""){

    for(let i=0;i<datosCargados.length;i++){
        if(datosCargados[i].id==myform.id.value){
            datosCargados.splice(i,i);
            break;
            return true;
        }
    }     
}
}
document.getElementById('delete').addEventListener('click',(e)=>{
e.preventDefault();
EliminarVehiculo();
CargarSegunSeleccionActual();
mostrarFilaSeleccionada();
if(EliminarVehiculo){alert('Eliminado')}
limpiarFormulario();
OcultarUMostarFormulario();
});
function OrdenarArrayXmodelo(){
    datosCargados.sort((a,b)=>{
    if(a.modelo>b.modelo){
        return 1;
        }
        else if(a.modelo<b.modelo){
            return -1;
        }
        else{
            return 0;
        }
    })
}
function OrdenarArrayXId(){
datosCargados.sort((a,b)=>{
    if(a.id>b.id){
        return 1;
    }
    else if(a.id<b.id){
        return -1;
    }
    else{
        return 0;
    }
})
}
function OrdenarArrayXanoFabricacion(){
datosCargados.sort((a,b)=>{
    if(a.anoFabricacion>b.anoFabricacion){
        return 1;
    }
    else if(a.anoFabricacion<b.anoFabricacion){
        return -1;
    }
    else{
        return 0;
    }
})
}
function OrdenarArrayXvelocidadMaxima(){
datosCargados.sort((a,b)=>{
    if(a.velocidadMaxima>b.velocidadMaxima){
        return 1;
    }
    else if(a.velocidadMaxima<b.velocidadMaxima){
        return -1;
    }
    else{
        return 0;
    }
})
}
function OrdenarArrayXalturaMaxima(){
datosCargados.sort((a,b)=>{
    if(a.alturaMaxima>b.alturaMaxima){
        return 1;
    }
    else if(a.alturaMaxima<b.alturaMaxima){
        return -1;
    }
    else{
        return 0;
    }
})
}
function OrdenarArrayXautonomia(){
datosCargados.sort((a,b)=>{
    if(a.autonomia>b.autonomia){
        return 1;
    }
    else if(a.autonomia<b.autonomia){
        return -1;
    }
    else{
        return 0;
    }
})
}
function OrdenarArrayXcantidadPuertas(){
datosCargados.sort((a,b)=>{
    if(a.cantidadPuertas>b.cantidadPuertas){
        return 1;
    }
    else if(a.cantidadPuertas<b.cantidadPuertas){
        return -1;
    }
    else{
        return 0;
    }
})
}
function OrdenarArrayXcantidadRuedas(){
datosCargados.sort((a,b)=>{
    if(a.cantidadRuedas>b.cantidadRuedas){
        return 1;
    }
    else if(a.cantidadRuedas<b.cantidadRuedas){
        return -1;
    }
    else{
        return 0;
    }
})
}
function OrdenarArrayXPosicion(asendente){
    datosCargados.sort((a,b)=>{
    if(a.anoFabricacion>b.anoFabricacion){
        return 1;
    }
    else if(a.anoFabricacion<b.anoFabricacion){
        return -1;
    }
    else{
        return 0;
    }
});

}

document.getElementById("Omodelo").addEventListener('click',()=>{
OrdenarArrayXmodelo();
limpiarTabla();
CargarSegunSeleccionActual();
});
document.getElementById("OId").addEventListener('click',()=>{
OrdenarArrayXId();
limpiarTabla();
CargarSegunSeleccionActual();
document.getElementById("OId").style.borderColor= 'black';
if(document.getElementById("OId").style.borderColor=='black'){
    document.getElementById("OId").style.borderColor= 'white';
}
});
document.getElementById("OanoFabricacion").addEventListener('click',()=>{
OrdenarArrayXanoFabricacion();
limpiarTabla();
CargarSegunSeleccionActual();
});
document.getElementById("OvelocidadMaxima").addEventListener('click',()=>{
OrdenarArrayXvelocidadMaxima();
limpiarTabla();
CargarSegunSeleccionActual();
});
document.getElementById("OalturaMaxima").addEventListener('click',()=>{
OrdenarArrayXalturaMaxima();
limpiarTabla();
CargarSegunSeleccionActual();
});
document.getElementById("Oautonomia").addEventListener('click',()=>{
OrdenarArrayXautonomia();
limpiarTabla();
CargarSegunSeleccionActual();
});
document.getElementById("OcantidadPuertas").addEventListener('click',()=>{
OrdenarArrayXcantidadPuertas();
limpiarTabla();
CargarSegunSeleccionActual();
});
document.getElementById("OcantidadRuedas").addEventListener('click',()=>{
OrdenarArrayXcantidadRuedas();
limpiarTabla();
CargarSegunSeleccionActual();
});
