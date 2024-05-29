import { describe, expect, it } from 'vitest'
import { setAccessTokenToLS, setProfileToLS, setRefreshTokenToLS } from '../auth'

const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjlhMGFhYjExNDAwODkzZGY3MGEyOSIsImVtYWlsIjoidHVhbnRydW5ndnVvbmdrNjJAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyNC0wMi0yNlQxNTowMjoyNS4wNDhaIiwiaWF0IjoxNzA4OTU5NzQ1LCJleHAiOjE3MDg5NTk3NTB9.1156CDAW34DkT7rl3qfu1Kj-Ns18_6oSmA2Cl4AxXAg'

const refresh_token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NjlhMGFhYjExNDAwODkzZGY3MGEyOSIsImVtYWlsIjoidHVhbnRydW5ndnVvbmdrNjJAZ21haWwuY29tIiwicm9sZXMiOlsiVXNlciJdLCJjcmVhdGVkX2F0IjoiMjAyNC0wMi0yNlQxNTowMjoyNS4wNDhaIiwiaWF0IjoxNzA4OTU5NzQ1LCJleHAiOjE3MDg5NjMzNDV9.xbu4IazQ480CZG9Cx9L3SLiLCfb45wGmm5QPNZ6l9jg'

const profile =
  '{"_id":"6569a0aab11400893df70a29","roles":["User"],"email":"tuantrungvuongk62@gmail.com","createdAt":"2023-12-01T09:00:26.657Z","updatedAt":"2024-01-24T10:24:09.726Z","__v":0,"address":"967 Trần Hưng Đạo","date_of_birth":"2003-09-13T17:00:00.000Z","name":"tuan tran","phone":"0768701552","avatar":"09865b28-92ba-40b5-9e81-f98ece53b0a6.jpg"}'

describe('setAccesTokenToLS', () => {
  it('access_token duoc set vao localstorage', () => {
    setAccessTokenToLS(access_token)
    expect(localStorage.getItem('access_token')).toBe(access_token)
  })
})

describe('setProfileToLS', () => {
  it('Profile da duoc set', () => {
    const newProfile = JSON.parse(profile)
    setProfileToLS(newProfile)
    expect(localStorage.getItem('profile')).toBe(JSON.stringify(newProfile))
  })
})

describe('setAccesTokenToLS', () => {
  it('refresh_token duoc set vao localstorage', () => {
    setRefreshTokenToLS(refresh_token)
    expect(localStorage.getItem('refresh_token')).toBe(refresh_token)
  })
})
