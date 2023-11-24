import { useRouteError } from "react-router-dom";
import erimg from "../../assets/404.gif"

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center">
      <div className="text-center my-10 md:my-40 lg:my-96 space-y-4">
        <img src={erimg} alt="" />
        <h1 className="text-4xl font-semibold">Oops!!!..</h1>
        <p className="text-lg font-medium">Sorry, an unexpected error has occurred.</p>
      </div>
    </div>
  );
}