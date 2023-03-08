
export function Card() {
  return <div className="card"></div>;
}

const Toggle = () => {
  return (
    <div className="card-btn">
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="css-i6dzq1"
      >
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
        <circle cx="5" cy="12" r="1" />
      </svg>
    </div>
  );
};

const List = () => {};

const Item = () => {};

Card.Toggle = Toggle;
Card.List = List;
Card.Item = Item;
