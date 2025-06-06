const YouTubeIcon = ({ className = 'w-8 h-8 text-red-600' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M23.498 6.186a2.976 2.976 0 0 0-2.096-2.106C19.553 3.5 12 3.5 12 3.5s-7.553 0-9.402.58A2.976 2.976 0 0 0 .502 6.186 31.31 31.31 0 0 0 0 12a31.31 31.31 0 0 0 .502 5.814 2.976 2.976 0 0 0 2.096 2.106C4.447 20.5 12 20.5 12 20.5s7.553 0 9.402-.58a2.976 2.976 0 0 0 2.096-2.106A31.31 31.31 0 0 0 24 12a31.31 31.31 0 0 0-.502-5.814ZM9.75 15.02V8.98l6.25 3.02-6.25 3.02Z" />
    </svg>
  );
};

export default YouTubeIcon;
