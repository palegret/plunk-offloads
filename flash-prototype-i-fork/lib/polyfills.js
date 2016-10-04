(function(){
    // Polyfill for indexOf
    if (typeof Array.prototype.indexOf !== "function") {
        Array.prototype.indexOf = (item) => {
            var result = -1;

            for (var i = 0; i < this.length; i++) {
                if (item == this[i]) {
                    result = i;
                    break;
                }
            }

            return result;
        };
    }
}());