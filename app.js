// Alticator 2021
// Geometritizor

var uiElements;
var currentTab = 1;

function closeMenubar() {
    uiElements.menubar.style.width = "0";
    uiElements.menubar.style.padding = "0";
    uiElements.container.style.marginLeft = "0";
    uiElements.menuButton.style.visibility = "visible";
}

function showMenubar() {
    uiElements.menubar.style.width = "200px";
    uiElements.menubar.style.padding = "5px";
    uiElements.container.style.marginLeft = "200px";
    uiElements.menuButton.style.visibility = "hidden";
}

function tab(tabNumber, buttonElement) {
    currentTab = tabNumber;
    $(".tab").hide();
    $("#tab-" + tabNumber).show();
    $(buttonElement).css("text-shadow", "0px 0px 15px magenta");
    $(buttonElement).css("color", "white");
    $("#tab-name").text(buttonElement.innerHTML);
}

function calculate() {
    var result = "Calculation Error";
    if(currentTab == 1) {
        var x = $("#volume-x").val();
        var y = $("#volume-y").val();
        var z = $("#volume-z").val();
        var cubicmeters = multiply(multiply(x, y), z);
        result = '<span class="info">Using meters (m)</span><br><p>' + x + "m * " + y + "m * " + z + "m<br> = " + multiply(x, y) + "m² * " + z + "m</p><h1>" + cubicmeters + 'm³</h1><span class="alternative-units">' + cubicmeters * 1000 + ' litres</span>';
    }
    $("#results").html(result);
}

$(document).ready(function() {
    uiElements = {
        menubar: document.getElementById("menubar"),
        container: document.getElementById("container"),
        menuButton: document.getElementById("menu-button")
    }
    $("#internet-error").hide();
    tab(1, document.getElementById("tab-1-button"));
});