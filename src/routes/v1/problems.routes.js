const express = require('express');

const { ProblemController } = require('../../controllers');
const { testProblem } = require('../../controllers/problem.controller');

const ProblemRouter = express.Router();

ProblemRouter.get('/:id', ProblemController.getProblem);
ProblemRouter.get('/', ProblemController.getProblems);
ProblemRouter.post('/', ProblemController.addProblem);
ProblemRouter.delete('/:id', ProblemController.deleteProblem);
ProblemRouter.put('/:id', ProblemController.updateProblem);
ProblemRouter.get('/test', ProblemController.testProblem);

module.exports = ProblemRouter;