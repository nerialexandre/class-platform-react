import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4r3w2wp0kgg01z544ugdkzo/master',
  headers: {
    Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTY4ODE3MzgsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNHIzdzJ3cDBrZ2cwMXo1NDR1Z2Rrem8vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNWNjMzk0MjctMGJlMS00NDgxLTg3MDUtNTAxMWZjZTRkYTIwIiwianRpIjoiY2w1NXNsdnJjM21pajAxdWdnZWoxYjd0dyJ9.2p7tU_63NqLqywbLjRK1Om0xl1Do6KzHZR85MtnNYWZ7DrVkiuA_wAf941KTYI7RKFZl6HEtwbBLsrFvcmpiiiSCxzDFYuCwcw1wx6EIFaoqnEPr85V2gNUikkDQmauEj7IlfAxdsyeoUsmc2AfRblIexdDZXxGuAWeIGGehIM3g5Fk0HCvN-aMLjbbDTR1A2aZcyZCCoAsDzvePblH7lStwd8PDnr3fghisRAP24BQYmuV9u_uijeTeg_-EkVex-W9Y0gDJlLiSXJNGhld0DmNMBQwypR9TOMGNlthj-T0D15YI8icmQ_OBq4uuNSkzSpa66JDTaoptB-J9Ql1xCGDscbdvV4iHy6M_wBmLXoaPmKdK2ni_RvN9VPdUth3eYBtxb1N8RP8-tIQt5kddqNP-Z1eFluiPOhVuR6-SEgcYDC8HfQN0CZM04G2iMbKZkGcqDJpChu2hVUfW8eLse1dtdNFD094OMAFUM50cMVrtOSNOzE9VR3-O3hXO54UbEQTu4mXa99Y1_vrL3oAjSiUb3-0fq3-oPcwQWLRzdF3aGFaQkdWljpqVYYYE-DwGUywwaFE-LRhtw9dSP1ue7ExNMJlPry8WnVtEu0AFgf3FtpoxeljdWu0OfRUsgKy0IEkjsonNzh4u9HL1mkqn-ml3jDeoKIQ6xRWyAyemCy4`
  },
  cache: new InMemoryCache()
})
