import { ITask } from "./interfaces/interfaces";

enum Pronouns {
    i = 'i',
    you = 'you',
    we = 'we',
    they = 'they',
    he = 'he',
    she = 'she',
    it = 'it',
}
enum Tenses {
    presentSimple = 'Present Simple',
    presetContinuous = 'Present Continuous',
    futureSimple = 'Future Simple',
    pastSimple = 'Past Simple',
}
enum Signs {
    positive = 'positive',
    negative = 'negative',
    question = 'question',
}

enum Verbs {
    work = 'work',
    study = 'study',
    go = 'go'
}

class Task implements ITask {
    //Нужна ли типизация в этом месте, или дотаточно это в аргументах сделать?
    tense: Tenses;
    pronoun: Pronouns;
    sign: Signs;
    verb: Verbs;

    constructor({ tense, pronoun, sign, verb }: {tense: Tenses, pronoun: Pronouns, sign: Signs, verb: Verbs}) {
        this.tense = tense;
        this.pronoun = pronoun;
        this.sign = sign;
        this.verb = verb;
    }

    toString():string {
        return `${this.tense} | ${this.pronoun} | ${this.sign} | ${this.verb}`
    }
}

export {
    Pronouns,
    Tenses,
    Signs,
    Verbs,
    Task
}