const group = require( './index' );
require( 'jest' );

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

let testingArray = [ t1, t2, t3, t4, t5, t6, t7, t8, t9, t10 ];
let valuesArray = [];

for ( let i = 0; i < testingArray.length; i++ ) {
    valuesArray.push( testingArray[ i ].value );
}

let range = 10;


test( 'groups the array', () => {
    let grouped = group.GroupArray( testingArray, valuesArray, range );
    expect( grouped.length ).toBe( 3 );
} );

test( 'Throws an error if the arrays have different lengths', () => {
    try {
        group.GroupArray( testingArray, [], range );
    } catch ( error ) {
        expect( error.message ).toBe( "The arrays provided have differente lengths. check them and try again" );
    }
} );
