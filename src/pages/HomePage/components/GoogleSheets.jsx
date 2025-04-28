// // import { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import styles from './GoogleSheets.module.css';

// // const GoogleSheets = () => {
// //   const [data, setData] = useState([]);
// //   const [filteredData, setFilteredData] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [selectedRowData, setSelectedRowData] = useState(null);
// //   const [selectedRowIndex, setSelectedRowIndex] = useState(null);
// //   const [noDataFound, setNoDataFound] = useState(false);

// //   const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// //   const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
// //   const RANGE = 'RAW FORM DATA!A2:X';

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
// //         const response = await axios.get(url);
// //         const allData = response.data.values;

// //         if (allData && allData.length > 0) {
// //           const filteredColumns = allData.map(row => row.slice(0, 16));
// //           setData(filteredColumns);
// //         } else {
// //           setData([]);
// //           console.warn('No data found in the specified range.');
// //         }
// //       } catch (error) {
// //         console.error('Error fetching ', error);
// //       }
// //     };

// //     fetchData();
// //   }, [API_KEY, SPREADSHEET_ID, RANGE]);

// //   const handleSearch = () => {
// //     const query = searchQuery.toLowerCase().trim();
// //     if (!query) {
// //       alert('Please enter a search query.');
// //       return;
// //     }

// //     const filtered = data.filter(row =>
// //       row.some(cell =>
// //         String(cell).toLowerCase().includes(query)
// //       )
// //     );

// //     setFilteredData(filtered);
// //     setNoDataFound(filtered.length === 0);
// //   };

// //   const handleRowClick = (rowData, rowIndex) => {
// //     setSelectedRowData(rowData);
// //     setSelectedRowIndex(rowIndex);
// //     const firstName = rowData[1];
// //     const lastName = rowData[2];
// //     alert(`You've clicked: ${firstName} ${lastName}`);
// //   };

// //   const handlePassToGoogleDocs = async () => {
// //     if (!selectedRowData) {
// //       alert('No data selected. Please select a row to print.');
// //       return;
// //     }

// //     const lastName = selectedRowData[2];
// //     if (window.confirm(`Print information for ${lastName}?`)) {
// //       try {
// //         const response = await fetch('/generate-pdf', {
// //           method: 'POST',
// //           headers: {
// //             'Content-Type': 'application/json',
// //           },
// //           body: JSON.stringify({
// //             date: selectedRowData[0],
// //             firstName: selectedRowData[1],
// //             lastName: selectedRowData[2],
// //             email: selectedRowData[3],
// //             contact: selectedRowData[4],
// //             mcgiChurchMember: selectedRowData[5],
// //             religion: selectedRowData[6],
// //             newReturning: selectedRowData[7],
// //             address: selectedRowData[8],
// //             gender: selectedRowData[9],
// //             qrCode: selectedRowData[15],
// //           }),
// //         });

// //         if (!response.ok) {
// //           throw new Error('Failed to generate PDF');
// //         }

// //         const blob = await response.blob();
// //         const url = URL.createObjectURL(blob);
// //         const link = document.createElement('a');
// //         link.href = url;
// //         link.download = `${selectedRowData[2]}_${selectedRowData[1]}_form.pdf`;
// //         link.click();

// //         alert('PDF generated!');
// //         // let url;
// //         //           if (rowDataToPass.newReturning === "New Registrant") {
// //         //             url = `https://fs.mcgi.org/recipients/?user_firstname=${encodeURIComponent(rowDataToPass.firstName)}&user_lastname=${encodeURIComponent(rowDataToPass.lastName)}&contact_number=${encodeURIComponent(rowDataToPass.contact)}&contact_address=${encodeURIComponent(rowDataToPass.address)}&wp-submit=Search&action=retrieverecipient`;
// //         //           } else if (rowDataToPass.newReturning === "Returning") {
// //         //             url = `https://fs.mcgi.org/recipients/?recipient_firstname=${encodeURIComponent(rowDataToPass.firstName)}&recipient_lastname=${encodeURIComponent(rowDataToPass.lastName)}&qr_number=${encodeURIComponent(rowDataToPass.qrCode)}&action=retrieverecipient`;
// //         //           }
// //         //           if (url) {
// //         //             window.location.href = url;
// //         //           }
// //         //         })
// //         //      

// //       } catch (error) {
// //         console.error('PDF generation error:', error);
// //         alert('PDF generation failed.');
// //       }
// //     }
// //   };

