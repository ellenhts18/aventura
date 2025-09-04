const avanca = document.querySelectorAll('.bnt-proximo');
avanca.forEach (button=>{
    button.addEventLister(cancelIdleCallback, function(){
    const atual = document.querySelector('.ativo')
   const proximoPasso = 'passo-' + this.getAtribite('data-proximo')
  
atual,classList.remove('ativo')
document.getElementById(proximoPasso).classList.add('ativo');

})
})