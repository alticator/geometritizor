// Alticator 2021
// Geometritizor Engine

var engine = {
    multiply: function(a, b) {
        var correctionFactor = 10;
        var result = (a * correctionFactor) * (b * correctionFactor) / (correctionFactor * correctionFactor);
        return result;
    },
    add: function(a, b) {
        var correctionFactor = 10;
        var result = ((a * correctionFactor) + (b * correctionFactor)) / (correctionFactor);
        return result;
    }
}