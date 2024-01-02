function initializePdfViewer(pdfUrl, containerId) {
    const pdfViewer = document.getElementById(containerId);
    pdfjsLib.getDocument(pdfUrl).then(pdfDoc => {
        // Loop through each page
        for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
        // Render each page
        pdfDoc.getPage(pageNum).then(page => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            pdfViewer.appendChild(canvas);

            // Set the canvas size to the PDF page size
            const viewport = page.getViewport({ scale: 1.5 });
            canvas.width = viewport.width;
            canvas.height = viewport.height;

            // Render the page content on the canvas
            page.render({ canvasContext: context, viewport: viewport });
        });
        }
    }).catch(error => {
        console.error('Error loading PDF:', error);
    })
};

window.addEventListener('DOMContentLoaded', initializePdfViewer);