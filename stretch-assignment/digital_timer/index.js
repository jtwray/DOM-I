const counterContent={
    digits: {
        
        'secondTens': 'i',
        'secondones': 'i',
        'msHundreds': 'i',
        'msTens': 'i',

    }
    
}
let now=new Date().getTime();
let inTenSecs=now 


const redInTenSeconds=(){
   
    setInterval( function () {Array.from( document.getElementsByClassName( 'digits' ) ).forEach( ( i ) => ( i.style.color='red' ) )}, 10000 );
    
}