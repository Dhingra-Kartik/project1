const NotImplemented = require("../errors/notimplemented.error")

function testProblem(req, res){
return res.json({message: "Problem Controller is UP !!1"})
}
function addProblem(req, res, next){     //we earliar only had req, res, but now this has errorHandler too to be next, TF next is passed
    try{  //nothing implemented so
        throw new NotImplemented('addProblem');
    } catch (error){
        next(error);  //passed to errorHandler our next middleware in index.js, which takes error
    }
}
function getProblem(req, res){
}
function getProblems(req, res){
    
}
function deleteProblem(req, res){

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