// //   return (
// //     <div>
// //       <h1>Members Church Of God Feast Guest Information</h1>
// //       <div className={styles.buttonContainer}>
// //         <input
// //           type="text"
// //           value={searchQuery}
// //           onChange={e => setSearchQuery(e.target.value)}
// //           placeholder="Search by First/Last Name"
// //           className={styles.myInput}
// //         />
// //         <button className={styles.myButton} onClick={handleSearch}>Search</button>
// //         <button className={styles.myButton} onClick={handlePassToGoogleDocs}>Print Data</button>
// //       </div>

// //       {noDataFound && <h1>No Data Found</h1>}

// //       <div className={styles['table-container']}>
// //         <table className={styles['data-table']}>
// //           <thead>
// //             <tr>
// //               {data[0] && data[0].map((header, index) => <th key={index}>{header}</th>)}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {(filteredData.length > 0 ? filteredData : data.slice(1)).map((row, rowIndex) => (
// //               <tr
// //                 key={rowIndex}
// //                 onClick={() => handleRowClick(row, rowIndex)}
// //                 className={selectedRowIndex === rowIndex ? styles['selected-row'] : ''}
// //               >
// //                 {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default GoogleSheets;


// // import { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import jsPDF from 'jspdf';
// // import styles from './GoogleSheets.module.css';

// // const GoogleSheets = () => {
// //   const [data, setData] = useState([]);
// //   const [filteredData, setFilteredData] = useState([]);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [selectedRowData, setSelectedRowData] = useState(null);
// //   const [selectedRowIndex, setSelectedRowIndex] = useState(null);
// //   const [noDataFound, setNoDataFound] = useState(false);

// //   const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
// //   const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
// //   const RANGE = 'RAW FORM DATA!A2:X';

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
// //         const response = await axios.get(url);
// //         const allData = response.data.values;

// //         if (allData && allData.length > 0) {
// //           const filteredColumns = allData.map(row => row.slice(0, 16));
// //           setData(filteredColumns);
// //         } else {
// //           setData([]);
// //           console.warn('No data found in the specified range.');
// //         }
// //       } catch (error) {
// //         console.error('Error fetching ', error);
// //       }
// //     };

// //     fetchData();
// //   }, [API_KEY, SPREADSHEET_ID, RANGE]);

// //   const handleSearch = () => {
// //     const query = searchQuery.toLowerCase().trim();
// //     if (!query) {
// //       alert('Please enter a search query.');
// //       return;
// //     }

// //     const filtered = data.filter(row =>
// //       row.some(cell =>
// //         String(cell).toLowerCase().includes(query)
// //       )
// //     );

// //     setFilteredData(filtered);
// //     setNoDataFound(filtered.length === 0);
// //   };

// //   const handleRowClick = (rowData, rowIndex) => {
// //     setSelectedRowData(rowData);
// //     setSelectedRowIndex(rowIndex);
// //     const firstName = rowData[1];
// //     const lastName = rowData[2];
// //     alert(`You've clicked: ${firstName} ${lastName}`);
// //   };

// //   const handlePassToGoogleDocs = () => {
// //     if (!selectedRowData) {
// //       alert('No data selected. Please select a row to print.');
// //       return;
// //     }

// //     const doc = new jsPDF();
// //     doc.text(`Date: ${selectedRowData[0]}`, 10, 10);
// //     doc.text(`First Name: ${selectedRowData[1]}`, 10, 20);
// //     doc.text(`Last Name: ${selectedRowData[2]}`, 10, 30);
// //     doc.text(`Email: ${selectedRowData[3]}`, 10, 40);
// //     doc.text(`Contact: ${selectedRowData[4]}`, 10, 50);
// //     doc.text(`MCGI Church Member: ${selectedRowData[5]}`, 10, 60);
// //     doc.text(`Religion: ${selectedRowData[6]}`, 10, 70);
// //     doc.text(`New/Returning: ${selectedRowData[7]}`, 10, 80);
// //     doc.text(`Address: ${selectedRowData[8]}`, 10, 90);
// //     doc.text(`Gender: ${selectedRowData[9]}`, 10, 100);
// //     doc.text(`QR Code: ${selectedRowData[15]}`, 10, 110);

// //     doc.save(`${selectedRowData[2]}_${selectedRowData[1]}_form.pdf`);
// //     alert('PDF generated!');
// //   };

