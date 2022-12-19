import  CryptoJS,{ AES } from "crypto-js";

export const AESEncryption = (value) => {

    return AES.encrypt(
        CryptoJS.enc.Utf8.parse(value), 
        CryptoJS.enc.Utf8.parse(process.env.REACT_APP_SECRET_KEY),
        {
            mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.ZeroPadding
        }
    ).ciphertext.toString(CryptoJS.enc.Hex);
    // return AES.encrypt(value, process.env.REACT_APP_SECRET_KEY).toString(
    // CryptoJS.enc.Utf8
//   );
};

export const AESDecrption = (value) => {
    return AES.decrypt({ciphertext: CryptoJS.enc.Hex.parse(value)}, CryptoJS.enc.Utf8.parse(process.env.REACT_APP_SECRET_KEY), {mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.ZeroPadding }).toString(CryptoJS.enc.Utf8);
    // return AES.decrypt(value, process.env.REACT_APP_SECRET_KEY).toString(CryptoJS.enc.Utf8);
//   return AES.decrypt(value, process.env.REACT_APP_SECRET_KEY).toString(
//     CryptoJS.enc.Utf8
//   );
};

