const BadRequest = require("../errors/badRequest.error");
const NotImplemented = require("../errors/notimplemented.error")

function testProblem(req, res){
return res.json({message: "Problem Controller is UP !!1"})
}
function addProblem(req, res, next){     //we earliar only had req, res, but now this has errorHandler too to be next, TF next is passed
    
}
function getProblem(req, res, next){
    try{  //nothing implemented so
        throw new NotImplemented("addProblem");
    } catch (error){
        next(error);  //passed to errorHandler our next middleware in index.js, which takes error
    }
}
function getProblems(req, res, next){
    try{  //nothing implemented, but checking Badrequest. 
        throw new BadRequest("getProblem", {missing: "Problem name"});
    } catch (error){
        next(error);  //passed to errorHandler our next middleware in index.js, which takes error
    }
}
function deleteProblem(req, res){  //make sure you have next here.

}
function updateProblem(req, res){

}

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    testProblem
}