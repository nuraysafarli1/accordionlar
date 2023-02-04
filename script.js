const accordion = document.getElementsByClassName('accordion')
// console.log(accordion)

for(let i=0; i<accordion.length; i++){
    accordion[i].addEventListener("click",function(){
        let panel = this.nextElementSibling
        console.log(panel)

        if(panel.style.maxHeight){
            panel.style.maxHeight = null

        }
        else{
            panel.style.maxHeight = panel.scrollHeight + "px"
            console.log(panel.scrollHeight)
        }
    })
}
