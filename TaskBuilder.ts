import { ITaskBuilder } from './interfaces/interfaces';
import { Pronouns, Tenses, Signs, Verbs, Task } from './Task';
import { getRandomFromArray } from './utils/getRandomFromArray';

export class TaskBuilder implements ITaskBuilder {
    createRandomTask(): Task {
        const pronoun = getRandomFromArray<Pronouns>(Object.values(Pronouns));
        const tense = getRandomFromArray<Tenses>(Object.values(Tenses));
        const sign = getRandomFromArray<Signs>(Object.values(Signs));
        const verb = getRandomFromArray<Verbs>(Object.values(Verbs));
        return new Task({ tense, pronoun, sign, verb })
    }
}