// //   return (
// //     <div>
// //       <h1>Members Church Of God Feast Guest Information</h1>
// //       <div className={styles.buttonContainer}>
// //         <input
// //           type="text"
// //           value={searchQuery}
// //           onChange={e => setSearchQuery(e.target.value)}
// //           placeholder="Search by First/Last Name"
// //           className={styles.myInput}
// //         />
// //         <button className={styles.myButton} onClick={handleSearch}>Search</button>
// //         <button className={styles.myButton} onClick={handlePassToGoogleDocs}>Print Data</button>
// //       </div>

// //       {noDataFound && <h1>No Data Found</h1>}

// //       <div className={styles['table-container']}>
// //         <table className={styles['data-table']}>
// //           <thead>
// //             <tr>
// //               {data[0] && data[0].map((header, index) => <th key={index}>{header}</th>)}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {(filteredData.length > 0 ? filteredData : data.slice(1)).map((row, rowIndex) => (
// //               <tr
// //                 key={rowIndex}
// //                 onClick={() => handleRowClick(row, rowIndex)}
// //                 className={selectedRowIndex === rowIndex ? styles['selected-row'] : ''}
// //               >
// //                 {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default GoogleSheets;


// // ==========================

// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { PDFDocument, rgb } from 'pdf-lib';
// import styles from './GoogleSheets.module.css';

// const GoogleSheets = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedRowData, setSelectedRowData] = useState(null);
//   const [selectedRowIndex, setSelectedRowIndex] = useState(null);
//   const [noDataFound, setNoDataFound] = useState(false);

//   const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
//   const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
//   const RANGE = 'RAW FORM DATA!A2:X';

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
//         const response = await axios.get(url);
//         const allData = response.data.values;

//         if (allData && allData.length > 0) {
//           const filteredColumns = allData.map(row => row.slice(0, 16));
//           setData(filteredColumns);
//         } else {
//           setData([]);
//           console.warn('No data found in the specified range.');
//         }
//       } catch (error) {
//         console.error('Error fetching ', error);
//       }
//     };

//     fetchData();
//   }, [API_KEY, SPREADSHEET_ID, RANGE]);

//   const handleSearch = () => {
//     const query = searchQuery.toLowerCase().trim();
//     if (!query) {
//       alert('Please enter a search query.');
//       return;
//     }

//     const filtered = data.filter(row =>
//       row.some(cell =>
//         String(cell).toLowerCase().includes(query)
//       )
//     );

//     setFilteredData(filtered);
//     setNoDataFound(filtered.length === 0);
//   };

//   const handleRowClick = (rowData, rowIndex) => {
//     setSelectedRowData(rowData);
//     setSelectedRowIndex(rowIndex);
//     const firstName = rowData[1];
//     const lastName = rowData[2];
//     alert(`You've clicked: ${firstName} ${lastName}`);
//   };

//   const handlePassToGoogleDocs = async () => {
//     if (!selectedRowData) {
//       alert('No data selected. Please select a row to print.');
//       return;
//     }

//     try {
//       const existingPdfBytes = await fetch('/mcgi.pdf').then(res => res.arrayBuffer());
//       const pdfDoc = await PDFDocument.load(existingPdfBytes);
//       const pages = pdfDoc.getPages();
//       const firstPage = pages[0];

//       const { height } = firstPage.getSize(); // Removed the unused 'width' variable

//       firstPage.drawText(`Date: ${selectedRowData[0]}`, { x: 50, y: height - 50, size: 12, color: rgb(0, 0, 0) });
//       firstPage.drawText(`First Name: ${selectedRowData[1]}`, { x: 50, y: height - 70, size: 12, color: rgb(0, 0, 0) });
//       firstPage.drawText(`Last Name: ${selectedRowData[2]}`, { x: 50, y: height - 90, size: 12, color: rgb(0, 0, 0) });
//       firstPage.drawText(`Email: ${selectedRowData[3]}`, { x: 50, y: height - 110, size: 12, color: rgb(0, 0, 0) });
//       firstPage.drawText(`Contact: ${selectedRowData[4]}`, { x: 50, y: height - 130, size: 12, color: rgb(0, 0, 0) });
//       firstPage.drawText(`MCGI Church Member: ${selectedRowData[5]}`, { x: 50, y: height - 150, size: 12, color: rgb(0, 0, 0) });
//       firstPage.drawText(`Religion: ${selectedRowData[6]}`, { x: 50, y: height - 170, size: 12, color: rgb(0, 0, 0) });
//       firstPage.drawText(`New/Returning: ${selectedRowData[7]}`, { x: 50, y: height - 190, size: 12, color: rgb(0, 0, 0) });
//       firstPage.drawText(`Address: ${selectedRowData[8]}`, { x: 50, y: height - 210, size: 12, color: rgb(0, 0, 0) });
//       firstPage.drawText(`Gender: ${selectedRowData[9]}`, { x: 50, y: height - 230, size: 12, color: rgb(0, 0, 0) });
//       firstPage.drawText(`QR Code: ${selectedRowData[15]}`, { x: 50, y: height - 250, size: 12, color: rgb(0, 0, 0) });

