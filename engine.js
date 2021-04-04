// Alticator 2021
// Geometritizor Engine

var engine = {
    multiply: function(a, b) {
        var first = a * 1000000000000;
        var second = b * 1000000000000;
        var multiplication = first * second;
        var result = multiplication / 1000000000000000000000000;
        return result;
    },
    add: function(a, b) {
        var first = a * 1000000000000;
        var second = b * 1000000000000;
        var addition = first + second;
        var result = addition / 1000000000000;
        return result;
    }
}