type PostCfpParams = {
  name: string
  title: string
  description: string
  duration: number
  format: string
  bio: string
  social: string
  email: string
}

const postCfp = async (params: PostCfpParams) => {
  const response = await fetch('test', {
    method: 'POST',
    body: JSON.stringify(params),
  })

  if (response.status !== 200) {
    return false
  } else {
    return true
  }
}

export { postCfp }
