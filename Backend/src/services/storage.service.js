const ImageKit = require("imagekit")

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: "https://ik.imagekit.io/shanu007"
})

const uploadFile = async(file,fileName) => {
    const result = await imagekit.upload({
        file: file,  //required
        fileName: fileName  //required
    })

    return result;
}

module.exports = {
    uploadFile,
}