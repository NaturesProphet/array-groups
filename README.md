[![Build Status](https://travis-ci.org/NaturesProphet/array-groups.svg?branch=master)](https://travis-ci.org/NaturesProphet/array-groups)[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=array-groups&metric=bugs)](https://sonarcloud.io/dashboard?id=array-groups)[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=array-groups&metric=code_smells)](https://sonarcloud.io/dashboard?id=array-groups)[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=array-groups&metric=duplicated_lines_density)](https://sonarcloud.io/dashboard?id=array-groups)[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=array-groups&metric=vulnerabilities)](https://sonarcloud.io/dashboard?id=array-groups)


<p align="center">
<a href="https://sonarcloud.io/dashboard?id=array-groups" target="blank"><img src="https://sonarcloud.io/images/project_badges/sonarcloud-black.svg" alt="Sonar Cloud" /></a>
</p>

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=array-groups&metric=alert_status)](https://sonarcloud.io/dashboard?id=array-groups)[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=array-groups&metric=coverage)](https://sonarcloud.io/dashboard?id=array-groups)[![npm](https://img.shields.io/npm/v/array-groups.svg)](https://www.npmjs.com/package/array-groups)[![version@master](https://img.shields.io/github/package-json/v/NaturesProphet/array-groups/master.svg)](https://github.com/NaturesProphet/array-groups/tree/master)


# array-groups
Tool to organize arrays of objects in sub-arrays grouped by value-ranges that is near a central value provided

## Installation
```
npm install array-groups
```

## Usage

array-groups can group any array of objects that have a numeric field in common. array-groups receives the main array, which contains the objects, and also checks an auxiliary array, which has the pure numeric values, in the same order as the array of objects, and also receives a value specifying a grouping range.

Example:

```
const group = require(array-groups);

let t1 = {
    value: 5,
    field: 'testing text',

}

let t2 = {
    value: 7,
    field: 'testing text',

}

let t3 = {
    value: 4,
    field: 'testing text',

}

let t4 = {
    value: 25,
    field: 'testing text',
    field2: 22
}

let t5 = {
    value: 21,
    field: 'testing text',

}

let t6 = {
    value: 44,
    field: 'testing text',

}

let t7 = {
    value: 48,
    field: 'testing text',

}

let t8 = {
    value: 55,
    field: 'testing text',

}

let t9 = {
    value: 59,
    field: 'testing text',

}

let t10 = {
    value: 50,
    field: 'testing text',

}

let testingArray = [ t1, t2, t3, t4, t5, t6, t7, t8, t9, t10 ]; // this is our Object Array that will be grouped in sub-arrays.

let valuesArray = []; // this is a numeric array containing the values to be grouped in the objects array as follows:

for ( let i = 0; i < testingArray.length; i++ ) {
    valuesArray.push( testingArray[ i ].value );
}

let range = 10; // grouping range


let grouped = group.GroupArray( testingArray, valuesArray, range );

```
That code should return a grouped array, that contain the sub-arrays already grouped. the grouped var should have this value:
```
[ 
    [   { value: 5, field: 'testing text' },
        { value: 7, field: 'testing text' },
        { value: 4, field: 'testing text' } 
    ],
    [ 
        { value: 25, field: 'testing text', field2: 22 },
        { value: 21, field: 'testing text' } 
    ],
    [ 
        { value: 44, field: 'testing text' },
        { value: 48, field: 'testing text' },
        { value: 55, field: 'testing text' },
        { value: 59, field: 'testing text' },
        { value: 50, field: 'testing text' } 
    ] 
]
```

## Testing
run the unit test:
```
npm test
```
