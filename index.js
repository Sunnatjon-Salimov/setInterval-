    let hour = document.querySelector("h1")

    setInterval(() => {

        let hours = new Date().getHours()
        let min = new Date().getMinutes()
        let sec = new Date().getSeconds()

        if( sec < 10){
            sec = `0${sec}`
        }else{
            sec = sec 
        }
        if( min < 10){
            min = `0${min}`
        }else{
            min = min
        }
        if( hours < 10){
            hours = `0${hours}`
        }else{
            hours = hours
        }
        hour.innerText = `${hours}:${min}:${sec}`
    }, 100)
