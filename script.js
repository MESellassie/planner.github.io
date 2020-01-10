// Displays the current date & time in the "CurrentDate" field 
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$(".currentDate").text(currentDate);

// When the user clicks the save button to the right of the current input field, the data is saved to local storage.
// var save9 = 
$(".fa9").click(function(){
    var task9Val = $("#tasks9").val();
    console.log(task9Val);
    var save9 = $("<p>").text(task9Val);
    $(".9amTasks").append(save9);
    $(task9Val).val("");
});

$(".fa11").click(function(){
    console.log($("#tasks11").val());
});


// $(document).ready(function () {
