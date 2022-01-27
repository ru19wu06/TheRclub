var fs = require('fs');
const { finished } = require('stream');
 


// "name": "The R Club",
// "description": "The R Club member"
// "image": "https://ipfs.io/ipfs/Qmaoas8AUSc4cQvmsobGeT8atTYT3FC8FKnPC6z5Ku9Sve",





for(var a=1;a<=2000;a++){

    var fileName = String(a);

    var names = 'The R Club';
    var description = 'The R Club member';
    var image = 'https://ipfs.io/ipfs/QmVJgzbBgHVfcrY8fCHradsibAECTtz8omPs13axfNSGkx';


    var Attributes = [
        {
            trait_type:"Level",
            value:1
        }
    ];

    

    var obj = {
        name:names,
        description:description,
        image:image,
        attributes:Attributes
    };


    
  
    
    fs.writeFile('./Metadata/'+fileName,  JSON.stringify(obj), function (err) {
        if (err)
            console.log(err);
        else
            console.log('Write operation complete.');
    });

    //console.log(JSON.stringify(obj));

}
