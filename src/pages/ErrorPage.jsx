import NavBar from '../components/NavBar';

function ErrorPage() {
  return (
    <>
      <NavBar />
      <main className="error-page">
        <h1>Oops! Looks like something went wrong.</h1>
      </main>
    </>
  );
}

export default ErrorPage;