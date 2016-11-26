
var margenes = [];

function anadirDiv(){
    
    var anchuraPantalla = window.innerWidth;
    
    var alturaPantalla = window.innerHeight;
        
    var seguir = true;
    
    while(seguir){
        
        var coincide = false;
        
        var aleatorioTop = Math.floor(Math.random()*(alturaPantalla-200)-200) + 235;
        
        var aleatorioLeft =  Math.floor(Math.random()*(anchuraPantalla-200)-200) + 200;
        
        if(margenes.length == 0){
            margenes.push([aleatorioTop,aleatorioLeft]);
        }else{
            for(var i = 0; i < margenes.length; i++){

                      if(margenes[i][0] - aleatorioTop > 200 || aleatorioTop - margenes[i][0] > 200||
                        margenes[i][1] - aleatorioLeft > 200 || aleatorioLeft - margenes[i][1] > 200 ){
                          coincide = false;
                      }else{
                          coincide = true;
                          break;
                      }
                  

              }
            }
        
        if(coincide === false){
            margenes.push([aleatorioTop,aleatorioLeft]);
            seguir = false;
        }
        }
    nota(aleatorioTop,aleatorioLeft);
}