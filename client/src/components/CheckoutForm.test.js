  
import React from "react";
import { render, fireEvent, getByText, getByTestId } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
  const { getByText } = render(<CheckoutForm />);

  const checkoutHeader = getByText(/checkout form/i);
});

test("form shows success message on submit with form details", () => {
  const { getByLabelText, getByTestId, getByDisplayValue } = render(<CheckoutForm />);

  const firstNameInput = getByLabelText(/first name/i);
  const lastNameInput = getByLabelText(/last name/i);
  const addressInput = getByLabelText(/address/i);
  const cityInput = getByLabelText(/city/i);
  const stateInput = getByLabelText(/state/i);
  const zipInput = getByLabelText(/zip/i);

  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  expect(addressInput).toBeInTheDocument();
  expect(cityInput).toBeInTheDocument();
  expect(stateInput).toBeInTheDocument();
  expect(zipInput).toBeInTheDocument();

  fireEvent.change(firstNameInput, { target: { value: "Allen" }})
  fireEvent.change(lastNameInput, { target: { value: "Do" }})
  fireEvent.change(addressInput, { target: { value: "1234 North Street" }})
  fireEvent.change(cityInput, { target: { value: "Fountain Valley" }})
  fireEvent.change(stateInput, { target: { value: "CA" }})
  fireEvent.change(zipInput, { target: { value: 92708 }})

  expect(getByDisplayValue(/Allen/i)).toBeInTheDocument()
  expect(getByDisplayValue(/Do/i)).toBeInTheDocument()
  expect(getByDisplayValue(/1234 North Street/i)).toBeInTheDocument()
  expect(getByDisplayValue(/Fountain Valley/i)).toBeInTheDocument()
  expect(getByDisplayValue(/CA/i)).toBeInTheDocument()
  expect(getByDisplayValue(/92708/i)).toBeInTheDocument()

  const checkoutSubmit = getByTestId(/submitCheckout/i);
  expect(checkoutSubmit).toBeInTheDocument();
  fireEvent.click(checkoutSubmit)

  const successMessage = getByTestId(/successMessage/i)
  expect(successMessage).toBeInTheDocument()
});