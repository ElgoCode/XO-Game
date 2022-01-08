






let canStop = false


function update(){
    if(canStop){
        console.log("i can stop")
        return
    }
    console.log("i can not stop")
    requestAnimationFrame(update)
}

update()







