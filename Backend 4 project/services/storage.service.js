const ImageKit = require ('@imagekit/nodejs')

const imagekit = new ImageKit({
    privateKey: "private_tIRJO324R6e51704VQGJXEplJts="
})

async function uploadFile(buffer) {
    const result = await imagekit.client.upload({
        file : buffer,
        fileName : "image.jpg " 
    })

    return result;
}

module.exports = uploadFile