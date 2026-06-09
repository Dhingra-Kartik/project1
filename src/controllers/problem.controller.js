const StatusCodes = require('http-status-codes');
const {ProblemService} = require('../services/index')
const {ProblemRepository} = require('../repositories');
// const BadRequest = require("../errors/badRequest.error");
// const NotImplemented = require("../errors/notimplemented.error")

const problemService = new ProblemService(new ProblemRepository());

async function addProblem(req, res, next){     //we earliar only had req, res, but now this has errorHandler too to be next, TF next is passed
    try {
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newproblem
        })
    } catch(error){
        next(error);
    }
}

async function getProblem(req, res, next){
    try {
        const problem = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched a problem',
            error: {},
            data: problem
        })
    } catch (error) { 
        next(error);  
    }
    }
    
async function getProblems(req, res, next){
        try {
            const response = await problemService.getAllProblems();
            return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all the problems',
            error: {},
            data: response
        }) 

        } catch (error){
            next(error);
        }
    }
        
function deleteProblem(req, res){  //make sure you have next here.
            
        }
        
function updateProblem(req, res){
            
        }
        
function testProblem(req, res){
        return res.json({message: "Problem Controller is UP !!1"})
        }

module.exports = {
    addProblem,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    testProblem
}