import { useActionState } from "react";

async function submitForm(previousState, formData) {
  await new Promise((res,rej) => setTimeout(res,5000)) 
    if (formData.get("username") == "logesh" && formData.get("password") == "1234" ){
    return "Login success"
  }
  return "Invalid Credentials"
}

export default  function UseActionstateExample({}) {
  const [state, formAction, isPending] = useActionState(submitForm, "Fill the form fields");
  return (
    <form  action={formAction}>
      <label>Username
      <input type="text" name="username" id=""  />
      </label>
      <label>Password
      <input type="password" name="password" id="" />
      </label>
      <button type="submit">Submit</button>
      <p>{isPending ? "Loading" : state}</p>
    </form>
  )
}