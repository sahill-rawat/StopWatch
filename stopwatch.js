function update(ref, limit, operation)
{
    for(let i=0; i<ref.length; i++)
    {
        let timeUpdated = (operation == "minus") ? ((parseInt(ref[i].innerHTML)-1)%limit) : ((parseInt(ref[i].innerHTML)+1)%limit);
        if (timeUpdated < 0)    timeUpdated = limit-1;
        if (timeUpdated.toString().length == 1)    ref[i].innerHTML = "0"+timeUpdated.toString();
        else    ref[i].innerHTML = timeUpdated,toString();
    }
}


$("#btn1plus").click(()=> 
{
    let hrsshow = document.querySelectorAll("#hrs");
    update(hrsshow, 24, "add");
});

$("#btn2plus").click(()=> 
{
    let minshow = document.querySelectorAll("#min");
    update(minshow, 60, "add");
});

$("#btn3plus").click(()=> 
{
    let secshow = document.querySelectorAll("#sec");
    update(secshow, 60, "add");
});

$("#btn1minus").click(()=> 
{
    let hrsshow = document.querySelectorAll("#hrs");
    update(hrsshow, 24, "minus");
});

$("#btn2minus").click(()=> 
{
    let minshow = document.querySelectorAll("#min");
    update(minshow, 60, "minus");
});

$("#btn3minus").click(()=> 
{
    let secshow = document.querySelectorAll("#sec");
    update(secshow, 60, "minus");
});

$("#start").click(()=> {
    if ($(".time-hr")[0].innerHTML != "00" || $(".time-min")[0].innerHTML != "00" || $(".time-sec")[0].innerHTML != "00")
    {
        $("#set-timer").toggleClass("hide");
        $("#start-timer").toggleClass("hide");
        $("#start").toggleClass("hide");
        startTimer($(".time-hr")[0].innerHTML, $(".time-min")[0].innerHTML, $(".time-sec")[0].innerHTML);
    }
    
});

$("#stop").click(()=> {

    $("#set-timer").toggleClass("hide");
    $("#start-timer").toggleClass("hide");
    $("#start").toggleClass("hide");
});

function startTimer(hr, min, sec)
{
    $("#hrs-2")[0].innerHTML = hr;
    $("#sec-2")[0].innerHTML = sec;
    $("#min-2")[0].innerHTML = min;

    let timer = setInterval(()=> {
        let sec = ((parseInt($("#sec-2")[0].innerHTML)-1)%60);
        if (sec < 0)    sec = 59;
        if( sec.toString().length == 1) sec = "0"+sec;
        else    sec = sec.toString();
        $("#sec-2")[0].innerHTML = sec;

        if(sec == "59")
        {
            let min = ((parseInt($("#min-2")[0].innerHTML)-1)%60);
            if (min < 0)    min = 59;
            if( min.toString().length == 1) min = "0"+min;
            else    min = min.toString();
            $("#min-2")[0].innerHTML = min;
        }

        if (min == "59")
        {
            let hr = ((parseInt($("#hr-2")[0].innerHTML)-1)%60);
            if(hr.toString().length == 1)   hr = "0"+hr;
            else    hr = hr.toString();
            $("#hr-2")[0].innerHTML = hr; 
        }

        if (hr == "00" && min == "00" && sec == "00")
        {
            alert("TIme is UP!!!");
            clearInterval(timer);
        }
    }, 1000);
}


