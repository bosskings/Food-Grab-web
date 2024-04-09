export const Merchantlogin = () => {

  //fetch data from endpoint
  let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzExOTkxNDc3LCJpYXQiOjE3MTE5OTExNzcsImp0aSI6ImY3NjVlZGMyMDc4NzQ4ZDNhNTc0Yzg1ZWZhZTk1YzBlIiwidXNlcl9pZCI6MzZ9.IKRG1P1gCYgClh1QWKtOhxPK9mGwesc32u43R6UWF1E";
  fetch('https://79d4-197-210-79-181.ngrok-free.app/api/v1/dashboard/ ', {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    }
  })
    .then(response => response.json({ data: response }))
    .then((data) => {
      console.log("Successful API call!");
      console.log(JSON.stringify(data));
    })

  return (
    <div>

    </div>
  )

}