// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010404010101020101010101010101010303030303030404030303030303040103030403030304040303030303030401030303040303040304040303030304010303040303030304040403030303040103030304030303030303030404030401030303030401040101030303040304010303030303010403010303030403040103030403030103030103040404030401030304030301010101030304040301010303040303030303030303030303010103030404030303030303030303030101030303040404030303030303030301010303030303040403030303030303010103030303030303040404040303030101010101010101010101010104010301`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . 2 2 . . . . . . 2 
2 . . 2 . . . 2 2 . . . . . . 2 
2 . . . 2 . . 2 . 2 2 . . . . 2 
2 . . 2 . . . . 2 2 2 . . . . 2 
2 . . . 2 . . . . . . . 2 2 . 2 
2 . . . . 2 2 2 2 2 . . . 2 . 2 
2 . . . . . 2 2 2 2 . . . 2 . 2 
2 . . 2 . . 2 2 2 2 . 2 2 2 . 2 
2 . . 2 . . 2 2 2 2 . . 2 2 . 2 
2 . . 2 . . . . . . . . . . . 2 
2 . . 2 2 . . . . . . . . . . 2 
2 . . . 2 2 2 . . . . . . . . 2 
2 . . . . . 2 2 . . . . . . . 2 
2 . . . . . . . 2 2 2 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.crowd0,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.builtin.crowd3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
