import { Button, Flex } from '@mantine/core';
import { Dropzone, PDF_MIME_TYPE } from '@mantine/dropzone';
import { useLayoutEffect, useRef, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import './PDFReader.scss';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url
).toString();

const options = {
  cMapUrl: 'cmaps/',
  standardFontDataUrl: 'standard_fonts/'
};

export default function PDFReaderPage () {
  const [currentPage, setCurrentPage] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pdfReaderHeight, setPdfReaderHeight] = useState<string>('auto');
  const [PDFFile, setPDFFile] = useState<File | undefined>(); // [pdfBytes, setPdfBytes
  const [numPages, setNumPages] = useState<number | undefined>();
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess ({ numPages }: any) {
    setNumPages(numPages);
    setCurrentPage(1);
  }

  async function handleDrop (files: any) {
    const file = files[0];

    if (file) {
      setPDFFile(file);
    }
  }

  function onNextPage () {
    if (currentPage < (numPages ?? 0)) {
      setCurrentPage(currentPage + 1);
    }
  }

  useLayoutEffect(() => {
    const pdfContainer = containerRef.current;

    if (pdfContainer) {
      setPdfReaderHeight('calc(100vh - 32px)');
    }
  }, [PDFFile]);

  return (
    <div
      ref={containerRef}
      style={{
        height: pdfReaderHeight,
        overflowX: 'hidden',
        overflowY: 'scroll'
      }}
    >
      <Flex align="center">
        <Dropzone accept={PDF_MIME_TYPE}
          onDrop={handleDrop}>
          Click to upload
        </Dropzone>
        {currentPage < (numPages ?? 0) && (
          <Button onClick={onNextPage}>Next Page</Button>
        )}
      </Flex>
      {PDFFile && (
        <Document
          file={PDFFile}
          // eslint-disable-next-line no-console
          onLoadError={console.error}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          <Page pageNumber={currentPage}
            scale={2} />
        </Document>
      )}
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
