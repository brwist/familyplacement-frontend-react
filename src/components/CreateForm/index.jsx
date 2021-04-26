import CustomButton from 'components/CustomButton'
import React, { useEffect, useState } from 'react'
import { Col, Form, FormGroup, Input, Label, Row, Spinner } from 'reactstrap'

const CreateForm = ({
  isLoading = false,
  criteriaData,
  name,
  country,
  submitBtnText,
  onSubmit,
  submissionInProgress = false,
  errorMessage,
  fetchError,
  isFetchError,
  successMessage,
}) => {
  const [formCountry, setCountry] = useState(!country ? '' : country)
  const [formName, setName] = useState(!name ? '' : name)
  const [criteria, setCriteria] = useState({ ...criteriaData })

  useEffect(() => {
    if (name) setName(name)
    if (country) setCountry(country)
    if (criteriaData) setCriteria(criteriaData)
  }, [name, country])

  console.log('country name', { formCountry, formName })
  return (
    <Form onSubmit={(e) => onSubmit(e, formName, formCountry, criteria)}>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              onChange={(e) => setName(e.target.value)}
              value={formName}
              type="text"
              name="name"
              id="name"
              placeholder="Enter Placement Name"
              required
            />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="country">Country</Label>
            <Input
              onChange={(e) => setCountry(e.target.value)}
              value={formCountry}
              type="text"
              name="country"
              id="country"
              placeholder="Enter country"
              required
            />
          </FormGroup>
        </Col>
      </Row>
      {Object.keys(criteria).map((key) => (
        <div className="d-flex" key={key}>
          <FormGroup check>
            <Input
              type="checkbox"
              name="check"
              id="exampleCheck"
              checked={criteria[key]}
              onChange={() =>
                setCriteria({ ...criteria, [key]: !criteria[key] })
              }
            />
          </FormGroup>
          <p>{key}</p>
        </div>
      ))}
      {errorMessage && <p className="text-danger mb-4">{errorMessage}</p>}
      {fetchError && <p className="text-danger mb-4">{fetchError}</p>}
      {successMessage && <p className="text-success mb-4">{successMessage}</p>}

      <CustomButton type="submit" disabled={isLoading || isFetchError}>
        {submissionInProgress ? <Spinner color="light" /> : submitBtnText}
      </CustomButton>
    </Form>
  )
}

export default CreateForm
