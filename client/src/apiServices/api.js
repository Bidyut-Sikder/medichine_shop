
import axios from "axios"
import { getToken } from "../tokenHelper/TokenHelper"

const BASEURL = 'http://localhost:5000/api/v1'



///userOTP/

export async function UserOTPCode(email) {
    try {
        console.log(email)
        const result = await axios.get(`${BASEURL}/userOTP/${email.email}`)

        if (result['data']['result']['status'] == 'success') {
            return result['data']['result']
        } else {
            return 'something went wrong'
        }
    } catch (error) {
        console.log(error.toString())
    }
}



export async function UserOTPVerifyCode(email, code) {
    try {
        const result = await axios.post(`${BASEURL}/VeryfyOTP/${email}/${code}`)
        console.log(result['data']['result']['status'])
        if (result['data']['result']['status'] == 'success') {
            return result['data']['result']
        } else {
            false
        }

    } catch (error) {
        console.log(error.toString())
    }
}

export async function CustomerList() {
    try {
        const result = await axios.get(`${BASEURL}/CustomerList/`, {
            headers: {
                token: getToken()
            }
        })
        if (result['data']['result']['status'] == 'success') {
            return result['data']['result']
        } else {
            return false
        }
        //   console.log(result['data']['result']['status'])
    } catch (error) {
        console.log(error.toString())
    }
}

export async function CustomerListById(id) {
    try {
        const result = await axios.get(`${BASEURL}/CustomerListById/${id}`, {
            headers: {
                token: getToken()
            }
        })

        if (result['data']['result']['status'] == 'success') {
            return result['data']['result']
        } else {
            return false
        }
        //   console.log(result['data']['result']['status'])
    } catch (error) {
        console.log(error.toString())
    }
}



export async function CreateCustomer(reqBody) {

    try {
        const result = await axios.post(`${BASEURL}/CreateCustomer/`, reqBody, {
            headers: {
                token: getToken()
            }
        })
        if (result['data']['result']['status'] == 'success') {
            return true
        } else {
            return false
        }

    } catch (error) {
        console.log(error.toString())
    }
}
export async function UpdateCustomer(id, reqBody) {
    try {
        const result = await axios.post(`${BASEURL}/UpdateCustomer/${id}`, reqBody, {
            headers: {
                token: getToken()
            }
        })
        if (result['data']['result']['status'] == 'success') {
            return true
        } else {
            return false
        }

    } catch (error) {
        console.log(error.toString())
    }
}
export async function DeleteCustomer(id) {

    try {
        const result = await axios.get(`${BASEURL}/DeleteCustomer/${id}`, {
            headers: {
                token: getToken()
            }
        })

        if (result['data']['result']['status'] == 'success') {
            return true
        } else {
            return false
        }

    } catch (error) {
        console.log(error.toString())
    }
}




export async function Logout() {
    try {
        const result = await axios.get(`${BASEURL}/Logout/`,{
            headers: {
                token: getToken()
            }
        })
        console.log(result['data']['status'])

        if (result['data']['status'] == 'success') {
        
            return true
        } else {
            return false
        }

    } catch (error) {
        console.log(error.toString())
    }
}






















