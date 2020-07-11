//Objective is, given an input string and an 'anagram' string, to find all starting 
//indexes of substrings in the input string that are anagrams of the 'anagram' string.

let s = "cbaebabacd" 
let p = "abc"


//O(n^2) solution that uses hashmaps to get the frequencies of all the characters
//in the two strings. We traverse the input string using a sliding window and add
//all valid starting indices to the result.

if (!s || p.length > s.length) {
    return []
}

let result = []

let map = {}

//Hash all frequencies in p
for (let i = 0; i < p.length; i++) {
    if (map[p.charAt(i)] == undefined) {
        map[p.charAt(i)] = 1
    } else {
        map[p.charAt(i)]++
    }
}

let start = 0
let end = p.length 

//The sliding window
while (end <= s.length) {
    let sMap = {}
    
    //Hash all frequencies in the sliding window
    let substring = s.substring(start, end)
    for (let i = 0; i < substring.length; i++) {
        if (sMap[substring.charAt(i)] == undefined) {
            sMap[substring.charAt(i)] = 1
        } else {
            sMap[substring.charAt(i)]++
        }
    }
    
    //Check if the two hashmaps are the same
    if (_.isEqual(sMap, map)) {
        result.push(start)
    }
    
    start++
    end++
}

return result


//O(n_s + n_p) solution that uses an array as a 'keylock' to check every character

let result = []
let charArray = new Array(26).fill(0)

for (let i = 0; i < p.length; i++) {
    charArray[p.charCodeAt(i) - 97]++
}

let start = 0
let end = p.length

while (end <= s.length) {
    let substring = s.substring(start, end)
    let temp = charArray.slice(0)

    for (let i = 0; i < substring.length; i++) {
        temp[substring.charCodeAt(i) - 97]--
    }

    let zeroes = true
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] !== 0) {
            zeroes = false
        }
    }

    if (zeroes) {
        result.push(start)
    }

    start++
    end++
}

return result
