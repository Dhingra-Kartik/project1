const sanitizeMarkdownContent = require("../utils/markdown.sanitizer")
const logger = require('../config/logger.config')
class ProblemService{
    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }
    async createProblem(Pdata){
        try{
        Pdata.description = sanitizeMarkdownContent(Pdata.description);
        const problem = await this.problemRepository.createProblem(Pdata);
        return problem;

        } catch (error){
            console.log(error);
            throw error;
        }
    }

    async getAllProblems(){
        const problems = await this.problemRepository.getAllProblems();
        return problems;
    }
    async getProblem(problemId){
        const problem = await this.problemRepository.getProblem(problemId);
        return problem;
    }
    async deleteProblem(problemId){
        const problem = await this.problemRepository.deleteProblem(problemId);
        return problem;
    }

    async updateProblem(id, Pdata){
        if(Pdata.description){
        Pdata.description = sanitizeMarkdownContent(Pdata.description);
        };
        console.log(id, Pdata);
        const problem = await this.problemRepository.updateProblem(id, Pdata);
        return problem;
    }


}
module.exports = ProblemService;