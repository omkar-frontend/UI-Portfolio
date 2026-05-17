import cvUrl from "../assets/documents/CV-Omkar Bokil.pdf";

const CV_FILENAME = "CV-Omkar-Bokil.pdf";

export function downloadCv(): void {
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = CV_FILENAME;
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
