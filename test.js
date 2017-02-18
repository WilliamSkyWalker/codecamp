/**
 * Created by williamda on 2017/1/18.
 */
array = [1, 2, 3, 4, 5]
function sortNum(a, b) {
    return b - a;
}
console.log(array.sort(sortNum(1, 1)));

json.forEach(
    function (val) {
        var keys = Object.keys(val);
        html += "<div class = 'cat'>";
        keys.forEach(function (key) {
                html += "<b>" + key + "</b>: " + val[key] + "<br>";
            }
        );
        html += "</div><br>";
    });
