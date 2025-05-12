import { use, Suspense } from "react";

// Simulating an async function that fetches data
async function fetchUserData() {
    await new Promise((res) => setTimeout(res, 5000));
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return response.json();
}

// Calling the async function outside the component
const userPromise = fetchUserData();

function Profile() {
    // `use()` will suspend the component until the promise resolves
    const user = use(userPromise);

    return (
        <div>
            <h2>User Profile</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Website:</strong> {user.website}</p>
        </div>
    );
}

export default function UseExample() {
    return <Suspense fallback={<p>Loading...</p>}>
        <Profile />
        </Suspense>
}