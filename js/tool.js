// console.log('works');

/*
rendere interattiva la pagina usando javascript
*/

/*
1 Possibilità di mettere il nome del burger e alert se non inserito
2 Selezionare i punti e obbligare alla selezione
3 Calcolo del prezzo sulla base della selezione
4 Possibilità di calcolare uno sconto sulla base dei coupon (presi da un array)
*/

/*
Reference
*/

var btn = document.getElementById('button');
var nameBurger = document.getElementById('name');
var ingredients = document.getElementsByClassName('ingredient-checkbox');
// console.log(ingredients);



/*
Calc price
*/

btn.addEventListener('click', function(){
    //console.log('hello world');
    var name = nameBurger.value.trim();
    //console.log(name);  

    /*
    check sul nome
    */
    if( name === null || name.length<1 ){
        alert('Non hai inserito un nome per il tuo burger!');

    } else {
        //1 questo è il prezzo base del panino
        var price = 50;

        for(var i = 0; i < ingredients.length; i ++){
            var ingredientCheck = ingredients[i];

            //console.log(ingredientCheck);

            //2 controllo sul check degli ingredienti
            if(ingredientCheck.checked){
                //console.log(ingredientCheck.value);
            }
        }
        
    }

});