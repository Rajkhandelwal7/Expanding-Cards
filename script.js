const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    //removeActiveClasses()
    panel.addEventListener('click', () => {
     
       let load=0;
       let int =setInterval(blurring,20)
       function blurring(){
    load++;
    if(load>99)
    {
        clearInterval(int)
    }
    //loadtext.innerText=`${load}% `
    //loadtext.style.opacity = scale(load,0,100,1,0)
    panel.style.filter=`blur(${scale(load, 0, 100, 30, 0)}px)`

}
// stack overflow
const scale=(num ,in_min,in_max,out_min,out_max)=>{
    return (num-in_min)*(out_max-out_min)/(in_max-in_min)+out_min;
} 
       
  removeActiveClasses()
        panel.classList.add('active')
    })
    panel.addEventListener('dblclick', () => {
        removeActiveClasses()
        panel.classList.remove('active')
    })

})


function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// function hello() {

// }