//       const pdfBytes = await pdfDoc.save();
//       const blob = new Blob([pdfBytes], { type: 'application/pdf' });
//       const url = URL.createObjectURL(blob);
//       const a = document.createElement('a');
//       a.href = url;
//       a.download = `${selectedRowData[2]}_${selectedRowData[1]}_form.pdf`;
//       a.click();
//       URL.revokeObjectURL(url);

//       alert('PDF generated!');
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Members Church Of God Feast Guest Information</h1>
//       <div className={styles.buttonContainer}>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={e => setSearchQuery(e.target.value)}
//           placeholder="Search by First/Last Name"
//           className={styles.myInput}
//         />
//         <button className={styles.myButton} onClick={handleSearch}>Search</button>
//         <button className={styles.myButton} onClick={handlePassToGoogleDocs}>Print Data</button>
//       </div>

//       {noDataFound && <h1>No Data Found</h1>}

//       <div className={styles['table-container']}>
//         <table className={styles['data-table']}>
//           <thead>
//             <tr>
//               {data[0] && data[0].map((header, index) => <th key={index}>{header}</th>)}
//             </tr>
//           </thead>
//           <tbody>
//             {(filteredData.length > 0 ? filteredData : data.slice(1)).map((row, rowIndex) => (
//               <tr
//                 key={rowIndex}
//                 onClick={() => handleRowClick(row, rowIndex)}
//                 className={selectedRowIndex === rowIndex ? styles['selected-row'] : ''}
//               >
//                 {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default GoogleSheets;


// ================================


// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { PDFDocument, rgb } from 'pdf-lib';
// import mcgiPdf from '../../../assets/mcgi.pdf'; // Import the PDF file
// import styles from './GoogleSheets.module.css';

// const GoogleSheets = () => {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedRowData, setSelectedRowData] = useState(null);
//   const [selectedRowIndex, setSelectedRowIndex] = useState(null);
//   const [noDataFound, setNoDataFound] = useState(false);

//   const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
//   const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
//   const RANGE = 'RAW FORM DATA!A2:X';

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
//         const response = await axios.get(url);
//         const allData = response.data.values;

//         if (allData && allData.length > 0) {
//           const filteredColumns = allData.map(row => row.slice(0, 16));
//           setData(filteredColumns);
//         } else {
//           setData([]);
//           console.warn('No data found in the specified range.');
//         }
//       } catch (error) {
//         console.error('Error fetching ', error);
//       }
//     };

//     fetchData();
//   }, [API_KEY, SPREADSHEET_ID, RANGE]);

//   const handleSearch = () => {
//     const query = searchQuery.toLowerCase().trim();
//     if (!query) {
//       alert('Please enter a search query.');
//       return;
//     }

//     const filtered = data.filter(row =>
//       row.some(cell =>
//         String(cell).toLowerCase().includes(query)
//       )
//     );

//     setFilteredData(filtered);
//     setNoDataFound(filtered.length === 0);
//   };

//   const handleRowClick = (rowData, rowIndex) => {
//     setSelectedRowData(rowData);
//     setSelectedRowIndex(rowIndex);
//     const firstName = rowData[1];
//     const lastName = rowData[2];
//     alert(`You've clicked: ${firstName} ${lastName}`);
//   };

//   const handlePassToGoogleDocs = async () => {
//   if (!selectedRowData) {
//     alert('No data selected. Please select a row to print.');
//     return;
//   }

//   try {
//     const existingPdfBytes = await fetch(mcgiPdf).then(res => res.arrayBuffer());
//     const pdfDoc = await PDFDocument.load(existingPdfBytes);
//     const pages = pdfDoc.getPages();
//     const firstPage = pages[0];

