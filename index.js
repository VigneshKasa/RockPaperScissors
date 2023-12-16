    let x=(Math.floor(Math.random() * 3)+1);
    let img="NA"
            if(x==1){
                img="✊🏼"
            }
            if(x==2){
                img="🖐🏼"
            }
            if(x==3){
                img="✌🏼"
            }
    function check(a){
        //1==rock
        //2==paper
        //3==scissors
     if((a==1 && x==3)||(a==2 && x==1)||(a==3 && x==2)){
        if((a==1)){
            let sound=new Audio("rock.mp3")
            sound.play()
        }
        if((a==3)){
            let sound=new Audio("scissors.mp3")
            sound.play()
        }
        if((a==2)){
            let sound=new Audio("paper.mp3")
            sound.play()
        }
        setTimeout(() => {
            let sound=new Audio("win.mp3")
            sound.play()
        },1000);
        document.getElementById("result").innerHTML="You win 🏆"
        }
        
        else if((a==1 && x==2)||(a==2 && x==3)||(a==3 && x==1)){
            let sound=new Audio("lost.mp3")
            sound.play()
            document.getElementById("result").innerHTML="You Lost ❌"
            }
            else{
                    let sound=new Audio("tie.mp3")
                    sound.play()
                    document.getElementById("result").innerHTML="Tie 🙃"  
            }

            document.getElementById("msg").innerHTML="Opponent selected "+img
            document.getElementById("reload").innerHTML="Play Again !"  
    }
                
