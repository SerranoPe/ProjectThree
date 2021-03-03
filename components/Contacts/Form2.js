import React from 'react';

const Contact = () => {
  
  return(
    <form className="form">
      <h2 className="label__lg">HELLO! Please leave your information!</h2>
      <label></label>
      <input className="name"placeholder="name"/>

      <label></label>
      <input className="email"placeholder="email"/>

      <label></label>
      <textarea className="message"placeholder="message"></textarea>
      <br></br>
      <button className="submit" type="submit">SUBMIT</button>
</form>
  )
}
export default Contact