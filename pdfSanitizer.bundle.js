async function sha256(buffer) {
  const hash = await crypto.subtle.digest('SHA-256', buffer);
  return [...new Uint8Array(hash)].map(b => b.toString(16).padStart(2, '0')).join('');
}

async function sanitizePdfMetadata(arrayBuffer) {
  // 1. Load the original document
  const originalDoc = await PDFLib.PDFDocument.load(arrayBuffer, { updateMetadata: false });

  // Capture metadata before stripping for the UI report
  const metadataBefore = {
    title: originalDoc.getTitle(),
    author: originalDoc.getAuthor(),
    subject: originalDoc.getSubject(),
    keywords: originalDoc.getKeywords(),
    creator: originalDoc.getCreator(),
    producer: originalDoc.getProducer(),
    creationDate: originalDoc.getCreationDate(),
    modificationDate: originalDoc.getModificationDate(),
    pageCount: originalDoc.getPageCount()
  };

  // 2. Create a BRAND NEW document (Nuclear approach)
  // This ensures a new File ID and clears hidden dictionary entries automatically
  const newDoc = await PDFLib.PDFDocument.create();

  // 3. Copy all pages from the original to the new document
  const indices = originalDoc.getPageIndices();
  const copiedPages = await newDoc.copyPages(originalDoc, indices);

  copiedPages.forEach((page) => {
    newDoc.addPage(page);
  });

  // 4. Explicitly set empty metadata on the new doc to be safe
  newDoc.setTitle('');
  newDoc.setAuthor('');
  newDoc.setSubject('');
  newDoc.setKeywords([]);
  newDoc.setCreator('');
  newDoc.setProducer('');
  newDoc.setCreationDate(new Date(0));
  newDoc.setModificationDate(new Date(0));

  // 5. Save the new document
  // useObjectStreams: false ensures maximum compatibility
  const sanitizedBytes = await newDoc.save({ useObjectStreams: false, updateFieldAppearances: false });

  return { sanitizedBytes, metadataBefore };
}

async function processPdfFile(file) {
  const buffer = await file.arrayBuffer();
  const hashBefore = await sha256(buffer);
  
  // Run the nuclear sanitization
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
console.info('pdfSanitizer initialized (Nuclear Mode)');
