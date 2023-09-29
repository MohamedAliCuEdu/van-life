// fetching data from vans-data
async function getData() {
  const fetchData = await fetch("vans-s-data.json");
  if (!fetchData.ok) {
    throw new Error({
      message: "Failed to fetch vans",
      statusText: fetchData.statusText,
      status: fetchData.status,
    });
  } else {
    const data = await fetchData.json();
    return data;
  }
}

export {getData};