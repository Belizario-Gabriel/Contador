function enter() {
    var comeco = window.document.getElementById ('n00')
    var fini = window.document.getElementById ('n01')
    var pass = window.document.getElementById ('n03')
    var c = Number (comeco.value)
    var f = Number (fini.value)
    var p = Number (pass.value)
    var information = window.document.getElementById ('result')
    information.innerHTML = ``


    if (comeco.value.length == 0 || fini.value.length == 0 || pass.value.length == 0) {
        window.alert('ERRO!! Complete todas as lacunas para ver o resultado')} 
    
    else {
        if (p > 0){
        if (f > c){
    for(var x = c; x <= f; x += p) {
        information.innerHTML += `\u{1F449} ${x}` //No js usa-se o código do emoji deste jeito e não assim: U+1F449 
    }} else {
        for(var x = c; x >= f; x -= p) {
            information.innerHTML += `\u{1F449} ${x}` //No js usa-se o código do emoji deste jeito e não assim: U+1F449 
        
    }}

    information.innerHTML += ` \u{1F3F3}`
    }
    else {
        window.alert('Os passos só aceitam números positivos!!!')
    }
}
    
    }

//while (x <= fin) {
   // information.innerHTML = `Número ${x}`
   // x++
//}