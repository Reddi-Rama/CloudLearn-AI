"use client";

import DownloadButton from "./DownloadButton";
import PrintButton from "./PrintButton";
import ShareButton from "./ShareButton";

export default function CertificateActions() {
  return (
    <div className="flex flex-wrap justify-center gap-4">

      <DownloadButton onClick={() => {}} />

      <PrintButton onClick={() => window.print()} />

      <ShareButton onClick={() => {}} />

    </div>
  );
}