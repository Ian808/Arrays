var maal = 8;
var array1 = [3, 5, 9];
var array2 = [1, 7, 2];
var svar = [];


for (var tal1 of array1) {
    for (var tal2 of array2) {
        var diff = maal - (tal1 + tal2);
        if (diff < 0) diff = diff * -1;
        if (diff < mindstediff) {
            svar = [[tal1, tal2]];
            mindstediff = diff;
        }
        else if (diff === mindstediff)
        answer.push([tal1, tal2])
    
    }
}
console.log(answer);


