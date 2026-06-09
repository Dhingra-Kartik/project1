const sanitizeMarkdownContent = require("../utils/markdown.sanitizer")
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
}
module.exports = ProblemService;