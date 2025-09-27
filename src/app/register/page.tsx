import React from 'react'

const page = () => {
  return (
    <section className=''>
      <form >
        <h1>Create Account</h1>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />

        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
      </form>
    </section>
  )
}

export default page