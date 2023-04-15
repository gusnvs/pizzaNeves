import crypto from "crypto"; // vamos usar ele para as imagens não repitirem o mesmo nome
import multer from "multer";
import { extname, resolve } from "path";

export default {
    upload(folder: string) { // quando alguém chamar esse método eu quero que me forneça qual a pasta que eu quero salvar
        return {
            storage: multer.diskStorage({
                destination: resolve(__dirname, '..', '..', folder), // destino para aonde eu quero salvar essa foto // o __dirname nada mais é do que o diretório que estamos agora, e para aonde ele irá
                filename: (request, file, callback) => { // para nao ter conflito de imagens com o mesmo nome
                    const fileHash = crypto.randomBytes(16).toString("hex"); // nome gerado para nosso foto
                    const fileName = `${fileHash}-${file.originalname}`;

                    return callback(null, fileName);
                }
            })
        }
    }
}