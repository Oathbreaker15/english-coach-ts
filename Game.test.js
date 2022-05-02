const { Game } = require('./Game')
const { TaskBuilder } = require('./TaskBuilder')
const { View } = require('./View')
const { English } = require('./languages/English')
const { Russian } = require('./languages/Russian')

describe('Game', () => {
    test('Correct process', () => {
        const view = {
            printTask: jest.fn(),
            printSolution: jest.fn()
        }
        const taskBuilder = new TaskBuilder()
        const english = new English()
        const russian = new Russian()
        const game = new Game(view, taskBuilder, russian, english)

        game.start()
        expect(view.printTask).toBeCalledTimes(1)
        game.nextStep()
        expect(view.printSolution).toBeCalledTimes(1)
        game.nextStep()
        expect(view.printTask).toBeCalledTimes(2)
    })
})