//     // Adjust these coordinates based on your PDF layout
//     firstPage.drawText(`${selectedRowData[1]}`, { x: 180, y: 804, size: 12, color: rgb(0, 0, 0) });
//     firstPage.drawText(`${selectedRowData[2]}`, { x: 180, y: 785, size: 12, color: rgb(0, 0, 0) });
//     firstPage.drawText(`${selectedRowData[3]}`, { x: 180, y: 760, size: 12, color: rgb(0, 0, 0) });
//     firstPage.drawText(`${selectedRowData[4]}`, { x: 180, y: 733, size: 12, color: rgb(0, 0, 0) });
//     firstPage.drawText(`${selectedRowData[5]}`, { x: 180, y: 712, size: 12, color: rgb(0, 0, 0) });
//     firstPage.drawText(`${selectedRowData[6]}`, { x: 180, y: 692, size: 12, color: rgb(0, 0, 0) });
//     firstPage.drawText(`${selectedRowData[7]}`, { x: 180, y: 663, size: 12, color: rgb(0, 0, 0) });
//     firstPage.drawText(`${selectedRowData[8]}`, { x: 180, y: 643, size: 12, color: rgb(0, 0, 0) });
//     firstPage.drawText(`${selectedRowData[9]}`, { x: 180, y: 596, size: 12, color: rgb(0, 0, 0) });
//     firstPage.drawText(`${selectedRowData[0]}`, { x: 445, y: 142, size: 12, color: rgb(0, 0, 0) });
//     firstPage.drawText(`${selectedRowData[15]}`, { x: 100, y: 48, size: 12, color: rgb(0, 0, 0) });

//     const pdfBytes = await pdfDoc.save();
//     const blob = new Blob([pdfBytes], { type: 'application/pdf' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = `${selectedRowData[2]}_${selectedRowData[1]}_form.pdf`;
//     a.click();
//     URL.revokeObjectURL(url);

//     alert('PDF generated!');

    
//   } catch (error) {
//     console.error('Error generating PDF:', error);
//   }
// };
//   return (
//     <div>
//       <h1>Members Church Of God Feast Guest Information</h1>
//       <div className={styles.buttonContainer}>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={e => setSearchQuery(e.target.value)}
//           placeholder="Search by First/Last Name"
//           className={styles.myInput}
//         />
//         <button className={styles.myButton} onClick={handleSearch}>Search</button>
//         <button className={styles.myButton} onClick={handlePassToGoogleDocs}>Print Data</button>
//       </div>

//       {noDataFound && <h1>No Data Found</h1>}

//       <div className={styles['table-container']}>
//         <table className={styles['data-table']}>
//           <thead>
//             <tr>
//               {data[0] && data[0].map((header, index) => <th key={index}>{header}</th>)}
//             </tr>
//           </thead>
//           <tbody>
//             {(filteredData.length > 0 ? filteredData : data.slice(1)).map((row, rowIndex) => (
//               <tr
//                 key={rowIndex}
//                 onClick={() => handleRowClick(row, rowIndex)}
//                 className={selectedRowIndex === rowIndex ? styles['selected-row'] : ''}
//               >
//                 {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default GoogleSheets;

// ===================================


import { useState, useEffect } from 'react';
import axios from 'axios';
import { PDFDocument, rgb } from 'pdf-lib';
import mcgiPdf from '../../../assets/mcgi.pdf'; // Import the PDF file
import styles from './GoogleSheets.module.css';

