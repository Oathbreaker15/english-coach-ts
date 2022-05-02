const { pronouns, tenses, signs, verbs, Task } = require('../Task')
const { Russian } = require('./Russian')

const testCases = [
    // presentSimple
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.i, sign: signs.positive, verb: verbs.work }),
        solution: 'Я работаю'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.i, sign: signs.negative, verb: verbs.work }),
        solution: 'Я не работаю'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.i, sign: signs.question, verb: verbs.work }),
        solution: 'Я работаю?'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.you, sign: signs.positive, verb: verbs.work }),
        solution: 'Ты работаешь'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.you, sign: signs.negative, verb: verbs.work }),
        solution: 'Ты не работаешь'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.you, sign: signs.question, verb: verbs.work }),
        solution: 'Ты работаешь?'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.he, sign: signs.positive, verb: verbs.work }),
        solution: 'Он работает'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.he, sign: signs.negative, verb: verbs.work }),
        solution: 'Он не работает'
    },
    {
        task: new Task({ tense: tenses.presentSimple, pronoun: pronouns.he, sign: signs.question, verb: verbs.work }),
        solution: 'Он работает?'
    },
    // presentContinuous
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.i, sign: signs.positive, verb: verbs.work }),
        solution: 'Я сейчас работаю'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.i, sign: signs.negative, verb: verbs.work }),
        solution: 'Я сейчас не работаю'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.i, sign: signs.question, verb: verbs.work }),
        solution: 'Я сейчас работаю?'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.you, sign: signs.positive, verb: verbs.work }),
        solution: 'Ты сейчас работаешь'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.you, sign: signs.negative, verb: verbs.work }),
        solution: 'Ты сейчас не работаешь'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.you, sign: signs.question, verb: verbs.work }),
        solution: 'Ты сейчас работаешь?'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.he, sign: signs.positive, verb: verbs.work }),
        solution: 'Он сейчас работает'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.he, sign: signs.negative, verb: verbs.work }),
        solution: 'Он сейчас не работает'
    },
    {
        task: new Task({ tense: tenses.presetContinuous, pronoun: pronouns.he, sign: signs.question, verb: verbs.work }),
        solution: 'Он сейчас работает?'
    },
    // futureSimple
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.i, sign: signs.positive, verb: verbs.work }),
        solution: 'Я буду работать'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.i, sign: signs.negative, verb: verbs.work }),
        solution: 'Я не буду работать'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.i, sign: signs.question, verb: verbs.work }),
        solution: 'Я буду работать?'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.you, sign: signs.positive, verb: verbs.work }),
        solution: 'Ты будешь работать'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.you, sign: signs.negative, verb: verbs.work }),
        solution: 'Ты не будешь работать'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.you, sign: signs.question, verb: verbs.work }),
        solution: 'Ты будешь работать?'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.he, sign: signs.positive, verb: verbs.work }),
        solution: 'Он будет работать'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.he, sign: signs.negative, verb: verbs.work }),
        solution: 'Он не будет работать'
    },
    {
        task: new Task({ tense: tenses.futureSimple, pronoun: pronouns.he, sign: signs.question, verb: verbs.work }),
        solution: 'Он будет работать?'
    },
    // pastSimple
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.i, sign: signs.positive, verb: verbs.work }),
        solution: 'Я работал'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.i, sign: signs.negative, verb: verbs.work }),
        solution: 'Я не работал'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.i, sign: signs.question, verb: verbs.work }),
        solution: 'Я работал?'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.you, sign: signs.positive, verb: verbs.work }),
        solution: 'Ты работал'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.you, sign: signs.negative, verb: verbs.work }),
        solution: 'Ты не работал'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.you, sign: signs.question, verb: verbs.work }),
        solution: 'Ты работал?'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.he, sign: signs.positive, verb: verbs.work }),
        solution: 'Он работал'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.he, sign: signs.negative, verb: verbs.work }),
        solution: 'Он не работал'
    },
    {
        task: new Task({ tense: tenses.pastSimple, pronoun: pronouns.he, sign: signs.question, verb: verbs.work }),
        solution: 'Он работал?'
    },
]

describe('Russian language', () => {
    testCases.forEach(({ task, solution }) => {
        test(`${task}`, () => {
            const english = new Russian()
            const result = english.getSolution(task)
            expect(result).toEqual(solution)
        })
    })
})
