// Alticator 2021
// Geometritizor

var uiElements;
var currentTab = 1;
document.onkeydown = keyPress;

function keyPress(e) {
    if (e.key == "Enter" && e.ctrlKey) {
        calculate();
    }
    else if (e.key == "m" && e.ctrlKey) {
        if (uiElements.menuVisible) {
            closeMenubar();
        }
        else {
            showMenubar();
        }
    }
}

function closeMenubar() {
    uiElements.menubar.style.width = "0";
    uiElements.menubar.style.padding = "0";
    uiElements.container.style.marginLeft = "0";
    uiElements.menuButton.style.visibility = "visible";
    uiElements.menuVisible = false;
}

function showMenubar() {
    uiElements.menubar.style.width = "200px";
    uiElements.menubar.style.padding = "5px";
    uiElements.container.style.marginLeft = "200px";
    uiElements.menuButton.style.visibility = "hidden";
    uiElements.menuVisible = true;
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
        result = `<span class="info">Using metres (m)</span><br><p>${x}m * ${y}m * ${z}m<br> = ${engine.multiply(x, y)}m² * ${z}m</p><h1>${cubicmetres}m³</h1><span class="alternative-units">${cubicmetres * 1000} litre(s)</span>`;
    }
    else if (currentTab == 2) {
        var x = $("#area-x").val();
        var y = $("#area-y").val();
        var squaremetres = engine.multiply(x, y);
        result = `<span class="info">Using metres (m)</span><br><h1>${squaremetres}m²</h1>`
    }
    else if (currentTab == 3) {
        var startX = parseFloat($("#coordinates-start-x").val());
        var startY = parseFloat($("#coordinates-start-y").val());
        var endX = parseFloat($("#coordinates-end-x").val());
        var endY = parseFloat($("#coordinates-end-y").val());
        // Convert coordinates to canvas coordinates (percent)
        startX = (startX + 100) / 2;
        startY = 100 - (startY + 100) / 2;
        endX = (endX + 100) / 2;
        endY = 100 - (endY + 100) / 2;
        // Draw the line
        coordinates.ctx.lineWidth = 2;
        coordinates.ctx.strokeStyle = $("#coordinates-colour").val();
        coordinates.drawLine(startX, startY, endX, endY, "green");
        result = '<span class="info">Calculation Finished</span>';
    }
    $("#results").html(result);
}

$(document).ready(function() {
    uiElements = {
        menubar: document.getElementById("menubar"),
        container: document.getElementById("container"),
        menuButton: document.getElementById("menu-button"),
        menuVisible: true
    }
    $("#internet-error").hide();
    tab(1, document.getElementById("tab-1-button"));
    coordinates.init(document.getElementById("coordinates-canvas"));
});