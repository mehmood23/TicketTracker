import React, { useState, useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { headings } from "./dataHeadings";
import Modal from 'react-bootstrap/Modal';
import { AddTicketsData } from "./AddTicketsData";
import { FormProvider } from "./dataStore";
import * as XLSX from 'xlsx';

function TicketTracker() {
  const [tickets, setTickets] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = (ticketData) => {
    setTickets([...tickets, ticketData]);
  };

  const exportToExcelHandler = () => {
    console.log(tickets); // For debugging

    // Create a new workbook
    const wb = XLSX.utils.book_new();

    // Convert tickets data to a worksheet
    const ws = XLSX.utils.json_to_sheet(tickets);

    // Add the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Ticket Data");

    // Export the workbook to an Excel file
    XLSX.writeFile(wb, "ticket_data.xlsx");

    console.log("Exported to Excel");
  };

  useEffect(() => {
    // This will run whenever the 'tickets' state changes
    exportToExcelHandler();
  }, [tickets]);

  return (
    <Container>
      <h3 className="display-3 text-dark text-center bg-light">
        Daily Ticket Tracker
      </h3>
      {headings.map((data, index) => (
        <Table key={index} striped bordered hover>
          <thead>
            <tr>
              <th>{data.heading1}</th>
              <th>{data.heading2}</th>
              <th>{data.heading3}</th>
              <th>{data.heading4}</th>
              <th>{data.heading5}</th>
              <th>{data.heading6}</th>
              <th>{data.heading7}</th>
              <th>{data.heading8}</th>
              <th>{data.heading9}</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map((ticket, index) => (
              <tr key={index}>
                <td>{ticket['Ticket Number']}</td>
                <td>{ticket['Application Name']}</td>
                <td>{ticket['Assignment Group']}</td>
                <td>{ticket['Assigned to']}</td>
                <td>{ticket['State']}</td>
                <td>{ticket['Opened Date']}</td>
                <td>{ticket['Resolved Date']}</td>
                <td>{ticket['Assign Duration']}</td>
                <td>{ticket['Reason for Pending']}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ))}
      <Button variant="primary" onClick={handleShow}>Add Ticket Details</Button>
      <Button variant='primary' onClick={exportToExcelHandler}>Export to Excel</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Ticket Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormProvider>
            <AddTicketsData onSave={handleSave}/>
          </FormProvider>
        </Modal.Body>
        <Modal.Footer>
          Ticket Tracker
        </Modal.Footer>
      </Modal>
    </Container>
)}

export default TicketTracker;
