import CryptoJS, { TripleDES } from "crypto-js";

export const tripleDESEncryption =   (value) => {
    
    return CryptoJS.TripleDES.encrypt(CryptoJS.enc.Utf8.parse(value), 
        CryptoJS.enc.Utf8.parse(process.env.REACT_APP_SECRET_KEY), {mode: CryptoJS.mode.ECB,
	        padding: CryptoJS.pad.Pkcs7}).ciphertext.toString(CryptoJS.enc.Hex)
//     return  TripleDES.encrypt(value, process.env.REACT_APP_SECRET_KEY).toString(
//     CryptoJS.enc.Utf8
//   );
};

export const tripleDESDecryption = (value) => {
    return CryptoJS.TripleDES.decrypt({ciphertext: CryptoJS.enc.Hex.parse(value)}, CryptoJS.enc.Utf8.parse(process.env.REACT_APP_SECRET_KEY), {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }).toString(CryptoJS.enc.Utf8);
//   return TripleDES.decrypt(value, process.env.REACT_APP_SECRET_KEY).toString(
//     CryptoJS.enc.Utf8
//   );
};
