'use strict';

const
    AWS = require( 'aws-sdk' ),
    S3  = new AWS.S3();

var hashCode = function(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
};

exports.handler = ( event, context, callback ) => {
    console.log( `FUNCTION STARTED: ${new Date()}` );

    S3.putObject( {
         Bucket: 'fluxhashmap',
         Key: hashCode(JSON.stringify(event.payload))+'/cadastro.json',
         Body: JSON.stringify(event.payload)
    } )
         .promise()
         .then( () => console.log( 'UPLOAD SUCCESS' ) )
         .then( () => callback( null, 'MISSION SUCCESS' ) )
         .catch( e => {
            console.error( 'ERROR', e );
            callback( e );
         } );
};