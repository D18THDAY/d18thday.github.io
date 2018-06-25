// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var tableCanvas = $("#pixelCanvas");
var cells = $(".cells");



function makeGrid(column,row) {

    for (y=0; y<column; ++y){

        tableCanvas.append("<tr></tr>");
    
    }//draws the height of the grid

    for (x=0; x<row; ++x){
        $("tr").append("<td class='cells'></td>");
    }// adds some width to the grid
    
}

function refreshGrid(){

    $("tr").remove();
//this functions refreshes the grid before a new one is created by the makeGrid function once new dimensions are supplied
}



$("#sizePicker").submit(function(event){

    var h=$("#inputHeight").val(); //This line obtains the height of the grid
    var w=$("#inputWeight").val(); //This line obtains the weight of the grid

    refreshGrid(); //This ask the webpage to refresh and create a new grid each time the submit button is clicked

    makeGrid(parseInt(h),parseInt(w)); //passes the height and weight to the make grid function


    $('.cells').click(function(event){
        `     `
        color = $('#colorPicker').val(); //set the colour selection tool
        $(event.target).css('background-color',color )

    });

    event.preventDefault();
});
