const NotFound = require('../errors/notFound.error');
const { Problem } = require('../models/');
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

    async getProblem(){
        try {
            const problem = await Problem.findById(id);
            if(!problem){
                throw new NotFound("Problem", id);
            }
            return problem;

        } catch (error) {
            console.log(error);
            throw error;
        }}}
module.exports = ProblemRepository;