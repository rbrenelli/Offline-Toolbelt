async function sha256(buffer) {
  const hash = await crypto.subtle.digest('SHA-256', buffer);
  return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join('');
}

async function sanitizePdfMetadata(arrayBuffer) {
  const pdfDoc = await PDFLib.PDFDocument.load(arrayBuffer, { updateMetadata: false });

  const metadataBefore = {
    title: pdfDoc.getTitle(),
    author: pdfDoc.getAuthor(),
    subject: pdfDoc.getSubject(),
    keywords: pdfDoc.getKeywords(),
    creator: pdfDoc.getCreator(),
    producer: pdfDoc.getProducer(),
    creationDate: pdfDoc.getCreationDate(),
    modificationDate: pdfDoc.getModificationDate()
  };

  pdfDoc.setTitle('');
  pdfDoc.setAuthor('');
  pdfDoc.setSubject('');
  pdfDoc.setKeywords([]);
  pdfDoc.setCreator('');
  pdfDoc.setProducer('');
  pdfDoc.setCreationDate(new Date(0));
  pdfDoc.setModificationDate(new Date(0));

  const catalog = pdfDoc.catalog;
  if (catalog.get(PDFLib.PDFName.of('Metadata'))) {
    catalog.delete(PDFLib.PDFName.of('Metadata'));
  }

  const sanitizedBytes = await pdfDoc.save({ useObjectStreams: false, updateFieldAppearances: false });

  return { sanitizedBytes, metadataBefore };
}

async function processPdfFile(file) {
  const buffer = await file.arrayBuffer();
  const hashBefore = await sha256(buffer);
  const { sanitizedBytes, metadataBefore } = await sanitizePdfMetadata(buffer);
  const hashAfter = await sha256(sanitizedBytes);
  return {
    originalName: file.name,
    metadataBefore,
    hashBefore,
    hashAfter,
    sanitizedBlob: new Blob([sanitizedBytes], { type: 'application/pdf' })
  };
}

window.pdfSanitizer = window.pdfSanitizer || {};
window.pdfSanitizer.processPdfFile = processPdfFile;
console.info('pdfSanitizer initialized');
