import * as XLSX from 'xlsx';
import { ManageCustomerDataType } from '@/pages/Admin/ManageCustomer/ManageCustomer.data';

/**
 * Parse Excel/CSV file and convert to customer data format
 * @param file The uploaded file
 * @returns Promise with parsed customer data
 */
export const parseCustomerFile = (file: File): Promise<ManageCustomerDataType[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        
        // Get first sheet
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        
        // Convert to JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        
        // Map to customer data format
        const customers: ManageCustomerDataType[] = jsonData.map((row: any, index) => ({
          key: String(index + 1),
          customerId: row.customerId || `IMPORT-${index + 1}`,
          customerName: row.customerName || row.name || '',
          email: row.email || '',
          phoneNumber: row.phoneNumber || row.phone || '',
          type: row.type || 'registered',
          level: row.level || 'bronze',
          status: row.status || 'offline',
          avatar: ''
        }));
        
        resolve(customers);
      } catch (error) {
        reject(new Error('Failed to parse file. Please check the file format.'));
      }
    };
    
    reader.onerror = () => {
      reject(new Error('Error reading file.'));
    };
    
    reader.readAsBinaryString(file);
  });
};

/**
 * Validate file type (only allow Excel/CSV files)
 * @param file The file to validate
 * @returns boolean indicating if file is valid
 */
export const validateFileType = (file: File): boolean => {
  const acceptedTypes = [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/csv'
  ];
  return acceptedTypes.includes(file.type);
};