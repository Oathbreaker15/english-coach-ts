import { Tenses, Pronouns, Signs, Verbs } from "../Task";

export interface ITask {
    tense: Tenses;
    pronoun: Pronouns;
    sign: Signs;
    verb: Verbs;

    toString():string;
}

export interface IView {
    printTask(text: string): void;
    printSolution(text: string): void;
}

export interface ITaskBuilder {
    createRandomTask(): ITask;
}

export type IIrregularVerb = {
    [verb in Verbs]?: [string, string, string];
}

export interface IGetSolution {
    getSolution(task: ITask | undefined): string;
}

type PronounsMap = Record<Pronouns, string>;
export type IVerbsMap = {
    [verb in Verbs]: {
        present: PronounsMap,
        past: PronounsMap,
        future: PronounsMap,
    } 
}