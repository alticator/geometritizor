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
    $(".sidenav button").css("text-shadow", "none");
    $(buttonElement).css("text-shadow", "0px 0px 12px white");
    $(buttonElement).css("color", "white");
    $("#tab-name").text(buttonElement.innerHTML);
}

function calculate() {
    var result = "Calculation Error";
    if (currentTab == 1) {
        var x = $("#volume-x").val();
        var y = $("#volume-y").val();
        var z = $("#volume-z").val();
        var cubicmetres = engine.multiply(engine.multiply(x, y), z);
        result = '<span class="info">Using metres (m)</span><br><p>' + x + "m * " + y + "m * " + z + "m<br> = " + engine.multiply(x, y) + "m² * " + z + "m</p><h1>" + cubicmetres + 'm³</h1><span class="alternative-units">' + cubicmetres * 1000 + ' litres</span>';
    }
    else if (currentTab == 2) {
        var x = $("#area-x").val();
        var y = $("#area-y").val();
        var squaremetres = engine.multiply(x, y);
        result = '<span class="info">Using metres (m)</span><br><h1>' + squaremetres + 'm²</h1>'
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