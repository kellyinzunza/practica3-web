
class Posicion{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    
    string(){
        return 'X: '+this.x+' Y: '+this.y;
    }
}


class Personaje{
    constructor(nombre, forma, posicion){
        this.nombre = nombre;
        this.forma = forma;
        this.posicion = posicion;

        let tag = document.getElementById(this.nombre);
        tag.style.top = ''+posicion.y+'px';
        tag.style.right = ''+posicion.x+'px';

    }
    obtDetalles(){
        alert('Nombre: '+this.nombre+'\nForma: '+this.forma+'\nPosicion: '+this.posicion.string());
    }
} 

class Ave extends Personaje{
    
    constructor(nombre, forma, posicion, habilidad, masa){
        super(nombre, forma, posicion);
        this.habilidad = habilidad;
        this.masa = masa;
    }
    
    obtDetalles(){
        alert('Nombre: '+this.nombre+'\nForma: '+this.forma+'\nPosicion: '+this.posicion.string()+'\nHabilidad: '+this.habilidad+'\nMasa: '+this.masa);
    }
    
    volar(puerquitos){
        let tam = puerquitos.length;
        if(tam<0){
            alert('Ganaste! Ya no hay mas puerquitos');
        }
        else{
            let target = Math.floor(Math.random() * (tam + 1));
            if(target<tam)
                puerquitos[target].herir(this);
            else
                alert('Que mala suerte!!, no le atine :(');
        }
    }
}

class Pig extends Personaje{
    constructor(nombre, forma, posicion, fortaleza, puntos){
        super(nombre, forma, posicion);
        this.fortaleza = fortaleza;
        this.puntos = puntos;
        
        let pig = document.getElementById(this.nombre);
        pig.style.top = posicion.y;
        pig.style.right = posicion.x;
    }
    
    obtDetalles(){
        alert('Nombre: '+this.nombre+'\nForma: '+this.forma+'\nPosicion: '+this.posicion.string()+'\nFortaleza: '+this.fortaleza+'\nPuntos: '+this.puntos);
    }
    
    herir(ave){
        if(ave.habilidad == 'blanco')
            this.fortaleza-=(ave.masa*1.25);
        else if(ave.habilidad == 'amarillo')
            this.fortaleza-=(ave.masa*1.10);
        else if(ave.habilidad == 'negro')
            this.fortaleza-=(ave.masa*1.40);
        else
            alert('No existe el pajaro de color: '+ave.habilidad);
        
        if(this.fortaleza<=0)
            this.morir();
    }
    
    morir(){
        alert('<'+this.nombre+'>: Ohh! No!! me mataron!!!!');
    
        
    }
}

pajaro1 = new Ave('pajaro1','Grandre',new Posicion(1238,305),'negro',90);
pajaro2 = new Ave('pajaro2','Grandre',new Posicion(1170,290),'amarillo',100);
pajaro3 = new Ave('pajaro3','Grandre',new Posicion(1105,296),'blanco',150);

pig1 = new Pig('pig1','Grandre',new Posicion(190,385),600,100);
pig2 = new Pig('pig2','Pequeno',new Posicion(250,382),450,50);
pig3 = new Pig('pig3','Grandre',new Posicion(130,390),600,100);

puerquitos = [pig1, pig2, pig3];

volar = function(ave){
    if(ave == 1)
        pajaro1.volar(puerquitos);
    if(ave == 2)
        pajaro2.volar(puerquitos);
    if(ave == 3)
        pajaro3.volar(puerquitos);
}

detalle = function(ave){
    if(ave == 1)
        pajaro1.obtDetalles();
    if(ave == 2)
        pajaro2.obtDetalles();
    if(ave == 3)
        pajaro3.obtDetalles();
}

detalle2 = function(puerquitos){
    if(puerquitos == 1)
    pig1.obtDetalles();
    if(puerquitos == 2)
    pig2.obtDetalles();
    if(puerquitos == 3)
    pig3.obtDetalles();
}