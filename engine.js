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

var coordinates = {
    px: function(a) {
        return a / 100 * $(this.canvas).width();
    },
    init: function(elem) {
        this.canvas = elem;
        this.ctx = this.canvas.getContext("2d");
        this.w = $(this.canvas).width();
        // Ensure that the canvas is always a square
        $(this.canvas).height(this.w);
        this.ctx.lineWidth = 2;
        this.ctx.moveTo(this.px(50), 0);
        this.ctx.lineTo(this.px(50), this.px(100));
        this.ctx.stroke();
        this.ctx.moveTo(0, this.px(50));
        this.ctx.lineTo(this.px(100), this.px(50));
        this.ctx.stroke();
    },
    drawLine: function(a, b, c, d) {
        // Convert to pixels
        a = this.px(a);
        b = this.px(b);
        c = this.px(c);
        d = this.px(d);
        // Draw line
        this.ctx.moveTo(a, b);
        this.ctx.lineTo(c, d);
        this.ctx.stroke();
    }
}