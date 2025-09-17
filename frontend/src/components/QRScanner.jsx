import { useState } from "react";
import { QrReader } from "react-qr-reader";
import ResultCard from "./ResultCard";

export default function QRScanner({ onDetected }) {
  const [scan, setScan] = useState(null);

  return (
    <div className="flex flex-col items-center">
      <div className="w-80 h-80 rounded-3xl overflow-hidden border-4 border-purple-200 shadow-lg glass-effect p-4">
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              const text = result?.text ?? result;
              if (text && text !== scan) {
                setScan(text);
                if (onDetected) onDetected(text);
              }
            }
            if (error) {
              // console.error(error);
            }
          }}
          constraints={{ facingMode: "environment" }}
          style={{ width: "100%", height: "100%", borderRadius: "16px" }}
        />
      </div>

      {scan ? (
        <div className="mt-6 w-full">
          <ResultCard status="valid" certId="--" holderName="--" issueDate="--" hash={scan} />
        </div>
      ) : (
        <p className="mt-6 text-gray-600 text-center">Point your camera at a certificate QR code</p>
      )}
    </div>
  );
}