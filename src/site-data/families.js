const familiesData = {
  tableData: {
    thead: ['Family ID', 'Family', 'Country', 'Added'],
    data: (families) =>
      families.map(({ _id, name, country, createdAt }) => ({
        id: _id,
        name,
        country,
        createdAt,
      })),
  },
}

export default familiesData
