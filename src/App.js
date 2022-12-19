import { useState } from "react";
import ReactSelect from "react-select";
import { tripleDESDecryption, tripleDESEncryption } from "./utils/3des";
import { AESDecrption, AESEncryption } from "./utils/aes";
import {
  oneTimePadDecryption,
  oneTimePadEncryption,
} from "./utils/one-time-pad";

function App() {
  const options = [
    { value: "oneTimePad", label: "One-Time Pad" },
    { value: "3DES", label: "3DES" },
    { value: "AES", label: "AES" },
  ];
  const [encdecAlgorithm, setEncDecAlgorithm] = useState(null);
  const [method, setMethod] = useState();
  const [text, setText] = useState('');
  const [output, setOutput] = useState('');

  const handleSubmit = () =>  {

    switch (encdecAlgorithm.value) {
      case "oneTimePad":
        if (method === "ENCRYPT") {
          setOutput(oneTimePadEncryption(text));
          return;
        }
        if (method === "DECRYPT") {
          setOutput(oneTimePadDecryption(text));
          return;

        }
        break;
      case "3DES":
        if (method === "ENCRYPT") {
          setOutput(tripleDESEncryption(text));
          return;
        }
        if (method === "DECRYPT") {
          setOutput(tripleDESDecryption(text));
          return;
        }
        break;
      case "AES":
        if (method === "ENCRYPT") {
          setOutput(AESEncryption(text));
          return;
        }
        if (method === "DECRYPT") {
          setOutput(AESDecrption(text));
          return;
        }
        break;
      default:
        setOutput('')
    }
  };

  return (
    <div className="flex flex-col">
      {/* Name */}
       <div className="w-full flex justify-center items-center h-28 gap-x-4">
        <div className="text-md">Made by: Astronaut 🧑‍🚀👨‍🚀👨‍🚀👩‍🚀 Lealem</div>
      </div>
      {/* Name */}

      <div className="w-full flex justify-center items-center h-28 gap-x-4">
        <div className="text-xl">Choose Enc-Dec Algorithm</div>
        <div className="w-1/6">
          <ReactSelect
            onChange={(value) => setEncDecAlgorithm(value)}
            options={options}
          />
        </div>
      </div>
      <div className="flex justify-center gap-x-4">
        <div class="flex items-center">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => setMethod("ENCRYPT")}
          />
          <label
            for="default-radio-1"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Encrypt
          </label>
        </div>
        <div class="flex items-center">
          <input
            defaultChecked
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            onChange={(e) => setMethod("DECRYPT")}
          />
          <label
            for="default-radio-2"
            class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Decrypt
          </label>
        </div>
      </div>
      <div className="flex justify-center items-center mt-8 gap-x-8">
        <div className="bg-gray-100 w-72 h-96 rounded-xl shadow-xl">
          <div className="m-4 flex flex-col">
            <div className="text-xl font-bold mb-4">Input</div>
            <textarea
              onChange={(e) => setText(e.target.value)}
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your input..."
            ></textarea>
            <button
            disabled={encdecAlgorithm === null}
              type="button"
              class={`mt-4 text-white ${encdecAlgorithm === null ? 'bg-gray-700':'bg-blue-700'} ${encdecAlgorithm === null ? 'hover:bg-gray-700':'hover:bg-blue-800'} focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="bg-gray-100 w-72 h-96 rounded-xl shadow-xl">
          <div className="m-4 flex flex-col">
            <div className="text-xl font-bold mb-4">Output</div>
            <textarea
              value={output}
              disabled
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your input..."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
