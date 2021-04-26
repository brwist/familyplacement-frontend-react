import CreateForm from 'components/CreateForm'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import PlacementMiddlewares from 'store/middlewares/PlacementMiddlewares'

const CreatePlacement = () => {
  const dispatch = useDispatch()
  const {
    placements: {
      createPlacement: {
        isLoading: submissionInProgress,
        successMessage,
        errorMessage,
      },
    },
  } = useSelector((state) => state)

  const onSubmit = (e, name, country, criteria) => {
    e.preventDefault()
    dispatch(
      PlacementMiddlewares.createPlacement({
        name,
        country,
        criteria,
      }),
    )
  }

  return (
    <div className="create-placement pt-5 container container-padding">
      <h1 className="text-center mb-5">CREATE PLACEMENT</h1>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/placements">Placements</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Create Placement</BreadcrumbItem>
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
          same_country: false,
        }}
        submitBtnText="Create"
      />
    </div>
  )
}

export default CreatePlacement
