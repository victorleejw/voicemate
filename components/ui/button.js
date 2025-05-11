export function Button({ children, className }) {
  return <button className={`bg-blue-600 text-white rounded-xl ${className}`}>{children}</button>;
}