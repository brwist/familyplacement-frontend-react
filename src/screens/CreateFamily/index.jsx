import CreateForm from 'components/CreateForm'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import FamilyMiddlewares from 'store/middlewares/FamilyMiddlewares'

const CreateFamily = () => {
  const dispatch = useDispatch()
  const {
    families: {
      createFamily: {
        isLoading: submissionInProgress,
        successMessage,
        errorMessage,
      },
    },
  } = useSelector((state) => state)

  const onSubmit = (e, name, country, characteristics) => {
    e.preventDefault()
    dispatch(
      FamilyMiddlewares.createFamily({
        name,
        country,
        characteristics,
      }),
    )
  }

  return (
    <div className="create-family pt-5 container container-padding">
      <h1 className="text-center mb-5">CREATE FAMILY</h1>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/families">Families</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Create Family</BreadcrumbItem>
      </Breadcrumb>
      <CreateForm
        errorMessage={errorMessage}
        successMessage={successMessage}
        submissionInProgress={submissionInProgress}
        onSubmit={onSubmit}
        criteriaData={{
          allergic_friendly: false,
          spare_bedroom: false,
          experienced: false,
        }}
        submitBtnText="Create"
      />
    </div>
  )
}

export default CreateFamily
