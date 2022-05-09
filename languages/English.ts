import { Tenses, Signs, Pronouns, Verbs } from "../Task";
import type { ITask } from "../interfaces/interfaces";
import { capitalize } from "../utils/capitalize";
import { IGetSolution, IIrregularVerb } from "../interfaces/interfaces";

const irregularVerbs: IIrregularVerb = {
    go: ['go', 'went', 'gone']
}

export class English implements IGetSolution {
    getSolution(task: ITask): string {
        const tensesMap = {
            [Tenses.presentSimple]: this.getPresentSimpleSolution.bind(this),
            [Tenses.presetContinuous]: this.getPresentContinuousSolution.bind(this),
            [Tenses.futureSimple]: this.getFutureSimpleSolution.bind(this),
            [Tenses.pastSimple]: this.getPastSimpleSolution.bind(this),
        }

        const result = tensesMap[task.tense](task)
        return capitalize(this.minimize(result))
    }

    protected getPresentSimpleSolution(task: ITask): string {
        const result = []
        if (task.sign === Signs.positive) {
            result.push(task.pronoun)
            if ([Pronouns.he, Pronouns.she, Pronouns.it].includes(task.pronoun)) {
                result.push(this.addSEnding(task.verb))
            } else {
                result.push(task.verb)
            }
        } else if (task.sign === Signs.negative) {
            result.push(task.pronoun)
            if ([Pronouns.he, Pronouns.she, Pronouns.it].includes(task.pronoun)) {
                result.push('does not')
            } else {
                result.push('do not')
            }
            result.push(task.verb)
        } else {
            if ([Pronouns.he, Pronouns.she, Pronouns.it].includes(task.pronoun)) {
                result.push('Does')
            } else {
                result.push('Do')
            }
            result.push(task.pronoun)
            result.push(`${task.verb}?`)
        }
        return result.join(' ')
    }

    protected getPresentContinuousSolution(task: ITask): string {
        const result = []
        let aux = 'am'
        if ([Pronouns.you, Pronouns.we, Pronouns.they].includes(task.pronoun)) {
            aux = 'are'
        } else if ([Pronouns.he, Pronouns.she, Pronouns.it].includes(task.pronoun)) {
            aux = 'is'
        }
        const verb = this.addIngEnding(task.verb)
        if (task.sign === Signs.question) {
            result.push(aux, task.pronoun, `${verb}?`)
        } else {
            result.push(task.pronoun, aux)
            if (task.sign === Signs.negative) {
                result.push('not')
            }
            result.push(verb)
        }
        return result.join(' ')
    }

    protected getFutureSimpleSolution(task: ITask): string {
        const result = []
        if (task.sign === Signs.question) {
            result.push('will', task.pronoun, `${task.verb}?`)
        } else {
            result.push(task.pronoun, 'will')
            if (task.sign === Signs.negative) {
                result.push('not')
            }
            result.push(task.verb)
        }
        return result.join(' ')
    }

    protected getPastSimpleSolution(task: ITask): string {
        const result = []
        if (task.sign === Signs.positive) {
            result.push(task.pronoun, this.get2VerbForm(task.verb))
        } else if (task.sign === Signs.negative) {
            result.push(task.pronoun, 'did not', task.verb)
        } else {
            result.push('did', task.pronoun, `${task.verb}?`)
        }
        return result.join(' ')
    }

    protected addSEnding(verb: Verbs): string {
        const endChar = verb.charAt(verb.length - 1)
        if (endChar === 'y') {
            const body = verb.substring(0, verb.length - 1)
            return `${body}ies`
        }
        if (endChar === 'o') {
            return `${verb}es`
        }
        return `${verb}s`
    }

    protected addIngEnding(verb: Verbs): string {
        return `${verb}ing`
    }

    protected get2VerbForm(verb: Verbs): string {
        const irregularVerb = irregularVerbs[verb]
        if (irregularVerb) {
            return irregularVerb[1]
        }
        const endChar = verb.charAt(verb.length - 1)
        if (endChar === 'y') {
            const body = verb.substring(0, verb.length - 1)
            return `${body}ied`
        }
        return `${verb}ed`
    }

    protected minimize(text: string): string {
        enum Map {
            'do not' = "don't",
            'does not' = "doesn't",
            'are not' = "aren't",
            'is not' = "isn't",
            'did not' = "didn't",
            'will not' = "won't"
        }

        let newText = text
        Object.entries(Map).forEach(([search, replacer]) => {
            newText = newText.replace(search, replacer)
        })
        return newText
    }
}