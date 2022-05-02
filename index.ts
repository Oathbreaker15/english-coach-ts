import { Game } from './Game';
import { TaskBuilder } from './TaskBuilder';
import  View  from './View';
import { English } from './languages/English';
import { Russian } from './languages/Russian';

const stdin = process.stdin;
stdin.resume();
stdin.setEncoding( 'utf8' );

const view = new View()
const taskBuilder = new TaskBuilder()
const english = new English()
const russian = new Russian()
const game = new Game(view, taskBuilder, russian, english)
game.start()

stdin.on( 'data', (key: string): void => {
    // ctrl-c ( end of text )
    if ( key === '\u0003' ) {
        process.exit();
    }
    game.nextStep()
});