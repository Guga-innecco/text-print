
/**
* Use this file to define custom functions and blocks.
* Read more at https://arcade.makecode.com/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#ff1100 icon="T"
namespace Text {
    //% block
    //% i.shadow=screen_image_picker
    export function PrintText(i: Image, text: string, y: number) {
        i.printCenter(text, y)
    }
}