const GoogleSheets = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRowData, setSelectedRowData] = useState(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const [noDataFound, setNoDataFound] = useState(false);
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
  const RANGE = 'RAW FORM DATA!A2:X';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
        const response = await axios.get(url);
        const allData = response.data.values;
        if (allData && allData.length > 0) {
          const filteredColumns = allData.map(row => row.slice(0, 16));
          setData(filteredColumns);
        } else {
          setData([]);
          console.warn('No data found in the specified range.');
        }
      } catch (error) {
        console.error('Error fetching ', error);
      }
    };
    fetchData();
  }, [API_KEY, SPREADSHEET_ID, RANGE]);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) {
      alert('Please enter a search query.');
      return;
    }
    const filtered = data.filter(row =>
      row.some(cell =>
        String(cell).toLowerCase().includes(query)
      )
    );
    setFilteredData(filtered);
    setNoDataFound(filtered.length === 0);
  };

  const handleRowClick = (rowData, rowIndex) => {
    setSelectedRowData(rowData);
    setSelectedRowIndex(rowIndex);
    const firstName = rowData[1];
    const lastName = rowData[2];
    alert(`You've clicked: ${firstName} ${lastName}`);
  };

  const handlePassToGoogleDocs = async () => {
    if (!selectedRowData) {
      alert('No data selected. Please select a row to print.');
      return;
    }
    try {
      const existingPdfBytes = await fetch(mcgiPdf).then(res => res.arrayBuffer());
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const pages = pdfDoc.getPages();
      const firstPage = pages[0];
      // Adjust these coordinates based on your PDF layout
      firstPage.drawText(`${selectedRowData[1]}`, { x: 180, y: 804, size: 12, color: rgb(0, 0, 0) });
      firstPage.drawText(`${selectedRowData[2]}`, { x: 180, y: 785, size: 12, color: rgb(0, 0, 0) });
      firstPage.drawText(`${selectedRowData[3]}`, { x: 180, y: 760, size: 12, color: rgb(0, 0, 0) });
      firstPage.drawText(`${selectedRowData[4]}`, { x: 180, y: 733, size: 12, color: rgb(0, 0, 0) });
      firstPage.drawText(`${selectedRowData[5]}`, { x: 180, y: 712, size: 12, color: rgb(0, 0, 0) });
      firstPage.drawText(`${selectedRowData[6]}`, { x: 180, y: 692, size: 12, color: rgb(0, 0, 0) });
      firstPage.drawText(`${selectedRowData[7]}`, { x: 180, y: 663, size: 12, color: rgb(0, 0, 0) });
      firstPage.drawText(`${selectedRowData[8]}`, { x: 180, y: 643, size: 12, color: rgb(0, 0, 0) });
      firstPage.drawText(`${selectedRowData[9]}`, { x: 180, y: 596, size: 12, color: rgb(0, 0, 0) });
      firstPage.drawText(`${selectedRowData[0]}`, { x: 445, y: 142, size: 12, color: rgb(0, 0, 0) });
      firstPage.drawText(`${selectedRowData[15]}`, { x: 100, y: 48, size: 12, color: rgb(0, 0, 0) });

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${selectedRowData[2]}_${selectedRowData[1]}_form.pdf`;
      a.click();
      URL.revokeObjectURL(url);
      
      alert('PDF generated!');
      
      // Create a rowDataToPass object with the necessary fields
      const rowDataToPass = {
        firstName: selectedRowData[1],
        lastName: selectedRowData[2],
        contact: selectedRowData[3],
        address: selectedRowData[4],
        qrCode: selectedRowData[0], // Assuming QR code is in the first column
        newReturning: selectedRowData[9] // Assuming newReturning status is in column 10
      };
      
      let redirectUrl;
      
      if (rowDataToPass.newReturning === "New Registrant") {
        redirectUrl = `https://fs.mcgi.org/recipients/?user_firstname=${encodeURIComponent(rowDataToPass.firstName)}&user_lastname=${encodeURIComponent(rowDataToPass.lastName)}&contact_number=${encodeURIComponent(rowDataToPass.contact)}&contact_address=${encodeURIComponent(rowDataToPass.address)}&wp-submit=Search&action=retrieverecipient`;
      } else if (rowDataToPass.newReturning === "Returning") {
        redirectUrl = `https://fs.mcgi.org/recipients/?recipient_firstname=${encodeURIComponent(rowDataToPass.firstName)}&recipient_lastname=${encodeURIComponent(rowDataToPass.lastName)}&qr_number=${encodeURIComponent(rowDataToPass.qrCode)}&action=retrieverecipient`;
      }
      
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
      
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <div>
      <h1>Members Church Of God Feast Guest Information</h1>
      <div className={styles.buttonContainer}>
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search by First/Last Name"
          className={styles.myInput}
        />
        <button className={styles.myButton} onClick={handleSearch}>Search</button>
        <button className={styles.myButton} onClick={handlePassToGoogleDocs}>Print Data</button>
      </div>
      {noDataFound && <h1>No Data Found</h1>}
      <div className={styles['table-container']}>
        <table className={styles['data-table']}>
          <thead>
            <tr>
              {data[0] && data[0].map((header, index) => <th key={index}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {(filteredData.length > 0 ? filteredData : data.slice(1)).map((row, rowIndex) => (
              <tr
                key={rowIndex}
                onClick={() => handleRowClick(row, rowIndex)}
                className={selectedRowIndex === rowIndex ? styles['selected-row'] : ''}
              >
                {row.map((cell, cellIndex) => <td key={cellIndex}>{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GoogleSheets;
