// // Enigma

// let plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
// let encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

// // var text = document.getElementById("clearMessage").value;

// var searchIndex = (str, value) => {
//     for (var i = 0; i < str.length ; i++) {
//         if (str[i] === value) return i;
//     }
//     return -1;
// }

// var transformText = (text) => {
//     var result = "";
//     for (var i = 0; i < text.length; i++) {
//         var indexPosition = searchIndex(plainAlphabet, text[i]);
//         if (indexPosition > -1) {
//             result = result + encryptedAlphabet[indexPosition];
//             console.log(result);
//         } else {
//             result = result + text[i];
//         }
//     }
//     return result;
// }

// console.log(transformText(plainAlphabet));

// var transformText2 = (text) => {
//     var result = "";
//     for (var i = 0; i < text.length; i++) {
//         var indexPosition = searchIndex(encryptedAlphabet, text[i]);
//         if (indexPosition > -1) {
//             result = result + plainAlphabet[indexPosition];
//         } else {
//             result = result + text[i];
//         }
//         console.log(result, "\n")
//     }
//     return result;
// }

// // console.log("Hola");

// document.getElementById("button-encrypted").addEventListener("click", () => {
//     var encrypted = transformText(document.getElementById('clear-message').value);
//     document.getElementById('encrypted-message').value = encrypted;
// });

// document.getElementById("button-decrypt").addEventListener("click", () => {
//     var decrypt = transformText2(document.getElementById('encrypted-message').value);
//     document.getElementById('clear-message').value = decrypt;
// });


// Prueba - meter todos los parámetros

// OPCIONAL

// USAR EL INDEX OF PARA RESOLVER EL EJERCICIO

// 

// // Enigma

let plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
let encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

// var text = document.getElementById("clearMessage").value;

/// FUNCTION CON INDEXOF

var searchIndex = (str, value) => {
    var index = str.indexOf(value);
    return index;
}


var transformText = (text) => {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var indexPosition = searchIndex(plainAlphabet, text[i]);
        if (indexPosition > -1) {
            result = result + encryptedAlphabet[indexPosition];
            // console.log(result);
        } else {
            result = result + text[i];
        }
    }
    return result;
}

// console.log(transformText(plainAlphabet));

var transformText2 = (text) => {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var indexPosition = searchIndex(encryptedAlphabet, text[i]);
        if (indexPosition > -1) {
            result = result + plainAlphabet[indexPosition];
        } else {
            result = result + text[i];
        }
        // console.log(result, "\n")
    }
    return result;
}

document.getElementById("button-encrypted").addEventListener("click", () => {
    var encrypted = transformText(document.getElementById('clear-message').value);
    document.getElementById('encrypted-message').value = encrypted;
});

document.getElementById("button-decrypt").addEventListener("click", () => {
    var decrypt = transformText2(document.getElementById('encrypted-message').value);
    document.getElementById('clear-message').value = decrypt;
});