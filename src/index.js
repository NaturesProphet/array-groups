
/**
 * updates the average of index 0
 * @param {*} array the array to be updated
 */
function update ( array ) {
    let sum = 0;
    for ( let i = 1; i < array.length; i++ ) {
        sum += array[ i ].value;
    }
    array[ 0 ] = sum / ( array.length - 1 );
    return array;
}

// scans an array of arrays, searching for where the appropriate index array is within the given range
function getIndex ( array, value, range ) {
    let min = value - range;
    let max = value + range;
    if ( array.length == 0 ) {
        return -1;
    }
    for ( let i = 0; i < array.length; i++ ) {
        if ( array[ i ][ 0 ] >= min && array[ i ][ 0 ] <= max ) {
            return i;
        }
    }
    return -1;
}


/**
 * 
 * @param {*} mainArray Main array, contains the objects that must be grouped
 * @param {*} valuesArray auxiliary array, contains the numeric values in the same sequence as mainArray
 * @param {*} range grouping range
 */
function GroupArray ( mainArray, valuesArray, range ) {

    let controlArray = new Array();

    if ( mainArray.length == valuesArray.length ) {

        for ( let i = 0; i < mainArray.length; i++ ) {
            let centralValue = valuesArray[ i ];
            let index = getIndex( controlArray, centralValue, range );

            if ( index == -1 || index == undefined ) { //if the index does not exist
                let newIndexedArray = [ centralValue, { value: centralValue, index: i } ]; //creates the index
                controlArray.push( newIndexedArray );

            } else {
                controlArray[ index ].push( { value: centralValue, index: i } );
                update( controlArray[ index ] );
            }

        }

    } else {
        throw new Error( "The arrays provided have differente lengths. check them and try again" );
    }
    let ObjectArray = new Array();
    for ( let i = 0; i < controlArray.length; i++ ) {
        let objects = new Array();
        for ( let y = 1; y < controlArray[ i ].length; y++ ) {
            objects.push( mainArray[ controlArray[ i ][ y ].index ] );
        }
        ObjectArray.push( objects );
    }
    return ObjectArray;
}

module.exports = { GroupArray }
