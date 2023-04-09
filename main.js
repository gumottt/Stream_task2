const fs = require('fs')
const { Transform }= require('stream')

//1 Витягнути текст і підняти всі букви
function upp(){
    const data = fs.createReadStream('./text.txt','utf8')
    const upTransform = new Transform({
        transform(chunk, encoding, done){
            const up = chunk.toString().toUpperCase()
            done(null, up)
        }
    })
    upTransform.on('data',(chunk)=>{
        return chunk.toString()
    })
    const writer = fs.createWriteStream('./textToUp.txt')
 data.pipe(upTransform).pipe(writer)

}

//2 Підняти першу букву кожного слова 
function upp1(){
    const data = fs.createReadStream('./text.txt','utf8')
    const upTransform = new Transform({
        transform(chunk, encoding, done){
            const chunkText = chunk.toString()
            const textUp = chunkText.split(' ')
            const up = textUp.map(text =>{
                return text.charAt(0).toUpperCase() + text.slice(1);
            })
            const a = up.join(' ')
            done(null, a)

        }
    })
    upTransform.on('data',(chunk)=>{
        return chunk.toString()
    })
    const writer = fs.createWriteStream('./textToUp.txt')
 data.pipe(upTransform).pipe(writer)
}

//1
upp()

//2
//upp1()
