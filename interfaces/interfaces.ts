import type { Task } from "../Task";

export interface ITask {
    toString():string;
}

export interface IView {
    printTask(text: string): void;
    printSolution(text: string): void;
}

export interface ITaskBuilder {
    createRandomTask(): Task;
}

export interface IGame {
    start(): void;
    nextStep(): void;
    suggestTask(): void;
    suggestSolution(): void;
}

export interface IIrregularVerb {
    [index: string]: string[];
}

export interface IGetSolution {
    getSolution(task: Task): string;
}

export interface IVerbsMap {
    work: {
        present: {
            [index: string]: string
        },
        past: {
            [index: string]: string
        },
        future: {
            [index: string]: string
        }
    },
    study: {
        present: {
            [index: string]: string
        },
        past: {
            [index: string]: string
        },
        future: {
            [index: string]: string
        }
    },
    go: {
        present: {
            [index: string]: string
        },
        past: {
            [index: string]: string
        },
        future: {
            [index: string]: string
        }
    }
}