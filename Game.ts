import { ITask, IView, ITaskBuilder, IGetSolution } from "./interfaces/interfaces";

export class Game {
    protected currentTask: ITask | undefined
    protected currentStep: 'task' | 'solution' = 'task' // task or solution
    protected view
    protected taskBuilder
    protected taskLanguage
    protected solutionLanguage

    constructor(view: IView, taskBuilder: ITaskBuilder, taskLanguage: IGetSolution, solutionLanguage: IGetSolution) {
        this.view = view
        this.taskBuilder = taskBuilder
        this.taskLanguage = taskLanguage
        this.solutionLanguage = solutionLanguage
    }

    start() {
        this.suggestTask()
    }

    nextStep() {
        if (this.currentStep === 'solution') {
            this.suggestTask()
        } else {
            this.suggestSolution()
        }
    }

    suggestTask() {
        this.currentStep = 'task'
        this.currentTask = this.taskBuilder.createRandomTask()
        const text = this.taskLanguage.getSolution(this.currentTask)
        this.view.printTask(text)
    }

    suggestSolution() {
        this.currentStep = 'solution'
        const text = this.solutionLanguage.getSolution(this.currentTask)
        this.view.printSolution(text)
    }
}