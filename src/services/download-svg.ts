export function downloadSvg() {
    const svg = document.getElementById('myqrcode')?.querySelector<SVGAElement>('svg');
    if (svg) {
        const link = document.createElement('a');
        link.download = "QRCode.svg";
        const blob = new Blob([svg.outerHTML], { type: 'image/svg+xml' });
        link.href = URL.createObjectURL(blob);
        link.click();
    }

}