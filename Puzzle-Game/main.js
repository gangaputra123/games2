function two(){
    var one=document.getElementById("one").innerHTML
    var two=document.getElementById("two").innerHTML
    var three=document.getElementById("three").innerHTML
    var five=document.getElementById("five").innerHTML

    if(one==""){
        document.getElementById("one").innerHTML=two
        document.getElementById("two").innerHTML=""
       
    }else if(three==""){
        document.getElementById("three").innerHTML=two
        document.getElementById("two").innerHTML=""
    }else if(five==""){
        document.getElementById("five").innerHTML=two
        document.getElementById("two").innerHTML=""
    }
}
function one(){
    var one=document.getElementById("one").innerHTML
    var two=document.getElementById("two").innerHTML
    var four=document.getElementById("four").innerHTML

    if(two==""){
        document.getElementById("two").innerHTML=one
        document.getElementById("one").innerHTML=""
       
        if(document.getElementById("two").innerHTML=="2"){
            document.getElementById("game_sound").play()
            document.getElementById("won").style.display=""
        }

    }else if(four==""){
        document.getElementById("four").innerHTML=one
        document.getElementById("one").innerHTML=""
    }
}
function three(){
    var two=document.getElementById("two").innerHTML
    var three=document.getElementById("three").innerHTML
    var six=document.getElementById("six").innerHTML

    if(two==""){
        document.getElementById("two").innerHTML=three
        document.getElementById("three").innerHTML=""
    }else if(six==""){
        document.getElementById("six").innerHTML=three
        document.getElementById("three").innerHTML=""
    }
}
function four(){
    var one=document.getElementById("one").innerHTML
    var four=document.getElementById("four").innerHTML
    var five=document.getElementById("five").innerHTML
    var seven=document.getElementById("seven").innerHTML


    if(one==""){
        document.getElementById("one").innerHTML=four
        document.getElementById("four").innerHTML=""
    }else if(five==""){
        document.getElementById("five").innerHTML=four
        document.getElementById("four").innerHTML=""
    }else if(seven==""){
        document.getElementById("seven").innerHTML=four
        document.getElementById("four").innerHTML=""
    }
}
function five(){
    var two=document.getElementById("two").innerHTML
    var four=document.getElementById("four").innerHTML
    var five=document.getElementById("five").innerHTML
    var six=document.getElementById("six").innerHTML
    var eight=document.getElementById("eight").innerHTML

    if(two==""){
        document.getElementById("two").innerHTML=five
        document.getElementById("five").innerHTML=""
    }else if(six==""){
        document.getElementById("six").innerHTML=five
        document.getElementById("five").innerHTML=""
    }else if(four==""){
        document.getElementById("four").innerHTML=five
        document.getElementById("five").innerHTML=""
    }else if(eight==""){
        document.getElementById("eight").innerHTML=five
        document.getElementById("five").innerHTML=""
    }
}
function six(){
    var three=document.getElementById("three").innerHTML
    var five=document.getElementById("five").innerHTML
    var six=document.getElementById("six").innerHTML
    var nine=document.getElementById("nine").innerHTML

    if(three==""){
        document.getElementById("three").innerHTML=six
        document.getElementById("six").innerHTML=""
    }else if(five==""){
        document.getElementById("five").innerHTML=six
        document.getElementById("six").innerHTML=""
    }else if(nine==""){
        document.getElementById("nine").innerHTML=six
        document.getElementById("six").innerHTML=""
    }
}
function eight(){
    var five=document.getElementById("five").innerHTML
    var seven=document.getElementById("seven").innerHTML
    var eight=document.getElementById("eight").innerHTML
    var nine=document.getElementById("nine").innerHTML

    if(five==""){
        document.getElementById("five").innerHTML=eight
        document.getElementById("eight").innerHTML=""
    }else if(seven==""){
        document.getElementById("seven").innerHTML=eight
        document.getElementById("eight").innerHTML=""
    }else if(nine==""){
        document.getElementById("nine").innerHTML=eight
        document.getElementById("eight").innerHTML=""
    }
}
function seven(){
    var four=document.getElementById("four").innerHTML
    var seven=document.getElementById("seven").innerHTML
    var eight=document.getElementById("eight").innerHTML

    if(four==""){
        document.getElementById("four").innerHTML=seven
        document.getElementById("seven").innerHTML=""
    }else if(eight==""){
        document.getElementById("eight").innerHTML=seven
        document.getElementById("seven").innerHTML=""
    }
}
function nine(){
    var six=document.getElementById("six").innerHTML
    var eight=document.getElementById("eight").innerHTML
    var nine=document.getElementById("nine").innerHTML

    if(six==""){
        document.getElementById("six").innerHTML=nine
        document.getElementById("nine").innerHTML=""
    }else if(eight==""){
        document.getElementById("eight").innerHTML=nine
        document.getElementById("nine").innerHTML=""
    }
}

