export const fetchMenu = async () => {
  try {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/search.php?s=',
    )
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}
