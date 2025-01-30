import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './GoogleSheets.module.css';
import { generatePdf } from './GeneratePdf';

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

    // const filtered = data.filter(row =>
    //   row[1].toLowerCase().includes(query) || row[2].toLowerCase().includes(query)
    // );
    const filtered = data.filter(row =>
      row.some(cell =>
        String(cell).toLowerCase().includes(query) // Convert cell to string before checking
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

  const handlePassToGoogleDocs = () => {
    if (!selectedRowData) {
      alert('No data selected. Please select a row to print.');
      return;
    }

    const lastName = selectedRowData[2];
    if (window.confirm(`Print information for ${lastName}?`)) {
      const rowDataToPass = {
        // ... (data to pass to PDF generation)
        date: selectedRowData[0],
        firstName: selectedRowData[1],
        lastName: selectedRowData[2],
        email: selectedRowData[3],
        contact: selectedRowData[4],
        mcgiChurchMember: selectedRowData[5],
        religion: selectedRowData[6],
        newReturning: selectedRowData[7],
        address: selectedRowData[8],
        gender: selectedRowData[9],
        qrCode: selectedRowData[15],
      };

      generatePdf(rowDataToPass)
        .then(() => {
          alert('PDF generated!');
          let url;
          if (rowDataToPass.newReturning === "New Registrant") {
            url = `https://fs.mcgi.org/recipients/?user_firstname=${encodeURIComponent(rowDataToPass.firstName)}&user_lastname=${encodeURIComponent(rowDataToPass.lastName)}&contact_number=${encodeURIComponent(rowDataToPass.contact)}&contact_address=${encodeURIComponent(rowDataToPass.address)}&wp-submit=Search&action=retrieverecipient`;
          } else if (rowDataToPass.newReturning === "Returning") {
            url = `https://fs.mcgi.org/recipients/?recipient_firstname=${encodeURIComponent(rowDataToPass.firstName)}&recipient_lastname=${encodeURIComponent(rowDataToPass.lastName)}&qr_number=${encodeURIComponent(rowDataToPass.qrCode)}&action=retrieverecipient`;
          }
          if (url) {
            window.location.href = url;
          }
        })
        .catch(error => {
          console.error('PDF generation error:', error);
          alert('PDF generation failed.');
        });
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
      <button  className={styles.myButton} onClick={handleSearch}>Search</button>
      <button  className={styles.myButton} onClick={handlePassToGoogleDocs}>Print Data</button>
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