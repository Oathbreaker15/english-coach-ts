import { IGame } from "./interfaces/interfaces";
import type View from "./View";
import type { TaskBuilder } from "./TaskBuilder";
import type { Task } from "./Task";
import { English } from "./languages/English";
import { Russian } from "./languages/Russian";

export class Game implements IGame {
    protected currentTask!: Task
    protected currentStep!: string // task or solution
    protected view
    protected taskBuilder
    protected taskLanguage
    protected solutionLanguage

    constructor(view: View, taskBuilder: TaskBuilder, taskLanguage: Russian, solutionLanguage: English) {
        this.view = view
        this.taskBuilder = taskBuilder
        this.taskLanguage = taskLanguage
        this.solutionLanguage = solutionLanguage
    }

    start(): void {
        this.suggestTask()
    }

    nextStep(): void {
        if (this.currentStep === 'solution') {
            this.suggestTask()
        } else {
            this.suggestSolution()
        }
    }

    suggestTask(): void {
        this.currentStep = 'task'
        this.currentTask = this.taskBuilder.createRandomTask()
        const text = this.taskLanguage.getSolution(this.currentTask)
        this.view.printTask(text)
    }

    suggestSolution(): void {
        this.currentStep = 'solution'
        const text = this.solutionLanguage.getSolution(this.currentTask)
        this.view.printSolution(text)
    }
}