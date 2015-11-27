$("#frame1").resizable({
    containment: ".wrapper"
})
$("#frame1").draggable({
    containment: ".wrapper",
    snap: true
})

$("#frame2").resizable({
    containment: ".wrapper"
})
$("#frame2").draggable({
    containment: ".wrapper",
    snap: true
})

$("#button1").click(
    function(){
        $("#iframe1").attr("src",$("#input1").val());
    }
);

$("#button2").click(
    function(){
        $("#iframe2").attr("src",$("#input2").val());
    }
);
