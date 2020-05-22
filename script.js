// Displays the current date & time in the "CurrentDate" field 
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$(".currentDate").text(currentDate);
var currentHour = moment().format("h");

// When the user clicks the save button to the right of the current input field, the data is saved to local storage.
// var save9 = 
$(".fa9").click(function(){
    var task9Val = $("#tasks9").val();
    console.log(task9Val);
    var save9 = $("<p>").text(task9Val);
    $(".9amTasks").append(save9);
    $("#tasks9").val("");
});

$(".fa10").click(function(){
    var task10Val = $("#tasks10").val();
    console.log(task10Val);
    var save10 = $("<p>").text(task10Val);
    $(".10amTasks").append(save10);
    $("#tasks10").val("");
});

$(".fa11").click(function(){
    var task11Val = $("#tasks11").val();
    console.log(task11Val);
    var save11 = $("<p>").text(task11Val);
    $(".11amTasks").append(save11);
    $("#tasks11").val("");
});

$(".fa12").click(function(){
    var task12Val = $("#tasks12").val();
    console.log(task12Val);
    var save12 = $("<p>").text(task12Val);
    $(".12pmTasks").append(save12);
    $("#tasks12").val("");
});

$(".fa1").click(function(){
    var task1Val = $("#tasks1").val();
    console.log(task1Val);
    var save1 = $("<p>").text(task1Val);
    $(".1pmTasks").append(save1);
    $("#tasks1").val("");
});

$(".fa2").click(function(){
    var task2Val = $("#tasks2").val();
    console.log(task2Val);
    var save2 = $("<p>").text(task2Val);
    $(".2pmTasks").append(save2);
    $("#tasks2").val("");
});

$(".fa3").click(function(){
    var task3Val = $("#tasks3").val();
    console.log(task3Val);
    var save3 = $("<p>").text(task3Val);
    $(".3pmTasks").append(save3);
    $("#tasks3").val("");
});

$(".fa4").click(function(){
    var task4Val = $("#tasks4").val();
    console.log(task4Val);
    var save4 = $("<p>").text(task4Val);
    $(".4pmTasks").append(save4);
    $("#tasks4").val("");
});

$(".fa5").click(function(){
    var task5Val = $("#tasks5").val();
    console.log(task5Val);
    var save5 = $("<p>").text(task5Val);
    $(".5pmTasks").append(save5);
    $("#tasks5").val("");
});

// Function that color codes the background based on the time of entry.

$(".row").each(function(i, obj){
    var datahour= $(this).attr("data-hour");
    if (currentHour === datahour) {
        $(this).css("backgroundColor", "red");

    }
    else if (currentHour > datahour) {
        $(this).css("backgroundColor", "gray");

    }

    else if (currentHour < datahour) {
        $(this).css("backgroundColor", "green");

    }

    console.log(datahour);

    // if (currentHour >= .attr() ) {
    //     console.log("yes");
    //     $(".row").css("backgroundColor", "green");
    // }
    // else {
    //     console.log("no");
    //     $(".row").css("backgroundColor", "grey");
    // }
})



$(".fa11").click(function(){
    console.log($("#tasks11").val());
});


// $(document).ready(function () {
