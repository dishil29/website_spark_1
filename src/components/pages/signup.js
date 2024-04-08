import { useState } from "react"
import '../../index.css'
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password)
  }

  return (
    <div class="signup-page bg-light">
        <div class="container">
            <div class="row">
                <div class="col-lg-10 offset-lg-1">
                  <h3 class="mb-3">Sign-Up</h3>
                    <div class="bg-white shadow rounded">
                        <div class="row">
                            <div class="col-md-7 pe-0">
                                <div class="form-left h-100 py-5 px-5">
                                    <form class="row g-4" onSubmit={handleSubmit}>
                                            <div class="col-12">
                                                <label>Email<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-person-fill"/></div>
                                                    <input type="email" class="form-control" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label>Password<span class="text-danger">*</span></label>
                                                <div class="input-group">
                                                    <div class="input-group-text"><i class="bi bi-lock-fill"/></div>
                                                    <input type="password" class="form-control" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value= {password} />
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <a href="/login" class="float-end text-center text-primary">Already have an Account?</a>
                                            </div>

                                            <div class="col-12">
                                                <button disabled={isLoading} type="submit" class="btn btn-primary px-4 float-end mt-4">Sign-UP</button>
                                            </div>
                                            {error && <div className="error">{error}</div>}
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-5 ps-0 d-none d-md-block">
                                <div class="form-right h-100 bg-primary text-white text-center pt-5">
                                    <i class="bi bi-robot"/>
                                    <h2 class="fs-1">Spark4AI</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup

