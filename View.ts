import { IView } from "./interfaces/interfaces"

export default class View implements IView {
    printTask(text: string): void {
        console.clear()
        console.log(text)
    }
    printSolution(text: string): void {
        console.log(text)
    }
}