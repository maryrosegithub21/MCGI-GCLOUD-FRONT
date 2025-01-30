import { PDFDocument } from 'pdf-lib';

export const generatePdf = async (rowData) => {
  try {
    // Fetch the PDF template from a URL or a public directory
    const existingPdfBytes = await fetch('/mcgi.pdf').then(res => res.arrayBuffer());

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    const form = pdfDoc.getForm();

    // Debug: Log all field names
    const fields = form.getFields();
    const fieldNames = fields.map(field => field.getName());
    console.log('Available field names:', fieldNames);

    // Use the correct field names based on the logged output
    form.getTextField('Date').setText(rowData.date);
    form.getTextField('FirstName').setText(rowData.firstName);
    form.getTextField('LastName').setText(rowData.lastName);
    form.getTextField('LastName').setText(rowData.lastName);
    form.getTextField('Email').setText(rowData.email);
    form.getTextField('ContactNumber').setText(rowData.contact);
    form.getTextField('MCGI').setText(rowData.mcgiChurchMember);
    form.getTextField('Religion').setText(rowData.religion);
    form.getTextField('NewReturn').setText(rowData.newReturning);
    form.getTextField('Address').setText(rowData.address);
    form.getTextField('Gender').setText(rowData.gender);
    form.getTextField('Qr_Code').setText(rowData.qrCode);

     // Crop the top part of the first page
     const pages = pdfDoc.getPages();
     const firstPage = pages[0];
     const { width, height } = firstPage.getSize();
     const topCropHeight  = 73; // Adjust this value to crop more or less of the top part
     const bottomCropHeight = 10; // Adjust this value to crop more of the bottom part
    //  firstPage.setCropBox(0, cropHeight, width, height - cropHeight);
    firstPage.setCropBox(0, bottomCropHeight, width, height - topCropHeight - bottomCropHeight);


    // Serialize the PDFDocument to bytes
    const pdfBytes = await pdfDoc.save();

    // Create a blob and download the PDF
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    // link.download = 'filled_form.pdf';
    link.download = `${rowData.lastName}_${rowData.firstName}_form.pdf`; // Dynamic filename
    link.click();
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};
