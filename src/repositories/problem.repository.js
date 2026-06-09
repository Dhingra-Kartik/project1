const NotFound = require('../errors/notFound.error');
const { Problem } = require('../models/');
const logger = require('../config/logger.config');
//const { createSearchIndex } = require('../models/problems.model');

class ProblemRepository{
    async createProblem(Pdata){
    try{
        const problem = await Problem.create({
            title: Pdata.title,
            difficulty: Pdata.difficulty,
            description: Pdata.description,
            editorial: Pdata.editorial
        });
        return problem;
} catch (error){
        console.log(error);
        throw error;
    }
}

    async getAllProblems(){
        try{
            const problems = await Problem.find({});  //object can passed filteration criteria OR leave empty
            return problems;
        } catch(error){
            console.log(error);
            throw error;
        }}

    async getProblem(id){
        try {
            const problem = await Problem.findById(id);
            if(!problem){
                logger.error(`Problem.Repository: Problem with id: ${id} not found !`);
                throw new NotFound("Problem", id);
            }
            return problem;

        } catch (error) {
            console.log(error);
            throw error;
        }}

    async deleteProblem(id){
        try{
            const problem = await Problem.findByIdAndDelete(id);
            if(!problem){
                logger.error(`Problem.repository: Problem with id: ${id} not found !`);
                throw new NotFound("Problem", id);
            }
            return problem;
        }catch(error){
            logger.error("Something Went Wrong");
            throw error;
        }}
    }
module.exports = ProblemRepository;