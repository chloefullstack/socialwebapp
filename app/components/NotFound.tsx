import BackToHomeButton from "./BackToHomeButton";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-gray-500 mb-8">We couldn't find what you're looking for at this moment. Please try again later.</p>
        <BackToHomeButton />
      </div>
    </div>
  );
}