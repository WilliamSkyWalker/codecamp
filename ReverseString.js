/**
 * Created by williamda on 2017/1/30.
 */
var a = new String("not a palindrome");
function palindrome(str) {
    str = pure(str).toLowerCase();
    str2 = reverseString(str);
    console.log(str2)
    console.log(str)
    if (str2 === str)
        return true;
    else return false;
}
function reverseString(input) {
    output = input.split("");
    output = output.reverse();
    return output.join("");
}
function pure(str) {
    str = str.replace(/[^qwertyuiopasdfghjklzxcvbnm]/gi, "");

    return str;
}
function findLongestWord(str) {
    temp1 = str.split(" ");
    temp2 = temp1[0].length;
    for (var i = 0; i < temp1.length; i++) {
        if (temp1[i].length >= temp2) {
            temp2 = temp1[i].length;
        }

    }
    return temp2;
}
function titleCase(str) {
    str = str.toLowerCase();
    temp1 = str.split(" ")
    for (var i = 0; i < temp1.length; i++) {
        temp2 = temp1[i].split("");
        temp2[0] = temp2[0].toUpperCase();
        temp1[i] = temp2.join("")
        console.log(temp1)
    }
    str = temp1.join(" ")
    return str;
}
function sortNumber(a, b) {
    return b - a
}
function largestOfFour(arr) {
    // You can do this!
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].sort(sortNumber)[0]
        console.log(arr[i])


    }
    arr = arr.sort(sortNumber)[0]
    return arr;
}
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    str = str.substr(str.length - target.length, target.length) === target;
    return str;
}
function repeat(str, num) {
    // repeat after me
    var str1 = "";
    if (num <= 0) {
        str = null;
    }
    else {
        for (var i = 0; i < num; i++) {
            str1 = str1 + str;
        }
    }
    str = str1;
    return str;
}
function chunk(arr, size) {
    // Break it up.

    temp = []
    while (arr.length > size) {
        temp.push(arr.slice(0, size))
        arr = arr.slice(size)

    }
    temp.push(arr)
    arr = temp;
    return arr;
}

function mutation(arr) {
    var arr1 = arr[0].toLowerCase().split("");
    var arr2 = arr[1].toLowerCase().split("");
    var result = false
    for (var i = 0; i < arr2.length; i++) {
        result = false
        for (var j = 0;j<arr1.length;j++ ){
            if (arr2[i]==arr1[j]){
                result =true;

            }
        }
    }
    return result

}
var json = [
    {
        "id": 0,
        "imageLink": "/images/funny-cat.jpg",
        "codeNames": [
            "Juggernaut",
            "Mrs. Wallace",
            "Buttercup"
        ]
    },
    {
        "id": 1,
        "imageLink": "/images/grumpy-cat.jpg",
        "codeNames": [
            "Oscar",
            "Scrooge",
            "Tyrion"
        ]
    },
    {
        "id": 2,
        "imageLink": "/images/mischievous-cat.jpg",
        "codeNames": [
            "The Doctor",
            "Loki",
            "Joker"
        ]
    }
]

json = json.filter(function(val) {
    return (val.id += 1);
});
console.log(json);










