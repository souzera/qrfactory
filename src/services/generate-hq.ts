import QRCode from "qrcode";

function download(canvas: HTMLCanvasElement, error: any) {
  if (error) {
    console.error(error);
  } else {
    console.log("QR code generated successfully");

    // Converte o canvas para uma URL de dados de imagem
    const imageUrl = canvas.toDataURL("image/png");

    // Cria um link de download
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "qrcode.png";

    // Clica no link programaticamente para iniciar o download
    link.click();
  }
}

export function generateHighQualityQrCode(texto: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 1024;

  QRCode.toCanvas(canvas, texto, { width: canvas.width }, (error) => download(canvas, error));
}
