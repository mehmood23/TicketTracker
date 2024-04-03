import React from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { formItems, headings } from "./dataHeadings";
import { useForm } from "./dataStore";


export const AddTicketsData = ({ onSave }) => {
  const { formData, updateFormData } = useForm({
    'Ticket Number': '',
    'Application Name': '',
    'Assignment Group': '',
    'Assigned to': '',
    'State': '',
    'Opened Date': '',
    'Resolved Date': '',
    'Assign Duration': '',
    'Reason for Pending': ''
  });

  const handleChange = (e) => {
    updateFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = () => {
    onSave(formData);
    // Clear the form data after submission
    updateFormData({});
   
  };

  return (
    <Container>
      {formItems.map((data, index) => (
        <div key={index}>
          <InputGroup className="mb-3">
            <InputGroup.Text>{headings[0]['heading' + (index + 1)]}</InputGroup.Text>
            <Form.Control
              placeholder={`Enter ${['heading' + (index + 1)]}`}
              value={formData[headings[0]['heading' + (index + 1)]] || ""}
              onChange={handleChange}
              aria-label={headings[0]['heading' + (index + 1)]}
              aria-describedby={headings[0]['heading' + (index + 1)]}
              name={headings[0]['heading' + (index + 1)]}
            />
          </InputGroup>
        </div>
      ))}
      <Button variant='danger' onClick={submitHandler}>Add Details</Button>
      
    </Container>
  );
};
