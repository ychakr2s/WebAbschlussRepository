$(function () {
    'use strict';
    // HEADER: Adjust Slider Height
    var windowHeigh = $(window).height();
    var upperH = $('.upper-bar').innerHeight();
    var navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(windowHeigh - (upperH + navH));
});

function getValueUsingClass(){
    /* declare an checkbox array */
    var chkArray = [];

    /* look for all checkboes that have a class 'chk' attached to it and check if it was checked */
    $(".chk:checked").each(function() {
        chkArray.push($(this).val());
    });

    /* we join the array separated by the comma */
     var selected = JSON.stringify(chkArray);
     console.log(selected);
    $.ajax({
        contentType: "application/json",
        type: "POST",
        data: selected,
        url: "/check",
        success: function (data) {
            console.log('done');

            console.log("my data ", data);
            // alert("Salam: "+convertArrayToMatrix(data));
            // generate_table(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log('error while post');
        }
    });

    /* check if there is selected checkboxes, by default the length is 1 as it contains one single comma */
    // if(selected.length > 0){
    //     alert("You have selected " + selected);
    // }else{
    //     alert("Please at least check one of the checkbox");
    // }
}

// function sendcheckList() {
//     //var tempId = id;
//     var dataArrayToSend = $(".myCheckBox").serialize();
//
//     $.ajax({
//         // contentType: "application/json",
//         type: "POST",
//         data: dataArrayToSend,
//         url: "/editCustomer",
//         success: function (data) {
//             console.log('done');
//
//             console.log("my data ", convertArrayToMatrix(data));
//             // alert("Salam: "+convertArrayToMatrix(data));
//             generate_table(data);
//         },
//         error: function (jqXHR, textStatus, errorThrown) {
//             console.log('error while post');
//         }
//
//     });
// }





// ++++++++++++++++++++++++++ Start Change the Color if the link be clicked +++++++++++++++++++++++++++++++++++++++++
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
// ++++++++++++++++++++++++++ End Change the Color if the link be clicked +++++++++++++++++++++++++++++++++++++++++++

// ++++++++++++++++++++++++++++++ Start scroll from navbar to the determined element ++++++++++++++++++++++++++++++++++++
$('.nav-item .einfuer').click(function () {

    $('html, body').animate({

        scrollTop: $('.einf').offset().top

    }, 1000);
});

$('.nav-item .anwendun').click(function () {

    $('html, body').animate({

        scrollTop: $('.anwend').offset().top

    }, 1000);
});

$('.nav-item .exakte').click(function () {

    $('html, body').animate({

        scrollTop: $('.exakt').offset().top

    }, 1000);
});

$('.nav-item .heuristische').click(function () {

    $('html, body').animate({

        scrollTop: $('.heuristi').offset().top

    }, 1000);
});

$('.nav-item .implementier').click(function () {

    $('html, body').animate({

        scrollTop: $('.implemen').offset().top

    }, 1000);
});

$('.nav-item .observat').click(function () {

    $('html, body').animate({

        scrollTop: $('.observ').offset().top

    }, 1000);
});
// ++++++++++++++++++++++++++++++ Start Select Algorithmen ++++++++++++++++++++++++++++++++
var expanded = false;

function showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!expanded) {
        checkboxes.style.display = "block";
        expanded = true;
    } else {
        checkboxes.style.display = "none";
        expanded = false;
    }
}

// ++++++++++++++++++++++++++++++ End Select Algorithmen ++++++++++++++++++++++++++++++++++
function generateSudoku() {

    var grid = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [4, 5, 6, 7, 8, 9, 1, 2, 3],
        [7, 8, 9, 1, 2, 3, 4, 5, 6],
        [2, 3, 4, 5, 6, 7, 8, 9, 1],
        [5, 6, 7, 8, 9, 1, 2, 3, 4],
        [8, 9, 1, 2, 3, 4, 5, 6, 7],
        [3, 4, 5, 6, 7, 8, 9, 1, 2],
        [6, 7, 8, 9, 1, 2, 3, 4, 5],
        [9, 1, 2, 3, 4, 5, 6, 7, 8]
    ];

    var hGrid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    shuffle(grid);
    hideTiles(grid, hGrid);

    this.getTileNumber = function (row, col) {
        return hGrid[row][col];
    };
}

function shuffle(grid) {

    var i, j, k, temp, col, col1, col2,
        row1, row2, sub, sub1, sub2, num1, num2;

    //swap the same columns of each subsquare
    for (i = 0; i < 25; i++) {
        col = Math.floor(Math.random() * 3);
        sub1 = Math.floor(Math.random() * 3);
        sub2 = Math.floor(Math.random() * 3);
        for (j = 0; j < grid.length; j++) {
            temp = grid[j][col + sub1 * 3];
            grid[j][col + sub1 * 3] = grid[j][col + sub2 * 3];
            grid[j][col + sub2 * 3] = temp;
        }
    }

    //swap all columns within each subsquare
    for (i = 0; i < 25; i++) {
        sub = Math.floor(Math.random() * 3);
        col1 = Math.floor(Math.random() * 3);
        col2 = Math.floor(Math.random() * 3);
        while (col1 == col2) col2 = Math.floor(Math.random() * 3);
        for (j = 0; j < grid.length; j++) {
            temp = grid[j][sub * 3 + col1];
            grid[j][sub * 3 + col1] = grid[j][sub * 3 + col2];
            grid[j][sub * 3 + col2] = temp;
        }
    }

    //swap all rows within each subsquare
    for (i = 0; i < 25; i++) {

        sub = Math.floor(Math.random() * 3);
        row1 = Math.floor(Math.random() * 3);
        row2 = Math.floor(Math.random() * 3);
        while (row1 == row2) row2 = Math.floor(Math.random() * 3);
        for (j = 0; j < grid.length; j++) {
            temp = grid[sub * 3 + row1][j];
            grid[sub * 3 + row1][j] = grid[sub * 3 + row2][j];
            grid[sub * 3 + row2][j] = temp;
        }
    }

    //swap one number with another
    for (i = 0; i < 25; i++) {
        num1 = Math.floor(Math.random() * 9 + 1);
        num2 = Math.floor(Math.random() * 9 + 1);
        while (num1 == num2) num2 = Math.floor(Math.random() * 9 + 1);
        for (j = 0; j < grid.length; j++) {
            for (k = 0; k < grid[j].length; k++) {
                if (grid[j][k] == num1)
                    grid[j][k] = num2;
                else if (grid[j][k] == num2)
                    grid[j][k] = num1;
            }
        }
    }
}

function hideTiles(aGrid, hiddenGrid) {

    // Randomly hide tiles, no guarantee for a unique solution
    var numTiles, k;

    for (var c = 0; c < 9; c++) {
        for (var d = 0; d < 9; d++) {
            hiddenGrid[c][d] = aGrid[c][d];
        }
    }

    for (var i = 0; i < 4; i++) {
        numTiles = Math.floor(Math.random() * 8 + 6);
        while (numTiles > 0) {
            k = Math.floor(Math.random() * 9);
            hiddenGrid[i][k] = 0;
            hiddenGrid[8 - i][8 - k] = 0;
            numTiles--;

        }
    }

    numTiles = Math.floor(Math.random() * 4 + 2);
    while (numTiles > 0) {
        k = Math.floor(Math.random() * 4);
        hiddenGrid[4][k] = 0;
        hiddenGrid[4][8 - k] = 0;
        numTiles--;
    }
}

function generateMyOwn() {

    var hGrid = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0], //++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    this.getTileNumber = function (row, col) {
        return hGrid[row][col];
    };
}
