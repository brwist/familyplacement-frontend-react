import CreateForm from 'components/CreateForm'
import queryString from 'query-string'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import NavigationActions from 'store/actions/NavigationActions'
import FamilyMiddlewares from 'store/middlewares/FamilyMiddlewares'
import './index.scss'

const EditFamily = ({ location }) => {
  const {
    families: {
      family: {
        isLoading,
        data: family,
        errorMessage: getFamilyError,
        isError: isGetFamilyError,
      },
      editFamily: { isLoading: isLoadingEdit, successMessage, errorMessage },
    },
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(
      NavigationActions.setActiveRoute({
        isPlacement: false,
        isFamily: true,
        currentRoute: true,
      }),
    )
    const parsed = queryString.parse(location.search)
    dispatch(FamilyMiddlewares.getFamily(parsed.id))
  }, [])

  const onSubmit = (e, name, country, characteristics) => {
    e.preventDefault()
    dispatch(
      FamilyMiddlewares.editFamily({
        name,
        country,
        characteristics,
        id: family?._id,
      }),
    )
  }

  return (
    <div className="edit-family pt-5 container container-padding">
      <h1 className="text-center mb-5">EDIT FAMILY</h1>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/families">Families</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>Edit Family</BreadcrumbItem>
      </Breadcrumb>
      <CreateForm
        isFetchError={isGetFamilyError}
        fetchError={getFamilyError}
        errorMessage={errorMessage}
        successMessage={successMessage}
        onSubmit={onSubmit}
        isLoading={isLoading}
        submissionInProgress={isLoadingEdit}
        name={family?.name}
        country={family?.country}
        criteriaData={{
          allergic_friendly: family?.characteristics?.allergic_friendly,
          spare_bedroom: family?.characteristics?.spare_bedroom,
          experienced: family?.characteristics?.experienced,
        }}
        submitBtnText="Edit"
      />
    </div>
  )
}

export default EditFamily
