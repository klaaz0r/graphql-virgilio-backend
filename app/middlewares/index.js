export default function setupMiddlewares() {
  const virgilio = this

  virgilio.http.use$(virgilio.http.bodyParser({ mapParams: false }))
  virgilio.http.use$(virgilio.http.queryParser())
}
