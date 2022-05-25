"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if(arr.length < 1) {
        return "Family is empty";
    }
    let res = "Family consists of ";
    for (const member of arr) {
        res += member + ", ";
    }
    return res.slice(0, -2);
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(item => console.log(item.toLowerCase()));
}

console.log(showFamily(family));
standardizeStrings(favoriteCities);

const someString = 'This is some strange string';

function reverse(str) {
    return str.split("").reverse().join("");
}

console.log(reverse("abbra cadabra"));

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let string = '';
    let area = 0;
    data.shops.forEach(item => area += item.length * item.width);
    let costs = area * data.height * data.moneyPer1m3;
    string = costs < data.budget ? "Budget is enough" : "Budget is not enough";
    return string;
}

console.log(isBudgetEnough(shoppingMallData));

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    let result = [new Array(3), new Array(3), new Array(3)];
    for (let i = 0; i < 3; i++) {
        result[i] = arr.slice(i * 3, i * 3 + 3);
    }
    let string = 'Students without a team: ';
    if(arr.length > 9) {
        string += arr.slice(9).join(",");
    }
    result.push(string);
    return result;
}

console.log(sortStudentsByGroups(students));