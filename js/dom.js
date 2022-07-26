const d = document,
$segundos = d.querySelector("#seconds"),
$tens = d.querySelector("#tens");

let clockTempo,clockSeg = 0,clockTen = 0;

d.addEventListener("DOMContentLoaded", e => {
    d.addEventListener("click", e => {
           
        if (e.target.matches("#iniciar")) {
            console.log("owo");
            
            if (e.target.value === "Iniciar") {
                e.target.value = "Detener"; 
                
                clockTempo = setInterval(() => {
                    if (clockTen === 99 ) {
                        clockSeg++;

                        if (clockSeg >= 9) {
                            $segundos.innerHTML = `${clockSeg}`;                            
                        } else {
                            $segundos.innerHTML = `0${clockSeg}`;
                        }                        
                        clockTen = 0;
                    }

                    if (clockTen >= 9){
                        $tens.innerHTML = `${clockTen}`;
                    } else { 
                        $tens.innerHTML = `0${clockTen}`;
                    }
                    
                    clockTen++;               

                    // console.log(clockHour);
                }, 10);         

            } else {
                e.target.value = "Iniciar";
                clearInterval(clockTempo);
            }
            
        }

        if (e.target.matches("#restablecer")) {
            clearInterval(clockTempo);
            clockSeg = 0,clockTen = 0;
            $segundos.innerHTML = `00`;
            $tens.innerHTML = `00`;
            d.querySelector("#iniciar").value = "Iniciar";
        }

    });

});
