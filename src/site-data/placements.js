const placementsData = {
  tableData: {
    thead: ['Placement ID', 'Name', 'Country', 'Matched Families', 'Arrived'],
    data: (placements) =>
      placements.map(({ _id, name, country, createdAt, families }) => ({
        id: _id,
        name,
        country,
        createdAt,
        families:
          families?.length > 0
            ? families.map(({ name: familyName }) => familyName).join(', ')
            : '',
      })),
  },
}

export default placementsData
