'use strict';

var aws = require('aws-sdk');
var db = new aws.DynamoDB();

var model = {
    "id": {
        "S" : "",
    },
    "dados": {
        "M": {
            "nome":{"S": "",},
            "idade":{"N": "",},
        },
    },
    
    "premium": {
        "N": "",  
    },
    "timestamp": {
        "M": {
            "l0":{"N": "",},
        },
    },

};

var scanParams = {
    TableName: 'flux-users'
}

exports.handler = (event, context, callback) => {

    const RESPONSE = {
        OK : {
            statusCode : 200,
            message: "You have successfully created the user!",
        },
        DUPLICATE : {
            status : 400,
            message : "This user alredy exists."
        },
        ERROR : {
            status : 400,
            message: "Something went wrong. Please try again."
        }
    };
    
    
    db.scan(scanParams, function(err, result){
        if(err){
                callback(null, err);    
        }
        else{

            model.id.S = String(result.Count + 1);
            
            model.dados.M.nome.S = String(event.dados.nome);
            model.dados.M.idade.N = String(event.dados.idade);

            model.premium.N = String(1);

            model.timestamp.M.l0.N = String(+ new Date());


            if(!model.id){
                return callback(null, RESPONSE.ERROR);
            }
            
            db.putItem({
                TableName: 'flux-users',
                Item: model,
                Expected: {
                    id: { Exists: false },
                }
            }, function (err, data) {
                if (err) {
                    return callback(null, err);
                }
        
                callback(null, RESPONSE.OK);
            });
        }
    });
};
