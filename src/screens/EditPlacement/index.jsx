import CreateForm from 'components/CreateForm'
import queryString from 'query-string'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavigationActions from 'store/actions/NavigationActions'
import PlacementMiddlewares from 'store/middlewares/PlacementMiddlewares'
import './index.scss'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

const EditPlacement = ({ location }) => {
  const {
    placements: {
      placement: {
        isLoading,
        data: placement,
        errorMessage: getPlacementError,
        isError: isGetPlacementError,
      },
      editPlacement: { isLoading: isLoadingEdit, successMessage, errorMessage },
    },
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      NavigationActions.setActiveRoute({
        isPlacement: true,
        isFamily: false,
        currentRoute: true,
      }),
    )
    const parsed = queryString.parse(location.search)
    dispatch(PlacementMiddlewares.getPlacement(parsed.id))
    console.log('location', parsed, dispatch, isLoading, placement)
  }, [])

  const onSubmit = (e, name, country, criteria) => {
    e.preventDefault()
    dispatch(
      PlacementMiddlewares.editPlacement({
        name,
        country,
        criteria,
        id: placement?._id,
      }),
    )
  }

  return (
    <div className="edit-placement pt-5 container container-padding">
      <h1 className="text-center mb-5">EDIT PLACEMENT</h1>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/placements">Placements</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Edit Placement</BreadcrumbItem>
      </Breadcrumb>
      <CreateForm
        isFetchError={isGetPlacementError}
        fetchError={getPlacementError}
        errorMessage={errorMessage}
        successMessage={successMessage}
        onSubmit={onSubmit}
        isLoading={isLoading}
        submissionInProgress={isLoadingEdit}
        name={placement?.name}
        country={placement?.country}
        criteriaData={{
          allergic_friendly: placement?.criteria?.allergic_friendly,
          spare_bedroom: placement?.criteria?.spare_bedroom,
          experienced: placement?.criteria?.experienced,
          same_country: placement?.criteria?.same_country,
        }}
        submitBtnText="Edit"
      />
    </div>
  )
}

export default EditPlacement
