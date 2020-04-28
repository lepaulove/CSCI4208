// name entry.1053092504
// message entry.79545154
// id: 1FAIpQLSdS3bBVMedqSVicfzTBY2-xQ3kDkaLEL0T3Fy9gGIq0EEzHJg

const formId = "1FAIpQLSdS3bBVMedqSVicfzTBY2-xQ3kDkaLEL0T3Fy9gGIq0EEzHJg";
const name = "entry.1053092504";
const mesasge = "entry.79545154";

const urlPost = `https://docs.google.com/forms/d/e/${formId}/formResponse`;

let sheetId = '1E9PF6yTDahG6Nd5z2ixmi0m98h5FoPbmiC3_S5ln6ew';
const key = "AIzaSyBnWAcfj3txvZshFMEPDFVGUtuL11eY5ig";
const sheet = encodeURIComponent('Form Responses 1');
const urlGET = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheet}?key=${key}`;
