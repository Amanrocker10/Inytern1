function longestCommonSubstring(str1, str2) {
    var longest = "";
    var current;
    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < str2.length; j++) {
            current = "";
            for (var k = 0; k < str2.length - j && str1[i + k] === str2[j + k]; k++ ) {
                current += str1[i+k];
            }
            if (current.length > longest.length) {
                longest = current;
            }
        }
    }
    return longest;
}