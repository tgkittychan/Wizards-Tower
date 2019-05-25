

/* Sorts inventory. Call it like this: <<set $wardrobe.sort(sortObjects($wardrobe))>>*/
window.sortObjects = function(inventory){
    inventory.sort(function(a, b){
       var x = a.name.toLowerCase(); 
       var y = b.name.toLowerCase(); 
       if(x < y){return -1;}
       if(x > y){return 1;}
       return 0;
    });
}