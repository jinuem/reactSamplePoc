var rest = require('rest-js');
require('es6-promise').polyfill();
require('isomorphic-fetch');

let restApi = rest('http://10.226.2.52:4000/', {
        defaultFormat: '',  
        crossDomain: true,

});
    


export function fetchComments(){
return fetch('http://10.226.2.52:4000/comments')
    .then(function(response) {
        console.log(response)
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    
}


export function getComments(){
     
            return restApi.read('comments', function(error, data) {
                
                return data;
            });
            
}

export function updateComment(text,id){
            let req = new Object;
            req.TEXT = text;
            req.ID = id;
            console.log(req)
            return restApi.post('comments',{data:req},function(error, response) {
                
                return response;
            });
            
}

export function addComment(text){
            let req = new Object();
            req.TEXT = text;
            return restApi.post('comments',{data:req},function(error, response) {
                
                return response;
            });
            
}