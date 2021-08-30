import { gql } from "apollo-server"

export default gql`
  enum Status {
    "Network request success"
    SUCCESS
    "Network request failed"
    FAILED
  }
`
