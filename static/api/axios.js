import axios from 'axios'

let api = axios.create({})

export default {
	get (url) {
		return api.get(url)
		          .then(response => {
								console.log('API GET REQUEST ', url)
								console.log('RESPONSE STATUW ', response.status)
			          
			          if (response.status !== 200) {
				          window.location.replace('/error')
			          }
			          
			          return response
		          })
		          .catch(e => {
			          console.error('API error', e)
			          window.location.replace('/error')
		          })
	},
}
