import { IGetSolution, IVerbsMap } from "../interfaces/interfaces";
import type { Task } from "../Task";
import { Tenses, Signs, Pronouns } from "../Task";
import { capitalize } from "../utils/capitalize";

enum PronounsMap {
    i = 'я',
    you = 'ты',
    we = 'мы',
    they = 'они',
    he = 'он',
    she = 'она',
    it = 'это',
}

// здесь я ХУЙ ЗНАЕТ что вообще с этим было делать. интерфейс тип [index: string]: string для каждого времени?
// енамы я зассал делать, потому что 
const verbsMap: IVerbsMap = {
    work: {
        present: {
            i: 'работаю',
            you: 'работаешь',
            we: 'работаем',
            they: 'работают',
            he: 'работает',
            she: 'работает',
            it: 'работает',
        },
        past: {
            i: 'работал',
            you: 'работал',
            we: 'работали',
            they: 'работали',
            he: 'работал',
            she: 'работала',
            it: 'работало',
        },
        future: {
            i: 'буду работать',
            you: 'будешь работать',
            we: 'будем работать',
            they: 'будут работать',
            he: 'будет работать',
            she: 'будет работать',
            it: 'будет работать',
        }
    },
    study: {
        present: {
            i: 'обучаюсь',
            you: 'обучаешься',
            we: 'обучаемся',
            they: 'обучаются',
            he: 'обучается',
            she: 'обучается',
            it: 'обучается',
        },
        past: {
            i: 'обучался',
            you: 'обучался',
            we: 'обучались',
            they: 'обучались',
            he: 'обучался',
            she: 'обучалась',
            it: 'обучалось',
        },
        future: {
            i: 'буду обучаться',
            you: 'будешь обучаться',
            we: 'будем обучаться',
            they: 'будут обучаться',
            he: 'будет обучаться',
            she: 'будет обучаться',
            it: 'будет обучаться',
        }
    },
    go: {
        present: {
            i: 'иду',
            you: 'идешь',
            we: 'идем',
            they: 'идут',
            he: 'идет',
            she: 'идет',
            it: 'идет',
        },
        past: {
            i: 'шел',
            you: 'шел',
            we: 'шли',
            they: 'шли',
            he: 'шел',
            she: 'шла',
            it: 'шло',
        },
        future: {
            i: 'пойду',
            you: 'пойдешь',
            we: 'пойдем',
            they: 'пойдут',
            he: 'пойдет',
            she: 'пойдет',
            it: 'пойдет',
        }
    }
}

export class Russian implements IGetSolution {
    getSolution(task: Task): string {
        const tensesMap = {
            [Tenses.presentSimple]: this.getPresentSimpleSolution.bind(this),
            [Tenses.presetContinuous]: this.getPresentContinuousSolution.bind(this),
            [Tenses.futureSimple]: this.getFutureSimpleSolution.bind(this),
            [Tenses.pastSimple]: this.getPastSimpleSolution.bind(this),
        }
        const result = tensesMap[task.tense](task)
        return capitalize(result)
    }

    protected getPresentSimpleSolution(task: Task, now: boolean = false) {
        const acc: string[] = [PronounsMap[task.pronoun]]
        if (now) {
            acc.push('сейчас')
        }
        if (task.sign === Signs.negative) {
            acc.push('не')
        }
        acc.push(verbsMap[task.verb]['present'][task.pronoun])
        const result = acc.join(' ')
        return (task.sign === Signs.question) ? `${result}?` : result
    }

    protected getPresentContinuousSolution(task: Task) {
        return this.getPresentSimpleSolution(task, true)
    }

    protected getFutureSimpleSolution(task: Task) {
        const acc: string[] = [PronounsMap[task.pronoun]]
        if (task.sign === Signs.negative) {
            acc.push('не')
        }
        acc.push(verbsMap[task.verb]['future'][task.pronoun])
        const result = acc.join(' ')
        return (task.sign === Signs.question) ? `${result}?` : result
    }

    protected getPastSimpleSolution(task: Task) {
        const acc: string[] = [PronounsMap[task.pronoun]]
        if (task.sign === Signs.negative) {
            acc.push('не')
        }
        acc.push(verbsMap[task.verb]['past'][task.pronoun])
        const result = acc.join(' ')
        return (task.sign === Signs.question) ? `${result}?` : result
    }
}