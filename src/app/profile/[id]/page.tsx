export default async function UserProfile({ params }: any ) {
const { id } = await params;
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <h1>Profile Page</h1>
            <hr />
            <p className="text-4xl">Welcome to {id}'s profile!</p>
            <span className="text-2xl rounded-md bg-amber-600 text-black">{id}</span>
        </div>
    )
}   