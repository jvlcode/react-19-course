import { useFormStatus } from "react-dom";

function SubmitButton() {
  // Get the form submission status
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default function UseFormstatusExample() {
  async function handleSubmit(formData) {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating async submission
    console.log("Form submitted:", Object.fromEntries(formData));
  }

  return (
    <form action={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" required />
      </label>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <SubmitButton />
    </form>
  );
}