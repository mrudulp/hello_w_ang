import { Pipe, PipeTransform } from "@angular/core"

@Pipe({
    name: 'capstart'
})
export class CapStartPipe implements PipeTransform {
    transform(value: string, args?: any) {
        if (!value)
            return null;
        var val = value.split(' ').reduce(this.capitalise_first_letter)
        var new_str = ''
        if (val != undefined)
            if ((val.toLowerCase() === "the") || (val.toLowerCase() === "of")) {
                console.log("val::" + val )
                val = val.charAt(0).toUpperCase() + val.slice(1).toLowerCase()
            }
            new_str += val
        
        return new_str
    }
    capitalise_first_letter(accumulator:string, word: string, index: number) {
        console.log("Cap_first_leter::"+word + ":: (0) " + word.charAt(0).toUpperCase()+":idx:"+index)
        if ( (index > 0) && (word.toLowerCase() === "the" || word.toLowerCase() === "of")){
            console.log("Ignoring case transform::"+word+"::"+index)
            return accumulator += " " + word.toLowerCase()
        }
        var cap_word = " " + word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        if ((accumulator.toLowerCase() === "the") || (accumulator.toLowerCase() === "of")) {
            console.log("Acc::"+accumulator + "::idx:"+index)
            accumulator = accumulator.charAt(0).toUpperCase() + accumulator.slice(1).toLowerCase()
            console.log("Acc::"+accumulator + "::idx:"+index)
        }
        return accumulator += cap_word
    }
}